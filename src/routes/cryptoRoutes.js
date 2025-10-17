import express from "express";
import {
  fetchCrypto,
  fetchCryptoList,
} from "../controllers/cryptoController.js";

const router = express.Router();
router.get("/cryptos", fetchCrypto);
router.get("/cryptos/list", fetchCryptoList);
export default router;
