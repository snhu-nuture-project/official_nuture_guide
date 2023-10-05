import React, { Component } from "react";
import "./styles.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sideBar ml-3">
        <li className="side-header">Getting Started</li>
        <ul>
          <li>
            <a
              href="/docs/5.3/getting-started/introduction/"
              class="bd-links-link d-inline-block rounded "
            >
              Introduction
            </a>
          </li>
          <li>
            <a href="/docs/5.3/getting-started/introduction/" class="">
              SNHU Home Page
            </a>
          </li>
          <li>
            <a
              href="https://brand.snhu.edu/d/hvaxQ3qRLmXv/snhu-brand-guide#/introduction/how-to-use-this-guide"
              class="bd-links-link d-inline-block rounded"
            >
              SNHU Brand Guide
            </a>
            <ol>
              {" "}
              <a href="https://brand.snhu.edu/d/hvaxQ3qRLmXv/snhu-brand-guide#/how-we-look/colors">
                Colors
              </a>
            </ol>
            <ol>
              {" "}
              <a href="https://brand.snhu.edu/d/hvaxQ3qRLmXv/snhu-brand-guide#/how-we-look/typography">
                Typography
              </a>
            </ol>
            <ol>
              {" "}
              <a href="https://brand.snhu.edu/d/hvaxQ3qRLmXv/snhu-brand-guide#/how-we-look/photography">
                Photos
              </a>
            </ol>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Starter Template
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Git Bash Cheat sheet
            </a>
          </li>
        </ul>

        <li className="side-header mt-3">Component Library</li>
        <ul>
          <li>
            <a
              href="/docs/5.3/getting-started/introduction/"
              class="bd-links-link d-inline-block rounded "
            >
              Accordion
            </a>
          </li>
          <li>
            <a href="/docs/5.3/getting-started/introduction/" class="">
              Buttons
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/download/"
              class="bd-links-link d-inline-block rounded"
            >
              Footer
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Nav Bar
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Accredation
            </a>
          </li>
        </ul>

        <li className="side-header mt-3">Additional Resources</li>
        <ul>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Nuture GitHub Repos
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/introduction/"
              class="bd-links-link d-inline-block rounded "
            >
              Bootstrap Documentation
            </a>
          </li>
          <li>
            <a href="/docs/5.3/getting-started/introduction/" class="">
              Git Bash Download
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/download/"
              class="bd-links-link d-inline-block rounded"
            >
              VS Code Download
            </a>
          </li>
          <li>
            <a
              href="/docs/5.3/getting-started/contents/"
              class="bd-links-link d-inline-block rounded"
            >
              Figma Download
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
