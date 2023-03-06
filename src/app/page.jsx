import Image from "next/image"
import raymart from "../../public/images/raymart.png"
import whitelogo from "../../public/images/whitelogo.png"
import wave from "../../public/images/wave.gif"
import Link from "next/link"


export default function Home() {
  return (

    <main>
        <nav class="navbar bg-dark" data-bs-theme="dark" id="home">
          <Image className="img-fluid"
            src={whitelogo}
            alt="Picture of the author"
            width={50}
            height={50}
            placeholder="blur"
            id="home"
          />
          <div className="col text-center">
          <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#home">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#aboutme">ABOUT</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#projects">PROJECTS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">CONTACT</a>
  </li>
</ul>
          </div>
        </nav>
    

      {/* Hero section */}
      <div className="container-lg shadow">
        <div className="row d-flex align-items-center bg-light pt-5" id="home">
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
      <div className="container-lg pt-5 ps-0">
        <h1 className="border-start border-5 border-dark ps-4" id="aboutme"> About Me</h1>
        <div className="row">
          <div className="col">
            <p>As a junior Web Developer, I am a tech enthusiast who is passionate about creating user-friendly and visually appealing websites. I have a strong foundation in programming languages such as HTML, CSS, PHP, and JavaScript, and I am constantly updating my skills to keep up with the latest web development trends and technologies.</p>
          </div>
        </div>
      </div>
      <div className="container-lg ps-0">
        <h1 className="border-start border-5 border-dark ps-4" id="skills">My Skills</h1>
        <div className="row">
          <div className="col">
            <p className="ms-3">Here are the technology stacks that I have learned since  I started studying in KodeGo bootcamp.</p>
            <div className="col p-1">
              <div className="row">
                <h5 className="my-3">Framework</h5>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>React Js</span> </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Laravel v9</span></button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Bootstrap</span></button>
                </div>
              </div>
              <div className="row">
                <h5 className="my-3">Front End</h5>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>HTML 5</span> </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>CSS</span></button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Javascript</span></button>
                </div>
              </div>

              <div className="row">
                <h5 className="my-3">Back End</h5>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>PHP</span> </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Firebase</span></button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>MySQL</span></button>
                </div>
              </div>
              <div className="row">
                <h5 className="my-3">Others</h5>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>GitHub</span> </button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Git</span></button>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-dark"><span>Figma</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="container-lg pt-5 mb-5">
        <h1 className="border-start border-5 border-dark ps-4 mb-3" id="projects">Projects</h1>
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
        <div className="container-lg pt-5 ps-0">
          <h1 className="border-start border-5 border-dark ps-4" id="contact"> Contact Me</h1>
          <div className="row">
            <div className="col">
              <form id="" action="https://formspree.io/f/xdovzbrg" method="POST">
                <label for="email" className="form-label">Email address <span className="text-danger">*</span></label>
                <input className="form-control" name="Email" id="email" type="email" required />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <label for="email" className="form-label">Fullname  <span className="text-danger">*</span></label>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input className="form-control" name="firstName" id="firstName" type="text" placeholder="Firstname" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input className="form-control" name="lastName" id="lastName" type="text" placeholder="Lastname" required />
                  </div>
                </div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn btn-dark" type="submit" pattern="[A-Za-z]">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}