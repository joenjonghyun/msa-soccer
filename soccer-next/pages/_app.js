import {Layout} from "common";

export default function MyApp({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}