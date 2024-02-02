import React from "react";

export default function Reviews({isActive}) {
  return (
    <div  className={`${isActive ==='reviews' ? "tab-pane active" : "tab-pane"}`}  id="product-tab-reviews">
      <div className="row">
        <div className="col-12 mb-6">
          <div className="avg-rating-container">
            <mark>5.0</mark>
            <div className="avg-rating">
              <span className="avg-rating-title">Average Rating</span>
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <span className="rating-reviews">(2 Reviews)</span>
              </div>
            </div>
          </div>
          <div className="ratings-list mb-2">
            <div className="ratings-item">
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
              <div className="rating-percent">
                <span style={{ width: "100%" }} />
              </div>
              <div className="progress-value">100%</div>
            </div>
            <div className="ratings-item">
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "80%" }} />
                  <span className="tooltiptext tooltip-top">4.00</span>
                </div>
              </div>
              <div className="rating-percent">
                <span style={{ width: "0%" }} />
              </div>
              <div className="progress-value">0%</div>
            </div>
            <div className="ratings-item">
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "60%" }} />
                  <span className="tooltiptext tooltip-top">4.00</span>
                </div>
              </div>
              <div className="rating-percent">
                <span style={{ width: "0%" }} />
              </div>
              <div className="progress-value">0%</div>
            </div>
            <div className="ratings-item">
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "40%" }} />
                  <span className="tooltiptext tooltip-top">4.00</span>
                </div>
              </div>
              <div className="rating-percent">
                <span style={{ width: "0%" }} />
              </div>
              <div className="progress-value">0%</div>
            </div>
            <div className="ratings-item">
              <div className="ratings-container mb-0">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "20%" }} />
                  <span className="tooltiptext tooltip-top">4.00</span>
                </div>
              </div>
              <div className="rating-percent">
                <span style={{ width: "0%" }} />
              </div>
              <div className="progress-value">0%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-form-section">
        <div className="review-overlay" />
        <div className="review-form-wrapper">
          <div className="title-wrapper text-left">
            <h3 className="title title-simple text-left text-normal">
              Add a Review
            </h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="rating-form">
            <label htmlFor="rating" className="text-dark">
              Your rating *{" "}
            </label>
            <span className="rating-stars selected">
              <a className="star-1" href="#">
                1
              </a>
              <a className="star-2" href="#">
                2
              </a>
              <a className="star-3" href="#">
                3
              </a>
              <a className="star-4 active" href="#">
                4
              </a>
              <a className="star-5" href="#">
                5
              </a>
            </span>
            <select
              name="rating"
              id="rating"
              required
              style={{ display: "none" }}
            >
              <option value>Rate…</option>
              <option value={5}>Perfect</option>
              <option value={4}>Good</option>
              <option value={3}>Average</option>
              <option value={2}>Not that bad</option>
              <option value={1}>Very poor</option>
            </select>
          </div>
          <form action="#">
            <textarea
              id="reply-message"
              cols={30}
              rows={6}
              className="form-control mb-4"
              placeholder="Comment *"
              required
              defaultValue={""}
            />
            <div className="review-medias">
              <div
                className="file-input form-control image-input"
                style={{
                  backgroundImage: "url(images/product/placeholder.png)",
                }}
              >
                <div className="file-input-wrapper"></div>
                <label className="btn-action btn-upload" title="Upload Media">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="riode_comment_medias_image_1"
                  />
                </label>
                <label
                  className="btn-action btn-remove"
                  title="Remove Media"
                ></label>
              </div>
              <div
                className="file-input form-control image-input"
                style={{
                  backgroundImage: "url(images/product/placeholder.png)",
                }}
              >
                <div className="file-input-wrapper"></div>
                <label className=" btn-action btn-upload" title="Upload Media">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="riode_comment_medias_image_2"
                  />
                </label>
                <label
                  className="btn-action btn-remove"
                  title="Remove Media"
                ></label>
              </div>
              <div
                className="file-input form-control video-input"
                style={{
                  backgroundImage: "url(images/product/placeholder.png)",
                }}
              >
                <video className="file-input-wrapper" controls />
                <label className="btn-action btn-upload" title="Upload Media">
                  <input
                    type="file"
                    accept=".avi, .mp4"
                    name="riode_comment_medias_video_1"
                  />
                </label>
                <label
                  className="btn-action btn-remove"
                  title="Remove Media"
                ></label>
              </div>
            </div>
            <p>Upload images and videos. Maximum count: 3, size: 2MB</p>
            <button type="submit" className="btn btn-primary btn-rounded">
              Submit
              <i className="d-icon-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
