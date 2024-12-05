/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignUp } from "@dropins/storefront-auth/containers/SignUp.js";
import { render as authRenderer } from "@dropins/storefront-auth/render.js";
import { checkIsAuthenticated } from "../../scripts/configs.js";
import {
  CUSTOMER_ACCOUNT_PATH,
  CUSTOMER_LOGIN_PATH,
} from "../../scripts/constants.js";

import { overrideGQLOperations } from "@dropins/build-tools/gql-extend.js";

// Initialize
import "../../scripts/initializers/auth.js";

overrideGQLOperations([
  {
    npm: "@dropins/storefront-auth",
    operations: [
      `
    fragment CustomerInformation on Customer {
      __typename
      firstname
      lastname
      prefix
      email
      is_subscribed
    }
`,
    ],
  },
]);

export default async function decorate(block) {
  if (checkIsAuthenticated()) {
    window.location.href = CUSTOMER_ACCOUNT_PATH;
  } else {
    await authRenderer.render(SignUp, {
      hideCloseBtnOnEmailConfirmation: true,
      routeSignIn: () => CUSTOMER_LOGIN_PATH,
      routeRedirectOnSignIn: () => CUSTOMER_ACCOUNT_PATH,
    })(block);
  }
}
