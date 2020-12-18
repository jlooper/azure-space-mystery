const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var request = {
		Data: req.body.Data,
		headers: {
			'X-authentication': req.body.session,
		},
	};
	PlayFabClient.settings.titleId = '7BE77';
	PlayFabClient.UpdateUserData(request, function (error, result) {
		if (error == null) {
			context.res = { body: result.data };
			context.done();
		} else {
			context.res = { body: error };
			context.done();
		}
	});
};
