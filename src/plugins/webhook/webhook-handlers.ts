import config from '../../core/config';

function defaultSuccessWebhookReply(reply) {
  reply.type('application/json').send({ statusCode: 200, result: 'success' });
}

export function sonarqubeHandler(request, reply) {
  defaultSuccessWebhookReply(reply);
}
