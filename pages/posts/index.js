import React from 'react'
import Post from '../components/posts/Post'

function Posts({posts}) {
  return (
    <ul>
        {
          posts.map((post)=>(
            <Post {...post}/>
          ))
        }
      
    </ul>
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