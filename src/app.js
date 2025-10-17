import express from "express";
import cors from "cors";
import cryptoRoutes from "./routes/cryptoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", cryptoRoutes);

app.listen(5000, () =>
  console.log("Servidor backend corriendo en puerto 5000")
);
