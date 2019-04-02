import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import {instanceOf} from "prop-types";
import {Cookies, withCookies} from "react-cookie";

class ShoppingCart extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state = {
            sessionId: cookies.get('sessionId') || '',
            customer: {},
            cartItems: [],
            quantities: []
        }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.componentWillMount();
    // }

    componentDidMount() {
        fetch('http://localhost:8080/customer_information/' + this.state.sessionId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({customer: json}, () => {
                    fetch('http://localhost:8080/items_in_the_cart/?customerId=' + this.state.customer.id, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(res => res.json())
                        .then(json => {
                            console.log("$$$" + JSON.stringify(json));
                            let quantities = {};
                            for (let i = 0; i < json.length; i++) {
                                quantities[json[i].product.productId] = json[i].quantity
                            }
                            console.log("$$$" + JSON.stringify(quantities));
                            this.setState({
                                cartItems: json,
                                quantities: quantities
                            })
                        });
                })
            })
    }

    renderBannerArea() {
        return <section className="blog-banner-area" id="category">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>Shopping Cart</h1>
                        <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    }

    renderItem(productId, title, imageLink, price) {
        return <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img width="150px" src={imageLink} alt=""/>
                    </div>
                    <div className="media-body">
                        <p>{title}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>${price}</h5>
            </td>
            <td>
                <div className="product_count">
                    <input type="text" name="qty" id="sst" maxLength="12" value={this.state.quantities[productId]}
                           title="Quantity:"
                           className="input-text qty"/>
                    <button
                        onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                        className="increase items-count" type="button"><i
                        className="lnr lnr-chevron-up"></i></button>
                    <button
                        onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                        className="reduced items-count" type="button"><i
                        className="lnr lnr-chevron-down"></i></button>
                </div>
            </td>
            <td>
                <h5>${price * this.state.quantities[productId]}</h5>
            </td>
        </tr>
    }

    subtotal() {
        let money = 0.0;
        this.state.cartItems.forEach(item => {
            money = money + this.state.quantities[item.product.productId] * item.product.price
        });
        return money;
    }

    render() {
        return <div>
            <Header/>
            {this.renderBannerArea()}
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.cartItems.map(item => this.renderItem(
                                    item.product.productId,
                                    item.product.name,
                                    item.product.imageLink,
                                    item.product.price
                                ))}
                                <tr className="bottom_button">
                                    <td>
                                        <a className="button" href="#">Update Cart</a>
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div className="cupon_text d-flex align-items-center">
                                            <input type="text" placeholder="Coupon Code"/>
                                            <a className="primary-btn" href="#">Apply</a>
                                            <a className="button" href="#">Have a Coupon?</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${this.subtotal()}</h5>
                                    </td>
                                </tr>
                                <tr className="shipping_area">
                                    <td className="d-none d-md-block">

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Shipping</h5>
                                    </td>
                                    <td>
                                        <div className="shipping_box">
                                            <ul className="list">
                                                <li><a href="#">Flat Rate: $5.00</a></li>
                                                <li><a href="#">Free Shipping</a></li>
                                                <li><a href="#">Flat Rate: $10.00</a></li>
                                                <li className="active"><a href="#">Local Delivery: $2.00</a></li>
                                            </ul>
                                            <h6>Calculate Shipping <i className="fa fa-caret-down"
                                                                      aria-hidden="true"></i></h6>
                                            <select className="shipping_select">
                                                <option value="1">Bangladesh</option>
                                                <option value="2">India</option>
                                                <option value="4">Pakistan</option>
                                            </select>
                                            <select className="shipping_select">
                                                <option value="1">Select a State</option>
                                                <option value="2">Select a State</option>
                                                <option value="4">Select a State</option>
                                            </select>
                                            <input type="text" placeholder="Postcode/Zipcode"/>
                                            <a className="gray_btn" href="#">Update Details</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="out_button_area">
                                    <td className="d-none-l">

                                    </td>
                                    <td className="">

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div className="checkout_btn_inner d-flex align-items-center">
                                            <a className="gray_btn" href="#">Continue Shopping</a>
                                            <a className="primary-btn ml-2" href="#">Proceed to checkout</a>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    }
}

export default withCookies(ShoppingCart);