import config from '../../core/config';
import got from 'got';
import { mattermostTxtFormatter } from './mattermost-txt-formatter';

function defaultSuccessWebhookReply(reply) {
  reply.type('application/json').send({ statusCode: 200, result: 'success' });
}

function failureWebhookReply(reply, message) {
  // return a simple error when processing the request
  reply.type('application/json').send(new Error(message));
}

function getRequestMimeType(request) {
  return request.headers['content-type'];
}

function isMimeTypeJSON(req) {
  // tell the MIME Type of the inpout data: true if it's json, false otherwise
  const reqMimeType = getRequestMimeType(req);
  if (!reqMimeType || reqMimeType !== 'application/json') {
    return false;
  }
  return true;
}

function generateMattermostPayload(txt) {

}

export function sonarqubeHandler(request, reply) {
  if (!isMimeTypeJSON(request)) {
    failureWebhookReply(
      reply,
      `Missing or wrong input MIME Type: "${getRequestMimeType(request)}"`,
    );
    return;
  }
  const payload = generateMattermostPayload(
    mattermostTxtFormatter(request.body),
  );
  const mattermostReply = got
    .post(config.mattermostWebhook, { json: { payload } })
    .json();
  console.log(JSON.stringify(mattermostReply));
  defaultSuccessWebhookReply(reply);
}
