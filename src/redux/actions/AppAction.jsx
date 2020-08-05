const actions = {
	CHANGE_NAV : "CHANGE_NAV",
	CHANGE_NAV_DONE : "CHANGE_NAV_DONE",
	changeNav : (payload) => ({
		type : actions.CHANGE_NAV,
		payload
	})
}
export default actions;