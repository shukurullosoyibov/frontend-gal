import React from 'react'

export default function ProductWrapperCarousel2() {
  return (
    <div class="tab-pane" id="featured">
    <div class="owl-carousel owl-theme row cols-xl-5 cols-lg-4 cols-md-3 cols-2"
        data-owl-options="{
        'items': 5,
        'nav': false,
        'dots': true,
        'margin': 20,
        'loop': false,
        'responsive': {
            '0': {
                'items': 2
            },
            '768': {
                'items': 3
            },
            '992': {
                'items': 4
            }
        }
    }">
        <div className="product text-center">
                <figure className="product-media">
                <a href="demo-kid-product.html">
                    <img src="images/demos/demo-kid/products/7.jpg" alt="product" width={300} height={332} />
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    <a href="#" className="btn-product-icon btn-quickview" title="Quick View"><i className="d-icon-search" /></a>
                </div>
                </figure>

                <div className="product-details">
                <h3 className="product-name">
                    <a href="demo-kid-product.html">Mineral Drink</a>
                </h3>
                <div className="product-price">
                    <ins className="new-price">$199.00</ins><del className="old-price">$210.00</del>
                </div>
                <div className="ratings-container">
                    <div className="ratings-full">
                    <span className="ratings" style={{width: '100%'}} />
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="demo-kid-product.html" className="rating-reviews">( 6 reviews
                    )</a>
                </div>
                <div className="product-action">
                    <a href="#" className="btn-product btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" />Add to cart</a>
                </div>
                </div>

        </div>
        <div className="product text-center">
                <figure className="product-media">
                <a href="demo-kid-product.html">
                    <img src="images/demos/demo-kid/products/5.jpg" alt="product" width={300} height={332} />
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    <a href="#" className="btn-product-icon btn-quickview" title="Quick View"><i className="d-icon-search" /></a>
                </div>
                </figure>

                <div className="product-details">
                <h3 className="product-name">
                    <a href="demo-kid-product.html">Fat Free Milk</a>
                </h3>
                <div className="product-price">
                    <span className="price">$33.00</span>
                </div>
                <div className="ratings-container">
                    <div className="ratings-full">
                    <span className="ratings" style={{width: '100%'}} />
                    <span className="tooltiptext tooltip-top" />
                    </div>
                    <a href="demo-kid-product.html" className="rating-reviews">( 6 reviews
                    )</a>
                </div>
                <div className="product-action">
                    <a href="#" className="btn-product btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" />Add to cart</a>
                </div>
                </div>

        </div>
        <div className="product text-center">
                <figure className="product-media">
                <a href="demo-kid-product.html">
                    <img src="images/demos/demo-kid/products/8.jpg" alt="product" width={300} height={332} />
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                    <a href="#" className="btn-product-icon btn-quickview" title="Quick View"><i className="d-icon-search" /></a>
                </div>
                </figure>

                    <div className="product-details">
                    <h3 className="product-name">
                        <a href="demo-kid-product.html">Baby Drink Wrapper</a>
                    </h3>
                    <div className="product-price">
                        <span className="price">$55.00</span>
                    </div>
                    <div className="ratings-container">
                        <div className="ratings-full">
                        <span className="ratings" style={{width: '100%'}} />
                        <span className="tooltiptext tooltip-top" />
                        </div>
                        <a href="demo-kid-product.html" className="rating-reviews">( 6 reviews
                        )</a>
                    </div>
                    <div className="product-action">
                        <a href="#" className="btn-product btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" />Add to cart</a>
                    </div>
                    </div>

        </div>
        <div className="product text-center">
            <figure className="product-media">
            <a href="demo-kid-product.html">
                <img src="images/demos/demo-kid/products/9.jpg" alt="product" width={300} height={332} />
            </a>
            <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                <a href="#" className="btn-product-icon btn-quickview" title="Quick View"><i className="d-icon-search" /></a>
            </div>
            </figure>

            <div className="product-details">
            <h3 className="product-name">
                <a href="demo-kid-product.html">Baby Drink Hair</a>
            </h3>
            <div className="product-price">
                <ins className="new-price">$199.00</ins><del className="old-price">$210.00</del>
            </div>
            <div className="ratings-container">
                <div className="ratings-full">
                <span className="ratings" style={{width: '100%'}} />
                <span className="tooltiptext tooltip-top" />
                </div>
                <a href="demo-kid-product.html" className="rating-reviews">( 6 reviews
                )</a>
            </div>
            <div className="product-action">
                <a href="#" className="btn-product btn-cart" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i className="d-icon-bag" />Add to cart</a>
            </div>
            </div>

        </div>
    </div>
</div>
  )
}
