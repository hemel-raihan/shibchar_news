import Link from "next/link";


export default function RightSidebar() {
  

  return (
    <>
      <div className="sidebar-widgets-wrap">

        {/* <div className="widget clearfix">
            <div className="row gutter-20 col-mb-30">
                <div className="col-4">
                    <a href="#" className="social-icon si-dark si-colored si-facebook mb-0" style={{marginRight: '10px'}}>
                        <i className="icon-facebook"></i>
                        <i className="icon-facebook"></i>
                    </a>
                    <div className="counter counter-inherit d-inline-block text-smaller"><span className="d-block fw-bold" data-from="1000" data-to="58742" data-refresh-interval="100" data-speed="3000" data-comma="true"></span><small>Likes</small></div>
                </div>

                <div className="col-4">
                    <a href="#" className="social-icon si-dark si-colored si-twitter mb-0" style={{marginRight: '10px'}}>
                        <i className="icon-twitter"></i>
                        <i className="icon-twitter"></i>
                    </a>
                    <div className="counter counter-inherit d-inline-block text-smaller"><span className="d-block fw-bold" data-from="500" data-to="9654" data-refresh-interval="50" data-speed="2500" data-comma="true"></span><small>Followers</small></div>
                </div>

                <div className="col-4">
                    <a href="#" className="social-icon si-dark si-colored si-rss mb-0" style={{marginRight: '10px'}}>
                        <i className="icon-rss"></i>
                        <i className="icon-rss"></i>
                    </a>
                    <div className="counter counter-inherit d-inline-block text-smaller"><span className="d-block fw-bold" data-from="200" data-to="15475" data-refresh-interval="150" data-speed="3500" data-comma="true"></span><small>Readers</small></div>
                </div>
            </div>
        </div> */}

        {/* <div className="widget clearfix">

            <img className="aligncenter" src="images/magazine/ad.png" alt="Image" />

        </div> */}

        <div className="widget widget_links clearfix">

            <h4>Categories</h4>

            <div className="row col-mb-50">
                <div className="col-ms-6">
                    <ul>
                        <li><a href="#">World</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Politics</a></li>
                        <li><a href="#">Business</a></li>
                    </ul>
                </div>
                <div className="col-ms-6">
                    <ul>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Cricket</a></li>
                        <li><a href="#">Football</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Nature</a></li>
                    </ul>
                </div>
            </div>

        </div>

        <div className="widget clearfix">

            <h4>Twitter Feed Scroller</h4>
            <div className="fslider customjs testimonial twitter-scroll twitter-feed" data-username="envato" data-count="3" data-animation="slide" data-arrows="false">
                <i className="i-plain i-small color icon-twitter mb-0" style={{marginRight: '15px'}}></i>
                <div className="flexslider" style={{width: 'auto'}}>
                    <div className="slider-wrap">
                        <div className="slide"></div>
                    </div>
                </div>
            </div>

        </div>

        <div className="widget clearfix">

            <h4>Flickr Photostream</h4>
            <div id="flickr-widget" className="flickr-feed masonry-thumbs grid-container grid-5" data-id="613394@N22" data-count="15" data-type="group" data-lightbox="gallery"></div>

        </div>

        <div className="widget clearfix">

            <div className="tabs mb-0 clearfix" id="sidebar-tabs">

                <ul className="tab-nav clearfix">
                    <li><a href="#tabs-1">Popular</a></li>
                    <li><a href="#tabs-2">Recent</a></li>
                    <li><a href="#tabs-3"><i className="icon-comments-alt me-0"></i></a></li>
                </ul>

                <div className="tab-container">

                    <div className="tab-content clearfix" id="tabs-1">
                        <div className="posts-sm row col-mb-30" id="popular-post-list-sidebar">
                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/3.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-comments-alt"></i> 35 Comments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/2.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-comments-alt"></i> 24 Comments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/1.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-comments-alt"></i> 19 Comments</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content clearfix" id="tabs-2">
                        <div className="posts-sm row col-mb-30" id="recent-post-list-sidebar">
                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/1.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>10th July 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/2.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>10th July 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/magazine/small/3.jpg" alt="Image" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <div className="entry-title">
                                            <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>10th July 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content clearfix" id="tabs-3">
                        <div className="posts-sm row col-mb-30" id="recent-comments-list-sidebar">
                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/icons/avatar.jpg" alt="User Avatar" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <strong>John Doe:</strong> Veritatis recusandae sunt repellat distinctio...
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/icons/avatar.jpg" alt="User Avatar" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <strong>Mary Jane:</strong> Possimus libero, earum officia architecto maiores....
                                    </div>
                                </div>
                            </div>

                            <div className="entry col-12">
                                <div className="grid-inner row g-0">
                                    <div className="col-auto">
                                        <div className="entry-image">
                                            <a href="#"><picture><img className="rounded-circle" src="images/icons/avatar.jpg" alt="User Avatar" /></picture></a>
                                        </div>
                                    </div>
                                    <div className="col ps-3">
                                        <strong>Site Admin:</strong> Deleniti magni labore laboriosam odio...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div className="widget clearfix">

            <picture><img className="aligncenter" src="images/magazine/ad.png" alt="Image" /></picture>

        </div>

        <div className="widget clearfix">
            <iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FEnvato&amp;width=240&amp;height=240&amp;colorscheme=light&amp;show_faces=true&amp;header=true&amp;stream=false&amp;show_border=true&amp;appId=499481203443583" style={{border:'none', overflow:'hidden', width:'240px', height:'240px'}}></iframe>
        </div>

        </div>
    </>
  );
}
