import * as types from '../actions/actionTypes'
let formActionsReducer = function(formSchema = [], action) {
    switch (action.type) {
        case types.LOAD_INIT_JSON_SCHEMA:
            return Object.assign(...formSchema, action.formSchema);
        case types.LOAD_NEW_JSON_SCHEMA:
            return Object.assign(...formSchema, action.formSchema);
        default:
            return formSchema;
    }
}

export default formActionsReducer
