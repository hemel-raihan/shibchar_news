
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';


const Layout=({children} )=> {


  return (
    <>
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
