import React from 'react'
import Post from '../components/posts/Post'
import sytle from "./Post.module.scss";

function Posts({posts}) {
  return (
    <div className='row mb-2 p-2'>
        {
          posts.map((post)=>(
            <div key={post.id} className="col-md-3">
            <Post {...post}/>
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
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
   props:{
     posts,
   },
  }
 }