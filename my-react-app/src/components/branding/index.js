import React, { Component } from "react";
import "./style.css";
import Flip from "react-reveal/Flip";

class Brand extends Component {
  render() {
    return (
      <section className="brand" id="brand">
        <div className="row">
          <div className="col-md-12">
            <h1>Style & Branding</h1>
          </div>
        </div>

        <div className="row mt-5" id="colors">
          <h2 className="text-center col-md-12 mb-5">Brand Colors</h2>
          <div className="col-md-12 d-flex justify-content-evenly">
            <div>
              <div class="circle circle-1 mt-0 floating-element-1"></div>
              <p className="text-center">
                {" "}
                <strong>Golden Yellow</strong>
              </p>
              <p className="text-center">Hex: #FDB913</p>
              <p className="text-center">RGB: 253, 185, 19</p>
            </div>
            <div>
              <div class="circle circle-2 mt-5 floating-element-2"></div>
              <p className="text-center">
                {" "}
                <strong>Ink Blue</strong>
              </p>
              <p className="text-center">Hex: #00244E</p>
              <p className="text-center">RGB: 0, 36, 78</p>
            </div>
            <div>
              <div class="circle circle-3 mt-3 floating-element-1"></div>
              <p className="text-center">
                {" "}
                <strong>Sky Blue</strong>
              </p>
              <p className="text-center">Hex: #009DEA</p>
              <p className="text-center">RGB: 0, 157, 234</p>
            </div>
            <div>
              <div class="circle circle-4 mt-0 floating-element-2"></div>
              <p className="text-center">
                {" "}
                <strong>Heritage Blue</strong>
              </p>
              <p className="text-center">Hex: #0A3370</p>
              <p className="text-center">RGB: 253, 185, 19</p>
            </div>
            <div>
              <div class="circle circle-5 mt-5 floating-element-1"></div>
              <p className="text-center">
                {" "}
                <strong>Hero Blue</strong>
              </p>
              <p className="text-center">Hex: #2066a2</p>
              <p className="text-center">RGB: 253, 185, 19</p>
            </div>
          </div>
        </div>

        <div className="row" id="typo">
          <h2 className="text-center col-md-12 mb-5">Typography</h2>
          <Flip duration={4000} right>
            <div className="col-md-6 bg-white p-5 round-corner br">
              <p className="xl-font">Aa</p>
              <p className="font-32">Oswald Bold 32pt</p>
              <p className="font-24">Oswald Regular 24pt</p>
              <p className="font-16">Oswald regular 16pt</p>
              <p className="font-14">Oswald semibold 14pt</p>
              <p className="text-black">
                Oswald font is commonly used for heading elements. It's a clean
                and modern sans-serif typeface that is well-suited for creating
                bold and eye-catching headings. Oswald's distinct and stylish
                appearance makes it a popular choice for web designers and
                developers when they want to make headings stand out and convey
                a sense of sophistication.{" "}
              </p>
            </div>
          </Flip>

          <Flip duration={4000} left>
            <div className="col-md-6 bg-white p-5 round-corner bl">
              <p className="xl-font-os">Aa</p>
              <p className="font-32-os">Open Sans Bold 32pt</p>
              <p className="font-24-os">Open Sans Regular 24pt</p>
              <p className="font-16-os">Open Sans regular 16pt</p>
              <p className="font-14-os">Open Sans semibold 14pt</p>
              <p className="text-black">
                By using "Open Sans" for paragraphs and breadcrumbs, web
                designers aim to maintain a consistent and clean typographic
                style throughout the website while ensuring that the text
                remains legible and user-friendly. This choice contributes to a
                cohesive and professional user experience, which is important
                for web design and usability.{" "}
              </p>
            </div>
          </Flip>
        </div>
      </section>
    );
  }
}

export default Brand;
