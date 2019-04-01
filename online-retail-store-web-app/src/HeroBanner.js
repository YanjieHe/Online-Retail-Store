import React from 'react'

class HeroBanner extends React.Component {
    render() {
        return <section className="hero-banner">
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
                            <p>Us which over of signs divide dominion deep fill bring they're meat beho upon
                                own
                                earth without morning over third. Their male dry. They are great appear
                                whose
                                land fly grass.</p>
                            <a className="button button-hero" href="#">Browse Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default HeroBanner;