// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7e12ad51840d9702d1365f7d67ff67e8
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg

import axios from "axios";
import { useEffect, useState } from "react";
import useDebaunt from "../../hooks/useDebaunt";

const InputSearchMovie = () => {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState()
    const debautQuery = useDebaunt(query, 2000)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query='${debautQuery}'&api_key=7e12ad51840d9702d1365f7d67ff67e8`)
                setMovies(response.data.results)
                setLoading(false)

            } catch (error) {
                setLoading(false)

                console.log("🚀 ~ useEffect ~ error:", error)
            }
        })();
    }, [debautQuery])
    const hanldChang = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div>
            <div className="mt-5 flex justify-center">
                <input className="border border-gray-400 rounded-md focus:shadow-md focus:border-green-500 px-8 w-[400px]  py-4" placeholder="Search what fuck you like ..." onChange={hanldChang} defaultValue={query} />
            </div>
            {
                loading ? <div className="grid grid-cols-3 gap-10 mt-5 w-[1690px] mx-auto">
                    {
                        movies && movies.map((item) => (
                            <MovieItemLoading key={item.id} img={item.backdrop_path} rating={item.vote_average} name={item.original_title}></MovieItemLoading>
                        ))
                    }
                </div> : <div className="grid grid-cols-3 gap-10 mt-5 w-[1690px] mx-auto">
                    {
                        movies && movies.map((item) => (
                            <MovieItem key={item.id} img={item.backdrop_path} rating={item.vote_average} name={item.original_title}></MovieItem>
                        ))
                    }
                </div>
            }

        </div>
    );
};

const LoadingSkeleton = (prop) => {
    return (
        <div
            className="skeleton"
            style={{
                height: prop.height,
                width: prop.width || "100%",
                borderRadius: prop.radius,
            }}
        ></div>
    );
};

const MovieItemLoading = () => {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col">
            <div className="h-[297px]">
                <LoadingSkeleton
                    width="100%"
                    height="100%"
                    radius="16px"
                ></LoadingSkeleton>
            </div>
            <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-lg text-black font-semibold mb-4">
                    <LoadingSkeleton height="20px"></LoadingSkeleton>
                </h3>
                <p className="text-[#999] text-sm mb-6 !leading-loose">
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-2"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                </p>
                <div className="flex items-center gap-x-3 mt-auto">
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
                            stroke="#FFB86C"
                            strokeWidth="1.5"
                        />
                    </svg>
                    <span className="text-sm font-semibold text-[#333]">
                        <LoadingSkeleton height="10px" width="50px"></LoadingSkeleton>
                    </span>
                </div>
            </div>
        </div>
    );
};



const MovieItem = (prop) => {
    return (
        <div className="flex flex-col bg-gray-100 rounded-lg p-3">
            <div className="rounded-md overflow-hidden p-3"><img src={`https://image.tmdb.org/t/p/original${prop.img}`} /></div>
            <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center  my-3">
                    <div>{prop.name}</div>
                    <div>{prop.rating}</div>
                </div>
                <button className="bg-cyan-700 text-white rounded-md p-3 mt-auto">Xem</button>
            </div>
        </div>
    )
}

export default InputSearchMovie;