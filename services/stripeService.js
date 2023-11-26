const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const charge = async (token, amount) => {
  return await stripe.charges.create({
    amount: amount,
    currency: 'usd',
    source: token,
    description: 'Charge for Vizilu',
  });
};

module.exports = { charge };
