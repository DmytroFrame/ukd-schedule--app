/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SOURCE_LINK: string;
  readonly VITE_CHAT_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const BUILD_DATE: string;
