import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Action, FetchedProduct, State } from "@/types/types";
import { Dispatch, Reducer, ReducerAction, ReducerState } from "react";
import { reducer } from "@/hooks/useCustomReducer/reducer";
import useCustomReducer from "@/hooks/useCustomReducer";
export type GlobalContent = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const initialState = {
  products: [],
  totalQty: 0,
  totalPrice: 0.0,
};

interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}

export const MyGlobalContext = createContext<GlobalContent>({
  state: initialState,
  dispatch: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

function ContextProvider({ children }: Props) {
  const { state, dispatch } = useCustomReducer();
  return (
    <MyGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </MyGlobalContext.Provider>
  );
}

export default ContextProvider;
