import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card mb-4">
        <h2 className="card-header text-center card-designs">Skills</h2>
        <div className="card-body">
          <div className="mb-3">
            <h3 className="h5 mb-3 bg-info">Coding Languages</h3>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-html5" /> HTML5
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-100"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-css3" /> CSS3
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-100"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-sass" /> Sass
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-100"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>            
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-js" /> JavaScript
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-75"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="mb-3">
            <h3 className="h5 mb-3 bg-info">Front-End Frameworks</h3>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-react" /> React
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-75"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-angular" /> Angular
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-25"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-vuejs" /> Vue.js
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-50"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>            
          </div>
          <div className="mb-3">
            <h3 className="h5 mb-3 bg-info">Front-End Tools</h3>
            
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-git-square" /> Git
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-75"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <h4 className="h6 text-muted">
              <i className="fab fa-fw fa-npm" /> NPM
            </h4>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success w-50"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>         
        </div>
      </div>
    );
  }
}
