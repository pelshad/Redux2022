import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    // useSelector : 생성한 리듀서 접근

    // 지금은 user.js의 user 리듀서에 접근한다.
    // user의 값에 initailState된 value값들이 들어있음
    
    return (
        <>
            <h1>Profile Page</h1>
            <p>Name : { user.name }</p>
            <p>Age : { user.age }</p>
            <p>Email : { user.email }</p>
        </>
    );
};

export default Profile;