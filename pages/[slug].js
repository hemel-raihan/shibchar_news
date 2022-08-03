import React,{ useState, useEffect } from "react";
import FrontLayout from '../components/frontend/FrontLayout';
import Header from '../components/frontend/Header';
import useFetch from '../hooks/useFetch';
import moment from 'moment';
import { useRouter } from 'next/router';
import Link from "next/link";
import Image from 'next/image';

export default function AllNews() {

    const router = useRouter();
	const { slug } = router.query;
    const {data, loading, error} = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/home/category/posts/${slug}`)
    //var post = data[0];
  return (
    <>
    <Header title={slug} />

    <div id="posts" className="post-grid row grid-container gutter-40 clearfix" data-layout="fitRows">
        {data?.posts?.map((post, index)=>(
        <div key={index} className="entry col-md-4 col-sm-6 col-12">
            <div className="grid-inner">
                <div className="entry-image">
                    <Link href={`news/${post.slug}`}><a data-lightbox="image"><picture><img src={post.photo} alt="Standard Post with Image" /></picture></a></Link>
                </div>
                <div className="entry-title">
                    <h2><Link href={`news/${post.slug}`}><a>{post.title}</a></Link></h2>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i>{moment(post?.createdAt).format('Do MMMM YYYY')}</li>
                        <li><a href="blog-single.html#comments"><i className="icon-comments"></i>{data.name}</a></li>
                    </ul>
                </div>
                <div className="entry-content">
                    {post.desc.substring(0, 150)}
                </div>
            </div>
        </div>
        ))}
</div>
    </>
  )
}

AllNews.getLayout = function getLayout(page) {
  return (
      <FrontLayout>{page}</FrontLayout>
  )
}