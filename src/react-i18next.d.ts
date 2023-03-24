// import any new react-i18next namespaces into this file so our t function can be fully typed

// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import homepage from "./i18n/en/homepage.json";
import session from "./i18n/en/session.json";

declare module "react-i18next" {
  // and extend them!
  interface Resources {
    homepage: typeof homepage;
    session: typeof session;
  }
}
