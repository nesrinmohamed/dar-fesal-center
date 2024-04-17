// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,

    app: {
        // pageTransition: {name: "page", mode: "out-in"},
        head: {
            titleTemplate: "%s - مركز الملك فيصل",
            title: "مركز الملك فيصل",
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: "Dar Fesal Center "},
                {name: "format-detection", content: "telephone=no"},
                {name: "google", content: "notranslate"},
            ],
        },

        baseURL: "/",
    },
    build: {
        transpile: ["vuetify"],
    },
    css: ["./assets/sass/main.css"],
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @use "@/assets/sass/abstracts" as *;
            @use "@/assets/sass/global" as *;
          `,
                },
            },
        },
    },

    modules: ["@pinia/nuxt", "@nuxtjs/i18n", "vuetify-nuxt-module"],
    plugins: ["~/plugins/axios.js"],
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            icons: {
                defaultSet: "mdi",
                sets: [
                    {
                        name: "mdi",
                        cdn: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons",
                    },
                ],
            },
            theme: {
                defaultTheme: "light",
                themes: {
                    light: {
                        colors: {
                            background: "#fff",
                            error: "#e5342f",
                            "loding-color": "#00adc4",
                            "background-dark": "#1e5061",
                            primary: "#80a3a7",
                            "primary-bg": "#E9EEEF",
                            "primary-50": "#e6f3f0",
                            "primary-65": "#80D2C3",
                            "primary-75": "#97cdc2",
                            "primary-100": "#6cb9a8",
                            "primary-200": "#2d9b83",
                            "primary-300": "#028669",
                            "primary-400": "#015e4a",
                            "primary-500": "#015240",
                            "primary-dark": "#0D2F42",
                            "primary-grey-color": "#9aa1a3",
                            // =========SECONDARY========

                            "secondary-500": "#00a587",
                            "secondary-bg": "#393939",

                            "secondary-20": "#ccede7",
                            "secondary-50": "#e9eeef",
                            "secondary-75": "#a3b7be",
                            "secondary-100": "#7d9aa3",
                            "secondary-200": "#446e7c",
                            "secondary-300": "#1e5061",
                            "secondary-400": "#153844",
                            "secondary-600": "#444444",
                            // 'secondary-500': '#12313b',

                            // ======NETURAL =========
                            N50: "#e6e8e9",
                            N75: "#9aa1a3",
                            N100: "#707a7d",
                            N200: "#324044",
                            N300: "#08191e",
                            N400: "#061215",
                            N500: "#050f12",
                            N600: "#8C8C8C",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00",
                            // error: "#B00020",
                            "main-text-color-lighten": "#cbcbcb",
                            "main-color": "#5F5E5E",
                            "main-text-color-darken": "#6c6c6c",
                        },
                    },
                    dark: {
                        colors: {
                            background: "#fff",
                            "loding-color": "#00adc4",
                            "background-dark": "#1e5061",
                            primary: "#80a3a7",
                            "primary-50": "#e6f3f0",
                            "primary-65": "#80d2c3",
                            "primary-75": "#97cdc2",
                            "primary-100": "#6cb9a8",
                            "primary-200": "#2d9b83",
                            "primary-300": "#028669",
                            "primary-400": "#015e4a",
                            "primary-500": "#015240",
                            // =========SECONDARY========

                            "secondary-500": "#00a587",
                            "secondary-bg": "#393939",

                            "secondary-50": "#e9eeef",
                            "secondary-75": "#a3b7be",
                            "secondary-100": "#7d9aa3",
                            "secondary-200": "#446e7c",
                            "secondary-300": "#1e5061",
                            "secondary-400": "#153844",
                            "secondary-600": "#444444",
                            // 'secondary-500': '#12313b',

                            // ======NETURAL =========
                            N50: "#e6e8e9",
                            N75: "#9aa1a3",
                            N100: "#707a7d",
                            N200: "#324044",
                            N300: "#08191e",
                            N400: "#061215",
                            N500: "#050f12",
                            N600: "#8C8C8C",
                            info: "#2196F3",
                            success: "#4CAF50",
                            warning: "#FB8C00",
                            error: "#B00020",
                            "main-text-color-lighten": "#cbcbcb",
                            "main-color": "#5F5E5E",
                            "main-text-color-darken": "#6c6c6c",
                        },
                    },
                },
            },
        },
    },

    i18n: {
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        strategy: "prefix",
        dynamicRouteParams: true,
        // skipSettingLocaleOnNavigate: true,
        // Vue configuration file, you can move it to the root folder
        // vueI18n: './config/i18n.config.ts',
        locales: [
            {
                code: "ar",
                iso: "ar",
                file: "ar.json",
                name: "العربية",
                dir: "rtl",
            },
            {
                code: "en",
                iso: "en-US",
                name: "English",
                dir: "ltr",
                file: "en.json",
            },
            {
                code: "zhHant",
                iso: "zh-Hant",
                name: "正體中文",
                dir: "ltr",
                file: "zhHant.json",
            },
            // Add more locales as needed
        ],
    },
    imports: {
        dirs: ["stores"],
    },
    pinia: {
        autoImports: ["defineStore"],
    },
});
