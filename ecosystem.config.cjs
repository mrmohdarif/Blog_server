module.exports = {
  apps: [
    {
      name: 'blog-server',
      script: './index.js',
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      env_qa: {
        NODE_ENV: 'qa',
        PORT: 8081
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 8082
      }
    }
  ]
};
