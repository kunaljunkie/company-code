const express = require("express");
const { user_leads } = require("../controllers/userleads");
const { user_lead_validator } = require("../middleware/user_lead_validators");

const router = express.Router();

router.route("/userleads").post(user_lead_validator, user_leads)
module.exports = router;
