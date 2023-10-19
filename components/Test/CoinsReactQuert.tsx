"use client"; // This is a client component

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Coin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  explorers: string[];
}

const options = {
  method: "GET",
  url: "https://openapiv1.coinstats.app/coins",
  params: {
    asset_type: "spot",
    data_type: "metrics",
    symbol: "BTC",
    base: "USDT",
    market_venue: "BINANCE",
  },
  headers: {
    "X-API-KEY": "7+Zn/ZlKNlybRNeopjqR9kCjWCZ//TkqYpwdPXj5F4k=",
    accept: "application/json",
  },
};
async function fetchCoins() {
  try {
    const { data } = await axios.request(options);

    return data.result as Coin[];
  } catch (error) {
    console.log(error);
  } finally {
    //Завершаем загрузку
    console.log("Loading is finished");
  }
}
//Класический код как нужно запрашивать данные с сервера
const Coins = () => {
  //Сокращенный вариант
  //const { data, isLoading, error } = useQuery(["coins"], async () =>  await axios.request(options));

  //Выполняет туже функции что и useSTate  & useEffect и хранит состояние доступ к кэшу по ключам
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.request(options);

      return data.result as Coin[];
    },
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error geting data</h3>;
  }
  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <div className='coins'>
      <table className='table-fixed'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((coin, index) => (
            <tr key={index}>
              <td>{coin.id}</td>
              <td>{coin.name}</td>
              <td>{coin.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
