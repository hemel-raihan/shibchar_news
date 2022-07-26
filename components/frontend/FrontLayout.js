
import Header from '../admin/Header';


const FrontLayout=({children} )=> {


  return (
    <>
        <div className="app sidebar-mini">
        <div className="page">
            <div className="page-main">
                <Header />
                {children}
            </div>
        </div>
        </div>

    </>
  );
}

export default FrontLayout;
