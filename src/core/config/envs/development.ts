export default {
  env: 'development',
  apiPrefix: 'api/v1',
  docsDir: 'api-docs',
  sonarqubeTarget: '/sonarqube-webhook',
  sonarqubeSecretHeaderField: 'x-sonar-webhook-hmac-sha256',
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  server: {
    host: 'localhost',
    port: 8080,
  },
};
