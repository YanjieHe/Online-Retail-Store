import React from 'react';
import {NavLink} from 'react-router-dom'
import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home"><img
                src="img/logo.png"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Shop Category</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Product Details</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Product Checkout</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Confirmation</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Shopping Cart</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Blog Details</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Tracking</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    }
}

// class Header extends React.Component {
//     static propTypes = {
//         cookies: instanceOf(Cookies).isRequired
//     };
//
//     constructor(props) {
//         super(props);
//         const {cookies} = props;
//         this.state = {
//             sessionId: cookies.get('sessionId') || '',
//             firstName: "",
//             lastName: ""
//         }
//     }
//
//     componentWillMount() {
//         fetch('http://localhost:8080/customer_information/' + this.state.sessionId, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         })
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({firstName: json.firstName, lastName: json.lastName})
//             })
//     }
//
//     render() {
//         return (<header className="header_area">
//             <div className="main_menu">
//                 <nav className="navbar navbar-expand-lg navbar-light">
//                     <div className="container">
//                         <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
//                         <button className="navbar-toggler" type="button" data-toggle="collapse"
//                                 data-target="#navbarSupportedContent"
//                                 aria-controls="navbarSupportedContent" aria-expanded="false"
//                                 aria-label="Toggle navigation">
//                             <span className="icon-bar"/>
//                             <span className="icon-bar"/>
//                             <span className="icon-bar"/>
//                         </button>
//                         <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
//                             <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
//                                 <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
//                                 <li className="nav-item submenu dropdown">
//                                     <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
//                                        role="button"
//                                        aria-haspopup="true"
//                                        aria-expanded="false">Shop</a>
//                                     <ul className="dropdown-menu">
//                                         <li className="nav-item"><a className="nav-link" href="category.html">Shop
//                                             Category</a>
//                                         </li>
//                                         <li className="nav-item"><a className="nav-link" href="single-product.html">Product
//                                             Details</a></li>
//                                         <li className="nav-item"><a className="nav-link" href="checkout.html">Product
//                                             Checkout</a></li>
//                                         <li className="nav-item"><a className="nav-link"
//                                                                     href="confirmation.html">Confirmation</a></li>
//                                         <li className="nav-item"><NavLink className="nav-link" to="/shopping_cart">Shopping
//                                             Cart</NavLink></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item submenu dropdown">
//                                     <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
//                                        role="button"
//                                        aria-haspopup="true"
//                                        aria-expanded="false">Blog</a>
//                                     <ul className="dropdown-menu">
//                                         <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
//                                         <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog
//                                             Details</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item submenu dropdown">
//                                     <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
//                                        role="button"
//                                        aria-haspopup="true"
//                                        aria-expanded="false">Pages</a>
//                                     <ul className="dropdown-menu">
//                                         <li className="nav-item"><NavLink className="nav-link"
//                                                                           to="/login">Login</NavLink>
//                                         </li>
//                                         <li className="nav-item"><a className="nav-link"
//                                                                     href="register.html">Register</a></li>
//                                         <li className="nav-item"><a className="nav-link"
//                                                                     href="tracking-order.html">Tracking</a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
//                             </ul>
//
//                             <ul className="nav-shop">
//                                 <li className="nav-item">
//                                     <button><i className="ti-search"></i></button>
//                                 </li>
//                                 <li className="nav-item">
//                                     <button><i className="ti-shopping-cart"></i>
//                                         {/*<span className="nav-shop__circle">3</span>*/}
//                                     </button>
//                                 </li>
//                                 {this.state.sessionId === ''
//                                     ? <li className="nav-item">
//                                         <a className="button button-header" href="#">Buy Now</a>
//                                     </li>
//                                     : <li className="nav-item">
//                                         <strong> Welcome, {this.state.firstName} {this.state.lastName}</strong>
//                                     </li>}
//
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>);
//     }
// }

export default withCookies(Header);