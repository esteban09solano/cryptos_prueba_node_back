import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.CMC_API_KEY;

export const getCryptoData = async (symbols = "BTC") => {
  const response = await axios.get(
    // `${process.env.CMC_API_BASE}/cryptocurrency/listings/latest`,
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`,
    {
      params: { symbol: symbols.join(",") },
      headers: { "X-CMC_PRO_API_KEY": apiKey },
    }
  );
  return response.data.data;
};

export const getCryptoList = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        params: { start: 1, limit: 100, convert: "USD" },
        headers: { "X-CMC_PRO_API_KEY": apiKey },
      }
    );

    // Simplificamos los datos para el select
    // const coins = response.data.data.map((coin) => ({
    //   symbol: coin.symbol,
    //   name: coin.name,
    // }));
    // console.log(coins);
    return response.data.data;
  } catch (error) {
    return res.status(500).json({ error: "Error obteniendo lista de criptos" });
  }
};
