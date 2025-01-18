import {withTamagui as tamagui} from '@tamagui/next-plugin';

const withTamagui = tamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    disableExtraction: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {

}

export default withTamagui(nextConfig);