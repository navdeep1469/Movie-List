import React, { useEffect } from "react";
import "../App.css";

import Axios from "axios";
import TypeWriterEffect from "../components/typewriter.component";

export default function HomePage() {
  useEffect(() => {
    const checkLoggedIn = async () => {
      if (localStorage.getItem("jwt")) {
        Axios({
          method: "get",
          url: "http://localhost:5000/api/users/isAuthenticated",
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }).catch((err) => {
          window.location = "/";
          localStorage.removeItem("jwt");
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="parent">
      <div className="section1">
        <div className="row section-1-row">
          <div className="col-sm-12 col-md-6 center-block">
            <img className="section-1-img" src={require("../Assets/movie.jpg")} />
            <div className="row">
              <div className="col-sm-12">
                <p>Watch batman.(A personal recommendation)</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 title-col">
            <TypeWriterEffect text="Hey there! Login to search hundreds of movies and favourite the best ones!" />
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="row">
          <div className="col-sm-12 col-md-4 info-list d-flex justify-content-center">
            <ul>
              <li>Make list of your favourite movies.</li>
              <li>Search for movies.</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <img className="section-2-img" src={require("../Assets/3110.jpg")} />
          </div>
          <div className="col-sm-12 col-md-4 info-list d-flex justify-content-center">
            <ul>
              <li>Read reviews of the movie.</li>
              <li>Alter your list according to your need.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
