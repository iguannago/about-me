/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ABOUT_ME_BACKEND_HOSTNAME: string;
  // add other environment variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
