import React from 'react'
import { Link } from 'react-router-dom'
import Service1 from '../../assets/img/gallery/kt2.jpg';
import Service2 from '../../assets/img/gallery/kt3.jpg';
import Service3 from '../../assets/img/gallery/kt4.jpg';

export default function ServicesSlider({ title }) {
    return (
        <div class="blog-area pb-55">
            <div class="container">
                <div class="section-title text-center mb-55">
                    <h2>{title}</h2>
                    <p class=""></p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="blog-wrap mb-30 scroll-zoom">
                            <div class="blog-img">
                                <Link to="/professional/list">
                                    <img src={Service1} alt="" />
                                </Link>
                                <div class="blog-category-names">
                                    <span class="purple">lifestyle</span>
                                    <span class="purple">men</span>
                                </div>
                            </div>
                            <div class="blog-content-wrap">
                                <div class="blog-content text-center">
                                    <h3>
                                        <Link to="/professional/list">Home Remodeling</Link>
                                    </h3>
                                    <span>By <Link to="/blog-standard">Admin</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="blog-wrap mb-30 scroll-zoom">
                            <div class="blog-img">
                                <Link to="/professional/list">
                                    <img src={Service2} alt="" /></Link>
                                <div class="blog-category-names">
                                    <span class="purple">lifestyle</span>
                                </div>
                            </div>
                            <div class="blog-content-wrap">
                                <div class="blog-content text-center">
                                    <h3>
                                        <Link to="/professional/list">Home Additions</Link>
                                    </h3>
                                    <span>By <Link to="/blog-standard">Admin</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="blog-wrap mb-30 scroll-zoom">
                            <div class="blog-img">
                                <Link to="/professional/list">
                                    <img src={Service3} alt="" />
                                </Link>
                                <div class="blog-category-names">
                                    <span class="purple">lifestyle</span>
                                </div>
                            </div>
                            <div class="blog-content-wrap">
                                <div class="blog-content text-center">
                                    <h3>
                                        <Link to="/professional/list">Accessory Dwelling Units</Link>
                                    </h3>
                                    <span>By <Link to="/blog-standard">Admin</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
