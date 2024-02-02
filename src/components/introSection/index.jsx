import React from 'react'

export default function IntroSection() {
  return (
   <section className="intro-section">
  <div className="row">
    <div className="col-md-9">
      <div className="owl-carousel owl-theme row owl-dot-inner intro-slider animation-slider cols-1 mb-4" data-owl-options="{
                              'items': 1,
                              'dots': true,
                              'nav': false,
                              'loop': true,
                              'animateOut': 'flipOutY'
                          }">
        <div className="banner banner-fixed intro-slide1">
          <figure>
            <img src="images/demos/demo-kid/slides/1.jpg" alt="intro-banner" width={580} height={460} />
          </figure>
          <div className="banner-content w-100 y-50 text-left">
            <div className="slide-animate" data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}">
              <h4 className="banner-subtitle text-primary text-uppercase font-weight-semi-bold">
                Best Selling</h4>
              <h2 className="banner-title font-weight-bold slide-animate" data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}">
                Baby Clothes
              </h2>
              <h3 className="text-body font-weight-normal"><span>*</span> Start Shopping
                Right Now <span>*</span></h3>
              <a href="demo-kid-shop.html" className="btn btn-outline btn-rounded btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="banner banner-fixed intro-slide2">
          <figure>
            <img src="images/demos/demo-kid/slides/2.jpg" alt="intro-banner" width={580} height={460} />
          </figure>
          <div className="banner-content w-100 y-50 text-right">
            <div className="slide-animate" data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.6s'}">
              <h4 className="banner-subtitle text-dark text-uppercase font-weight-semi-bold">
                Up To 40% Off</h4>
              <h2 className="banner-title font-weight-normal slide-animate" data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.4s'}">
                Summer Sale
              </h2>
              <h3 className="text-body font-weight-normal"><span>*</span> Start Shopping
                Right Now <span>*</span></h3>
              <a href="demo-kid-shop.html" className="btn btn-outline btn-rounded btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="row">
        <div className="col-md-12 col-xs-6">
          <div className="banner banner-fixed intro-banner1 mb-4 overlay-light">
            <figure>
              <img src="images/demos/demo-kid/banners/1.jpg" alt="banner" width={280} height={236} style={{backgroundImage: '#fba9c0'}} />
            </figure>
            <div className="banner-content appear-animate">
              <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">
                New In</h4>
              <h3 className="banner-title ls-m text-dark font-weight-normal">Kids Store
              </h3>
              <a href="demo-kid-shop.html" className="btn btn-underline btn-link">Shop now
                <i className="d-icon-arrow-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xs-6">
          <div className="banner banner-fixed intro-banner2 mb-4 overlay-light">
            <figure>
              <img src="images/demos/demo-kid/banners/2.jpg" alt="banner" width={280} height={236} style={{backgroundImage: '#42a3e8'}} />
            </figure>
            <div className="banner-content appear-animate">
              <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">
                Popular</h4>
              <h3 className="banner-title ls-m text-dark font-weight-normal">Hot Seller
              </h3>
              <a href="demo-kid-shop.html" className="btn btn-underline btn-link">Shop now
                <i className="d-icon-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="service-list">
    <div className="owl-carousel owl-theme row cols-lg-3 cols-md-2 cols-1" data-owl-options="{
                          'nav': false,
                          'dots': false,
                          'loop': false,
                          'autoplay': true,
                          'margin': 2,
                          'responsive': {
                              '0': {
                                  'items': 1
                              },
                              '576': {
                                  'items': 2
                              },
                              '992': {
                                  'items': 3
                              }
                          }
                      }">
      <div className="icon-box icon-box-side icon-inversed icon-box1 appear-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter',
                                  'delay': '.3s'
                              }">
        <i className="icon-box-icon d-icon-butterfly2" />
        <div className="icon-box-content">
          <h4 className="icon-box-title text-capitalize">Free Shipping &amp; Return
          </h4>
          <p className="ls-s">Free shipping on orders over $99</p>
        </div>
      </div>
      <div className="icon-box icon-box-side icon-inversed icon-box2 appear-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter',
                                  'delay': '.4s'
                              }">
        <i className="icon-box-icon d-icon-dinner-set" />
        <div className="icon-box-content">
          <h4 className="icon-box-title text-capitalize">High Quality Goods</h4>
          <p className="ls-s">Instant access to perfect support</p>
        </div>
      </div>
      <div className="icon-box icon-box-side icon-inversed icon-box3 appear-animate" data-animation-options="{
                                  'name': 'fadeInRightShorter',
                                  'delay': '.5s'
                              }">
        <i className="icon-box-icon d-icon-birthday-cake2" />
        <div className="icon-box-content">
          <h4 className="icon-box-title text-capitalize">100% Secure Payment</h4>
          <p className="ls-s">We ensure secure payment!</p>
        </div>
      </div>
    </div>
  </section>
</section>

  )
}
