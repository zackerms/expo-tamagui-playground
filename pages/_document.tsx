import NextDocument, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document"

import { tamaguiConfig } from "tamagui.config"

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: tamaguiConfig.getCSS(),
                        }}
                    />
                </>
            ),
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta id="theme-color" name="theme-color" />
                    <meta name="color-scheme" content="light dark" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
