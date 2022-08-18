import { FastifyPluginAsync } from 'fastify';
import fastifyWebhook from 'fastify-webhook';
import fp from 'fastify-plugin';
import config from '../../core/config';
import checkSecretKey from '../../core/utils/check-secret-key';

const webhookAuto: FastifyPluginAsync<{
  prefix: string;
}> = async (fastify): Promise<void> => {
  fastify.register(fastifyWebhook, {
    url: config.sonarqubeTarget,
    preHandlers: [checkSecretKey],
  });
};

export const webhookPlugin = fp(webhookAuto);
