import * as actionName from '../action-name/counterName';

export default (state = { count: 0 }, action) => {
    console.log(state);
    switch (action.type) {
        case actionName.INC_COUNT:
            return {
                count: state.count + 1
            }
        case actionName.DEC_COUNT:
            return {
                count: state.count - 1
            }
        case actionName.CLR_COUNT:
            return {
                count: 0
            }
        case actionName.INP_COUNT:
            return {
                count: action.value
            }
        default:
            return state;
    }
};
