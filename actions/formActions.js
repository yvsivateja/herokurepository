import axios from 'axios'
import * as types from './actionTypes'

function dispatchRequest(actionType, payload) {
    return {type: actionType, formSchema: payload}
}

let formActions = {
    loadInitialJSONSchema: function() {
        return function(dispatch) {
          //can dispatch empty data to show loading icon in UI
            return axios({url: '/startInterview', timeout: 20000, method: 'get', responseType: 'json'}).then(function(response) {
                dispatch(dispatchRequest(types.LOAD_INIT_JSON_SCHEMA, response.data.results));
            }).catch(function(response) {
                console.error("Error while loading init Schema : " + response.data);
            })
        }
    },
    reloadJSONSchema: function(dataToSave) {
        return function(dispatch) {
          //can dispatch empty data to show loading icon in UI
            return axios({url: '/saveUserInputs', data: dataToSave, timeout: 20000, method: 'POST', responseType: 'json'}).then(function(response) {
                dispatch(dispatchRequest(types.LOAD_NEW_JSON_SCHEMA, response.data.results));
            }).catch(function(response) {
                console.error("Error while Re-loading new Schema : " + response.data);
            })
        }
    }
}

export default formActions
