import environments from '~/config/environments';
import EnvVariables from '~/types/config/env-variable';

const prdEnvironment: EnvVariables = {
  NODE_ENV: environments.production,
};

export default prdEnvironment;
