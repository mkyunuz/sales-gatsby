import actions from '../actions/AppAction';

const initState = {  
	activeMenu : [], 
	openKeys : [],
};
export default function appReducer(state = initState, action) {
	const { payload } = action;
	switch (action.type) {
		case actions.CHANGE_NAV_DONE:
		console.log(payload);
			return { 
				...state, 
				activeMenu: payload.activeMenu,
				openKeys: payload.openKeys,
			};
		break;
		case actions.LOGOUT:
			return initState;
		default:
			return state;
	}
}




