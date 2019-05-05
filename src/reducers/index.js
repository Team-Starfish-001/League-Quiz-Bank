import * as actions from '../actions/actionConstants'

function quizReducer(state, action) {
    switch (action.type) {
        case actions.ADD_QUIZ: {
            console.log("add quiz");
            return Object.assign({}, state);
        } 

        default: return state
    }
}
export default quizReducer;