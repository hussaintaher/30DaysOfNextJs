import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className='mx-10'>
      <h1>GetServerSideProps</h1>
      <ul>
        <Link href="/day1"><a><li>Day1</li></a></Link>
      </ul>
    </div>
  )
}


