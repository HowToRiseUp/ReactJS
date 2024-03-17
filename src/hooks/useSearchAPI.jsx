import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import lodash from "lodash";

export default function useSearchAPI(enpoint = "https://hn.algolia.com/api/v1/search?query=") {
    const [data, setData] = useState([]);
    const handleLoadApi = useRef({});
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const unMouse = useRef(true);
    useEffect(() => {
        return () => {
            unMouse.current = false
        }
    }, [])
    handleLoadApi.current = async () => {
        try {
            setLoading(true);
            const responce = await axios.get(
                `${enpoint}${query}`
            );
            unMouse.current = true;
            if (unMouse.current) {
                setTimeout(() => {
                    setData(responce.data?.hits);
                    setLoading(false);
                }, 1000);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        handleLoadApi.current();
    }, [query]);
    const handChangeQuery = lodash.debounce((e) => {
        setQuery(e.target.value);
    }, 500);
    return { data, query, handChangeQuery, error, loading }
}