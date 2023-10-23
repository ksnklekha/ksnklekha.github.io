import React from "react";
import SNISTLogo from "../assets/images/education/snistlogo.png";
import "../assets/css/education.css";
import Fade from "react-reveal/Fade";

const Education = (props) => {
  return (
    <React.Fragment>
      <div className="educationSection">
        <div className="container sectionTitleContainer">
          <b className="sectionTitle">Education</b>
        </div>
        <div className="container">
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <a
                  href={"https://www.gwu.edu/"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/d/da/George_Washington_University_wordmark.svg"
                    }
                    alt={"George Washington University"}
                    height={40}
                  />
                </a>
              </div>
              <section className="col school">
                <b> The George Washington University</b>
                <br />
                <div className="major">
                  <i>Master of Science, Computer Science</i>
                  <br /> <br />
                  <b>Course work:</b> Design and Analysis of Algorithms,
                  Database Management Systems, Object Oriented Design, Internet
                  Protocols, Software Engineering, Advanced Software Paradigms,
                  Computer System Architecture, Data Compression
                  <br />
                  <br />
                  <a
                    href="https://drive.google.com/file/d/1liFlJkvFQ6cQ9fUl9eWErTe6jWVB3TU2/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See transcript
                  </a>
                </div>
              </section>
              <section className="col-2">May, 2024</section>
            </div>
          </Fade>

          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <a
                  href="https://sreenidhi.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={SNISTLogo}
                    alt={"Sreenidhi Institute of Science & Technology"}
                    height={40}
                  />
                </a>
              </div>
              <section className="col school">
                <b>Sreenidhi Institute of Science & Technology</b>
                <br />
                <div className="major">
                  <i>
                    Bachelor of Technology, Electronics & Communication
                    Engineering
                  </i>
                  <br /> <br />
                  <b>Course work:</b> Computer Programming, Data Structures,
                  Java Programming, Computer Networks, Cloud Computing, IoT
                  <br />
                  <br />
                  <a
                    href="https://drive.google.com/file/d/1otwjlI7oieZRfJI680Ir0t6pSF3Lf2id/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See transcript
                  </a>
                </div>
              </section>
              <section className="col-2">May, 2019</section>
            </div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
