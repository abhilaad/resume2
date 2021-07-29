import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="card mb-4">
        <h2 className="card-header text-center card-designs">Education</h2>
        <div className="card-body">          
          <div className="media mb-2">
            <i className="fas fa-university fa-3x fa-fw text-primary mr-2" />
            <div className="media-body">
              <h3 className="h4 mb-1">Bachelor of Technology</h3>
              <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                <h5 className="mb-0">
                  <a href="#0">KIIT University</a>
                </h5>{" "}
                <small className="d-block text-uppercase font-weight-bold text-muted">
                  <time dateTime="2017-01">June 2016</time> –{" "}
                  <time dateTime="2017-12">April 2020</time>
                </small>
              </div>
            </div>
          </div>
          <p className="card-text">
           I did B.Tech from Computer Science and Engineering with CGPA of 8.69.
          </p>
          <hr />
          <div className="collapse" id="collapse-education">
            <div className="media mb-2">
              <i className="fas fa-graduation-cap fa-3x fa-fw text-primary mr-2" />
              <div className="media-body">
                <h3 className="h4 mb-1">Intermediate</h3>
                <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                  <h5 className="mb-0">
                    <a href="#0">D.A.V. Public School</a>
                  </h5>{" "}
                  <small className="d-block text-uppercase font-weight-bold text-muted">
                    <time dateTime="2017-01">June 2014</time> –{" "}
                    <time dateTime="2017-12">April 2016</time>
                  </small>
                </div>
              </div>
            </div>
            <p className="card-text">
              I took Science and scored 89% from CBSE Board.
            </p>
            <hr />
            <div className="media mb-2">
              <i className="fas fa-building fa-3x fa-fw text-primary mr-2" />
              <div className="media-body">
                <h3 className="h4 mb-1">Matriculation</h3>
                <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                  <h5 className="mb-0">
                    <a href="#0">St.M.G. Public School</a>
                  </h5>{" "}
                  <small className="d-block text-uppercase font-weight-bold text-muted">
                    <time dateTime="2017-01">April 2013</time> –{" "}
                    <time dateTime="2017-12">April 2014</time>
                  </small>
                </div>
              </div>
            </div>
            <p className="card-text">
             I scored 91.6% from ICSE Board.
            </p>
            <hr />
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            data-toggle="collapse"
            data-target="#collapse-education"
            aria-expanded="false"
            aria-controls="collapse-education"
          >
            Show all
          </button>
        </div>
      </div>
    );
  }
}
