export const POST_SAMPLE_TOKEN_REQUEST = '@sample/POST_SAMPLE_TOKEN_REQUEST';
export const POST_SAMPLE_TOKEN_SUCCESS = '@sample/POST_SAMPLE_TOKEN_SUCCESS';
export const POST_SAMPLE_TOKEN_FAILURE = '@sample/POST_SAMPLE_TOKEN_FAILURE';

export const postSampleTokenRequest = (payload, callback) => ({
  type: POST_SAMPLE_TOKEN_REQUEST,
  payload,
  callback,
});
export const postSampleTokenSuccess = payload => ({
  type: POST_SAMPLE_TOKEN_SUCCESS,
  payload,
});
export const postSampleTokenFailure = payload => ({
  type: POST_SAMPLE_TOKEN_FAILURE,
  payload,
});
