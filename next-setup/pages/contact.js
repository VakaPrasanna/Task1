import Head from 'next/head'
import CommonScripts from "../components/CommonScripts";
import CommonStyles from '../components/CommonStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Contact() {
  return (<><Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contact Us & Calculate Rates</title>
    <meta name="description" content="" />
    <CommonStyles />
  </Head>
    <Header />
    {/* Put Page Level Content Here */}
    <Footer />
    <CommonScripts />
  </>)
}