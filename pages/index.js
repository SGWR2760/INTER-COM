import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Voice from '@components/VoiceContent'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <audio controls>
          <source src="./assets/voice/R-001.wav"></source>
        </audio>

        <div class="container">
          <div class="row">
            <div class="col">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">男性</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Comming Soon</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
            <div class="card shadow-sm mt-3">
                <div class="card-body">
                    <p class="card-text">こちらは自動応答です。お名前とご用件を教えて下さい。</p>
                    <audio controls >
                        <source src="../assets/voice/R-001.wav">再生</source>
                    </audio>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted"></small>
                    </div>
                </div>
            </div>
        </div>


      </main>



      <Footer />
    </div>
  )
}
