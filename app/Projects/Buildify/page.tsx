import Header from "@/app/Components/Header";
import Image from "next/image";
import Picture1 from "./img/Picture1.png";
import Picture2 from "./img/Picture2.png";
import Picture3 from "./img/Picture3.png";
import Picture4 from "./img/Picture4.png";
import Picture5 from "./img/Picture5.png";
import Picture6 from "./img/Picture6.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buildify",
  description: "CV/Resume Sharing and Authentication Application",
};
export default function Buildify() {
  return (
    <>
      <Header />
      <div className="m-10 border border-gray-700 rounded-md bg-gray-950 lg:flex max-sm:m-5">
        <div className="lg:w-2/3 border-r border-gray-700">
          <div className="projects-grid">
            <h1 className="text-5xl">Buildify</h1>
            <p className="pb-5 card-body">
              CV/Resume Sharing and Authentication Application
            </p>
            <p className="text-lg ">
              This project is a CV/Resume Sharing and Authentication Application
              designed to help individuals manage and share their resumes/CVs
              while ensuring the authenticity of the information. The
              application provides a platform for users to update their career
              progress and for organizations to verify the credentials of
              potential employees.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Goal of the Project</h1>
            <p>
              The primary goal of the project is to develop an application that
              simplifies the process of creating, sharing, and authenticating
              CVs/resumes. This ensures that organizations can trust the
              information presented by job applicants, thereby improving the
              hiring process and reducing fraudulent claims.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li>
                Creating CVs/Resumes: Users can create and update their
                CVs/resumes.
              </li>
              <li>
                Certificate Authentication: Users can upload and get their
                certificates authenticated to add credibility to their resumes.
              </li>
              <li>
                Secure User and Admin Login: The application employs JWT (JSON
                Web Token) for generating secure tokens, ensuring that only
                authenticated users and admins can access the system.
              </li>
              <li>
                Search Functionality: Organizations and other users can search
                for and view authenticated resumes.
              </li>
              <li>
                Admin Portal: Administrators have a dedicated web application to
                manage users, resumes, and authentication processes.
              </li>
            </ul>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Program Languages and Tools Used</h1>
            <ul className="list-disc list-inside">
              <li>React.js</li>
              <li>TypeScript</li>
              <li>Flutter</li>
              <li>Dart</li>
              <li>OpenAI</li>
              <li>Visual Studio Code.</li>
              <li>Android Studio.</li>
            </ul>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Team</h1>
            <ul className="list-disc list-inside">
              <li>Saad Alkathiri</li>
              <li>Marouf Alsubaie</li>
            </ul>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Conclusion</h1>
            <p>
              The CV/Resume Sharing and Authentication Application enhances the
              trustworthiness of resumes by ensuring that all information is
              verified and authenticated. This project aims to facilitate a more
              reliable hiring process for organizations and provide individuals
              with a credible platform to showcase their career achievements.
              Future work will focus on better integration with organizations
              for seamless authentication and design enhancements for an
              improved user experience.
            </p>
          </div>
          <div className="p-12">
            <h1 className="title p-2">full documentation</h1>
            <p>You can find the full documentation here</p>
            <a className="text-blue-600" href="https://s3d340.com/Buildify">
              https://s3d340.com/Buildify
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 grid grid-cols-2 gap-4">
          <Image src={Picture1} alt="Picture1" className="p-3" />
          <Image src={Picture2} alt="Picture2" className="p-3" />
          <Image src={Picture3} alt="Picture3" className="p-3" />
          <Image src={Picture4} alt="Picture4" className="p-3" />
          <Image src={Picture5} alt="Picture5" className="p-3" />
          <Image src={Picture6} alt="Picture6" className="p-3" />
        </div>
      </div>
    </>
  );
}
