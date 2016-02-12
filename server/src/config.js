const config = {
  env: process.env.NODE_ENV || 'development',
  express: {
    port: process.env.PORT || 4000,
  },
  loggly: {
    token: process.env.LOGGLY_TOKEN || '',
    subdomain: process.env.LOGGLY_SUBDOMAIN || '',
  },
};

export default config;
