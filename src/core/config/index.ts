import development from './envs/development';
import production from './envs/production';

export type ConfigType = typeof development & typeof production;

const configs = { development, production };

export default configs[process.env.NODE_ENV || 'development'] as ConfigType;
