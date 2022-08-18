import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify';

export const healthRoutes: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  const getHealthRtOpts: RouteShorthandOptions = {
    schema: {
      tags: ['Health'],
      description: 'Get Server Status Information',
      response: {
        200: {
          description: 'Success Response',
          type: 'object',
          properties: {
            msg: { type: 'string' },
          },
        },
      },
    },
  };
  fastify.get('/health', getHealthRtOpts, async (request, reply) => {
    reply.send({ msg: 'The Application is Up and Running' });
  });
};
