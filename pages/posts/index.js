import React from 'react'
import dynamic from 'next/dynamic';
// import Header from '../components/Header';
import Post from '../components/posts/Post'
import sytle from "./Post.module.scss";
const Header = dynamic( ()=>import("../components/Header"),{
  loading: () => <p>Loadding.....</p>,
  ssr:false,
});

function Posts({posts}) {
  return (
    <div className='row mb-2 p-2'>
      <Header />
        {
          posts.map((post)=>(
            <div key={post.id} className="col-md-3">
            <Post {...post}> </Post>
            </div>
          ))
        }
      
    </div>
  )
}
export default Posts

// export async function getStaticProps(context) {
//  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//  const posts = await res.json();
//  return {
//   props:{
//     posts,
//   },
//  }
// }


export async function getStaticProps() {  // static redingring 
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();
  return {
   props:{
     posts,
   },
  }
 }