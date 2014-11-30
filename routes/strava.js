var StravaActivity = require("../models/strava_activity"),
  ModelHelper = require('../lib/model_helper'),
  _ = require('underscore'),
  moment = require('moment');

exports.activities = function (req, res) {
  ModelHelper.paginate(StravaActivity, {}, req, function (paginatedResult) {
      res.json(paginatedResult);
  });
};
