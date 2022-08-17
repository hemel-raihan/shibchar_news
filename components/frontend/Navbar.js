import Link from "next/link";
import useFetch from '../../hooks/useFetch';
import NavChild from './NavChild';

export default function Navbar() {
  
    const {data, loading, error} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/home/categories`)

  return (
    <>
      <header id="header" className="header-size-sm" data-sticky-shrink="false">
    <div className="container">
        <div className="header-row flex-column flex-lg-row justify-content-center justify-content-lg-start">

            <div id="logo" className="me-0 me-lg-auto">
                <Link href="/"><a className="standard-logo" data-dark-logo="/assets/frontend/logo.png"><img src="/assets/frontend/logo.png" alt="Canvas Logo" /></a></Link>
                <Link href="/"><a className="retina-logo" data-dark-logo="/assets/frontend/logo.png"><img src="/assets/frontend/logo.png" alt="Canvas Logo" /></a></Link>
            </div>

            <div className="header-misc mb-4 mb-lg-0 d-none d-lg-flex">

                <div className="top-advert">
                    <img src="images/magazine/ad.jpg" alt="Ad" />
                </div>

            </div>

        </div>
    </div>

    <div id="header-wrap" className="border-top border-f5">
        <div className="container">
            <div className="header-row justify-content-between">

                <div className="header-misc">

                    <div id="top-search" className="header-misc-icon">
                        <a href="#" id="top-search-trigger"><i className="icon-line-search"></i><i className="icon-line-cross"></i></a>
                    </div>

                </div>

                <div id="primary-menu-trigger">
                    <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                </div>

                <nav className="primary-menu">

                    <ul className="menu-container">
                        {data.map((item, index)=>(
                            <li key={index} className="menu-item">
                                <Link href={`/${item.slug}`}><a className="menu-link"><div>{item.name}</div></a></Link>
                                {item?.childs?.length != 0 && (
                                    <NavChild item={item} />
                                )}
                            </li>
                        ))}
                    </ul>

                </nav>

                <form className="top-search-form" action="search.html" method="get">
                    <input type="text" name="q" className="form-control" value="" placeholder="Type &amp; Hit Enter.." />
                </form>

            </div>

        </div>
    </div>
    <div className="header-wrap-clone"></div>
</header>

    </>
  );
}
