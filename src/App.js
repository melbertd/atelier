import Carousel from './carousel/homeSlider';

function App() {
  return (
    <div>
      <div className="heart-shape"></div>
      <div className="heart-shape2"></div>
      <div className="bg-circle-1 bg-circle"></div>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container-fluid">
          <a href="/home" className="navbar-brand">Andrea Suarez Atelier</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">OUR WORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">THE DESIGNER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">RENTALS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">PACKAGES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">/ A / STUDIO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="path-2">

      </div>

      <header className="masthead text-white">
        <div className="masthead-content">
          <div className="container-fluid">

            <section className="home-section">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="left-col">

                    <img className="img-fluid left-img" src="./img/lefto.png" alt="" />

                    <div className="name">
                      <p>ANDREA</p>
                      <p>SUAREZ</p>
                      <p>ATELIER </p>
                    </div>

                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis velit eu nunc lobortis cursus.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Curabitur vulputate nibh eget placerat semper. Integer blandit pretium magna, eu volutpat nisl.
                    </p>

                  </div>
                </div>

                <div className="col-lg-5 col-sm-12">
                  <div className="right-side">
                    <center>
                      <Carousel />
                    </center>
                  </div>
                </div>
              </div>
            </section>

            <section className="home-section">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="left-col">
                    <img className="img-fluid" src="https://placehold.co/700x400" alt="" />
                    <br /><br />
                    <img className="img-fluid" src="https://placehold.co/700x400" alt="" />
                  </div>
                </div>


                <div className="col-lg-5 col-sm-12">
                  <div className="right-side">
                    <img className="img-fluid" src="https://placehold.co/700x800" alt="" />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </header>


      <div className="shop-now-parent">
        <div id="shop-now">
          Shop Now
        </div>
      </div>

      <footer id="footer" className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2020</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
