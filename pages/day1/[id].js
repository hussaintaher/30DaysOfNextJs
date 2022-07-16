import React from 'react'
import styles from '../../styles/Home.module.css'

const index = ({singlePost}) => {
  return (
    <div className={styles.main}>
    {console.log(singlePost)}
        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{singlePost.title}</h2>
                <p>{singlePost.body}</p>
            </div>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
    // getStaticPaths is important to per-generate all important parameters 
    // because nextjs will fetch data at the build time, we have to mention all parameters
    // getStaticPaths must be defined with getStaticProps
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const postsPaths = posts.map((item)=> {
        return {
            params: {id: JSON.stringify(item.id)}
        }
    })
    //console.log(postsPaths)
    return {
        paths: postsPaths,
        fallback: false // only accepts h and a params
    }
}

export async function getStaticProps(ctx) {
    // you cann't do ctx.req
    // you cann't do ctx.res
    // but you can do ctx.params to get the queries
    // getStaticProps will pre-generate html page once you run build 
    // disadvantage is your data wont be updated unless you use revalidate 
    // revalidate accepts numbers of seconds which allows you to fetch data for example after every 10 seconds
    const parameter = ctx.params;
    console.log(parameter) // {slug: 'a'}
    // after we get the params, we can fetch one single data
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${parameter.id}`);
    const post = await res.json();
    return {
        props: {
            singlePost: post
        },  
        revalidate: 3
    }
} 

export default index