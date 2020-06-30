import * as actionName from '../action-name/counterName';

export const IncrementCounter = () => {
    return {
        type: actionName.INC_COUNT
    }
}
export const DecrementCounter = () => {
    return {
        type: actionName.DEC_COUNT
    }
}
export const ClearCounter = () => {
    return {
        type: actionName.CLR_COUNT
    }
}
export const InputCounter = (count) => {
    return {
        type: actionName.INP_COUNT,
        value: parseInt(count)
    }
}
