const express = require('express');
const router = express.Router();
const base = require('../airtable');
const { loginRequired } = require('../auth/authControllers');

router.get('/assignmentDeadlines', loginRequired, async function (req, res, next) {
  try {
    const students = await base('Students')
      .select({
        view: 'Grid view',
        filterByFormula: `(FIND(", ${req._uid},", ", " & ARRAYJOIN({PersonID}) & ","))`,
      })
      .all();

    if (students.length == 0) {
      return res.status(200).json({
        message: 'You are not enrolled in any courses yet.',
      });
    }

    const student = students[0].fields;
    const assignments = [];
    const lateAssignments = [];
    const timeNow = Date.now();

    await base('StudentAssignments')
      .select({
        view: 'Grid view',
        filterByFormula: `(FIND(", ${student.StudentID},", ", " & ARRAYJOIN({StudentID}) & ","))`,
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
          if (timeNow < Date.parse(record.fields.AssignmentDeadlineDateTime)) {
            assignments.push(record.fields);
          } else {
            lateAssignments.push(record.fields);
          }
        });

        fetchNextPage();
      });
    console.log(assignments);
    return res.status(200).json({
      assignments: assignments,
      lateAssignments: lateAssignments,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

module.exports = router;
