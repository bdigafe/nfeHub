const crypto = require('crypto');

app.use(express.raw({ type: 'application/json' }));
app.post('/webhook', async (request, response) => {
    const signature = request.headers['typeform-signature']
    const isValid = verifySignature(signature, request.body.toString());
});

const verifySignature = function (receivedSignature, payload) {
    const hash = crypto
        .createHmac('sha256', process.env.SECRET_TOKEN)
        .update(payload)
        .digest('base64')
    return receivedSignature === `sha256=${hash}`
}
