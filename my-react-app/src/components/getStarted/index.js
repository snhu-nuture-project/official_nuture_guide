import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import "./styles.css";
import snhuMarket from "../../images/setup.json";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

class GetStarted extends Component {
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
      <section className="get-started" id="get-started">
        <div className="row">
          <div className="col-md-6">
            <Zoom>
              <h1 className="name text-center">Setting up your PC </h1>
            </Zoom>
            <br />
            <p>
              Use this section as a guide for setting up your PC, Follow each
              step carefully if you run into any issues please contact the help
              desk for 24/7 support at 1-855-877-9919
            </p>
          </div>

          <div class="col-md-6">
            <Lottie
              animationData={snhuMarket}
              loop={true}
              className="marketing"
            />
          </div>

          
        </div>

        <div className="row">
          <Fade delay={1000} left>
        <div className="col-md-6 border p-5">
            <h2>
            <span className="primary">01 </span> Initial Login{" "}
            </h2>
            <hr className="hrt"></hr>
            <p>
              Login inoformation will be emailed to your personal email address
              that you provided to SNHU Human Resources on the Friday before
              your scheduled hire date. Login with your SNHU provided email and
              password.{" "}
              <span className="red-text">
                ***Please DO NOT change your password. IT will walk you through
                a password reset on day 1 to avoid complications ***
              </span>
            </p>
          </div>
          </Fade>

          <Fade delay={1500} right>
          <div className="col-md-6 border p-5">
            <h2>
            <span className="primary">02 </span> Multi-Factor Authentication{" "}
            </h2>
            <hr className="hrt"></hr>
            <p>
              For new staff, when signing-in to SNHU applications seured by
              Microsoft Azurefor the time a page will appear asking to secure
              the SNHU account.
            </p>

            <ol>
              <li>
                Choose your preferred MFA method and follow on screen setup
                instructions. <br></br>
                a. Microsfot Authenticator App - download App onto mobile device
                and click Next <br></br>
                b. Phone/Text (recommended) - Click I want to set up a
                different methods
              </li>

              <li>
                {" "}
                After successful setup of MFA, be sure to check "Don't Remind me
                for 1 day" when logging in each time.
              </li>
            </ol>
          </div>
          </Fade>

          <Fade delay={1000} left> 
          <div className="col-md-6 border p-5">
            <h2>
            <span className="primary">03 </span> Accessing Your Outlook Email{" "}
            </h2>
            <hr className="hrt"></hr>
            <ol>
              <li>
                Locate and click on the blue Outlook icon to open your email.
                This is located on your desktop.
              </li>

              <li>
                {" "}
                Login with your provided SNHU email and password <br></br>
                a. If you have not setup MFA yet, yuo will be prompted to do so.
              </li>

              <li>
                {" "}
                Your email shoudl automatically populate once successfully
                authenticated and logged in.
              </li>
            </ol>
          </div>
        </Fade>

        <Fade delay={1500} right> 
          <div className="col-md-6 border p-5">
              <h2><span className="primary">04 </span> Connecting to the VPN </h2>
              <hr className="hrt"></hr>
              <p>You will need to be connected to the VPN to remorely change your password, access certain webpages, etc. 
              </p>

              <ol>
                <li>Run the Cisco AnyConnect Secure Mobility client by clickin g on the icon. The icon maybe located on your bottom taskbar or desktop.</li>

                <li> On the Cisco AnyConnect client that pops up, click connect.</li>
                <li>VPN will say "Connected to remote.snhu.edu" when successful</li>
                
              </ol>
            </div>
      </Fade >
        </div>
      </section>
    );
  }
}

export default GetStarted;
