//user.js 유저 정보를 담는 Reducer
import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {name: "", age: 0, email:""} // 값 세팅

// Reducer 생성
// crateSlice -> 기존에 createReducer와 createAction을 동시에 해줌
export const userSlice = createSlice({
    name: "user", // Reducer 이름
    initialState: { value: initialStateValue},
    reducers:{ // 상태가 변할 경우 실행될 것
        // 로그인
        login: (state, action) => {
            state.value = action.payload
        },
        //로그아웃
        logout: (state) => {
            state.value = initialStateValue
        }
        // 다른 login메소드를 실행하였 을 때 작동 

    },
});
// 생성된 Reducer의 값은 store.js에 import하여 관리

export const { login, logout } = userSlice.actions;
// 위에 만들어둔 login 메소드를 action기능이 작동하도록 다른데서 씀
export default userSlice.reducer;