import { useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { initialState } from "@/context/provider";

const useCustomReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchFunc = async () => {
      const res = await fetch("http://localhost:3000/products");

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: "success", results: data });
      }
    };

    fetchFunc();
  }, []);

  return { state, dispatch };
};

export default useCustomReducer;
