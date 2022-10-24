//user.js 유저 정보를 담는 Reducer

import { createSlice } from '@reduxjs/toolkit';

// Reducer 생성
// crateSlice -> 기존에 createReducer와 createAction을 동시에 해줌
export const userSlice = createSlice({
    name: "user", // Reducer 이름
    initialState: { value: {name: "", age: 0, email:""}}, // value 및 초기값 세팅
    reducers:{ // 상태가 변할 경우 실행될 것
        login: (state, action) => {
            state.value = action.payload
        },
        //login메소드를 실행하였 을 때 작동 
    },
});

export default userSlice.reducer;

// 생성된 Reducer의 값은 store.js에 import하여 관리