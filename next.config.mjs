import {withTamagui as tamagui} from '@tamagui/next-plugin';
import withPlugins from 'next-compose-plugins';
import {withExpo} from '@expo/next-adapter';
import transpileModule from "next-transpile-modules";

const withTamagui = tamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    disableExtraction: process.env.NODE_ENV === 'development',
});

const withTranspileModules = transpileModule([
    'solito',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {

}

export default withPlugins([
    withTranspileModules,
    withExpo,
    withTamagui,
], nextConfig);