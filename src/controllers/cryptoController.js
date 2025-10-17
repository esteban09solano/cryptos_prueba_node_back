import {
  getCryptoData,
  getCryptoList,
} from "../services/coinmarketcapService.js";

export const fetchCrypto = async (req, res) => {
  try {
    // console.log(req.query["symbol[]"]);
    const symbols = req.query["symbol[]"];
    // console.log(symbols);
    const data = await getCryptoData(
      symbols ? symbols.split(",") : ["BTC", "ETH", "USDT"]
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

export const fetchCryptoList = async (req, res) => {
  try {
    const data = await getCryptoList();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};
