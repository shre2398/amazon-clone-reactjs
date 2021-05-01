const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51IjizaSIO4J0W0rFH6YKVmjLhCCF2nH724BNpAUdlqJMrxM2wxJ2aKeFIEzZaGAALJTxJ2U4aBbOXKyHeJZbPqtb00jnovxAkS'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = parseInt(request.query.total);

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'inr'
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// - Listen command
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
