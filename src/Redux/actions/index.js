import aws from '../../apis/aws';
import { SIGN_IN, SIGN_OUT, SUBMIT_FORM } from './types';


export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const submitForm = (formValues) => {
  return async (dispatch) => {
    const response = await aws.post('/', formValues);

    dispatch({ type: SUBMIT_FORM, payload: response.data })
  }
}