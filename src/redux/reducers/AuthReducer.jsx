import actions from '../actions/AuthAction';

const initState = {  
	isLoggedId : false,
};

export default function authReducer(state = initState, action) {
	const { payload } = action;
	switch (action.type) {
		case actions.REQUEST_TOKEN_COMPLETE:
			return state;
		break;
		default:
			return state;
	}
}




