const express = require('express');
const router = express.Router();
const base = require('../airtable');
const {
  loginRequired
} = require('../auth/authControllers');

/**
 * Find student that matches the person id provided
 * @param {object} personId
 */
async function findMatchStudent(personId) {
  const students = await base('Students')
    .select({
      view: 'Grid view',
      filterByFormula: `(FIND(", ${personId},", ", " & ARRAYJOIN({PersonID}) & ","))`,
    })
    .all();

  if (students.length == 0) {
    return res.status(200).json({
      message: 'You are not enrolled in any courses yet.',
    });
  }

  const student = students[0].fields;

  return student;
}

router.get('/studentInformation', loginRequired, async function (req, res, next) {
  try {
    const student = await findMatchStudent(req._uid);
    return res.status(200).json(student);
  } catch (err) {
    return next(err);
  }
});

module.exports = {
  findMatchStudent,
  router
};