import React from "react";
import GWUEngineering from "../assets/images/work/gwu_engg.png";
import "../assets/css/work.css";
import Fade from "react-reveal/Fade";

const Work = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid workSection">
        <div className="container sectionTitleContainer">
          <b className="sectionTitle">Work</b>
        </div>
        <div className="container">
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <a
                  href={
                    "https://www.linkedin.com/school/the-george-washington-university---school-of-engineering-&-applied-science/mycompany/"
                  }
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    src={GWUEngineering}
                    alt={"GWU Engineering"}
                    height={40}
                    style={{ borderRadius: "5px" }}
                  />
                </a>
              </div>
              <section className="col col-sm col-md role">
                <b>Student Academic Assistant</b>
                <br />
                <div className="org">
                  <i>
                    Department of Computer Science, The George Washington
                    University
                  </i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                        Solved and crafted solutions to 50+ complex algorithmic
                        problems
                      </li>
                      <li>
                        Graded assignments and provided constructive feedback,
                        boosting student performance by 10%
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="col-2 col-sm-2 col-md-2">
                August, 2023 - Present
              </section>
            </div>
          </Fade>
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg"
                  }
                  alt={"Accenture"}
                  height={20}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <section className="col col-sm col-md role">
                <b>Software Engineer</b>
                <br />
                <div className="org">
                  <i>Accenture</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                        Designed a comprehensive full-stack web application to
                        monitor server health in real-time, reducing server
                        downtime by 25% and improving overall task efficiency by
                        30%
                      </li>
                      <li>
                        Designed a web application to filter valid error codes,
                        link correction procedures to facilitate re-testing, and
                        downsized defect occurrences by 20%
                      </li>
                      <li>
                        Created reports using SQL Server Reporting Service to
                        track yield and boosted production efficiency by 25%
                      </li>
                      <li>
                        Automated sanity checks and triggered email alerts upon
                        task failures, reduced troubleshooting time by 15%
                      </li>
                      <li>
                        Resolved 100+ support tickets and mitigated
                        customer-impacting production issues during on-call
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="col-2 col-sm-2 col-md-2">
                June, 2019 - May, 2022
              </section>
            </div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
