import { app } from './app';

(async function () {
  const fastify = await app();
  await fastify.ready();
  fastify.listen({ port: 8080, host: '::' }, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
})();
