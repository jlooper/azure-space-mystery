const { PlayFabClient } = require('playfab-sdk');

module.exports = function (context, req) {
	var request = {
		TitleId: '7BE77',
		CustomId: req.body.id,
		CreateAccount: req.body.createAccount,
	};
	PlayFabClient.settings.titleId = '7BE77';
	PlayFabClient.LoginWithCustomID(request, function (error, result) {
		if (error == null) {
			context.res = { body: result.data };
			context.done();
		} else {
			context.res = { body: error };
			context.done();
		}
	});
};
