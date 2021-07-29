import React, { Component } from 'react'

export default class Intro extends Component {
    render() {
        return (
            <div className="card mb-4">
              <h2 className="card-header text-center card-designs">
                Abhishek Kumar Singh
              </h2>
              <img
                src="img/profile.jpg"
                alt="Portrait of Firstname Lastname"
                className="w-100"
              />
              <div className="card-body">
                <p className="card-text lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus orci massa, maximus a velit sit amet, fringilla
                  convallis tellus.
                </p>
                <p className="card-text">
                  Morbi auctor consectetur convallis. Suspendisse at lobortis
                  libero. Curabitur commodo dapibus rhoncus. Donec accumsan
                  magna et magna auctor pretium. Proin lectus augue, tincidunt
                  eu quam in, finibus imperdiet lectus. Donec commodo, est eu
                  semper pellentesque, sapien arcu tempor leo, quis commodo nisl
                  arcu vitae ligula. Duis et elit ut quam finibus accumsan vitae
                  non leo.
                </p>
                <blockquote className="blockquote text-center w-75 mx-auto">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus orci massa, maximus a velit sit amet, fringilla
                    convallis tellus.
                  </p>
                  <footer className="blockquote-footer">
                    Abhishek Kumar Singh
                  </footer>
                </blockquote>
              </div>
            </div>
        )
    }
}
