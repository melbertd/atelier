import React, { Component } from 'react';

class ShopNowWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="shop-now-parent">
                <div id="shop-now">
                    Shop Now
                </div>
            </div>
        );
    }
}

export default ShopNowWidget;