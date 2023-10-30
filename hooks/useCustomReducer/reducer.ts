import { Action, State } from "@/types/types";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "success":
      return {
        ...state,
        products: action.results,
      };
    // case "failure":
    //   return { isLoading: false, error: action.error };
    default:
      return state;
  }
}
