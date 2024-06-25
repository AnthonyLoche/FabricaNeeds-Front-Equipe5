// // app.js
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import postgres from "postgres";
// import dotenv from "dotenv";

// const app = express();
// dotenv.config();
// app.use(bodyParser.json());
// app.use(cors());

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: 'require',
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
// });

// app.post("/payment", async (req, res) => {
//     const paymentData  = req.body;
//     (paymentData);
//     try{
//     const result = await sql`insert into fabricaNeeds_payments values (${paymentData.id}, ${paymentData.cliente}, ${paymentData.email}, ${paymentData.cpf}, ${paymentData.valor}, ${paymentData.status})`;
//     res.send(result);    
// }
//     catch(error){
//         (error);
//     }
// })

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   (result);
// }

// app.listen(3001, () => {
//   ("Server is running on port 3000");
// });

// getPgVersion();