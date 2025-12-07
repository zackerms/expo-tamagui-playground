import "@tamagui/core/reset.css"

import { AppProps } from "next/app"
import React, { useMemo } from "react"
import { AppToastProvider } from "components/AppToastProvider"
import { TamaguiProvider } from "@tamagui/core"
import { tamaguiConfig } from "tamagui.config"

export default function App({ Component, pageProps }: AppProps) {
    const contents = useMemo(() => {
        return <Component {...pageProps} />
    }, []);

    return (
        <TamaguiProvider config={tamaguiConfig} disableInjectCSS>
            <AppToastProvider>
                {contents}
            </AppToastProvider>
        </TamaguiProvider>
    )
}
