import React from "react";

export default function ServisList() {
  return (
    <section className="service-list">
      <div
        className="owl-carousel owl-theme row cols-lg-3 cols-md-2 cols-1"
        data-owl-options="{
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
  }"
      >
        <div
          className="icon-box icon-box-side icon-inversed icon-box1 appear-animate"
          data-animation-options="{
              'name': 'fadeInRightShorter',
              'delay': '.3s'
          }"
        >
          <i className="icon-box-icon d-icon-butterfly2" />
          <div className="icon-box-content">
            <h4 className="icon-box-title text-capitalize">
              Free Shipping &amp; Return
            </h4>
            <p className="ls-s">Free shipping on orders over $99</p>
          </div>
        </div>
        <div
          className="icon-box icon-box-side icon-inversed icon-box2 appear-animate"
          data-animation-options="{
              'name': 'fadeInRightShorter',
              'delay': '.4s'
          }"
        >
          <i className="icon-box-icon d-icon-dinner-set" />
          <div className="icon-box-content">
            <h4 className="icon-box-title text-capitalize">
              High Quality Goods
            </h4>
            <p className="ls-s">Instant access to perfect support</p>
          </div>
        </div>
        <div
          className="icon-box icon-box-side icon-inversed icon-box3 appear-animate"
          data-animation-options="{
              'name': 'fadeInRightShorter',
              'delay': '.5s'
          }"
        >
          <i className="icon-box-icon d-icon-birthday-cake2" />
          <div className="icon-box-content">
            <h4 className="icon-box-title text-capitalize">
              100% Secure Payment
            </h4>
            <p className="ls-s">We ensure secure payment!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
