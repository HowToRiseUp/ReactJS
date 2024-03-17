// /https://hn.algolia.com/api/v1/search?query=...

import axios from "axios";
import { useReducer, useRef } from "react";
import { useEffect } from "react";
import lodash from "lodash";

const initialValue = {
  data: [],
  query: "",
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
  }
};
const SearchReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const handleLoadApi = useRef({});
  handleLoadApi.current = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const responce = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
      dispatch({ type: "SET_DATA", payload: responce.data.hits });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_ERROR", payload: error });
    }
  };
  useEffect(() => {
    handleLoadApi.current();
  }, [state.query]);
  const handChangeQuery = lodash.debounce((e) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value });
  }, 500);
  return (
    <div className="w-2/4 mx-auto shadow-md m-10 p-5 rounded-lg">
      <input
        className="p-5 border-2 w-full mb-5 rounded-md  focus:border-green-500 transition-all "
        defaultValue={state.query}
        placeholder="Nhập vào đi bạn yêu ... GAYYYYY"
        onChange={handChangeQuery}
      />
      {state.error && (
        <div className="text-red-500 text-center">{state.error}</div>
      )}
      {state.loading ? (
        <div className="w-8 h-8 rounded-full border-4 border-green-500 border-r-transparent animate-spin mx-auto m-10"></div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-4">
        {!state.loading &&
          state.data.length > 0 &&
          state.data.map((item, index) => (
            <div className="p-5 bg-gray-300 rounded-md " key={index}>
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchReducer;
