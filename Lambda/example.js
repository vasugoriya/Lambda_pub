// index.js

exports.handler = async (event) => {
    try {
        console.log("Lambda function executed successfully!");
        console.log("Event received:", JSON.stringify(event, null, 2));
        
        // Your Lambda function logic here
        
        const response = {
            statusCode: 200,
            body: JSON.stringify('Lambda function executed successfully!'),
        };
        return response;
    } catch (error) {
        console.error("An error occurred:", error);
        const response = {
            statusCode: 500,
            body: JSON.stringify('An error occurred while executing Lambda function.'),
        };
        return response;
    }
};
