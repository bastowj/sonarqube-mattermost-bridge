export default {
  env: 'production',
  apiPrefix: '/api/v1',
  docsDir: 'api-docs',
  sonarqubeTarget: '/sonarqube-webhook',
  logger: true,
  server: {
    host: 'localhost',
    port: 8080,
  },
};
