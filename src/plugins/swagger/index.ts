import { FastifyPluginAsync } from 'fastify';
import swagger from '@fastify/swagger';
import fp from 'fastify-plugin';
import config from '../../core/config';

const swaggerAuto: FastifyPluginAsync<{
  prefix: string;
  docsDir: string;
}> = async (fastify, opts): Promise<void> => {
  fastify.register(swagger, {
    mode: 'dynamic',
    routePrefix: `${opts.prefix}/${opts.docsDir}`,
    exposeRoute: true,
    hideUntagged: false,
    swagger: {
      info: {
        title: 'fastify-typescript-starter',
        description: 'fastify typescript starter',
        version: '0.0.1',
      },
      externalDocs: {
        url: 'https://github.com/bastowj/fastify-typescript-starter',
        description: 'Documentation',
      },
      host: `${config.server.host}:${config.server.port}`,
      schemes: [config.server.port === 443 ? 'https' : 'http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });
};

export const swaggerPlugin = fp(swaggerAuto);
