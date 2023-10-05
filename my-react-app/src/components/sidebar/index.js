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
            <a href="https://degrees.snhu.edu/?utm_campaign=PFBranded&pfsegment=BR&utm_source=google&utm_medium=pdsearch&utm_content=630477111537&snhu_segment=ol&adkeyword=snhu&admatchtype=e&addevice=c&adnetwork=g&adcampaignid=314120001&adcampaignname=G:Brand_General:TX&adgroupid=24994648881&adgroupname=SNHU-ONLY-EXACT-BRAND-GENERAL:TX&adlocationid=9027730&adplacement=&venpubid=ppcbrand&gad=1&gclid=CjwKCAjwvfmoBhAwEiwAG2tqzHT6Yw8Lqq8Zfbxj8TNW9JNqghz39mfRmFsUqpwhc_EaEJHncZPWjRoC2WIQAvD_BwE&gclsrc=aw.ds" class="">
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
              href="#github"
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
              href="#component-lib"
              class="bd-links-link d-inline-block rounded "
            >
              Accordion
            </a>
          </li>
          <li>
            <a href="#component-lib" class="">
              Buttons
            </a>
          </li>
          <li>
            <a
              href="#component-lib"
              class="bd-links-link d-inline-block rounded"
            >
              Footer
            </a>
          </li>
          <li>
            <a
              href="#component-lib"
              class="bd-links-link d-inline-block rounded"
            >
              Nav Bar
            </a>
          </li>
          <li>
            <a
              href="#component-lib"
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
              href="https://github.com/orgs/snhu-nuture-project/repositories"
              class="bd-links-link d-inline-block rounded"
            >
              Nuture GitHub Repos
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              class="bd-links-link d-inline-block rounded "
            >
              Bootstrap Documentation
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/downloads" class="">
              Git Bash Download
            </a>
          </li>
          <li>
            <a
              href="https://code.visualstudio.com/"
              class="bd-links-link d-inline-block rounded"
            >
              VS Code Download
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/"
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
