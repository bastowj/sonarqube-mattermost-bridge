export default {
  env: 'production',
  apiPrefix: '/api/v1',
  docsDir: 'api-docs',
  sonarqubeTarget: '/sonarqube-webhook',
  sonarqubeChannel: 'my-channel',
  sonarqubeUsername: 'Sonar Scanner',
  sonarqubeIconUrl: 'https://url-custom-icon.png',
  logger: true,
  server: {
    host: 'localhost',
    port: 8080,
  },
};
