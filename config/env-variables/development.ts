import environments from '~/config/environments';
import EnvVariables from '~/types/config/env-variable';

const devEnvironment: EnvVariables = {
  NODE_ENV: environments.development,
};

export default devEnvironment;
