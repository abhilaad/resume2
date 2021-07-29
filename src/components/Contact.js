import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="card mb-4">
        <h2 className="card-header text-center card-designs">Contact info</h2>
        <div className="card-body">
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-male text-white"
                data-fa-transform="shrink-5"
              />
            </div>
            <div className="media-body">
              Abhishek Kumar Singh
              <hr />
            </div>
          </div>
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-calendar-alt text-white"
                data-fa-transform="shrink-8"
              />
            </div>
            <div className="media-body">
              <time dateTime="1998-02-26">26th of February 1998</time>
              <hr />
            </div>
          </div>
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-phone text-white"
                data-fa-transform="shrink-8"
              />
            </div>
            <ul className="media-body list-unstyled">
              <li>
                <a href="tel:+1234567890">(+91)-7979789996</a>
              </li>              
              <li>
                <i className="fab fa-fw fa-whatsapp text-muted" />{" "}
                <a href="#0">Whatsapp_User</a>
              </li>
              <li>
                <hr />
              </li>
              
            </ul>
          </div>
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-envelope text-white"
                data-fa-transform="shrink-8"
              />
            </div>
            <ul className="media-body list-unstyled">
              <li>
                <a href="mailto:abhishek.24042013@gmail.com">abhishek.24042013@gmail.com</a>
              </li>
              <li>
                <i className="fab fa-fw fa-linkedin text-muted" />{" "}
                <a href="#0">LinkedIn</a>
              </li>
              <li>
                <i className="fab fa-fw fa-twitter text-muted" />{" "}
                <a href="#0">@twitterUser</a>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-home text-white"
                data-fa-transform="shrink-8"
              />
            </div>
            <div className="media-body">
              <address className="mb-0">
                Street Name 123
                <br />
                ZIP Code and City
                <br />
                Country
              </address>
              <hr />
            </div>
          </div>
          <div className="media">
            <div className="fa-layers fa-fw fa-2x mr-3">
              <i className="fas fa-circle text-primary" />
              <i
                className="fas fa-at text-white"
                data-fa-transform="shrink-8"
              />
            </div>
            <div className="media-body">
              <form>
                <div className="form-group">
                  <div className="input-group input-group-sm">
                    <div className="input-group-prepend" id="name">
                      <span className="input-group-text">Name:</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your name here"
                      aria-label="Your name"
                      aria-describedby="name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-sm">
                    <div className="input-group-prepend" id="email">
                      <span className="input-group-text">Email:</span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your email here"
                      aria-label="Your email"
                      aria-describedby="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-sm">
                    <div className="input-group-prepend" id="message">
                      <span className="input-group-text">
                        <i className="fas fa-pencil-alt" />
                      </span>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Your message here"
                      aria-label="Your message"
                      aria-describedby="message"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
