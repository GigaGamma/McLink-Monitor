module.exports = function (router) {
	router.post("/event", function (req, res) {
		res.json(
			{
				"request_id": req.body.request_id
			}
		);
	});
}