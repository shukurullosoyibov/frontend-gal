import React from "react";

export default function newsLetter() {
  return (
    <div>
      <div
        className="newsletter-popup newsletter-pop2 mfp-hide"
        id="newsletter-popup"
      >
        <figure>
          <img
            src="images/newsletter-popup2.jpg"
            width={500}
            height={264}
            alt="newsletter2"
          />
        </figure>
        <div className="newsletter-content">
          <h2 className="font-weight-bolder">Join Our Mailing List</h2>
          <p className="text-grey">Stay Informed!Monthly Tips and Discount.</p>
          <form
            action="#"
            method="get"
            className="input-wrapper input-wrapper-inline input-wrapper-round"
          >
            <input
              type="email"
              className="form-control email"
              name="email"
              id="email2"
              placeholder="Email address here..."
              required
            />
            <button className="btn btn-dark" type="submit">
              SUBMIT
            </button>
          </form>
          <div className="form-checkbox justify-content-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="hide-newsletter-popup"
              name="hide-newsletter-popup"
              required
            />
            <label htmlFor="hide-newsletter-popup">
              Don't show this popup again
            </label>
          </div>
          <div className="social-links">
            <a
              href="#"
              title="social-link"
              className="social-link social-facebook fab fa-facebook-f"
            />
            <a
              href="#"
              title="social-link"
              className="social-link social-twitter fab fa-twitter"
            />
            <a
              href="#"
              title="social-link"
              className="social-link social-linkedin fab fa-linkedin-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
