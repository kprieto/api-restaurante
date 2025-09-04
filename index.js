const express = require("express");

const connectDB = require("./database");

const dotenv = require("dotenv");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/clientes", require("./routes/clientesRoutes"));

app.use("/api/platos", require("./routes/platosRoutes"));

app.use("/api/pedidos", require("./routes/pedidosRoutes"));


app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:${5000}`);
    
})