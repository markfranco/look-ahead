import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  api: 'https://look-ahead.herokuapp.com'
};

export = ProdConfig;

