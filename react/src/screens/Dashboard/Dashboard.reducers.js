export const actions = {
    START_TESTING_REDUCER: 'START_TESTING_REDUCER',
};

const initialState = {
    reducer: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.START_TESTING_REDUCER: {
            return {
                ...state,
                reducer: payload,
            };
        }
        default:
            return state;
    }
};
