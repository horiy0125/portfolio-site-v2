import devEnvironment from './development';
import prdEnvironment from './production';
import environments from '~/constants/config/environments';
import EnvVariables from '~/types/config/env-variable';

const GET_ENV_VARIABLES = (): EnvVariables => {
  const NODE_ENV = process.env.NODE_ENV;

  if (NODE_ENV === environments.development) {
    return devEnvironment;
  }
  return prdEnvironment;
};

export default GET_ENV_VARIABLES;
