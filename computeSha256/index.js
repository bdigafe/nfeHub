const CryptoJS = require("crypto-js");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    //get the data used to sign from request body
    const data = req.body.data;
    const key =  req.body.key;

    // sign payload
    const str = CryptoJS.HmacSHA256(data, key);
    const sig = CryptoJS.enc.Base64.stringify(str);

    context.res = {   
        body: sig 
    };
}
