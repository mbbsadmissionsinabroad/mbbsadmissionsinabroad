import React from "react";
// import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <p className="topbar__number">
        <i class="fa fa-phone" aria-hidden="true"></i> +91 (934) 166-6667
      </p>
      <p className="topbar__address">
        <i class="fa fa-map-marker" aria-hidden="true"></i> 404, 1st floor, 4th
        A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru - 560043
      </p>
      <div className="social__container">
        <ul className="justify-content-end">
          {/*eslint-disable-next-line */}
          <li><a href="https://www.facebook.com/pg/mbbsadmissionsinabroad/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          {/*eslint-disable-next-line */}
          <li><a href="https://twitter.com/_mbbsabroad"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          {/*eslint-disable-next-line */}
          <li><a href="https://www.instagram.com/mbbsadmissionsinabroad/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          { /*eslint-disable-next-line */ }
          <li><a href="https://www.youtube.com/channel/UCzTBawHuvJcQdGizhBgJPwA"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>
			</div>
    </div>
  );
}

export default Topbar;
