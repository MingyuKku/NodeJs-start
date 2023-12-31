import axios from 'axios';
import { Dispatch } from 'redux';
import { LoginData, LOGIN_USER } from './types';
import { LoginState } from '../_reducers/user_reducer';

export const setLoginState = (value: boolean) => {
    return {
        type: LOGIN_USER,
        payload: value,
    }
}

export const loginUser = ({ email, password }: LoginData) => {
    return async (dispatch: Dispatch, getState: () => LoginState) => {

        return axios.post('/api/users/login', {
            email,
            password
        })
        .then(({data}) => {
            dispatch(setLoginState(data.loginSuccess));
            return data;
        })
        .catch(err => {
            dispatch(setLoginState(false));
            throw err;
        })
    }
}


export const auth = () => {
    return async (dispatch: Dispatch) => {
        return axios.get('/api/users/auth')
        .then(({ data }) => {
            dispatch(setLoginState(data.isAuth));
            return data;
        })
        .catch(err => {
            throw err;
        })
    }
}