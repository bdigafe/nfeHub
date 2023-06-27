const crypto = require('crypto');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    //get the data used to sign from request body
    const data =context.req.rawBody;
    const dataBase64 = data.toString('hex');

    const key = "e05d2f9a838df65f9da4931471c5c43f67af1e2b309b63a3d57914d9cfadcced";
    //"xVnKuR8elwcDhXalUrGQeiyYRExLl9kl";

    const hmac = crypto.createHmac('sha256', key)
        .update(data)    
        .digest('base64')

    context.res = {   
        body: `sha256=${hmac}, len: ${data.length}, base64:${dataBase64}` 
    };
}
