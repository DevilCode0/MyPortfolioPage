import Header from "@/app/Components/Header";
import Image from "next/image";
import Picture1 from "./img/Screenshot 2024-06-21 004106.png";
import Picture2 from "./img/Screenshot 2024-06-21 004132.png";
import Picture3 from "./img/Screenshot 2024-06-21 004200.png";
import Picture4 from "./img/Screenshot 2024-06-21 004223.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};
export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="m-10 border border-gray-700 rounded-md bg-gray-950 lg:flex max-sm:m-5">
        <div className="lg:w-2/3 border-r border-gray-700">
          <div className="projects-grid">
            <h1 className="text-5xl">Portfolio Website</h1>
            <p className="pb-5 card-body">
              This project Is being used and updated
            </p>

            <p className="text-lg">
              This portfolio website is a showcase of my expertise in
              programming and design, highlighting my achievements in creating
              intuitive and engaging digital experiences.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Goal of the Project</h1>
            <p>
              The primary goal of this project is to present my skills,
              projects, and professional achievements in a visually appealing
              and easily navigable format. It aims to attract potential
              employers or clients by demonstrating my proficiency in modern web
              development and design technologies.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li>
                Professional Showcase: Displays a curated selection of my
                projects, skills, and professional milestones.
              </li>
              <li>
                Responsive Design: Ensures optimal viewing experience across a
                wide range of devices, from desktops to mobile phones.
              </li>
              <li>
                Interactive Elements: Incorporates engaging animations and
                interactive components to enhance user experience.
              </li>
              <li>
                Contact Form: Provides an easy way for potential clients or
                employers to get in touch.
              </li>
            </ul>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Program Languages and Tools Used</h1>
            <ul className="list-disc list-inside">
              <li>React: For building the user interface.</li>
              <li>
                Next.js: For server-side rendering and enhanced performance.
              </li>
              <li>Tailwind CSS: For streamlined and responsive styling.</li>
              <li>
                TypeScript: For type safety and enhanced code maintainability.
              </li>
              <li>
                Framer Motion: For creating smooth animations and transitions.
              </li>
              <li>MongoDB: For managing and storing content data.</li>
            </ul>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Conclusion</h1>
            <p>
              This portfolio website effectively demonstrates my capabilities in
              web development and design, offering a comprehensive view of my
              professional skills and accomplishments. By leveraging modern
              technologies, it provides an engaging and seamless user experience
              that reflects my commitment to creating high-quality digital
              solutions.
            </p>
          </div>
          <div className="p-12">
            <h1 className="title p-2">full documentation</h1>
            <p>You can find the full Project files in Github</p>
            <a
              className="text-blue-600"
              href="https://github.com/DevilCode0/MyPortfolioPage"
            >
              https://github.com/DevilCode0/MyPortfolioPage
            </a>
          </div>
        </div>
        <div className="lg:w-1/3">
          <Image src={Picture1} alt="Picture1" />
          <Image src={Picture2} alt="Picture2" />
          <Image src={Picture3} alt="Picture3" />
          <Image src={Picture4} alt="Picture4" />
        </div>
      </div>
    </>
  );
}
