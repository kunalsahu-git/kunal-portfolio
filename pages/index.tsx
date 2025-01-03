import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kunal - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="kunal sahu" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Kunal - Full Stack Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Kunal - Full Stack Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Kunal - Full Stack Developer"/>
        <meta data-rh="true" property="og:image" content="/images/kunal-profile.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;