const crypto = require('crypto');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    //get the data used to sign from request body
    const data = req.rawBody.toString('utf8');
    const key =  "xVnKuR8elwcDhXalUrGQeiyYRExLl9kl";

    const hmac = crypto.createHmac('sha256', key)
        .update(data)
        .end()      
    const hash = hmac.digest('base64')

    context.res = {   
        body: `sha256=${hash}, len: ${data.length}` 
    };
}
