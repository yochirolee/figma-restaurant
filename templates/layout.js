import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          alt="true"
        />
        ;
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}
