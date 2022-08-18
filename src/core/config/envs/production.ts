export default {
  env: 'production',
  apiPrefix: '/api/v1',
  docsDir: 'api-docs',
  sonarqubeTarget: '/sonarqube-webhook',
  sonarqubeSecretHeaderField: 'x-sonar-webhook-hmac-sha256',
  sonarqubeChannel: 'my-channel',
  sonarqubeUsername: 'Sonar Scanner',
  sonarqubeIconUrl: 'https://url-custom-icon.png',
  mattermostWebhook: 'https://mattermost/webhook',
  logger: true,
  server: {
    host: 'localhost',
    port: 8080,
  },
};
