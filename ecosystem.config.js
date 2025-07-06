module.exports = {
  apps : [
    {
      name: 'blog-server',
      script: './index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 8080,
        BASE_URL: 'http://50.112.52.43:8080/'
      },
      env_qa: {
        NODE_ENV: 'qa',
        PORT: 8081,
        BASE_URL: 'http://50.112.52.43:8081/'
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 8082,
        BASE_URL: 'http://50.112.52.43:8082/'
      }
    }
  ]
};
