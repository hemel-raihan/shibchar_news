
import FrontLayout from '../components/frontend/FrontLayout';
import Header from '../components/frontend/Header';
import useFetch from '../hooks/useFetch';
import moment from 'moment';
import Link from "next/link";

export default function Home() {

    const {data, loading, error} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/home/categories/posts`)
//console.log(data.data?.posts)
  return (
    <>
    <Header title={'Home'} />

    {/* <section id="content">
    <div className="content-wrap"> */}

        <div className="section header-stick bottommargin-lg py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-auto">
                        <div className="d-flex">
                            <span className="badge bg-danger text-uppercase col-auto">Breaking News</span>
                        </div>
                    </div>

                    <div className="col-lg mt-2 mt-lg-0">
                        <div className="fslider" data-speed="800" data-pause="6000" data-arrows="false" data-pagi="false" style={{minHeight: 0}}>
                            <div className="flexslider">
                                <div className="slider-wrap">
                                    <div className="slide"><a href="#"><strong>Russia hits back, says US acts like a bad surgeon..</strong></a></div>
                                    <div className="slide"><a href="#"><strong>Sulking Narayan Rane needs consolation: Uddhav reacts to Cong leaders attack..</strong></a></div>
                                    <div className="slide"><a href="#"><strong>Rane needs consolation. I pray to God that he gets mental peace in a political party..</strong></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="container clearfix"> */}

            {/* <div className="row gutter-40 col-mb-80"> */}
                {/* <div className="postcontent col-lg-9"> */}

                    {/* <div className="row mt-50 col-mb-50 mb-0">
                        <div className="col-md-12">
                            <div className="fslider flex-thumb-grid grid-6" data-speed="400" data-arrows="true" data-thumbs="true" data-easing="easeOutQuad">
                                <div className="flexslider">
                                    <div className="slider-wrap">
                                        <div className="slide" data-thumb="/assets/frontend/images/slider/2.jpg">
                                            <a href="#">
                                                <img src="/assets/frontend/images/slider/2.jpg" alt="Image" />
                                                <div className="bg-overlay">
                                                    <div className="bg-overlay-content text-overlay-mask desc-sm dark desc-sm align-items-end justify-content-start p-4">
                                                        <div className="portfolio-desc py-0">
                                                            <h3>Locked Steel Gate</h3>
                                                            <span>Illustrations</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="slide" data-thumb="/assets/frontend/images/slider/3.jpg">
                                            <a href="#">
                                                <img src="/assets/frontend/images/slider/3.jpg" alt="Image" />
                                                <div className="bg-overlay">
                                                    <div className="bg-overlay-content text-overlay-mask desc-sm dark desc-sm align-items-end justify-content-start p-4">
                                                        <div className="portfolio-desc py-0">
                                                            <h3>Russia hits back, says US acts like a 'bad surgeon'</h3>
                                                            <span><i className="icon-star3 me-1"></i><i className="icon-star3 me-1"></i><i className="icon-star3 me-1"></i><i className="icon-star-half-full me-1"></i><i className="icon-star-empty"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">

                            <div className="posts-sm row col-mb-30">
                                <div className="entry col-12">
                                    <div className="entry-title">
                                        <h4><a href="#">UK government weighs Tesla's Model S for its ??5 million electric vehicle fleet</a></h4>
                                    </div>
                                </div>

                                <div className="entry col-12">
                                    <div className="entry-title">
                                        <h4><a href="#">MIT's new robot glove can give you extra fingers</a></h4>
                                    </div>
                                </div>

                                <div className="entry col-12">
                                    <div className="entry-title">
                                        <h4><a href="#">You can now listen to headphones through your hoodie</a></h4>
                                    </div>
                                </div>

                                <div className="entry col-12">
                                    <div className="entry-title">
                                        <h4><a href="#">How would you change Kobos Aura HD e-reader?</a></h4>
                                    </div>
                                </div>

                                <div className="entry col-12">
                                    <div className="entry-title">
                                        <h4><a href="#">A Baseball Team Blew Up A Bunch Of Justin Bieber And Miley Cyrus Merch</a></h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}

                    <div className="row col-mb-50 mb-0">
                    {data?.data?.map((category, index)=>(
                        <>
                        {category?.posts?.length != 0 && (
                            <div key={index} className="col-12">
                            <div className="fancy-title title-border">
                                <h3>{category.name}</h3>
                            </div>

                            <div className="row posts-md col-mb-30">
                                {category?.posts.map((post, i)=>(
                                <div key={i} className="entry col-sm-6 col-md-4">
                                    <div className="grid-inner">
                                        <div className="entry-image">
                                            <a href="#"><img src={post.photo} alt="Image" /></a>
                                        </div>
                                        <div className="entry-title title-xs nott">
                                            <h3><Link href={`news/${post.slug}`}>
                                                   <a>{post.title}</a>
                                                </Link></h3>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-calendar3"></i>{moment(post.createdAt).format('Do MMMM YYYY')}</li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p className="mb-0">{post.desc.substring(0, 150)}</p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                       )}
                        </>
                        ))}
                        <div className="col-12">
                            <img src="images/magazine/ad.jpg" alt="Ad" className="aligncenter my-0" />
                        </div>

                        {/* <div className="col-12">

                            <div className="fancy-title title-border">
                                <h3>Entertainment</h3>
                            </div>

                            <div className="row posts-md col-mb-30">
                                <div className="entry col-sm-6 col-md-4">
                                    <div className="grid-inner">
                                        <div className="entry-image">
                                            <a href="#"><img src="images/magazine/thumb/13.jpg" alt="Image" /></a>
                                        </div>
                                        <div className="entry-title title-xs nott">
                                            <h3><a href="blog-single.html">MIT's new robot glove can give you extra fingers</a></h3>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-calendar3"></i> 22nd Jan 2013</li>
                                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 14</a></li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p className="mb-0">Magni impedit quae consectetur consequuntur adipisci veritatis modi a, officia cum.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="entry col-sm-6 col-md-4">
                                    <div className="grid-inner">
                                        <div className="entry-image">
                                            <a href="#"><img src="images/magazine/thumb/3.jpg" alt="Image" /></a>
                                        </div>
                                        <div className="entry-title title-xs nott">
                                            <h3><a href="blog-single.html">Beyonce Dropped A '50 Shades Of Grey', Teaser On Instagram Last Night</a></h3>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-calendar3"></i> 19th Apr 2021</li>
                                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 55</a></li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p className="mb-0">Neque nesciunt molestias soluta esse debitis. Magni impedit quae consectetur consequuntur.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="entry col-sm-6 col-md-4">
                                    <div className="grid-inner">
                                        <div className="entry-image">
                                            <a href="#"><img src="images/magazine/thumb/4.jpg" alt="Image" /></a>
                                        </div>
                                        <div className="entry-title title-xs nott">
                                            <h3><a href="blog-single.html">A Baseball Team Blew Up A Bunch Of Justin Bieber And Miley Cyrus Merch</a></h3>
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="icon-calendar3"></i> 26th Apr 2021</li>
                                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 41</a></li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p className="mb-0">Eaque iusto quod assumenda beatae, nesciunt aliquid. Vel, eos eligendi emo perferendis dolorem voluptatem.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                    </div>

                    <div className="w-100"></div>

                    <div className="tabs mt-4" id="tab-news">

                        <ul className="tab-nav clearfix">
                            <li><a href="#tabs-news-1"><i className="icon-facetime-video mx-1"></i><span className="d-none d-md-inline-block ms-1"> Video News</span></a></li>
                            <li><a href="#tabs-news-2"><i className="icon-film mx-1"></i><span className="d-none d-md-inline-block ms-1"> Movie Reviews</span></a></li>
                            <li><a href="#tabs-news-3"><i className="icon-music2 mx-1"></i><span className="d-none d-md-inline-block ms-1"> Music</span></a></li>
                            <li><a href="#tabs-news-4"><i className="icon-bar-chart mx-1"></i><span className="d-none d-md-inline-block ms-1"> Opinion Polls</span></a></li>
                        </ul>

                        <div className="tab-container">

                            <div className="tab-content" id="tabs-news-1">

                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="posts-md">
                                            <div className="entry">
                                                <div className="entry-image">
                                                    <iframe src="//player.vimeo.com/video/97243508" width="500" height="281" allow="autoplay; fullscreen"></iframe>
                                                </div>
                                                <div className="entry-title title-sm">
                                                    <h3><a href="blog-single.html">Foreign advisors killed in Kabul blast</a></h3>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-calendar3"></i> 10th Feb 2021</li>
                                                        <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 13</a></li>
                                                        <li><i className="icon-eye-open"></i> 6422 Views</li>
                                                    </ul>
                                                </div>
                                                <div className="entry-content">
                                                    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus. Dolores pariatur rem assumenda labore eligendi explicabo dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">

                                        <div className="posts-sm row col-mb-30">
                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">UK government weighs Teslas Model S for its ??5 million electric vehicle fleet</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">MITs new robot glove can give you extra fingers</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Black boxes handed to Malaysia</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">MH17 forensic team face challenge</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Spain lifts file-sharing site blocks</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Body of fugitive South Korea ferry businessman found, police say</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">How would you change Kobos Aura HD e-reader?</a></h4>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">A Baseball Team Blew Up A Bunch Of Justin Bieber And Miley Cyrus Merch</a></h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="tab-content" id="tabs-news-2">

                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="posts-md">
                                            <div className="entry">
                                                <div className="entry-image">
                                                    <a href="#"><img src="images/magazine/17.jpg" alt="Image" /></a>
                                                </div>
                                                <div className="entry-title title-sm">
                                                    <h3><a href="blog-single.html">Review: Dallas Buyers Club</a></h3>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-calendar3"></i> 10th Feb 2021</li>
                                                        <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 13</a></li>
                                                        <li className="color"><i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star-half-full"></i></li>
                                                        <li><i className="icon-heart3 text-danger"></i> 95%</li>
                                                    </ul>
                                                </div>
                                                <div className="entry-content">
                                                    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Cupiditate quia nesciunt repellat animi amet magnam officiis!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">

                                        <div className="posts-sm row col-mb-30">
                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/3.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">The Purge: Anarchy</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-warning"></i> 54%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/4.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">Planes: Fire And Rescue</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-warning"></i> 45%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/5.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">Sex Tape</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-default"></i> 20%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/6.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">Transformers: Age of Extinction</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-default"></i> 17%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/7.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">How to Train Your Dragon 2</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-danger"></i> 90%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="grid-inner row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <div className="entry-image">
                                                            <a href="#"><img src="images/magazine/small/movie/8.jpg" alt="Image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col ps-3">
                                                        <div className="entry-title">
                                                            <h4><a href="#">Earth to Echo</a></h4>
                                                        </div>
                                                        <div className="entry-meta no-separator">
                                                            <ul>
                                                                <li className="text-dark"><i className="icon-star3"></i><i className="icon-star3"></i><i className="icon-star-half-full"></i><i className="icon-star-empty"></i><i className="icon-star-empty"></i></li>
                                                                <li><i className="icon-heart3 text-warning"></i> 48%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-content" id="tabs-news-3">

                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="posts-md">
                                            <div className="entry">
                                                <div className="entry-image">
                                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/278002889&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                                                </div>
                                                <div className="entry-title title-sm">
                                                    <h3><a href="blog-single.html">Afrojack vs Thirty Seconds To Mars - Do Or Die (Club Remix)</a></h3>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-calendar3"></i> 10th Feb 2021</li>
                                                        <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 13</a></li>
                                                        <li className="color"><i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star3"></i> <i className="icon-star-empty"></i></li>
                                                        <li><i className="icon-heart3 text-danger"></i> 85%</li>
                                                    </ul>
                                                </div>
                                                <div className="entry-content">
                                                    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Cupiditate quia nesciunt repellat animi amet magnam officiis!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">

                                        <div className="posts-sm row col-mb-30">
                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Thomas Jack Presents: Tropical House Vol.5</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-heart3 text-danger"></i> 92%</li>
                                                        <li>Thomas Jack</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Major Lazers Walshy Fire Presents: Jesse Royal - Royally Speaking</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-heart3 text-warning"></i> 54%</li>
                                                        <li>Major Lazer</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">The Weeknd - King Of The Fall</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-heart3 text-success"></i> 78%</li>
                                                        <li>The Weeknd-XO</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">No Flex Zone Remix Feat. Nicki Minaj</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-heart3 text-warning"></i> 45%</li>
                                                        <li>Nicki Minaj</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Mike Mago &amp; Dragonette - Outlines</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-heart3 text-primary"></i> 65%</li>
                                                        <li>Mike Mago</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="tab-content" id="tabs-news-4">

                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="posts-md">
                                            <div className="entry">
                                                <div className="entry-image">
                                                    <a href="#"><img src="images/magazine/18.jpg" alt="Image" /></a>
                                                </div>
                                                <div className="entry-title title-sm">
                                                    <h3><a href="blog-single.html">America Should Stay Out of Foreign Troubles?</a></h3>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-calendar3"></i> 5th July, 2021</li>
                                                        <li><i className="icon-thumbs-up text-success"></i> 69.3%</li>
                                                        <li><i className="icon-thumbs-down text-danger"></i> 31.7%</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">

                                        <div className="posts-sm row col-mb-30">
                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Who do you think is responsible for shooting down Malaysia Airlines flight MH17?</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><span className="text-success">Ukraine:</span> 77%</li>
                                                        <li><span className="text-danger">Rebels:</span> 23%</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Maradona says Messi didnt deserve Golden Ball?</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-thumbs-up text-success"></i> 54%</li>
                                                        <li><i className="icon-thumbs-down text-danger"></i> 46%</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Palestinian president says Israel is carrying out a genocide in Gaza?</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-thumbs-up text-success"></i> 80%</li>
                                                        <li><i className="icon-thumbs-down text-danger"></i> 20%</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="entry col-12">
                                                <div className="entry-title">
                                                    <h4><a href="#">Can Brazil progress in the World Cup without Neymar?</a></h4>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="icon-thumbs-up text-success"></i> 55%</li>
                                                        <li><i className="icon-thumbs-down text-danger"></i> 45%</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                {/* </div> */}

                {/* <div className="sidebar col-lg-3">
                    

                </div> */}

            {/* </div> */}

            {/* <div className="fancy-title title-border topmargin">
                <h3>Other News</h3>
            </div>

            <div id="oc-images" className="owl-carousel image-carousel carousel-widget posts-md" data-margin="30" data-nav="false" data-items-xs="1" data-items-sm="2" data-items-md="3" data-items-xl="4">

                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/1.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">A Baseball Team Blew Up A Bunch Of Justin Bieber And Miley Cyrus Merch</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 13th Jun 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 53</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/2.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">UK government weighs Tesla's Model S for its ??5 million electric vehicle fleet</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 24th Feb 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 17</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/3.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">MIT's new robot glove can give you extra fingers</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 30th Dec 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 13</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/4.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">Yen dips on modest reduction in risk aversion, markets still wary</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 15th Jan 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 54</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/5.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">Beyonce Dropped A '50 Shades Of Grey', Teaser On Instagram Last Night</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 27th Jul 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 61</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/6.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">Want To Know The New 'Star Wars' Plot? Then This Is The Post For You</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 10th Feb 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 34</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/7.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">Toyotas next minivan will let you shout at your kids without turning around</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 21st Oct 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 11</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oc-item">
                    <div className="entry">
                        <div className="entry-image">
                            <a href="#"><img src="images/magazine/thumb/8.jpg" alt="Image" /></a>
                        </div>
                        <div className="entry-title title-xs nott">
                            <h4><a href="blog-single.html">You can now listen to headphones through your hoodie</a></h4>
                        </div>
                        <div className="entry-meta">
                            <ul>
                                <li><i className="icon-calendar3"></i> 20th Nov 2021</li>
                                <li><a href="blog-single.html#comments"><i className="icon-comments"></i> 07</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <img src="images/magazine/ad.jpg" alt="Ad" className="aligncenter topmargin-lg mb-0" /> */}

        {/* </div> */}
    {/* </div>
</section> */}
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <FrontLayout>{page}</FrontLayout>
  )
}