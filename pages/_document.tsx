import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ServerStyleSheets} from "@mui/styles";
import {ComponentsEnhancer, RenderPageResult} from "next/dist/shared/lib/utils";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try{
            ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => originalRenderPage({
                enhanceApp: App => (props) => sheet.collect(<App {...props}/>)
            });

            const initialProps = await Document.getInitialProps(ctx);
            return { ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            ctx.renderPage(sheet as ComponentsEnhancer | undefined)
        }

    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" type="image/png" href="../static/favicon.ico"/>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                <Main />
                <NextScript />
                </body>
            </Html>
        )}
}

export default MyDocument;
