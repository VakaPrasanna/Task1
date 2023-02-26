import Head from 'next/head'
import CommonScripts from "../components/CommonScripts";
import CommonStyles from '../components/CommonStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Follow a good structure for your code
// Paragraphs should use <p>, not a heading tag
// Headings should use <h1> to <h6>, whatever is appropriate
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      {/* Put Page Level Content Here */}
      <Footer />
      <CommonScripts />
    </>

  )
}
