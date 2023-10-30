import { Action, State } from "@/types/types";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "success":
      return {
        ...state,
        products: action.results,
        totalQty: action.results.reduce(
          (accumulator, currentValue) => accumulator + currentValue.qty,
          0
        ),
        totalInStock: action.results
          .filter((item) => item.isAvailable)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue.qty,
            0
          ),
        totalPrice: action.results.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.qty * currentValue.price,
          0
        ),
      };
    // case "failure":
    //   return { isLoading: false, error: action.error };
    default:
      return state;
  }
}
