import React from 'react';
import Header from "./Header";
import Footer from './Footer'
import {withRouter} from 'react-router-dom';
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from "react-cookie";
import {Jumbotron, Button, Container, Row, Col, Form, Tabs, Tab, Table} from "react-bootstrap";

class ProductDetails extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.productId = this.props.match.params.productId;
        const {cookies} = props;
        this.state = {
            product: {},
            customer: {},
            sessionId: cookies.get('sessionId') || '',
            quantity: "1"
        };
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentWillMount() {
        fetch("http://localhost:8080/product_information/" + this.productId)
            .then(res => res.json())
            .then(data => this.setState({product: data},
                () => {
                }
            ))
            .catch(e => console.log(e));
        /*
date: 1553832000000
description: ""​
id: 7
imageLink: "img/product/product7.png"​
name: "Blutooth Speaker"
price: 150
         */
        fetch('http://localhost:8080/customer_information/' + this.state.sessionId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({customer: data})
            });
    }

    addToCart(event) {
        if (Object.keys(this.state.customer).length === 0) {
            this.props.history.push('/login');
        } else {
            let customerId = this.state.customer.id;
            let productId = this.productId;
            fetch('http://localhost:8080/put_product_in_cart', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId: customerId,
                    productId: productId,
                    quantities: this.state.quantity
                })
            })
                .then(res => {
                    if (res.ok) {
                        return res.text();
                    }
                }).then(text => console.log(text));
            this.props.history.push({pathname: '/shopping_cart', state: true});
        }

        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    renderBannerArea() {
        return <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>Shop Single</h1>
                        <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Shop Single</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    }

    singleProductArea() {
        return <Container>
            <Row>
                <Col><img className="img-fluid" width={"100%"}
                          src={this.state.product.imageLink} alt=""/></Col>
                <Col style={{"margin-left": "50px", "margin-right": "50px"}}>
                    <h3>{this.state.product.name}</h3>
                    <h2>${this.state.product.price}</h2>
                    <ul className="list">
                        <li><a className="active" href="#"><span>Category</span> : Household</a></li>
                        <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                    </ul>
                    <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
                        looking for
                        something that can make your interior look awesome, and at the same time give you the
                        pleasant warm feeling
                        during the winter.</p>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col>
                                    <Form.Label>Quantity: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type="text" value="1" placeholder=""/>
                                </Col>
                                <Col> <Button variant="primary">Add to Cart</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        // return <div className="product_image_area">
        //     <div className="container">
        //         <div className="row s_product_inner">
        //             <div className="col-lg-6">
        //                 {/*<div className="owl-carousel owl-theme s_Product_carousel">*/}
        //                 <div>
        //                     <div className="single-prd-item">
        //                         <img className="img-fluid" width={"100%"}
        //                              src={this.state.product.imageLink} alt=""/>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-5 offset-lg-1">
        //                 <div className="s_product_text">
        //                     <h3>{this.state.product.name}</h3>
        //                     <h2>$149.99</h2>
        //                     <ul className="list">
        //                         <li><a className="active" href="#"><span>Category</span> : Household</a></li>
        //                         <li><a href="#"><span>Availibility</span> : In Stock</a></li>
        //                     </ul>
        //                     <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
        //                         looking for
        //                         something that can make your interior look awesome, and at the same time give you the
        //                         pleasant warm feeling
        //                         during the winter.</p>
        //                     <div className="product_count">
        //                         <label htmlFor="qty">Quantity:</label>
        //                         <button
        //                             // onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
        //                             className="increase items-count" type="button"><i className="ti-angle-left"></i>
        //                         </button>
        //                         <input type="text" name="quantity" id="sst" size="2" maxLength="12"
        //                                value={this.state.quantity}
        //                                onChange={this.handleChange}
        //                                title="Quantity:" className="input-text qty"/>
        //                         <button
        //                             // onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
        //                             className="reduced items-count" type="button"><i className="ti-angle-right"></i>
        //                         </button>
        //                         <a className="button primary-btn" href="#" onClick={this.addToCart}>Add to Cart</a>
        //                     </div>
        //                     <div className="card_area d-flex align-items-center">
        //                         <a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a>
        //                         <a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"></i></a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    }

    productDescription() {
        return <Container> <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Description" title="Description">
                <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature
                    women of all shapes
                    and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left
                    Kendrick School in
                    Reading at the age of 15, where she went to secretarial school and then into an insurance
                    office. After moving to
                    London and then Hampton, she eventually married her next door neighbour from Reading, John
                    Cook. He was an
                    officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year
                    before John took a
                    job in Southern Rhodesia with a motor company. Beryl bought their young son a box of
                    watercolours, and when
                    showing him how to use it, she decided that she herself quite enjoyed painting. John
                    subsequently bought her a
                    child’s painting set for her birthday and it was with this that she produced her first
                    significant work, a
                    half-length portrait of a dark-skinned lady with a vacant expression and large drooping
                    breasts. It was aptly
                    named ‘Hangover’ by Beryl’s husband and</p>
                <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this
                    fact, we are seeing
                    more and more recipe books and Internet websites that are dedicated to the act of cooking
                    for one. Divorce and
                    the death of spouses or grown children leaving for college are all reasons that someone
                    accustomed to cooking for
                    more than one would suddenly need to learn how to adjust all the cooking practices utilized
                    before into a
                    streamlined plan of cooking that is more efficient for one person creating less</p>
            </Tab>
            <Tab eventKey="Specification" title="Specification">
                <Container>
                    <Table responsive>
                        <tbody>
                        <tr>
                            <td>
                                <h5>Width</h5>
                            </td>
                            <td>
                                <h5>128mm</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Height</h5>
                            </td>
                            <td>
                                <h5>508mm</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Depth</h5>
                            </td>
                            <td>
                                <h5>85mm</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Weight</h5>
                            </td>
                            <td>
                                <h5>52gm</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Quality checking</h5>
                            </td>
                            <td>
                                <h5>yes</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Freshness Duration</h5>
                            </td>
                            <td>
                                <h5>03days</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>When packeting</h5>
                            </td>
                            <td>
                                <h5>Without touch of hand</h5>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Each Box contains</h5>
                            </td>
                            <td>
                                <h5>60pcs</h5>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </Tab>
            <Tab eventKey="Comments" title="Comments">

            </Tab>
            <Tab eventKey="Reviews" title="Reviews">

            </Tab>
        </Tabs></Container>
        // return <section className="product_description_area">
        //     <div className="container">
        //         <ul className="nav nav-tabs" id="myTab" role="tablist">
        //             <li className="nav-item">
        //                 <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab"
        //                    aria-controls="home" aria-selected="true">Description</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
        //                    aria-controls="profile"
        //                    aria-selected="false">Specification</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
        //                    aria-controls="contact"
        //                    aria-selected="false">Comments</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab"
        //                    aria-controls="review"
        //                    aria-selected="false">Reviews</a>
        //             </li>
        //         </ul>
        //         <div className="tab-content" id="myTabContent">
        //             <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        //                 <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature
        //                     women of all shapes
        //                     and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left
        //                     Kendrick School in
        //                     Reading at the age of 15, where she went to secretarial school and then into an insurance
        //                     office. After moving to
        //                     London and then Hampton, she eventually married her next door neighbour from Reading, John
        //                     Cook. He was an
        //                     officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year
        //                     before John took a
        //                     job in Southern Rhodesia with a motor company. Beryl bought their young son a box of
        //                     watercolours, and when
        //                     showing him how to use it, she decided that she herself quite enjoyed painting. John
        //                     subsequently bought her a
        //                     child’s painting set for her birthday and it was with this that she produced her first
        //                     significant work, a
        //                     half-length portrait of a dark-skinned lady with a vacant expression and large drooping
        //                     breasts. It was aptly
        //                     named ‘Hangover’ by Beryl’s husband and</p>
        //                 <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this
        //                     fact, we are seeing
        //                     more and more recipe books and Internet websites that are dedicated to the act of cooking
        //                     for one. Divorce and
        //                     the death of spouses or grown children leaving for college are all reasons that someone
        //                     accustomed to cooking for
        //                     more than one would suddenly need to learn how to adjust all the cooking practices utilized
        //                     before into a
        //                     streamlined plan of cooking that is more efficient for one person creating less</p>
        //             </div>
        //             <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        //                 <div className="table-responsive">
        //                     <table className="table">
        //                         <tbody>
        //                         <tr>
        //                             <td>
        //                                 <h5>Width</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>128mm</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Height</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>508mm</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Depth</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>85mm</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Weight</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>52gm</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Quality checking</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>yes</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Freshness Duration</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>03days</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>When packeting</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>Without touch of hand</h5>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>
        //                                 <h5>Each Box contains</h5>
        //                             </td>
        //                             <td>
        //                                 <h5>60pcs</h5>
        //                             </td>
        //                         </tr>
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>
        //             <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        //                 <div className="row">
        //                     <div className="col-lg-6">
        //                         <div className="comment_list">
        //                             <div className="review_item">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-1.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <h5>12th Feb, 2018 at 05:56 pm</h5>
        //                                         <a className="reply_btn" href="#">Reply</a>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                             <div className="review_item reply">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-2.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <h5>12th Feb, 2018 at 05:56 pm</h5>
        //                                         <a className="reply_btn" href="#">Reply</a>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                             <div className="review_item">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-3.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <h5>12th Feb, 2018 at 05:56 pm</h5>
        //                                         <a className="reply_btn" href="#">Reply</a>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-lg-6">
        //                         <div className="review_box">
        //                             <h4>Post a comment</h4>
        //                             <form className="row contact_form" action="contact_process.php" method="post"
        //                                   id="contactForm" noValidate="novalidate">
        //                                 <div className="col-md-12">
        //                                     <div className="form-group">
        //                                         <input type="text" className="form-control" id="name" name="name"
        //                                                placeholder="Your Full name"/>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-12">
        //                                     <div className="form-group">
        //                                         <input type="email" className="form-control" id="email" name="email"
        //                                                placeholder="Email Address"/>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-12">
        //                                     <div className="form-group">
        //                                         <input type="text" className="form-control" id="number" name="number"
        //                                                placeholder="Phone Number"/>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-12">
        //                                     <div className="form-group">
        //                                         <textarea className="form-control" name="message" id="message" rows="1"
        //                                                   placeholder="Message"></textarea>
        //                                     </div>
        //                                 </div>
        //                                 <div className="col-md-12 text-right">
        //                                     <button type="submit" value="submit" className="btn primary-btn">Submit
        //                                         Now
        //                                     </button>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
        //                 <div className="row">
        //                     <div className="col-lg-6">
        //                         <div className="row total_rate">
        //                             <div className="col-6">
        //                                 <div className="box_total">
        //                                     <h5>Overall</h5>
        //                                     <h4>4.0</h4>
        //                                     <h6>(03 Reviews)</h6>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="rating_list">
        //                                     <h3>Based on 3 Reviews</h3>
        //                                     <ul className="list">
        //                                         <li><a href="#">5 Star <i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i> 01</a>
        //                                         </li>
        //                                         <li><a href="#">4 Star <i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i> 01</a>
        //                                         </li>
        //                                         <li><a href="#">3 Star <i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i> 01</a>
        //                                         </li>
        //                                         <li><a href="#">2 Star <i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i> 01</a>
        //                                         </li>
        //                                         <li><a href="#">1 Star <i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i><i
        //                                             className="fa fa-star"></i><i className="fa fa-star"></i> 01</a>
        //                                         </li>
        //                                     </ul>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="review_list">
        //                             <div className="review_item">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-1.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                             <div className="review_item">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-2.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                             <div className="review_item">
        //                                 <div className="media">
        //                                     <div className="d-flex">
        //                                         <img src="img/product/review-3.png" alt=""/>
        //                                     </div>
        //                                     <div className="media-body">
        //                                         <h4>Blake Ruiz</h4>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                         <i className="fa fa-star"></i>
        //                                     </div>
        //                                 </div>
        //                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //                                     tempor incididunt ut labore et
        //                                     dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        //                                     ullamco laboris nisi ut aliquip ex ea
        //                                     commodo</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-lg-6">
        //                         <div className="review_box">
        //                             <h4>Add a Review</h4>
        //                             <p>Your Rating:</p>
        //                             <ul className="list">
        //                                 <li><a href="#"><i className="fa fa-star"></i></a></li>
        //                                 <li><a href="#"><i className="fa fa-star"></i></a></li>
        //                                 <li><a href="#"><i className="fa fa-star"></i></a></li>
        //                                 <li><a href="#"><i className="fa fa-star"></i></a></li>
        //                                 <li><a href="#"><i className="fa fa-star"></i></a></li>
        //                             </ul>
        //                             <p>Outstanding</p>
        //                             <form action="#/" className="form-contact form-review mt-3">
        //                                 <div className="form-group">
        //                                     <input className="form-control" name="name" type="text"
        //                                            placeholder="Enter your name" required/>
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <input className="form-control" name="email" type="email"
        //                                            placeholder="Enter email address" required/>
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <input className="form-control" name="subject" type="text"
        //                                            placeholder="Enter Subject"/>
        //                                 </div>
        //                                 <div className="form-group">
        //                                     <textarea className="form-control different-control w-100" name="textarea"
        //                                               id="textarea" cols="30" rows="5"
        //                                               placeholder="Enter Message"></textarea>
        //                                 </div>
        //                                 <div className="form-group text-center text-md-right mt-3">
        //                                     <button type="submit" className="button button--active button-review">Submit
        //                                         Now
        //                                     </button>
        //                                 </div>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    }

    relatedProductArea() {
        return <section className="related-product-area section-margin--small mt-0">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Popular Item in the market</p>
                    <h2>Top <span className="section-intro__style">Product</span></h2>
                </div>
                <div className="row mt-30">
                    <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                        <div className="single-search-product-wrapper">
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-1.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-2.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-3.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                        <div className="single-search-product-wrapper">
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-4.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-5.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-6.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                        <div className="single-search-product-wrapper">
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-7.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-8.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-9.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-3 mb-4 mb-xl-0">
                        <div className="single-search-product-wrapper">
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-1.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-2.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                            <div className="single-search-product d-flex">
                                <a href="#"><img src="img/product/product-sm-3.png" alt=""/></a>
                                <div className="desc">
                                    <a href="#" className="title">Gray Coffee Cup</a>
                                    <div className="price">$170.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    render() {
        return <div>
            <Header/>
            <Jumbotron style={{"background-color": "rgb(241, 246, 247)"}}>
                <Container>
                    <br/>
                    <br/>
                    <br/>
                    <h1 align="center">Shop Single </h1>
                    <p align="center"> Home - Shop Single </p>
                    <br/>
                    <br/>
                    <br/>
                </Container>
            </Jumbotron>
            {/*{this.renderBannerArea()}*/}
            {this.singleProductArea()}
            {this.productDescription()}
            {this.relatedProductArea()}
            <Footer/>
        </div>
    }
}

export default withRouter(withCookies(ProductDetails));