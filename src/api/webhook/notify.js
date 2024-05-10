import { Payment, MercadoPagoConfig } from 'mercadopago';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/webhook", (req, res) => {
    console.log(req.body);
    res.send("OK");

    const idPagamento = req.body.data.id

    const client = new MercadoPagoConfig({ accessToken: 'APP_USR-942949289577962-050812-4019ece557a9f806f53560a6aa186e7a-1138000306' });
    const payment = new Payment(client)

    const pagamento = payment.get({
        id: idPagamento,
    })

    console.log(pagamento)
});