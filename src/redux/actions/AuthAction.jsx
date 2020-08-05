const actions = {
	REQUEST_TOKEN : "REQUEST_TOKEN",
	REQUEST_TOKEN_COMPLETE : "REQUEST_TOKEN_COMPLETE",
	REQUEST_TOKEN_SUCCESS : "REQUEST_TOKEN_SUCCESS",
	REQUEST_TOKEN_ERROR : "REQUEST_TOKEN_ERROR",
	requestToken : (payload) => ({
		type : actions.REQUEST_TOKEN,
		payload
	})
}

export default actions;