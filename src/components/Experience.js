import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="card mb-4">
        <h2 className="card-header text-center card-designs" >Work Experience</h2>
        <div className="card-body">
          <div className="media mb-2">
            <i className="fas fa-cog fa-fw fa-3x text-primary mr-2" />
            <div className="media-body">
              <h3 className="h4 mb-1">Technical Trainee</h3>
              <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                <h5 className="mb-0">
                  <a href="#0">Gemini Solutions</a>
                </h5>{" "}
                <small className="d-block text-uppercase font-weight-bold text-muted">
                  <time dateTime="2017-01">August 2019</time> –{" "}
                  <time dateTime="2017-12">June 2020</time>
                </small>
              </div>
            </div>
          </div>
          <p className="card-text">
            I worked as a Technical Trainee where ETL operations was performed
            using tools like Autosys,Pint and SQL Database.
          </p>
          
        </div>
      </div>
    );
  }
}
