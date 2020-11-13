import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="container-fluid text-center text-md-left">
        <div className="row mb-3">
          <div className="col-md-2" />
          <div className="col-md-5">
            <h5 className="title">Carbon FX</h5>
            <p>
              Carbon FX brings value to the modern world of transportation by
              allowing users to track their carbon foot print they leave behind
              on thier daily commute. By making users consiously aware of their
              carbon footprint we can help make a difference in the world.
            </p>
          </div>
          <div className="col-md-5">
            <h5 className="title">Developers</h5>
            <ul>
              <li className="list-unstyled">
                Front End Developer:
                <a href="https://github.com/WasteOfADrumBum">
                  Joshua M. Small
                </a>
              </li>
              <li className="list-unstyled">
                Front End Developer:
                <a href="https://github.com/maxgerringer"> Max R. Gerringer</a>
              </li>
              <li className="list-unstyled">
                Back End Developer:
                <a href="https://github.com/jhf1203"> Jim Faulkner</a>
              </li>
              <li className="list-unstyled">
                Back End Developer:
                <a href="https://github.com/mark-speer"> Mark Speer</a>
              </li>
              <li className="list-unstyled">
                Back End Developer:
                <a href="https://github.com/arodrigu1"> Arlene Rodriguez</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
      <div className="row text-center copyright">
        <div className="col-lg-12 mt-5 mb-3">
          &copy; Copyright: 2020&nbsp;
          <a href="https://github.com/WasteOfADrumBum/project-iii">
            T<p className="mirror">E</p>AM-I Produ
            <p className="mirror">c</p>tions™
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
