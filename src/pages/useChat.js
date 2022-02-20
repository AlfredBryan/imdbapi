import { useEffect, useState } from "react";
import axios from "axios";

export const useChat = () => {
  const [awards, setAwards] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://data-imdb1.p.rapidapi.com/actor/id/nm0000199/awards/",
      params: { page_size: "22" },
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_KEY,
      },
    };

    const fetchData = () => {
      axios
        .request(options)
        .then((response) => {
          setAwards(response?.data?.results);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const array = countYear(awards);

    const years = Object.keys(array);
    const count = Object.values(array);

    setChartData({
      labels: years?.map((year) => year),
      datasets: [
        {
          label: "Awards",
          data: count.map((c) => c),
          backgroundColor: [
            "#ffbb11",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
        },
      ],
    });
  }, [awards]);

  const countYear = (arr) => {
    const year = {};
    arr.forEach((item) => {
      if (year[item.year]) {
        year[item.year]++;
      } else {
        year[item.year] = 1;
      }
    });
    return year;
  };

  return { awards, chartData };
};
