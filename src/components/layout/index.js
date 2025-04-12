import Head from 'next/head';
import NavBar from '../navbar/index';
import Footer from '../footer/index';
import HeadStrings from '../../strings/head';

export default function Layout({ children, pageId }) {
  return (
    <>
      <Head>
        {/* <link href='https://fonts.googleapis.com/css?family=Inria Sans' rel='stylesheet' /> */}
        <link rel="icon" href="/img/bono-small.png" sizes="any" />
        <title>{HeadStrings[pageId].title}</title>
        <meta property="og:title" content={HeadStrings[pageId].title} />
        <meta property="og:description" content={HeadStrings[pageId].description} />
        <meta property="og:image" content="/logo-horizontal.png" />
      </Head>
      <NavBar></NavBar>
      <div>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
