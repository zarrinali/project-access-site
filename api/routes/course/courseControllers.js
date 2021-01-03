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
 * @param {String} courseId
 */
async function findMatchCourse(courseId) {
    const course = await base('Courses').find(courseId);
    return course.fields;
}

/**
 * Find courses for students with the degree provided
 * @param {String} degree
 */
async function findCoursesForDegree(degree) {
    const courses = await base('Courses')
        .select({
            view: 'Grid view',
            filterByFormula: `{CourseType} = "${degree}"`,
        })
        .all();

    const results = [];

    courses.forEach(function (record) {
        results.push(record.fields);
    });

    return results;
}

/**
 * Find courses in relation to Bootcamp (Pre Bootcamp vs Post Bootcamp)
 * @param {String} toBootcamp
 */
async function findCoursesToBootcamp(toBootcamp) {
    const courses = await base('Courses')
        .select({
            view: 'Grid view',
            filterByFormula: `{CourseToBootcamp} = "${toBootcamp}"`,
        })
        .all();

    const results = [];

    courses.forEach(function (record) {
        results.push(record.fields);
    });

    return results;
}

/**
 * Find courses in relation to Bootcamp (Pre Bootcamp vs Post Bootcamp)
 * @param {String} url
 */
async function findSpecificCourse(url) {
    const courses = await base('Courses')
        .select({
            view: 'Grid view',
            filterByFormula: `{CourseLink} = "${url}"`,
        })
        .all();

    return courses[0].fields;
}

router.get('/courseList', loginRequired, async function (req, res, next) {
    try {
        const student = await findMatchStudent(req._uid);
        const courses = await findCoursesForDegree(student.StudentDegreeOption);

        const results = [];

        courses.forEach(function (record) {
            results.push({
                CourseLink: record.CourseLink,
                CourseNumber: record.CourseNumber,
            });
        });

        return res.status(200).json(results);
    } catch (err) {
        return next(err);
    }
});

router.get('/specific/:course', loginRequired, async function (req, res, next) {
    try {
        const courseLink = req.params.course;
        const course = await findSpecificCourse(courseLink);

        return res.status(200).json(course);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;