import { POST_TYPES } from 'store/actions/postAction';

const detailPostReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_TYPES.GET_POST:
            return { ...action.payload };
        default:
            return state;
    }
};

export default detailPostReducer;
