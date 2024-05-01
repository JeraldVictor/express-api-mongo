interface ConfigInterface {
  PORT: number;
  MONGODB_URI: string;
  PASSWORD_SALT: number;
}

export default <ConfigInterface>{
  PORT: process.env.PORT || 8081,
  MONGODB_URI: process.env.MONGODB_URI,
  PASSWORD_SALT: 10,
};
