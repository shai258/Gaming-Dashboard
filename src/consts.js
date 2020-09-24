const OKTA_DOMAIN = 'dev-826941.okta.com';
const CLIENT_ID = '0oa11i5hfjZwNYthm4x7';
const CALLBACK_PATH = '/implicit/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
const SCOPES = 'openid profile email';

const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scope: SCOPES.split(/\s+/),
  pkce: true
};

export default config;