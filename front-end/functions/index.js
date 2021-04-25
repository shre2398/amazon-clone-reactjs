const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51IjizaSIO4J0W0rFH6YKVmjLhCCF2nH724BNpAUdlqJMrxM2wxJ2aKeFIEzZaGAALJTxJ2U4aBbOXKyHeJZbPqtb00jnovxAkS'
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('Hello world'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('Payment Request Received for this amount:', total);

  const paymentIntent = await stripe.paymentIntents({
    amount: total,
    currency: 'usd'
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
