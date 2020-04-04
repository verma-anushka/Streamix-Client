import streams from "../../apis/streams";
import history from "../../history";

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data });

    history.push("/");
  };
};
