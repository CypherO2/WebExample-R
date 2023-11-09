import axios from "axios";
import { FormEvent, useState } from "react";
import "./stock-api.css";

function StockMarketAPI() {
  const [stockcode, setStockcode] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    const params = {
      function: "TIME_SERIES_INTRADAY",
      symbol: stockcode,
      interval: "5min",
      apikey: "demo",
    };
    try {
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: params,
      });
      const timeSeries = response?.data["Time Series (5min)"];
      if (timeSeries) {
        const latestTime = Object.keys(timeSeries)[0];
        setStockValue(timeSeries[latestTime]["4. close"]);
      } else {
        throw Error("Invalid Response Format");
      }
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  return (
    <>
      <form onSubmit={handleClick} className="form1">
        <label htmlFor="stockcode">Stock Code</label>
        <input
          type="text"
          id="stockcode"
          autoComplete="off"
          onChange={(e) => setStockcode(e.target.value)}
          value={stockcode}
        />
        <button type="submit">Submit</button>
      </form>
      {stockValue && <p>The value of the stock is: {stockValue}.</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
export default StockMarketAPI;
