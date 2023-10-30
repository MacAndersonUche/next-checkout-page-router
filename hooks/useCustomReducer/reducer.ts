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
    case "add_qty":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.productId) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        }),
        totalQty: state.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.qty,
          0
        ),
        totalInStock: state.products
          .filter((item) => item.isAvailable)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue.qty,
            0
          ),
        totalPrice: state.products.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.qty * currentValue.price,
          0
        ),
      };
    case "remove_qty":
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.productId) {
            return {
              ...item,
              qty: item.qty > 0 ? item.qty - 1 : 0,
            };
          }
          return item;
        }),
        totalQty: state.products.reduce(
          (accumulator, currentValue) => accumulator + currentValue.qty,
          0
        ),
        totalInStock: state.products
          .filter((item) => item.isAvailable)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue.qty,
            0
          ),
        totalPrice: state.products.reduce(
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
