"use client"; // This is a client component

import axios from "axios";
import { useEffect, useState } from "react";

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
//Класический код как нужно запрашивать данные с сервера
const Coins = () => {
  //Сеэйт хранит монеты
  const [coins, setCoins] = useState<Coin[]>();
  //Стэйт визуализирует загрузку
  const [loading, setLoading] = useState(true);
  //Стэйт показывает ошибки загрузку
  const [error, setError] = useState(false);
  async function fetchCoins() {
    try {
      const { data } = await axios.request(options);

      setCoins(data.result as Coin[]);
    } catch (error) {
      console.log(error);

      setError(!!error);
    } finally {
      //Завершаем загрузку
      setLoading(false);
    }
  }

  //При первом рендере приложения делаем запрос на сервер
  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error geting data</h3>;
  }
  if (!coins) {
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
          {coins?.map((coin, index) => (
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
