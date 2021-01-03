const express = require('express');
const router = express.Router();
const base = require('../airtable');
const { loginRequired } = require('../auth/authControllers');

router.get('/assignmentDeadlines', loginRequired, async function (req, res, next) {
  try {
    const results = await base('Persons')
      .select({
        view: 'Grid view',
        filterByFormula: `{recordId} = "${req._uid}"`,
      })
      .all();
    return res.status(200).json(results);
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

module.exports = router;
