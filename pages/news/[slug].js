
import FrontLayout from '../../components/frontend/FrontLayout';
import Header from '../../components/frontend/Header';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';
import { useRouter } from 'next/router';

export default function NewsDetails() {

    const router = useRouter();
	const { slug, id } = router.query;
    const {data, loading, error} = useFetch(`http://localhost:5000/api/home/post/${id}`)

  return (
    <>
    <Header title={slug} />

    <div className="single-post mb-0">

    <div className="entry clearfix">

        <div className="entry-title">
            <h2>{data.title}</h2>
        </div>

        <div className="entry-meta">
            <ul>
                <li><i className="icon-calendar3"></i> 10th July 2021</li>
                <li><a href="#"><i className="icon-user"></i> admin</a></li>
                <li><i className="icon-folder-open"></i> <a href="#">General</a>, <a href="#">Media</a></li>
                <li><a href="#"><i className="icon-comments"></i> 43 Comments</a></li>
                <li><a href="#"><i className="icon-camera-retro"></i></a></li>
            </ul>
        </div>

        <div className="entry-image">
            <a href="#"><img src="images/blog/full/1.jpg" alt="Blog Single" /></a>
        </div>

        <div className="entry-content mt-0">

            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. <a href="#">Curabitur blandit tempus porttitor</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>

            <blockquote><p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p></blockquote>

            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.</p>

            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. <a href="#">Nullam quis risus eget urna</a> mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

                {/* <pre>
                #header-inner {
                    width: 940px;
                    margin: 0 auto;
                    padding-top: 40px;
                }</pre> */}

            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
            

            <div className="tagcloud clearfix bottommargin">
                <a href="#">general</a>
                <a href="#">information</a>
                <a href="#">media</a>
                <a href="#">press</a>
                <a href="#">gallery</a>
                <a href="#">illustration</a>
            </div>

            <div className="clear"></div>

            <div className="si-share border-0 d-flex justify-content-between align-items-center">
                <span>Share this Post:</span>
                <div>
                    <a href="#" className="social-icon si-borderless si-facebook">
                        <i className="icon-facebook"></i>
                        <i className="icon-facebook"></i>
                    </a>
                    <a href="#" className="social-icon si-borderless si-twitter">
                        <i className="icon-twitter"></i>
                        <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="social-icon si-borderless si-pinterest">
                        <i className="icon-pinterest"></i>
                        <i className="icon-pinterest"></i>
                    </a>
                    <a href="#" className="social-icon si-borderless si-gplus">
                        <i className="icon-gplus"></i>
                        <i className="icon-gplus"></i>
                    </a>
                    <a href="#" className="social-icon si-borderless si-rss">
                        <i className="icon-rss"></i>
                        <i className="icon-rss"></i>
                    </a>
                    <a href="#" className="social-icon si-borderless si-email3">
                        <i className="icon-email3"></i>
                        <i className="icon-email3"></i>
                    </a>
                </div>
            </div>

        </div>
    </div>

    <div className="row justify-content-between col-mb-30 post-navigation">
        <div className="col-12 col-md-auto text-center">
            <a href="#">&lArr; This is a Standard post with a Slider Gallery</a>
        </div>

        <div className="col-12 col-md-auto text-center">
            <a href="#">This is an Embedded Audio Post &rArr;</a>
        </div>
    </div>

    <div className="line"></div>

    <div className="card">
        <div className="card-header"><strong>Posted by <a href="#">John Doe</a></strong></div>
        <div className="card-body">
            <div className="author-image">
                <img src="images/author/1.jpg" alt="Image" className="rounded-circle" />
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eveniet, eligendi et nobis neque minus mollitia sit repudiandae ad repellendus recusandae blanditiis praesentium vitae ab sint earum voluptate velit beatae alias fugit accusantium laboriosam nisi reiciendis deleniti tenetur molestiae maxime id quaerat consequatur fugiat aliquam laborum nam aliquid. Consectetur, perferendis?
        </div>
    </div>

    <div className="line"></div>

    <h4>Related Posts:</h4>

    <div className="related-posts row posts-md col-mb-30">

        <div className="entry col-12 col-md-6">
            <div className="grid-inner row align-items-center gutter-20">
                <div className="col-4">
                    <div className="entry-image">
                        <a href="#"><img src="images/blog/small/10.jpg" alt="Blog Single" /></a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="entry-title title-xs">
                        <h3><a href="#">This is an Image Post</a></h3>
                    </div>
                    <div className="entry-meta">
                        <ul>
                            <li><i className="icon-calendar3"></i> 10th July 2021</li>
                            <li><a href="#"><i className="icon-comments"></i> 12</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="entry col-12 col-md-6">
            <div className="grid-inner row align-items-center gutter-20">
                <div className="col-4">
                    <div className="entry-image">
                        <a href="#"><img src="images/blog/small/20.jpg" alt="Blog Single" /></a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="entry-title title-xs">
                        <h3><a href="#">This is a Video Post</a></h3>
                    </div>
                    <div className="entry-meta">
                        <ul>
                            <li><i className="icon-calendar3"></i> 24th July 2021</li>
                            <li><a href="#"><i className="icon-comments"></i> 16</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="entry col-12 col-md-6">
            <div className="grid-inner row align-items-center gutter-20">
                <div className="col-4">
                    <div className="entry-image">
                        <a href="#"><img src="images/blog/small/21.jpg" alt="Blog Single" /></a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="entry-title title-xs">
                        <h3><a href="#">This is a Gallery Post</a></h3>
                    </div>
                    <div className="entry-meta">
                        <ul>
                            <li><i className="icon-calendar3"></i> 8th Aug 2021</li>
                            <li><a href="#"><i className="icon-comments"></i> 8</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="entry col-12 col-md-6">
            <div className="grid-inner row align-items-center gutter-20">
                <div className="col-4">
                    <div className="entry-image">
                        <a href="#"><img src="images/blog/small/22.jpg" alt="Blog Single" /></a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="entry-title title-xs">
                        <h3><a href="#">This is an Audio Post</a></h3>
                    </div>
                    <div className="entry-meta">
                        <ul>
                            <li><i className="icon-calendar3"></i> 22nd Aug 2021</li>
                            <li><a href="#"><i className="icon-comments"></i> 21</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="comments" className="clearfix">

        <h3 id="comments-title"><span>3</span> Comments</h3>

        <ol className="commentlist clearfix">

            <li className="comment even thread-even depth-1" id="li-comment-1">

                <div id="comment-1" className="comment-wrap clearfix">

                    <div className="comment-meta">

                        <div className="comment-author vcard">

                            <span className="comment-avatar clearfix">
                            <img alt='Image' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' className='avatar avatar-60 photo avatar-default' height='60' width='60' /></span>

                        </div>

                    </div>

                    <div className="comment-content clearfix">

                        <div className="comment-author">John Doe<span><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a></span></div>

                        <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

                        <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>

                    </div>

                    <div className="clear"></div>

                </div>


                <ul className='children'>

                    <li className="comment byuser comment-author-_smcl_admin odd alt depth-2" id="li-comment-3">

                        <div id="comment-3" className="comment-wrap clearfix">

                            <div className="comment-meta">

                                <div className="comment-author vcard">

                                    <span className="comment-avatar clearfix">
                                    <img alt='Image' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' className='avatar avatar-40 photo' height='40' width='40' /></span>

                                </div>

                            </div>

                            <div className="comment-content clearfix">

                                <div className="comment-author"><a href='#' rel='external nofollow' className='url'>SemiColon</a><span><a href="#" title="Permalink to this comment">April 25, 2012 at 1:03 am</a></span></div>

                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                                <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>

                            </div>

                            <div className="clear"></div>

                        </div>

                    </li>

                </ul>

            </li>

            <li className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1" id="li-comment-2">

                <div id="comment-2" className="comment-wrap clearfix">

                    <div className="comment-meta">

                        <div className="comment-author vcard">

                            <span className="comment-avatar clearfix">
                            <img alt='Image' src='https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=60&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D60&amp;r=G' className='avatar avatar-60 photo' height='60' width='60' /></span>

                        </div>

                    </div>

                    <div className="comment-content clearfix">

                        <div className="comment-author"><a href='https://themeforest.net/user/semicolonweb' rel='external nofollow' className='url'>SemiColon</a><span><a href="#" title="Permalink to this comment">April 25, 2012 at 1:03 am</a></span></div>

                        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

                        <a className='comment-reply-link' href='#'><i className="icon-reply"></i></a>

                    </div>

                    <div className="clear"></div>

                </div>

            </li>

        </ol>

        <div className="clear"></div>

        <div id="respond">

            <h3>Leave a <span>Comment</span></h3>

            <form className="row" action="#" method="post" id="commentform">
                <div className="col-md-4 form-group">
                    <label for="author">Name</label>
                    <input type="text" name="author" id="author" value="" size="22" tabindex="1" className="sm-form-control" />
                </div>

                <div className="col-md-4 form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" value="" size="22" tabindex="2" className="sm-form-control" />
                </div>

                <div className="col-md-4 form-group">
                    <label for="url">Website</label>
                    <input type="text" name="url" id="url" value="" size="22" tabindex="3" className="sm-form-control" />
                </div>

                <div className="w-100"></div>

                <div className="col-12 form-group">
                    <label for="comment">Comment</label>
                    <textarea name="comment" cols="58" rows="7" tabindex="4" className="sm-form-control"></textarea>
                </div>

                <div className="col-12 form-group">
                    <button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" className="button button-3d m-0">Submit Comment</button>
                </div>
            </form>

        </div>

    </div>

</div>
    </>
  )
}

NewsDetails.getLayout = function getLayout(page) {
  return (
      <FrontLayout>{page}</FrontLayout>
  )
}