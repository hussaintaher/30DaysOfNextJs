import React from 'react'
import Link from 'next/link'

const products = [
  {
    id: 'price_1LIdX9LTROuPS7MXGybCHgUT',
    name: 'SmallTree',
    price: 2000,
    currency: 'SAR',
    image: '/plants/smalltree.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
    slug: 'SmallTree'
  },
  {
    id: 'price_1LIdX9LTROuPS7MXGybCHgUT',
    name: 'BigTree',
    price: 5000,
    currency: 'SAR',
    image: '/plants/smalltree.jpg',
    rating: {
      count: 85,
      rate: 4.5,
    },
    slug: 'SmallTree'
  },
  {
    id: 'price_1LI8CcLTROuPS7MXiP5pukaG',
    name: 'Kentiapalm (L)',
    price: 3000,
    currency: 'USD',
    image: '/plants/kentiapalm.png',
    rating: {
      count: 85,
      rate: 4.5,
    },
    slug: 'Kentiapalm'
  },
];

const day1 = ({posts}) => {
  return (
    <div className=''>
      <h1>getStaticProps</h1>
      <h1>getServerSideRendering</h1>
      <div className="grid md:grid-cols-3 gap-y-5 grid-cols-1 w-full">
      {posts.map((item) => {
        return (
          <div key={item.id} class="card w-[90%] glass">
            <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
            <div class="card-body">
              <h2 class="card-title">{item.title}</h2>
              <p>{item.body}</p>
              <div class="card-actions justify-end">
                <Link href={`/day1/${item.id}`}>
                    <a>
                        <button class="btn btn-primary">Show</button>
                    </a>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
      </div>

     
    </div>
  )
}

export const getServerSideProps = async (context) => {
  // use getServerSideProps to fetch data on every request 
  // use it when you want to update data frequently 
  // after you assign data in props, now you can use data in your components
  // disadvantage is if your data is big, it will take time to load before the client see the component
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  //console.log(posts)
  return {
    props: {
      posts
    }
  }
}   

export default day1