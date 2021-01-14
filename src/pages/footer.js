import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <footer id="footer" className="py-5 bg-black">
                    <div className="container">
                        <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2020</p>
                    </div>
                </footer>
            </>
        );
    }
}

export default Navigation;