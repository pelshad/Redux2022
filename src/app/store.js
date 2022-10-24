// Store.js : 모든 Reducer를 통합관리하는 파일

import { configureStore } from '@reduxjs/toolkit';

//// user.js에서 생성된 userReducer
import userReducer from '../redux/user';

export const store = configureStore({ 
    // configureStore : 모든 state를 관리하는 메소드
    reducer:{
    // reducer:{} : 상태관리 할 것 들을 저장
        user: userReducer // import된 userReducer
    },
});
