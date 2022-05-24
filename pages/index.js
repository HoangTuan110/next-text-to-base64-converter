import Head from 'next/head'
import {useState} from 'react'

// Thanks MDN!
// https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
const toBase64 = (s) => btoa(unescape(encodeURIComponent(s)))

export default function Home() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

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

        <input type="text" placeholder="Enter your text here..." onChange={handleInputChange}/>
        <input type="text" placeholder="Your result should show here..." readOnly={true} value={toBase64(input)} onChange={handleInputChange}></input>
      </main>

      <footer>
        Made with <a href="https://nextjs.org">NextJS</a>
      </footer>
    </div>
  )
}
