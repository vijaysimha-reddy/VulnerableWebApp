import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: "mongodb://127.0.0.1:27017/testing",
  JWT_SECRET: "secret123",
  PAYPAL_CLIENT_ID: "DANSDKANSDKAJNSDKAN",
};
