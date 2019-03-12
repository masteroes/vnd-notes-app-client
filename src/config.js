export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "vnd-notes-app-api-dev-attachmentsbucket-jrew3cc31bef"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://75haeozc50.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Zh7yZiKqB",
        APP_CLIENT_ID: "1bfnlm22thsn9476g9j6cfd89c",
        IDENTITY_POOL_ID: "us-east-1:5ac46b16-5e49-42a8-ab50-fb16759bf43a"
    }
};
