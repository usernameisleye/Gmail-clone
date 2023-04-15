import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
         .then((res) => {
            // If server response is failed throwing an error message
            if(!res.ok){
                throw Error("Server error, Please try again later!");
            }

            return res.json();
         })
         .then((data) => {
            // Updating states when data is recieved
            setData(data);
            setLoading(false);
            setError(null);
         })
         .catch((err) => {
            // Updating states if client response is failed 
            setError(err.message);
            setLoading(false);
         })
    }, [url]);

    // Exporting useState value as object items for use in other components
    return {data, loading, error, setData};
}

export default useFetch;