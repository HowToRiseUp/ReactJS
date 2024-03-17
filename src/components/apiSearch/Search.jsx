// /https://hn.algolia.com/api/v1/search?query=...

import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import lodash from "lodash";

const Search = () => {
  const [data, setData] = useState([]);
  const handleLoadApi = useRef({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const unMouse = useRef(true);
  handleLoadApi.current = async () => {
    try {
      setLoading(true);
      const responce = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      unMouse.current = true;
      if (unMouse.current) {
        setTimeout(() => {
          setData(responce.data?.hits);
          setLoading(false);
        }, 3000);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleLoadApi.current();
    return () => {
      unMouse.current = false
    }
  }, [query]);
  console.log(unMouse.current);

  const handChangeQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  return (
    <div className="w-2/4 mx-auto shadow-md m-10 p-5 rounded-lg">
      <input
        className="p-5 border-2 w-full mb-5 rounded-md  focus:border-green-500 transition-all "
        defaultValue={query}
        placeholder="Nhập vào đi bạn yêu ... GAYYYYY"
        onChange={handChangeQuery}
      />
      {error && <div className="text-red-500 text-center">{error}</div>}
      {loading ? (
        <div className="w-8 h-8 rounded-full border-4 border-green-500 border-r-transparent animate-spin mx-auto m-10"></div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-4">
        {!loading &&
          data.length > 0 &&
          data.map((item, index) => (
            <div className="p-5 bg-gray-300 rounded-md " key={index}>
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
