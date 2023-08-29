import { getPostsTypes } from "./actionTypes";

export const getPostsRequest = () => {
  return {
    type: getPostsTypes.GET_POST_REQUEST,
  };
};

export const getPostSuccess = (posts) => {
  return {
    type: getPostsTypes.GET_POST_SUCCESS,
    payload: posts,
  };
};

export const getPostFailed = (error) => {
  return {
    type: getPostsTypes.GET_POST_FAILED,
    payload: error,
  };
};
