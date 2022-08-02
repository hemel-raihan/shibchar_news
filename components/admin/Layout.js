
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import Head from 'next/head'
import Script from 'next/script'

const Layout=({children} )=> {


  return (
    <>
    <Head>
        <title>Admin Dashboard</title>
        <link href="/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet"/>
        <link href="/assets/css/dark-style.css" rel="stylesheet"/>
        <link href="/assets/css/skin-modes.css" rel="stylesheet" />

        <link href="/assets/plugins/charts-c3/c3-chart.css" rel="stylesheet"/>

        <link href="/assets/css/sidemenu.css" rel="stylesheet" id="sidemenu-theme" />

        <link href="/assets/plugins/p-scroll/perfect-scrollbar.css" rel="stylesheet" />

        <link href="/assets/plugins/icons/icons.css" rel="stylesheet"/>

        <link href="/assets/plugins/sidebar/sidebar.css" rel="stylesheet"/>

        <link id="theme" rel="stylesheet" type="text/css" media="all" href="/assets/colors/color1.css"/>

        <link rel="stylesheet" href="/assets/plugins/jQuerytransfer/jquery.transfer.css" />
		    <link rel="stylesheet" href="/assets/plugins/jQuerytransfer/icon_font/icon_font.css" />
   </Head>

   {/* <Script
        src="/assets/plugins/jquery/jquery.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/bootstrap/js/popper.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/bootstrap/js/bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/input-mask/jquery.mask.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/sidemenu/sidemenu.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/sidebar/sidebar.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/p-scroll/perfect-scrollbar.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/p-scroll/pscroll.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`pscrol script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/p-scroll/pscroll-1.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Script
        src="/assets/plugins/jQuerytransfer/jquery.transfer.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    /> */}

        <div className="app sidebar-mini">
          <div className="page">
              <div className="page-main">
                  <LeftSidebar />
                  <Header />
                  <div className="app-content">
                      <div className="side-app">
                          {children}
                      </div>
                  </div>
              </div>
              <RightSidebar />
              <Footer />
          </div>
        </div>

    </>
  );
}

export default Layout;
