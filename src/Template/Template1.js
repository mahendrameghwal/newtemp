import "../css/Template1.css";
import React from "react";

const Template1 = () => {
  return (
    <div className="Template1-container">
      {
        // information
      }
      <div className="name-info">
        <h2>OLIVIA WILSON</h2>
        <span>New Delhi</span> | <span>olivia@gmail.com</span> |{" "}
        <span>olivia.com</span>
        <h3>SOFTWARE ENGINEER</h3>
      </div>

      {
        // techincal skill
      }

      <div className="Tech-skill">
        <h2 className="heading">TECHNICAL SKILL</h2>
        <div className="inner-tech-skill">
          <ul>
            <li>HTML</li>
            <li>SWIFT</li>
            <li>APL/XV</li>
            <li>DATA STRUCTURE</li>
            <li>STORY BLOOP</li>
            <li>A37++</li>
            <li>C++</li>
          </ul>
        </div>
      </div>

      {
        //PROJECT
      }

      <div className="project">
        <h2 className="heading">PROJECT</h2>
        <div className="inner-project">
          <h4 className="project-name">
            Instant chat App | <span>Lukratso</span>
          </h4>
          <ul className="project-details">
            <li>Developed a standard web application using story book/Ap</li>
            <li>Imporved user Exprience and finding bugs in the chat apps</li>
          </ul>
        </div>

        <div className="inner-project">
          <h4 className="project-name">
            Weather App | <span>Lukratso</span>
          </h4>
          <ul className="project-details">
            <li>
              collect and analyse data from diffrent expirence of level of the
              app
            </li>
            <li>makes recommandation and improvement based on analysis</li>
            <li>Supervise Implimention of recommandation</li>
          </ul>
        </div>
      </div>

      {
        //education
      }

      <div className="education">
        <h2 className="heading">EDUCATION</h2>
        <div className="inner-education">
          <div>
            <div className="college-container">
              <h4 className="college-name">
                Computer and Scinece Architect Management (Online)
              </h4>{" "}
              <span>May-2019 - Nov-2019</span>
            </div>
          </div>
          <ul className="education-details">
            <li>study in software management and bussiness analysis</li>
            <li>work with variouscoordination and effiency</li>
          </ul>
        </div>

        <div className="inner-education">
          <div>
            <div className="college-container">
              <h4 className="college-name">
                Chemical Engineering and technology management
              </h4>{" "}
              <span>May-2021 - Nov-2021</span>
            </div>
          </div>
          <ul className="education-details">
            <li>GPA:3.19</li>
            <li>study in software management and bussiness analysis</li>
            <li>
              {" "}
              thesis in Modling and analysis of process effiency in a cement
              plant
            </li>
          </ul>
        </div>
      </div>

      {
        //work-exprience
      }
      <div>
        <h2 className="heading">WORK-EXPRIENCE</h2>

        <div className="inner-workexp">
          <div className="workexp-container">
            <h4 className="company-name">Policy manager | laxmark Inc</h4>{" "}
            <span>Jan-2021 - Present</span>
          </div>

          <ul className="education-details">
            <li>
              Formulate and ploicy and as a regard and Industry Developement
            </li>
            <li>
              {" "}
              Create a functional and techincal application of set Policies
            </li>
          </ul>
        </div>

        <div className="inner-workexp">
          <div className="workexp-container">
            <h4 className="company-name">
              Quality Control Engineer | KrystaPointe water
            </h4>{" "}
            <span>Jan-2019 - Dec-2019</span>
          </div>

          <ul className="workexp-details">
            <li>Supervise Impletion and</li>
            <li>
              Formulate and ploicy and as a regard and Industry Developement
            </li>
            <li>
              {" "}
              Create a functional and techincal application of set Policies
            </li>
          </ul>
        </div>
      </div>

      {
        // award-achivement
      }

      <div>
        <h2 className="heading">AWARD & ACHIVEMENTS</h2>

        <div className="inner-award">
          <ul className="award-details">
            <li>Most Inoviatetive Employee of the yaear 2021 (LaxMark)</li>
            <li>Project Leader Dandlition (2021)</li>
            <li> Overall best New Employee ,crystaPonite(2019)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template1;
