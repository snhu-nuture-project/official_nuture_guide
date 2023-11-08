import React, { Component } from "react";
import "./style.css";
import Flip from "react-reveal/Flip";
import iconJson from "./icon.json";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  copyImagePath(imagePath) {
    const tempInput = document.createElement("input");
    tempInput.value = imagePath;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  render() {
    // Filter the icons based on the search query
    const filteredIcons = iconJson.icons.filter((icon) =>
      icon.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <section className="icon" id="icon">
        <div className="row">
          <div className="col-md-4">
            <h1>Icons</h1>
            <p>
              Search for the Icon you want to use and copy the path in the src
              attribute to add it to your code
            </p>
          </div>
        </div>

        <input
          type="text"
          className="mb-3"
          placeholder="Search Icons"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />

        <div className="row">
          {filteredIcons.map((icon) => (
            <div className="col-md-2">
              <div className="" key={icon.id}>
                <div className="card align-items-center">
                  <img src={icon.src} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{icon.name}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.copyImagePath(icon.src)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clipboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Icon;
