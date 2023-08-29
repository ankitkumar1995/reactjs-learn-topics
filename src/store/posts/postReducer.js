import { getPostsTypes } from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getPostsTypes.GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case getPostsTypes.GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case getPostsTypes.GET_POST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
