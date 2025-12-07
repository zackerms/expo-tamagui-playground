import {withTamagui as tamagui} from '@tamagui/next-plugin';
import withPlugins from 'next-compose-plugins';
import transpileModule from "next-transpile-modules";

const withTamagui = tamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    disableExtraction: process.env.NODE_ENV === 'development',
});

// https://solito.dev/install#nextjs-setup
const withTranspileModules = transpileModule([
    'solito',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    // https://docs.expo.dev/guides/using-nextjs/#transpiling-modules
    transpilePackages: [
        "react-native",
        "react-native-web",
        "expo",
    ],
}

export default withPlugins([
    // transpilePackages
    // Cannot react undefinedというエラーが発生する
    withTranspileModules,
    withTamagui,
], nextConfig);