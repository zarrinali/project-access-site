const express = require('express');
const router = express.Router();
const base = require('../airtable');

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

module.exports = {
  findMatchStudent,
  router
};