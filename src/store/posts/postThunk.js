import axios from "axios";
import { getPostFailed, getPostSuccess, getPostsRequest } from "./postActions";

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsRequest());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); // Adjust the API call as needed
    const posts = response.data;
    dispatch(getPostSuccess(posts));
  } catch (error) {
    dispatch(getPostFailed(error.message));
  }
};
