import { SET_JOB, ADD_JOB, DELETE_JOB } from "./const";

export const initState = {
  job: "",
  jobs: [],
};



const reducer = (state, action) => {

  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("invalid action");
  }

};

export default reducer