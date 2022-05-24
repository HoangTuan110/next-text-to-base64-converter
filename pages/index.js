import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Text to Base64 converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="title">
          Text to Base64 converter
        </h2>

        <p className="description">
          A simple text to Base64 converter.
        </p>
      </main>

      <footer>
        Made with <a href="https://nextjs.org">NextJS</a>
      </footer>
    </div>
  )
}
