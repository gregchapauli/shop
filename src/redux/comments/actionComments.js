import axios from "axios";
import {
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} from "./type";

const LoadApiComments = () => {
  return {
    type: LOAD_COMMENTS,
  };
};
const LoadApiCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments,
  };
};
const LoadApiCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(LoadApiComments());

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch(LoadApiCommentsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(LoadApiCommentsError(err.message));
      });
  };
};
