/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MAIL_USERNAME: "navwebdev2@gmail.com",
    MAIL_PASSWORD: "gzlduanoellhlssa",
    // BASE_URL: "http://localhost:3000",
    BASE_URL: "https://chakrakriya.org",
    MongoDb:
      "mongodb+srv://user:Kj3KQ3oqNIDKzBS6@cluster0.6tfyvrn.mongodb.net/?retryWrites=true&w=majority",
    JWT_SECRET: "jkahsdfkljasdklfjkl",
  },
};

module.exports = nextConfig;
