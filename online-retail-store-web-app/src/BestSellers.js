import React from 'react'

class BestSellers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestSellers: []
        };
        this.bestSeller = this.bestSeller.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/best_sellers/?amount=8")
            .then(res => res.json())
            .then(data => this.setState({bestSellers: data}))
            .catch(e => console.log(e))
    }

    bestSeller(index) {
        let item = <div className="card text-center card-product">
            <div className="card-product__img">
                <img className="img-fluid"
                     src={this.state.bestSellers.length > index ? this.state.bestSellers[index].imageLink : ""}
                     alt=""/>
                <ul className="card-product__imgOverlay">
                    <li>
                        <button><i className="ti-search"></i></button>
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
                <h4 className="card-product__title">
                    <a href="single-product.html">{this.state.bestSellers.length > index ? this.state.bestSellers[index].name :
                        <span></span>}</a>
                </h4>
                <p className="card-product__price">${this.state.bestSellers.length > index ? this.state.bestSellers[index].price :
                    <span></span>}</p>
            </div>
        </div>
        return <div>{this.state.bestSellers.length > index ? item : <span></span>}</div>
    }

    render() {
        return <section className="section-margin calc-60px">
            <div className="container">
                <div className="section-intro pb-60px">
                    <p>Popular Item in the market</p>
                    <h2>Best <span className="section-intro__style">Sellers</span></h2>
                </div>
                <div className="owl-carousel owl-theme" id="bestSellerCarousel">
                    {this.bestSeller(0)}
                    {this.bestSeller(1)}
                    {this.bestSeller(2)}
                    {this.bestSeller(3)}
                    {this.bestSeller(4)}
                    {this.bestSeller(5)}
                    {this.bestSeller(6)}
                    {this.bestSeller(7)}
                </div>
            </div>
        </section>
    }
}

export default BestSellers;