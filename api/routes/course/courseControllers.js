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
 * Find course with the provided course id
 * @param {object} courseId
 */
async function findMatchCourse(courseId) {
    const course = await base('Courses').find(courseId);
    return course.fields;
}

/**
 * Find courses for students with the degree provided
 * @param {object} degree
 */
async function findCoursesForDegree(degree) {
    const courses = await base('Courses').select({
        view: 'Grid view',
        filterByFormula: `{CourseType} = "${degree}"`
    }).all();

    const results = [];

    courses.forEach(function (record) {
        results.push(record.fields);
    })

    return results;
}

/**
 * Find courses in relation to Bootcamp (Pre Bootcamp vs Post Bootcamp)
 * @param {object} toBootcamp
 */
async function findCoursesToBootcamp(toBootcamp) {
    const courses = await base('Courses').select({
        view: 'Grid view',
        filterByFormula: `{CourseToBootcamp} = "${toBootcamp}"`
    }).all();

    const results = [];

    courses.forEach(function (record) {
        results.push(record.fields);
    })

    return results;
}

router.get('/courseList', loginRequired, async function (req, res, next) {
    try {
        const student = await findMatchStudent(req._uid);
        const courses = await findCoursesForDegree(student.StudentDegreeOption);

        const results = [];

        courses.forEach(function (record) {
            results.push({
                CourseName: record.CourseName,
                CourseNumber: record.CourseNumber
            })
        });

        return res.status(200).json(results);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;