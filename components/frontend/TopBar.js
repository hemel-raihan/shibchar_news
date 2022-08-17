import Link from "next/link";
import useFetch from '../../hooks/useFetch';
import NavChild from './NavChild';
import moment from 'moment';

export default function TopBar() {
  
    const {data, loading, error} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/home/categories`)

    // var day = moment().format('dddd, Do-MMMM-YYYY, h:mm:ss a')
    // var en_days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    // var bn_days = ['শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার'];
    // var date = day.replace(en_days, bn_days);

  return (
    <>
    <header id="header" className="header-size-sm" data-sticky-shrink="false">
    <div className="container">
        <div className="header-row flex-column flex-lg-row justify-content-center justify-content-lg-start">


                <div className="left_date">
                    {/* @php
                        use Carbon\Carbon;
                        $date = Carbon::now();
                        $day = $date->format('l');
                        $en_days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                        $bn_days = ['শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার'];
                        $date = str_replace($en_days, $bn_days, $day);
                    @endphp */}
                        <i className="icon-stopwatch1"></i> <b>{moment().format('dddd, Do-MMMM-YYYY')}</b>
                </div>
                {/* <style>
                    .left_date {
                        text-align: center;
                        margin-top: 5px;
                        color: #000;
                        font-weight: 700;
                    }
                </style> */}
            
            <div id="logo" className="me-0 me-lg-auto" style={{marginLeft: '22%'}}>
                
                <div style={{textAlign: 'center'}}>
                    <Link href="/"><a className="standard-logo" data-dark-logo="/assets/frontend/logo.png"><img src="/assets/frontend/logo.png" alt="Canvas Logo" /></a></Link>
                </div>
                
                 <Link href="/"><a className="retina-logo" data-dark-logo="/assets/frontend/logo.png"><img src="/assets/frontend/logo.png" alt="Canvas Logo" /></a></Link>   
               
               
            </div>

            <div id="social_icon">
                         <small style={{display: 'block', textAlign: 'center'}}><strong>Follow us on</strong></small>
                         <a href="{{$logo->facebook_link}}" className="social-icon si-small si-borderless si-facebook">
                            <i className="icon-facebook"></i>
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-borderless si-twitter">
                            <i className="icon-twitter"></i>
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-borderless si-instagram">
                            <i className="icon-instagram"></i>
                            <i className="icon-instagram"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-borderless si-linkedin ">
                            <i className="icon-linkedin"></i>
                            <i className="icon-linkedin"></i>
                        </a>
                        <a href="#" className="social-icon si-small si-borderless si-youtube">
                            <i className="icon-youtube"></i>
                            <i className="icon-youtube"></i>
                        </a>
            </div>
                
         
        </div>
    </div>

    <div id="header-wrap" className="border-top border-f5">
        <div className="container">
            <div className="header-row justify-content-between">

                <div className="header-misc">

                   
                    <div id="top-search" className="header-misc-icon">
                        <div className="row">
                            <div className="col-sm-6" style={{marginBottom: '25px'}}>
                                <a href="#" id="top-search-trigger"><i  className="icon-line-search"></i></a>
                            </div>
                            <div className="col-sm-6" style={{marginBottom: '25px'}}>
                                <a href="#" id="top-search-trigger"><i id="search_cross" className="icon-line-cross"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="top_date" id="top_date" style={{display: 'none'}}>
                    {/* @php
                    $date = Carbon::now();
                    $day = $date->format('l');
                     $en_days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
                     $bn_days = ['শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার'];

                            $date = str_replace($en_days, $bn_days, $day);
                    @endphp */}
                    {/* {{$date .'  '. bangla_date(time(),"en","d-m-y")}} */}
                </div>
                {/* <style>
                    .top_date {
                        text-align: center;
                        margin-top: 5px;
                        color: #fff;
                        font-weight: 700;
                    }
                </style> */}

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
</header>
    </>
  );
}
