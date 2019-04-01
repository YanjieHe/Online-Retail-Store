import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import {NavLink} from "react-router-dom";
import HeroBanner from "./HeroBanner";
import HeroSlides from "./HeroSlides";
import Subscription from "./Subscription";
import LatestNews from "./LatestNews";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingProducts: [],
            bestSellers: []
        };
        this.productSquare = this.productSquare.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/trending_products/?amount=8")
            .then(res => res.json())
            .then(data => this.setState({trendingProducts: data}))
            .catch(e => console.log(e));

        fetch("http://localhost:8080/best_sellers/?amount=8")
            .then(res => res.json())
            .then(data => this.setState({bestSellers: data}))
            .catch(e => console.log(e));
    }

    productSquare(productId, title, imageLink, price) {
        return <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img className="card-img" src={imageLink} alt=""/>
                    <ul className="card-product__imgOverlay">
                        <li>
                            <NavLink to={"/product/" + productId}>
                                <button><i className="ti-search"></i></button>
                            </NavLink>
                        </li>
                        <li>
                            <button><i className="ti-shopping-cart"></i></button>
                        </li>
                        <li>
                            <button><i className="ti-heart"></i></button>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="single-product.html">{title}</a></h4>
                    <p className="card-product__price">${price}</p>
                </div>
            </div>
        </div>
    }

    renderOffer() {
        return <section className="offer" id="parallax-1" data-anchor-target="#parallax-1"
                        data-300-top="background-position: 20px 30px"
                        data-top-bottom="background-position: 0 20px">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="offer__content text-center">
                            <h3>Up To 50% Off</h3>
                            <h4>Winter Sale</h4>
                            <p>Him she'd let them sixth saw light</p>
                            <a className="button button--active mt-3 mt-xl-4" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    render() {
        return <div>
            <Header/>
            <main className="site-main">
                <HeroBanner/>
                <HeroSlides/>
                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Popular Item in the market</p>
                            <h2>Trending <span className="section-intro__style">Product</span></h2>
                        </div>
                        <div className="row">
                            {this.state.trendingProducts.map(product =>
                                this.productSquare(product.id, product.name, product.imageLink, product.price))}
                        </div>
                    </div>
                </section>
                {this.renderOffer()}
                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Popular Item in the market</p>
                            <h2>Best <span className="section-intro__style">Sellers</span></h2>
                        </div>
                        <div className="row">
                            {this.state.bestSellers.map(product =>
                                this.productSquare(product.id, product.name, product.imageLink, product.price))}
                        </div>
                    </div>
                </section>
                <LatestNews/>
                <Subscription/>
            </main>
            <Footer/>
        </div>
    }
}

export default App;
