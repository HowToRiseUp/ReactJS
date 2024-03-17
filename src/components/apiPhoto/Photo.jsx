import axios from "axios";
import { useEffect, useRef, useState } from "react";

const getRandomPhoto = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photo = () => {
  const [img, setImg] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handLoadMorePhoto = useRef({});
  handLoadMorePhoto.current = async () => {
    const random = await getRandomPhoto(nextPage);
    const nextImg = [...img, ...random]; // Fixing the order of concatenation
    setImg(nextImg);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handLoadMorePhoto.current(); // Call handLoadMorePhoto instead of loadMore
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-5">
        {img.length > 0 &&
          img.map((item, index) => (
            <div key={index} className="h-[200px]">
              <img
                key={index}
                src={item.download_url}
                className="w-full h-full object-cover rounded-lg"
                alt={`Image ${index}`}
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handLoadMorePhoto.current}
          className="inline-block px-8 py-4 rounded-md bg-purple-600 text-white"
        >
          Damnnn Bro
        </button>
      </div>
    </div>
  );
};

export default Photo;
