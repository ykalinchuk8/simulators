/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_API_URL: string
    readonly VITE_SIMULATOR_TO_BUILD: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}