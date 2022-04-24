import React from 'react';
import ava from '../../assets/images/avatar.jpg';
export default function About() {
  return (
    <div className="about-page paddsection">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="div-img-bg">
              <div className="about-img"><img src={ava} alt="my avatar" className="img-responsive" /> </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-descr">
              <h2> About</h2>
              <p className="p-heading">
                I am a Front-End web developer living in PA, <br />I write semantically clean and efficient code and make user-friendly UI/UX components.
              </p>
              <p className="separator">
                "Apply yourself to the basics and progress will follow."
              </p>

            </div>

          </div>

        </div>
      </div></div >
  );
}
