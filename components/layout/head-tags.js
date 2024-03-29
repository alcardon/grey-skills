import Head from "next/Head";

export default function HeadTags() {
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        name="description"
        content="Grey is a Web3 skills verification protocol bridging learning and application tied to a digital identity that grows in reputational value with learning and work experiences"
      />
      <meta name="author" content="Grey Skills" />
      <meta name="author" content="Grey Skills" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="Grey Skills" />
      <meta name="twitter:site" content="Grey Skills" />
      <meta name="twitter:creator" content="Grey Skills" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:site_name" content="Grey Skills" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/card.png" />
      <title>Grey Skills | App prototype</title>
    </Head>
  );
}
