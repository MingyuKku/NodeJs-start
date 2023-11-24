import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser (subminData: {
    email: string;
    password: string;
}) {
    const request = axios.post('/api/users/login', subminData)
    .then(res => {
        console.log('로그인 응답', res)
        return res.data;
    })
    console.log('뭐지요', request)


    return {
        type: LOGIN_USER,
        payload: request
    }
}