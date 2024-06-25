import { Payment, MercadoPagoConfig } from 'mercadopago';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

function gerarIdempotencyKey(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-$#_@&';
    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    (resultado);
    return resultado;
  }

app.use(bodyParser.json());
app.use(cors());

app.post('/payment', (req, res) => {
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
         requestOptions: { idempotencyKey: gerarIdempotencyKey(40) }
     })
     .then((result) => res.send(result))  // Envie o resultado da criação do payment
     .catch((error) => (error)) // Envie um erro caso ocorra um problema
})



app.listen(3000, () => {
    ('Server is running on port 3000');
})  
