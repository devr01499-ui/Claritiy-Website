const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// We only keep the payment route for Stripe, as it needs the Secret Key which should not be on the frontend.
app.use('/api/payments', require('./routes/payments'));

app.get('/', (req, res) => {
    res.send('Claritiy Secure Payment API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
