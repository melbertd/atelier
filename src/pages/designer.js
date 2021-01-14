import React, { Component } from 'react';

export default class Designer extends Component {

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

        test
      </div>
    );
  }
}
