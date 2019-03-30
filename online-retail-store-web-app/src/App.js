import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingProducts: [],
            bestSellers: []
        };
        this.trendingProduct = this.trendingProduct.bind(this);
        this.bestSeller = this.bestSeller.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/trending_products/?amount=8")
            .then(res => res.json())
            .then(data =>
                this.setState({trendingProducts: data}))
            .catch(e => console.log(e))

        fetch("http://localhost:8080/best_sellers/?amount=8")
            .then(res => res.json())
            .then(data =>
                this.setState({bestSellers: data}))
            .catch(e => console.log(e))
    }

    trendingProduct(title, imageLink, price) {
        return (<div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img className="card-img" src={imageLink} alt=""/>
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
                    <h4 className="card-product__title"><a href="single-product.html">{title}</a></h4>
                    <p className="card-product__price">${price}</p>
                </div>
            </div>
        </div>);
    }

    bestSeller(title, imageLink, price) {
        return (<div className="card text-center card-product">
            <div className="card-product__img">
                <img className="img-fluid" src={imageLink} alt=""/>
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
                <h4 className="card-product__title"><a href="single-product.html">{title}</a></h4>
                <p className="card-product__price">${price}</p>
            </div>
        </div>);
    }

    renderHeader() {
        return (<header className="header_area">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto mr-auto">
                                <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Shop</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="category.html">Shop Category</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="single-product.html">Product
                                            Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="checkout.html">Product
                                            Checkout</a></li>
                                        <li class="nav-item"><a class="nav-link"
                                                                href="confirmation.html">Confirmation</a></li>
                                        <li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Blog</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-blog.html">Blog
                                            Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                                        <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
                                        <li class="nav-item"><a class="nav-link" href="tracking-order.html">Tracking</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            </ul>

                            <ul class="nav-shop">
                                <li class="nav-item">
                                    <button><i class="ti-search"></i></button>
                                </li>
                                <li class="nav-item">
                                    <button><i class="ti-shopping-cart"></i><span class="nav-shop__circle">3</span>
                                    </button>
                                </li>
                                <li class="nav-item"><a class="button button-header" href="#">Buy Now</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>);
    }

    render() {
        return (<div>
            {this.renderHeader()}
            <main className="site-main">

                <section className="hero-banner">
                    <div className="container">
                        <div className="row no-gutters align-items-center pt-60px">
                            <div className="col-5 d-none d-sm-block">
                                <div className="hero-banner__img">
                                    <img className="img-fluid" src="img/home/hero-banner.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                                <div className="hero-banner__content">
                                    <h4>Shop is fun</h4>
                                    <h1>Browse Our Premium Product</h1>
                                    <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own
                                        earth without morning over third. Their male dry. They are great appear whose
                                        land fly grass.</p>
                                    <a className="button button-hero" href="#">Browse Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-margin mt-0">
                    <div className="owl-carousel owl-theme hero-carousel">
                        <div className="hero-carousel__slide">
                            <img src="img/home/hero-slide1.png" alt="" className="img-fluid"/>
                            <a href="#" className="hero-carousel__slideOverlay">
                                <h3>Wireless Headphone</h3>
                                <p>Accessories Item</p>
                            </a>
                        </div>
                        <div className="hero-carousel__slide">
                            <img src="img/home/hero-slide2.png" alt="" className="img-fluid"/>
                            <a href="#" className="hero-carousel__slideOverlay">
                                <h3>Wireless Headphone</h3>
                                <p>Accessories Item</p>
                            </a>
                        </div>
                        <div className="hero-carousel__slide">
                            <img src="img/home/hero-slide3.png" alt="" className="img-fluid"/>
                            <a href="#" className="hero-carousel__slideOverlay">
                                <h3>Wireless Headphone</h3>
                                <p>Accessories Item</p>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Popular Item in the market</p>
                            <h2>Trending <span className="section-intro__style">Product</span></h2>
                        </div>
                        <div className="row">
                            {this.state.trendingProducts.map(product =>
                                this.trendingProduct(product.name, product.imageLink, product.price))}
                        </div>
                    </div>
                </section>

                <section className="offer" id="parallax-1" data-anchor-target="#parallax-1"
                         data-300-top="background-position: 20px 30px" data-top-bottom="background-position: 0 20px">
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

                <section className="section-margin calc-60px">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Popular Item in the market</p>
                            <h2>Best <span className="section-intro__style">Sellers</span></h2>
                        </div>
                        <div className="owl-carousel owl-theme" id="bestSellerCarousel" margin={10}>
                            {this.state.bestSellers.map(product =>
                                this.bestSeller(product.name, product.imageLink, product.price))}
                        </div>
                    </div>
                </section>

                <section className="blog">
                    <div className="container">
                        <div className="section-intro pb-60px">
                            <p>Popular Item in the market</p>
                            <h2>Latest <span className="section-intro__style">News</span></h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="card card-blog">
                                    <div className="card-blog__img">
                                        <img className="card-img rounded-0" src="img/blog/blog1.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <ul className="card-blog__info">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                                        </ul>
                                        <h4 className="card-blog__title"><a href="single-blog.html">The Richland Center
                                            Shooping News and weekly shooper</a></h4>
                                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed.
                                            Winged divided light Forth.</p>
                                        <a className="card-blog__link" href="#">Read More <i
                                            className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="card card-blog">
                                    <div className="card-blog__img">
                                        <img className="card-img rounded-0" src="img/blog/blog2.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <ul className="card-blog__info">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                                        </ul>
                                        <h4 className="card-blog__title"><a href="single-blog.html">The Shopping News
                                            also offers top-quality printing services</a></h4>
                                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed.
                                            Winged divided light Forth.</p>
                                        <a className="card-blog__link" href="#">Read More <i
                                            className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="card card-blog">
                                    <div className="card-blog__img">
                                        <img className="card-img rounded-0" src="img/blog/blog3.png" alt=""/>
                                    </div>
                                    <div className="card-body">
                                        <ul className="card-blog__info">
                                            <li><a href="#">By Admin</a></li>
                                            <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a></li>
                                        </ul>
                                        <h4 className="card-blog__title"><a href="single-blog.html">Professional design
                                            staff and efficient equipment you’ll find we offer</a></h4>
                                        <p>Let one fifth i bring fly to divided face for bearing divide unto seed.
                                            Winged divided light Forth.</p>
                                        <a className="card-blog__link" href="#">Read More <i
                                            className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe-position">
                    <div className="container">
                        <div className="subscribe text-center">
                            <h3 className="subscribe__title">Get Update From Anywhere</h3>
                            <p>Bearing Void gathering light light his eavening unto dont afraid</p>
                            <div id="mc_embed_signup">
                                <form target="_blank"
                                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                      method="get" className="subscribe-form form-inline mt-5 pt-1">
                                    <div className="form-group ml-sm-auto">
                                        <input className="form-control mb-1" type="email" name="EMAIL"
                                               placeholder="Enter your email" onFocus="this.placeholder = ''"
                                               onBlur="this.placeholder = 'Your Email Address '"/>
                                        <div className="info"></div>
                                    </div>
                                    <button className="button button-subscribe mr-auto mb-1" type="submit">Subscribe
                                        Now
                                    </button>
                                    <div style={{"position": "absolute", "left": "-5000px"}}>
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value=""
                                               type="text"/>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </main>


            <footer className="footer">
                <div className="footer-area">
                    <div className="container">
                        <div className="row section_gap">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget tp_widgets">
                                    <h4 className="footer_title large_title">Our Mission</h4>
                                    <p>
                                        So seed seed green that winged cattle in. Gathering thing made fly you're no
                                        divided deep moved us lan Gathering thing us land years living.
                                    </p>
                                    <p>
                                        So seed seed green that winged cattle in. Gathering thing made fly you're no
                                        divided deep moved
                                    </p>
                                </div>
                            </div>
                            <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget tp_widgets">
                                    <h4 className="footer_title">Quick Links</h4>
                                    <ul className="list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Product</a></li>
                                        <li><a href="#">Brand</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget instafeed">
                                    <h4 className="footer_title">Gallery</h4>
                                    <ul className="list instafeed d-flex flex-wrap">
                                        <li><img src="img/gallery/r1.jpg" alt=""/></li>
                                        <li><img src="img/gallery/r2.jpg" alt=""/></li>
                                        <li><img src="img/gallery/r3.jpg" alt=""/></li>
                                        <li><img src="img/gallery/r5.jpg" alt=""/></li>
                                        <li><img src="img/gallery/r7.jpg" alt=""/></li>
                                        <li><img src="img/gallery/r8.jpg" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget tp_widgets">
                                    <h4 className="footer_title">Contact Us</h4>
                                    <div className="ml-40">
                                        <p className="sm-head">
                                            <span className="fa fa-location-arrow"></span>
                                            Head Office
                                        </p>
                                        <p>123, Main Street, Your City</p>

                                        <p className="sm-head">
                                            <span className="fa fa-phone"></span>
                                            Phone Number
                                        </p>
                                        <p>
                                            +123 456 7890 <br/>
                                            +123 456 7890
                                        </p>

                                        <p className="sm-head">
                                            <span className="fa fa-envelope"></span>
                                            Email
                                        </p>
                                        <p>
                                            free@infoexample.com <br/>
                                            www.infoexample.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row d-flex">
                            <p className="col-lg-12 footer-text text-center">
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="fa fa-heart"
                                                                                    aria-hidden="true"></i> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>);
    }
}

export default App;
