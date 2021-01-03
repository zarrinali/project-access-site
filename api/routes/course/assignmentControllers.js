const express = require('express');
const router = express.Router();
const base = require('../airtable');
const {
  loginRequired
} = require('../auth/authControllers');
const {
  findMatchStudent
} = require('../user/studentControllers');

/**
 * Find assignments that for students with student id provided
 * @param {object} studentId
 */
async function findAssignmentsForStudent(studentId) {
  const allAssignments = await base('StudentAssignments')
    .select({
      view: 'Grid view',
      filterByFormula: `(FIND(", ${studentId},", ", " & ARRAYJOIN({StudentID}) & ","))`,
    })
    .all();

  const results = [];

  allAssignments.forEach(function (record) {
    results.push(record.fields);
  })

  return results;
}

router.get('/assignmentDeadlines', loginRequired, async function (req, res, next) {
  try {
    const student = await findMatchStudent(req._uid);
    const assignments = [];
    const lateAssignments = [];
    const timeNow = Date.now();

    const allAssignments = await findAssignmentsForStudent(student.StudentID);
    allAssignments.forEach(function (record) {
      if (timeNow < Date.parse(record.AssignmentDeadlineDateTime)) {
        assignments.push({
          AssignmentName: record.AssignmentName,
          AssignmentDeadlineDateTime: record.AssignmentDeadlineDateTime,
        });
      } else {
        lateAssignments.push({
          AssignmentName: record.AssignmentName,
          AssignmentDeadlineDateTime: record.AssignmentDeadlineDateTime,
        });
      }
    });

    return res.status(200).json({
      assignments: assignments,
      lateAssignments: lateAssignments,
    });
  } catch (err) {
    return next(err);
  }
});

router.get('/assignmentFeedback', loginRequired, async function (req, res, next) {
  try {
    const student = await findMatchStudent(req._uid);
    const assignments = [];

    const allAssignments = await findAssignmentsForStudent(student.StudentID);
    allAssignments.forEach(function (record) {
      if (record.AssignmentInstructorFeedback) {
        assignments.push(record);
      }
    });

    return res.status(200).json({
      assignments: assignments,
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

module.exports = router;