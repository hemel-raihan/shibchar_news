
import Header from '../admin/Header';
import Navbar from './Navbar';
import FrontFooter from './FrontFooter';


const FrontLayout=({children} )=> {

  return (
    <>
        <div className="stretched">

          <div id="wrapper" className="clearfix">

               <Navbar />

            <section id="content">
              <div className="content-wrap">

                  {children}

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
