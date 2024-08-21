const crypto = require('crypto');

function createSignature(){

    const op = "mega";
    const mem = "Kktan88";
    const pass = "596596";
    const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
    
    const concatenatedString = `${mem}${op}${pass}${secretKey}`;
    const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
    
    console.log(sign);
}


function createBalanceSignature(){
 const prod = 16
    const op = "mega";
    const mem = "Kktan88";
    const pass = "596596";
    const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
    
    const concatenatedString = `${mem}${op}${pass}${prod}${secretKey}`;
    const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
    
    console.log(sign);
}


function createDepositSignature(){
    const prod = 16
    const amount = 10
    const ref_no = "Dep00001"
       const op = "mega";
       const mem = "Kktan88";
       const pass = "596596";
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${amount}${mem}${op}${pass}${prod}${ref_no}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }
   

function createWithdrawSignature(){
    const prod = 16
    const amount = 10
    const ref_no = "Wit00001"
       const op = "mega";
       const mem = "Kktan88";
       const pass = "596596";
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${amount}${mem}${op}${pass}${prod}${ref_no}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }

   
   function createAppurlSignature(){
    const prod = 16
       const op = "mega";
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${op}${prod}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }

   function createAppusernameSignature(){
    const prod = 16
       const op = "mega";
       const mem = "Kktan88";
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${mem}${op}${prod}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }

   function createCallbackSignature(){
    const prod = 16
       const op = "mega";
       const mem = "Kktan88";
       const pass = "596596"
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${op}${mem}${pass}${prod}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }

   function createGame(){

    const prod = 10
  const type = 3

       const op = "mega";
       const mem = "Kktan88";
       const pass = "596596";
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${mem}${op}${pass}${prod}${type}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }


   function createGetGameList(){

    const prod = 16
  const type = 2

       const op = "mega";
  
   
       const secretKey = "XLR0xfUm2AQbShwtZMb0wxfg1muyU3LY";
       
       const concatenatedString = `${op}${prod}${type}${secretKey}`;
       const sign = crypto.createHash('md5').update(concatenatedString).digest('hex');
       
       console.log(sign);
   }

   createGetGameList()
