import userAgents from '~/constants/user-agents';

const getUserAgent = (): string | null => {
  const ua = navigator.userAgent;

  if (ua.includes('iPhone')) {
    return userAgents.iphone;
  } else if (ua.includes('iPad')) {
    return userAgents.ipad;
  } else if (ua.includes('Android')) {
    return userAgents.android;
  } else if (ua.includes('Windows')) {
    return userAgents.windows;
  } else if (ua.includes('Mac OS')) {
    return userAgents.macos;
  } else {
    return null;
  }
};

export default getUserAgent;
