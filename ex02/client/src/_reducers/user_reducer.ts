import { LOGIN_USER } from "../_actions/types";

interface InitState {
    loginSuccess?: boolean;
    userId?: string;
}

const reducer = (state:InitState = {}, action:any):InitState => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginSuccess: action.payload
            }
        default:
            return state;
    }
}

export default reducer;