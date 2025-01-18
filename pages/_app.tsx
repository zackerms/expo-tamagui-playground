import "@tamagui/core/reset.css"

import { AppProps } from "next/app"
import React from "react"
import { AppToastProvider } from "components/AppToastProvider"
import { TamaguiProvider } from "@tamagui/core"
import { tamaguiConfig } from "tamagui.config"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppToastProvider>
            <TamaguiProvider config={tamaguiConfig} disableInjectCSS>
                <Component {...pageProps} />
            </TamaguiProvider>
        </AppToastProvider>
    )
}
