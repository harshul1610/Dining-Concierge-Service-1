exports.handler = async (event) => {
    
    // TODO implement
    
    console.log("event start");
    console.log(event);
    console.log("event end");
   
    const response = {
        statusCode: 200,
        body: 'I’m still under developmenth. Please come back later1',
    };
    
    var aws = require('aws-sdk');
    
    
    var lexruntime = new aws.LexRuntime();
    
    var params = {
        botAlias: '$LATEST', /* required */
        botName: 'ResturantService', /* required */
        inputText: event.userQuery,
        userId: 'Text', /* required */
    };
    
    // var params = {
    //     botAlias: 'STRING_VALUE', /* required */
    //     botName: 'STRING_VALUE', /* required */
    //     inputText: 'STRING_VALUE', /* required */
    //     userId: 'STRING_VALUE', /* required */
    //     requestAttributes: {
    //         '<String>': 'STRING_VALUE',
    //         /* '<String>': ... */
    //     },
    //     sessionAttributes: {
    //         '<String>': 'STRING_VALUE',
    //         /* '<String>': ... */
    //     }
    // };
    
    function wait(){
        
        return new Promise((resolve, reject) => {
            // setTimeout(() => resolve("hello"), 2000)
            lexruntime.postText(params, function (err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else resolve(data);           // successful response
            });
        });
        
    }
    
    var result = await wait();
   
    return result;
    
};
