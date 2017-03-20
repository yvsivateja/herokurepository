var myFormModel = {
    getinitdata: function() {
        var interviewResponseBody = require('./json_inputs/init.json')
        return {results: interviewResponseBody};
    },
    saveUserInputs: function(userInput, callback) {
        //validations or next steps can be written here
        console.log("Current Step to Load: "+userInput.Next_Step)
        var interviewResponseBody = []
        if (userInput.Next_Step === 'STEP-1')
            interviewResponseBody = require('./json_inputs/step1.json')
        else if (userInput.Next_Step === 'STEP-2')
            interviewResponseBody = require('./json_inputs/step2.json')
        else if (userInput.Next_Step === 'STEP-3')
            interviewResponseBody = require('./json_inputs/step3.json')
        return (callback({results: interviewResponseBody}));
    }
}

module.exports = myFormModel
