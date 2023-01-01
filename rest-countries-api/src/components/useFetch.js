import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);

    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            setBlogs(data);
            console.log(data);
            // setIsLoading(false);
        })
    }, [url]);

    return data
};

export default useFetch;