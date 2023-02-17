import Image from "next/image"
import raymart from "../../public/images/raymart.png"
import blacklogo from "../../public/images/blacklogo.png"
import wave from "../../public/images/wave.gif"

export default function Home() {
  return (
    <main>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-lg">
          <a className="navbar-brand" href="#">
            <Image className="img-fluid"
              src={blacklogo}
              alt="Picture of the author"
              width={50}
              height={50}
              placeholder="blur"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center  mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero section */}
      <div className="container-lg shadow">
        <div className="row d-flex align-items-center bg-light pt-5">
          <div className="col-md-6 col-12 ">
            <div className="text-center">

              <h1 className="fw-bold">Hi There,
                <Image className="img-fluid mb-0 ms-2 align-top "
                  src={wave}
                  alt="waving hand"
                  width={45}
                  height={45}
                />

                <br />
                I'm Raymart Vergara</h1>
              <h3>Soon to be Web Developer</h3>
              <button className="btn btn-dark px-3 py-2 mt-3 mx-2"><span className="h5 hfw-bold">About</span> </button>
              <button className="btn bg-tranparent border border-dark px-3 py-2 mt-3 mx-2"><span className="h5 hfw-bold">Contact</span> </button>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center">
            <Image className="img-fluid"
              src={raymart}
              alt="Picture of the author"
              width={1000}
              height={1000}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* about me */}
      <div className="container-lg pt-5">
        <h1 className="border-start border-5 border-dark ps-4"> About Me</h1>
        <div className="row">
          <div className="col">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum tempora voluptates magnam aut pariatur fugiat minus quas, molestiae est explicabo quos. Numquam voluptates optio pariatur similique hic aut sit?</p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="container-lg pt-5 mb-5">
        <h1 className="border-start border-5 border-dark ps-4 mb-3"> Projects</h1>
        <div className="row g-3">
          <div className="col-6 col-12 col-md-6">
            <div class="card shadow">
              <div class="row g-0">
                <div class="col-md-6">
                  <Image src={raymart} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="card shadow">
              <div class="row g-0">
                <div class="col-md-6">
                  <Image src={raymart} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="card shadow">
              <div class="row g-0">
                <div class="col-md-6">
                  <Image src={raymart} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-12 col-md-6">
            <div class="card shadow">
              <div class="row g-0">
                <div class="col-md-6">
                  <Image src={raymart} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="border-start border-5 border-dark ps-4 mb-3">Education</h1>
        <div className="row"></div>
      </div>
    </main>
  )
}
