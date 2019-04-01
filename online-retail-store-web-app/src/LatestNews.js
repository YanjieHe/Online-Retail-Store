import React from 'react';

class LatestNews extends React.Component {
    render() {
        return <section className="blog">
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
                                    <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a>
                                    </li>
                                </ul>
                                <h4 className="card-blog__title"><a href="single-blog.html">The Richland
                                    Center
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
                                    <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a>
                                    </li>
                                </ul>
                                <h4 className="card-blog__title"><a href="single-blog.html">The Shopping
                                    News
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
                                    <li><a href="#"><i className="ti-comments-smiley"></i> 2 Comments</a>
                                    </li>
                                </ul>
                                <h4 className="card-blog__title"><a href="single-blog.html">Professional
                                    design
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
    }
}

export default LatestNews;