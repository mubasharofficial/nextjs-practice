import { useRouter } from 'next/router'
import React from 'react';

export default function Post({postData}){

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
      return <div>Loading...</div>
    }
    
    return(
        <div key={postData.id}>
            <h2>
                {postData.title}
            </h2>
            <p>{postData.body}</p>
        </div>
    )

}

// Post.getInitialProps = async ({query}) => {
//     const {id} = query;
//     return { id };
//   }

// Page.getInitialProps = async (ctx) => {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }



// export async function getServerSideProps({query}) { // dynamic rendring 
//   const { id } = query;
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
//   const postData = await res.json();
//   return {
//    props:{
//     postData,
//    },
//   }
//  }

export async function getStaticPaths() {
  const paths=['/posts/1','/posts/2'];
  return {paths, fallback: true} // fallback function is false than only show static path if it will be true than it  fetch data that is not presetn setatic it genrate its static page
  // example id 1,2 is present if we set it true than we send id 10 so ten iss not presented  so
  // it show loading fetch thiis data andd genrated it systatic pages
}


export async function getStaticProps({query,params}) {  // static redingring 
  const {id} = query || params;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +id);
  const postData = await res.json();
  return {
   props:{
    postData,
   },
  };
 }


// export async function getStaticProps({query}) {  // static redingring 
//   const id = {query};
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +id);
//   const posts = await res.json();
//   return {
//    props:{
//      posts,
//    },
//   }
//  }
