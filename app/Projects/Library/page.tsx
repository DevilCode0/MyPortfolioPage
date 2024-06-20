import Header from "@/app/Components/Header";
import Image from "next/image";
import Picture1 from "./img/Picture1.png";
import Picture2 from "./img/Picture2.png";
import Picture4 from "./img/Picture4.png";
import Picture6 from "./img/Picture6.png";
import Picture7 from "./img/Picture7.png";
import Picture8 from "./img/Picture8.png";
import Picture9 from "./img/Picture9.png";
import Picture10 from "./img/Picture10.png";
import Picture11 from "./img/Picture11.png";
import Picture12 from "./img/Picture12.png";
import Picture13 from "./img/Picture13.png";
import Picture16 from "./img/Picture16.png";
export default function Library() {
  return (
    <>
      <Header />
      <div className="m-10 border border-gray-700 rounded-md bg-gray-950 lg:flex">
        <div className="lg:w-2/3 border-r border-gray-700">
          <div className="p-12 border-b border-gray-700">
            <h1 className="text-4xl pb-5 max-sm:title">
              E-COMMERCE Platform for Educational and Recreational Books
            </h1>
            <p className=" text-lg">
              My second graduation project for my bachelor's degree It's an
              application for creating CVs and making authentication links for
              your certificates.
            </p>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Introduction</h1>
            <p>
              This project represents the beginning of my career in programming
              and is my graduation project for my associate degree. It showcases
              my skills and knowledge in developing a comprehensive e-commerce
              platform dedicated to selling various types of books, including
              educational, self-help, and novels.
            </p>
          </div>

          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Project Idea</h1>
            <p>
              The project's primary goal is to create a user-friendly website
              that facilitates the purchase of educational and recreational
              books. The platform aims to encourage reading and provide a
              seamless shopping experience for students and book enthusiasts.
            </p>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Objectives</h1>
            <ul className="list-disc list-inside">
              <li>
                Simplify the process of buying books and supplies for customers
              </li>
              <li>Ensure ease of use for the website </li>
            </ul>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Tools and Technologies</h1>
            <ul className="list-disc list-inside">
              <li>WampServer: For creating a local server environment.</li>
              <li>phpMyAdmin: For database management. </li>
              <li>
                Visual Studio Code: For code editing and development using PHP,
                HTML, CSS, and JavaScript.
              </li>
              <li>
                GitHub: For version control and collaboration among team
                members.
              </li>
              <li>
                Visual Paradigm: For designing diagrams like use case,
                flowchart, and ERD.
              </li>
            </ul>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Programming Languages</h1>
            <ul className="list-disc list-inside">
              <li>PHP.</li>
              <li>HTML and CSS. </li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Development Model</h1>
            <p>
              Incremental Development: Chosen because it allows for easy
              modifications and improvements in the project specifications over
              time.
            </p>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Team</h1>
            <ul className="list-disc list-inside">
              <li>Saad Alkathiri</li>
              <li>Marouf AlSubaie </li>
              <li>Fares AlQahtani </li>
            </ul>
          </div>
          <div className="p-12 border-b border-gray-700">
            <h1 className="title p-2">Conclusion</h1>
            <p>
              This project has been a valuable learning experience, helping us
              improve our skills and work as a cohesive team. We hope our
              efforts result in a useful and appreciated platform for book
              lovers and students.
            </p>
          </div>
          <div className="p-12">
            <h1 className="title p-2">full documentation</h1>
            <p>You can find the full documentation here</p>
            <a className="text-blue-600" href="https://s3d340.com/E-COMMERCE">
              https://s3d340.com/E-COMMERCE
            </a>
          </div>
        </div>
        <div className="lg:w-1/3">
          <Image src={Picture1} alt="Picture1" className="p-3" />
          <Image src={Picture4} alt="Picture4" className="p-3" />
          <Image src={Picture6} alt="Picture6" className="p-3" />
          <Image src={Picture8} alt="Picture8" className="p-3" />
          <Image src={Picture9} alt="Picture9" className="p-3" />
          <Image src={Picture10} alt="Picture10" className="p-3" />
          <Image src={Picture13} alt="Picture13" className="p-3" />
          <Image src={Picture16} alt="Picture16" className="p-3" />
        </div>
      </div>
    </>
  );
}
