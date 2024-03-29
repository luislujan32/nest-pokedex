export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 5001,
  defaultLimit: +process.env.DEFAULT_LIMIT || 10,
});
