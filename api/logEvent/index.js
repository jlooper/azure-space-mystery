const { PlayFabClient } = require('playfab-sdk');
let date = new Date();
module.exports = function (context, req) {
	var request = {
		EventName: req.body.eventName,
		Timestamp: date,
		headers: {
			'X-authentication': req.body.sessionTicket,
		},
	};
	PlayFabClient.settings.titleId = '7BE77';
	PlayFabClient.WritePlayerEvent(request, function (error, result) {
		if (error == null) {
			context.res = { body: result.data };
			context.done();
		} else {
			context.res = { body: error };
			context.done();
		}
	});
};
