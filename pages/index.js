import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
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
    },
  ];

  return (
    <div className='mx-10'>
      <h1>GetServerSideProps</h1>
    </div>
  )
}


