import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/bono-small.png" fetchpriority="high" />
        <link rel="shortcut icon" href="/img/bono-small.png" fetchpriority="high" />
        <link rel="apple-touch-icon" href="/img/bono-small.png" fetchpriority="high" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
