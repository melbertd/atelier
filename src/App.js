import React, { Component } from 'react';
import Carousel from './carousel/homeSlider';

class Home extends Component {

  componentDidMount() {
    var socialFloat = document.querySelector('#shop-now');
    var footer = document.querySelector('#footer');

    function checkOffset() {
      function getRectTop(el) {
        var rect = el.getBoundingClientRect();
        return rect.top;
      }

      if ((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
        socialFloat.style.position = 'absolute';
      if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
        socialFloat.style.position = 'fixed'; // restore when you scroll up
    }

    document.addEventListener("scroll", function () {
      checkOffset();
    });

    // var navbar = document.querySelector('.navbar')
    // window.onscroll = function () {
    //   // pageYOffset or scrollY
    //   if (window.pageYOffset > 0) {
    //     navbar.classList.add('scrolled')
    //   } else {
    //     navbar.classList.remove('scrolled')
    //   }
    // }


  }

  render() {
    return (
      <div>

        <header className="masthead text-white">
          <div className="masthead-content">
            <div className="container-fluid">

              <section className="home-section">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="left-col">

                      {/* <img className="img-fluid left-img" src="./img/lefto.png" alt="" /> */}
                      <img className="img-fluid" src="https://placehold.co/900x400" alt="" />

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

                  <div className="col-lg-6 col-sm-12">
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
                  <div className="col-lg-6 offset-lg-3 col-sm-12">
                    <h2 className="text-center name">THE ATELIER</h2>
                    <p className="text-center description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis velit eu nunc lobortis cursus.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Curabitur vulputate nibh eget placerat semper. Integer blandit pretium magna, eu volutpat nisl.
                    </p>
                  </div>
                </div>
              </section>


              <section className="home-section">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="left-col">
                      <img className="img-fluid" src="https://placehold.co/900x400" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="right-side">
                      <h2 className="text-left name">Alii autem quibus ego</h2>
                      <p className="text-left description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis velit eu nunc lobortis cursus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Curabitur vulputate nibh eget placerat semper. Integer blandit pretium magna, eu volutpat nisl.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="home-section">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="left-col">
                      <h2 className="text-right name">Alii autem quibus ego</h2>
                      <p className="text-right description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis velit eu nunc lobortis cursus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Curabitur vulputate nibh eget placerat semper. Integer blandit pretium magna, eu volutpat nisl.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="right-side">
                      <img className="img-fluid" src="https://placehold.co/700x800" alt="" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="home-section">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="left-col">
                      <img className="img-fluid" src="https://placehold.co/900x400" alt="" />
                      <br/>
                      <br/>
                      <br/>
                      <img className="img-fluid" src="https://placehold.co/900x400" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div className="right-side">
                      <img className="img-fluid" src="https://placehold.co/700x800" alt="" />
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
