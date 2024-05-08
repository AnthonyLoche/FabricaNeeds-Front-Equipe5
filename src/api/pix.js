import { Payment, MercadoPagoConfig } from 'mercadopago';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/pagamento', (req, res) => {
    const client = new MercadoPagoConfig({ accessToken: '' });
    const payment = new Payment(client);

    const { paymentData } = req.body


     payment.create({
         body: { 
             transaction_amount: paymentData.transaction_amount,
             description: paymentData.description,
             payment_method_id: paymentData.paymentMethodId,
             payer: {
                 email: paymentData.email,
                 identification: {
                     type: paymentData.identificationType,
                     number: paymentData.number
                 }
             }
         },
         requestOptions: { idempotencyKey: '123123131' }
     })
     .then((result) => res.send(result))  // Envie o resultado da criação do pagamento
     .catch((error) => console.log(error)) // Envie um erro caso ocorra um problema
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})  
