export default {
  apps: [
    {
      name: 'blog-server',
      script: './index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    },
    {
      name: 'blog-qa',
      script: './index.js',
      env: {
        NODE_ENV: 'qa',
        PORT: 8081
      }
    },
    {
      name: 'blog-dev',
      script: './index.js',
      env: {
        NODE_ENV: 'development',
        PORT: 8082
      }
    }
  ]
}
