const config = {
  env: process.env.NODE_ENV || 'development',
  express: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 4000,
  },
  loggly: {
    token: process.env.LOGGLY_TOKEN || '',
    subdomain: process.env.LOGGLY_SUBDOMAIN || '',
  },
};

export default config;
