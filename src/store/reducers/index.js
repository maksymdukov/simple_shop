import {combineReducers} from 'redux';

import menuReducer from "./menuReducer";
import basketReducer from "./basketReducer";
import burgerEditorReducer from "./burgerEditorReducer";
import notificatorReducer from "./notificatorReducer";
import authReducer from "./authReducer";
import userOrdersReducer from "./userOrdersReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    basket: basketReducer,
    burgerEditor: burgerEditorReducer,
    notificator: notificatorReducer,
    auth: authReducer,
    userOrders: userOrdersReducer,
    profile: profileReducer
});

export default rootReducer;