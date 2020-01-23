
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#feb100' />
          <link
            rel='icon'
            type='image/png'
            href='http://cdn.aplidex.rurick.dev.s3.us-east-2.amazonaws.com/favicon.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://kit.fontawesome.com/846cbbb684.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
