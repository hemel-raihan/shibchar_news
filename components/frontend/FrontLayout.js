
import Header from '../admin/Header';
import Navbar from './Navbar';
import TopBar from './TopBar';
import FrontFooter from './FrontFooter';
import RightSidebar from './RightSidebar';


const FrontLayout=({children} )=> {

  return (
    <>
        <div className="stretched">

          <div id="wrapper" className="clearfix">

               {/* <Navbar /> */}
               <TopBar />

            <section id="content">
              <div className="content-wrap">
                <div className="container clearfix">
                    <div className="row gutter-40 col-mb-80" style={{marginTop: '30px'}}>
                        <div className="postcontent col-lg-9">
                            {children}
                        </div>
                        <div className="sidebar col-lg-3">
                          <RightSidebar />
                        </div>
                    </div>
                </div>
              </div>
            </section>

            <FrontFooter />

          </div>

          <div id="gotoTop" className="icon-angle-up"></div>


          </div>

    </>
  );
}

export default FrontLayout;
