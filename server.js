var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var utils = require("./utils.js");

app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {
	req.body.request_id = utils.guid();
	if (req.body.key != "mykey") {
		res.json({
			"request_id": req.body.request_id,
			"error": {
				"type": "auth",
				"message": "The auth key given is incorrect"
			}
		});
		return;
	}
	next();
});

require("./routes/event.js")(router);

app.use("/api", router);

app.listen(1287);
console.log("Magic happens on port 1287");