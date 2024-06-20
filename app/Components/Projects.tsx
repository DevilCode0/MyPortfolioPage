"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Projects() {
  const [Select, setSelect] = React.useState("empty");
  const router = useRouter();
  return (
    <motion.div
      className="m-10 p-3 border border-gray-700 rounded-md bg-gray-950"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <h1 className="title p-5">Projects</h1>
      <div className="flex">
        <div className="w-1/2 max-lg:w-full">
          <div
            onClick={() => router.push("/Projects/Portfolio")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800 "
            onMouseOver={() => {
              setSelect("Portfolio");
            }}
          >
            <h1 className="float-right">June 2024</h1>
            <h1 className="card-title">Portfolio page</h1>
            <p className="card-body">
              A beige to show my experience and skills
            </p>
          </div>
          <div
            onClick={() => router.push("/Projects/Buildify")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800"
            onMouseOver={() => setSelect("Buildify")}
          >
            <h1 className="float-right">May 2024</h1>
            <h1 className="card-title">Buildify</h1>
            <p className="card-body">
              My second graduation project for my bachelor's degree It's an
              application for creating CVs and making authentication links for
              your certificates
            </p>
          </div>
          <div
            onClick={() => router.push("/Projects/Server")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800"
            onMouseOver={() => setSelect("Server")}
          >
            <h1 className="float-right">December 2022</h1>
            <h1 className="card-title">Home Server</h1>
            <p className="card-body">
              A file server with ZFS redundant storage, hosting more than 30
              Docker
            </p>
          </div>
          <div
            onClick={() => router.push("/Projects/Library")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800"
            onMouseOver={() => setSelect("Library")}
          >
            <h1 className="float-right">January 2022</h1>
            <h1 className="card-title">Library store website</h1>
            <p className="card-body">
              A graduation project for my associate's degree.
            </p>
          </div>
        </div>
        <motion.div
          className="w-1/2 m-4 p-3 border border-gray-700 rounded-md max-lg:hidden"
          hidden={Select !== "empty"}
        ></motion.div>
        <motion.div
          className="w-1/2 m-4 p-3 border border-gray-700 rounded-md max-lg:hidden relative"
          hidden={Select !== "Portfolio"}
        >
          <h1 className="text-xl p-3">Portfolio page</h1>
          <p>
            A showcase of my expertise in programming and design, highlighting
            my achievements in creating intuitive digital experiences.
          </p>
          <ul className="list-disc list-inside">
            <p>Crafted using :</p>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Framer Motion</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>
        <motion.div
          className="w-1/2 m-4 p-3 border border-gray-700 rounded-md max-lg:hidden"
          hidden={Select !== "Buildify"}
        >
          <h1 className="text-xl p-3">Buildify</h1>
          <p>
            My second graduation project for my bachelor's degree It's an
            application for creating CVs and making authentication links for
            your certificates.
          </p>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Flutter</li>
          </ul>
        </motion.div>
        <motion.div
          className="w-1/2 m-4 p-3 border border-gray-700 rounded-md max-lg:hidden"
          hidden={Select !== "Server"}
        >
          <h1 className="text-xl p-3">Home Server</h1>
          <p>
            A file server with ZFS redundant storage, hosting more than 30
            Docker containers including:
          </p>
          <ul className="list-disc list-inside">
            <li>Smart home server</li>
            <li>DNS server</li>
            <li>Git server</li>
            <li>VPN server</li>
            <li>NextCloud</li>
          </ul>
        </motion.div>
        <motion.div
          className="w-1/2 m-4 p-3 border border-gray-700 rounded-md max-lg:hidden"
          hidden={Select !== "Library"}
        >
          <h1 className="text-xl p-3">Library store website</h1>
          <p>
            A graduation project for my associate's degree. We used HTML, CSS,
            and JavaScript for the front-end, and PHP and SQL for the back-end.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
