/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veilo</title>
        <meta name="description" content="Veilo Brand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <div className="page-container">
          <div className="flex">
              <div className="col">
                  <div className="infos-container">
                      <img src="/images/logo.png" alt="Veilo-Logo" />
                      <h2>Comming soon ...</h2>
                      <div className="socials">
                          <a href="https://www.facebook.com/Veilo-108764824974314/"><img src="/images/facebook.png" alt="Facebook-Logo" /></a>
                          <a href="https://www.instagram.com/veilo.brand/"><img src="/images/instagram.png" alt="Instagram-Logo" /></a>
                      </div>
                  </div>
              </div>
              <div className="col">
                  <div className="img-container">
                      <img src="/images/cover.jpg" alt="Veilo" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
