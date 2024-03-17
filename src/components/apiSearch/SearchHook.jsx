// /https://hn.algolia.com/api/v1/search?query=...

import useSearchAPI from "../../hooks/useSearchAPI";



const SearchHook = () => {
  const { data, query, handChangeQuery, error, loading } = useSearchAPI("https://hn.algolia.com/api/v1/search?query=");

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

export default SearchHook;
