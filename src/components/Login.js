import React from 'react';
import { useDispatch } from 'react-redux';
// Action을 사용하기 위해 import
import { login, logout } from '../redux/user';
// user의 reducers의 login 메소드 사용

const Login = () => {
    const dispatch = useDispatch();
    //import된 useDispatch의 action 사용
    return (
        <div>
            <button onClick={() => {
                dispatch(login({name: "내 이름", age: 20, email:"test@gmail.com"}))
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div>
    );

};

export default Login;