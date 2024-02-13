"use client";

import { getApplicationsByPage } from '@/lib/db/action';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


function LoadMore({totalPage}) {
  const { ref, inView } = useInView();

  const [page, setPage] = useState(2)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (inView && page - 1 <= totalPage && !isLoading) {
        setIsLoading(true);

        const delay = 500;

        const timeoutId = setTimeout(() => {
          getApplicationsByPage(page).then((res) => {
            setData([...data, ...res]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
          });
        }, delay);

        // Clear the timeout if the component is unmounted or inView becomes false
        return () => clearTimeout(timeoutId);
      }
    };

    fetchData();
  }, [inView, data, isLoading, page, totalPage]);
  return (
    <div>
        {data}
      <div ref={ref}>
          {inView && isLoading && (
            <h1>Loading.......</h1>
          )}
      </div>
    </div>
  );
}

export default LoadMore;