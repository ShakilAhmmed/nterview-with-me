import React from 'react'

export default function Blog() {
  return (
    <>
        <div class="section section-padding-02">
            <div class="container">

                {/* <!-- Section Title Start --> */}
                <div class="section-title text-center">
                    <h2 class="title">Get from our <span>news & article</span></h2>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- Blog Wrapper Start --> */}
                <div class="blog-wrapper">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Single Blog Start --> */}
                            <div class="single-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html"><img src="assets/images/blog/blog-1.jpg" alt="Blog"/></a>
                                    <span class="tags">Education</span>
                                </div>
                                <div class="blog-content">
                                    <div class="meta">
                                        <a class="date" href=".">01 Jul, 2021</a>
                                        <a class="author" href=".">Andrew paker</a>
                                    </div>
                                    <h3 class="title"><a href="blog-details.html">LIVE SHOW: Business memes, dad lessons, selling to CROs</a></h3>
                                    <p>World-class training and development programs developed by top teachers</p>
                                </div>
                            </div>
                            {/* <!-- Single Blog End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Single Blog Start --> */}
                            <div class="single-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html"><img src="assets/images/blog/blog-2.jpg" alt="Blog"/></a>
                                    <span class="tags">Education</span>
                                </div>
                                <div class="blog-content">
                                    <div class="meta">
                                        <a class="date" href=".">01 Jul, 2021</a>
                                        <a class="author" href=".">Andrew paker</a>
                                    </div>
                                    <h3 class="title"><a href="blog-details.html">LIVE SHOW: Business memes, dad lessons, selling to CROs</a></h3>
                                    <p>World-class training and development programs developed by top teachers</p>
                                </div>
                            </div>
                            {/* <!-- Single Blog End --> */}
                        </div>
                        <div class="col-lg-4 col-md-6">
                            {/* <!-- Single Blog Start --> */}
                            <div class="single-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html"><img src="assets/images/blog/blog-3.jpg" alt="Blog"/></a>
                                    <span class="tags">Education</span>
                                </div>
                                <div class="blog-content">
                                    <div class="meta">
                                        <a class="date" href=".">01 Jul, 2021</a>
                                        <a class="author" href=".">Andrew paker</a>
                                    </div>
                                    <h3 class="title"><a href="blog-details.html">LIVE SHOW: Business memes, dad lessons, selling to CROs</a></h3>
                                    <p>World-class training and development programs developed by top teachers</p>
                                </div>
                            </div>
                            {/* <!-- Single Blog End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Wrapper End --> */}
            </div>
        </div>
    </>
  )
}
