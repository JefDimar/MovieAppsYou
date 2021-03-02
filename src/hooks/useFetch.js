import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController()
    fetch(url, {
      signal: controller.signal
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data.results)
      })
      .catch((error) => console.log(error));
    return () => {
      controller.abort()
    };
  }, [url]);
  return data
}