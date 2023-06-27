const crypto = require('crypto');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    //get the data used to sign from request body
    const data =Buffer.from(req.rawBody, 'utf8')
    const key = "xVnKuR8elwcDhXalUrGQeiyYRExLl9kl";

    const hmac = crypto.createHmac('sha256', key)
        .update(data)    
        .digest('base64')

    context.res = {   
        body: `sha256=${hmac}, len: ${data.length}` 
    };
}
