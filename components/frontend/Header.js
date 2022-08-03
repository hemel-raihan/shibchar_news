
import Head from 'next/head'
import Script from 'next/script'

export default function Header({title}) {
  

  return (
    <>
    <Head>
        <title>Shibchar - {title}</title>
        {/* <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/style.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/dark.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/font-icons.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/animate.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="/assets/frontend/css/custom.css" type="text/css" /> */}
   </Head>

   <Script
        src="/assets/frontend/js/jquery.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/frontend/js/plugins.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/frontend/js/functions.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    </>
  );
}
