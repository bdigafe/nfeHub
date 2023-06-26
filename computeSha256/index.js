const crypto = require('crypto');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    //get the data used to sign from request body
    const data = req.rawBody;
    const key = "xVnKuR8elwcDhXalUrGQeiyYRExLl9kl";

    const hash = crypto
        .createHmac('sha256', key)
        .update(data)
        .digest('base64')

    context.res = {   
        body: `sha256=${hash}` 
    };
}
