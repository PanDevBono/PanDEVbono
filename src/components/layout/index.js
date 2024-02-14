import Head from 'next/head';
import NavBar from '../navbar/index';
import Footer from '../footer/index';
import HeadStrings from '../../strings/head';

export default function Layout({ children, pageId }) {
  return (
    <>
      <Head>
        {/* <link href='https://fonts.googleapis.com/css?family=Inria Sans' rel='stylesheet' /> */}
        <link rel="icon" href="/bono-small.png" sizes="any" />
        <title>{HeadStrings[pageId].title}</title>
        <meta property="og:title" content={HeadStrings[pageId].title} />
        <meta property="og:description" content={HeadStrings[pageId].description} />
        <meta property="og:image" content="/logo-500.png" />
      </Head>
      <NavBar></NavBar>
      <div className='bg-gray-200 py-10'>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
