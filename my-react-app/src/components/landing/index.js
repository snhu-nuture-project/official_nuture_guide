import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import "./styles.css";
import snhuMarket from "../../images/animation_lnc0moq3.json";
import $ from "jquery";

class Landing extends Component {
  // download = () => {
  //   // Create a Blob with the zip file data (replace 'your-zip-file.zip' with the actual file path)
  //   const zipBlob = new Blob([""], { type: "application/zip" });

  //   // Create a temporary URL for the Blob
  //   const zipUrl = window.URL.createObjectURL(zipBlob);

  //   // Create a link element for downloading
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = zipUrl;
  //   downloadLink.download = "snhu_starter_template.zip"; // Set the desired file name

  //   // Trigger the download
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  // };

  render() {
    return (
      <section className="beginning" id="beginning">
        <div className="row">
          <div className="col-md-6">
            <h1 className="name ">Welcome to Nuture Marketing </h1>
            <h3>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString(
                      '<span style="color:#fdb913; font-family: Oswald, sans-serif; font-size: 2rem;"> Development Guide</span>'
                    )
                    .start();
                }}
              ></Typewriter>
            </h3>
            <br />
            <p>
              Make use of this manual as a starting point for your Nuture
              projects. Simply make a copy of the beginning template, which
              already has the fundamental override styles customized for the
              SNHU Brand.
            </p>
            <a
              className="btn btn-primary"
              id="downloadButton"
              href="./snhu_starter_template.zip"
              download = "snhu_starter_template.zip"
            >
              Download Starter Template
            </a>
          </div>

          <div class="col-md-6">
            <Lottie
              animationData={snhuMarket}
              loop={true}
              className="marketing"
            />
          </div>
        </div>

        {/* <a href="#aboutSec">
          <FaArrowDown className="ArrowDown" />
        </a> */}
      </section>
    );
  }
}

export default Landing;
