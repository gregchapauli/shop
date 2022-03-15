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
