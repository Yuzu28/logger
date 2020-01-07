// /Users/JohnNguyen11/project3/logger/src/component/constant.js

import {ADD_REMINDER} from '../../constant';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action in addReminder', action)
    return action
}