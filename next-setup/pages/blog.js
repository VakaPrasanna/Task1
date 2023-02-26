import Head from 'next/head'
import BlogScripts from "../components/BlogScripts";
import BlogStyles from '../components/BlogStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <BlogStyles />
      </Head>
      <Header />
{/* Put Page Level Content Here */}
      <Footer />
      <BlogScripts />
    </>

  )
}