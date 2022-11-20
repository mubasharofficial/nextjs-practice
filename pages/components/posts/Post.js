import React from 'react'
import Link from 'next/link'
// import sytle from "./Post.module.scss";
import styled from '@emotion/styled'
import  'bootstrap/dist/css/bootstrap.min.css';

const Styleh3heading = styled.h3({
  fontSize: '18px',
  color:'gray',
  marginTop: '60px'
});

const StylePostLink = styled.a({
  fontSize:'25px',
  color:'bluelight',
})
const Post = ({id,title,body}) => {
  return (
            <>
                <li key={id}>
                  <Styleh3heading><Link href={"/posts/[id]"} as={"/posts/"+id}>{title} </Link></Styleh3heading> 
                  <p> {body} </p>
                </li>
            </>
    
  )
}

export default Post