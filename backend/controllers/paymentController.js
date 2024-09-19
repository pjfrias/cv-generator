// controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
  const { amount, token } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'Pago por descarga de CV',
      source: token.id,
    });

    res.status(200).json({ message: 'Pago exitoso', charge });
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el pago' });
  }
};
