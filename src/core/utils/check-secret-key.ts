import crypto from 'crypto';
import config from '../../core/config';

export default function checkSecretKey(request, reply, done) {
  const webhookSecretKey = process.env.SECRET_KEY || 'my example Secret Key';
  const webhookSecretHmac = crypto.createHmac('sha256', webhookSecretKey);
  const hmac = webhookSecretHmac
    .update(JSON.stringify(request.body))
    .digest('hex');
  if (
    request.headers['content-type'] !== 'application/json' ||
    request.headers[config.sonarqubeSecretHeaderField] !== hmac
  ) {
    reply
      .code(403)
      .type('application/json')
      .send(new Error('Missing or wrong secret key'));
  }
  done();
}
