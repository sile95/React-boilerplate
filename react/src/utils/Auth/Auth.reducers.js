export const actions = {
    START_SIGN_IN: 'START_SIGN_IN',
    START_SIGN_OUT: 'START_SIGN_OUT',
};

const initialState = {
    auth: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.START_SIGN_IN: {
            return { ...state, auth: payload };
        }
        case actions.START_SIGN_OUT: {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    }
};
