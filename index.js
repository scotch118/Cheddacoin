import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Head>
        <title>CheddaCoin</title>
      </Head>
      <Image src="/cheddacoin-logo.png" alt="Logo" width={150} height={150} />
      <h1>In Cheese We Trust 🧀</h1>
      <p>Welcome to CheddaCoin ($CHEDDA) – the strongest cheese in crypto.</p>
    </div>
  )
}