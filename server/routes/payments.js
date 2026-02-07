const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
);

router.post('/create-checkout-session', async (req, res) => {
    try {
        const { templateId, userId } = req.body;

        // Fetch from Supabase
        const { data: template, error } = await supabase
            .from('templates')
            .select('*')
            .eq('id', templateId)
            .single();

        if (error || !template) return res.status(404).json({ msg: 'Template not found' });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: template.name,
                            description: template.description,
                        },
                        unit_amount: template.price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success?templateId=${templateId}`,
            cancel_url: `${process.env.FRONTEND_URL}/templates`,
            metadata: {
                templateId,
                userId
            }
        });

        res.json({ id: session.id });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Webhook for handling successful payment (simplified for now)
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    // Logic to add templateId to User.purchasedTemplates after success
    res.send({ received: true });
});

module.exports = router;
