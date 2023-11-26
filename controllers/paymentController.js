const stripeService = require('../services/stripeService');

const makePayment = async (req, res) => {
  try {
    const { token, amount } = req.body;
    const charge = await stripeService.charge(token, amount);
    res.json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { makePayment };
