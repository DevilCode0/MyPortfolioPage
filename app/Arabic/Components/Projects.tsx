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
            onClick={() => router.push("Arabic/Projects/Portfolio")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800 cursor-pointer"
            onMouseOver={() => {
              setSelect("Portfolio");
            }}
          >
            <h1 className="float-right">يونيو 2024</h1>
            <h1 className="card-title">Portfolio page</h1>
            <p className="card-body">صفحة لعرض خبرتي ومهاراتي</p>
          </div>
          <div
            onClick={() => router.push("Arabic/Projects/Buildify")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800 cursor-pointer"
            onMouseOver={() => setSelect("Buildify")}
          >
            <h1 className="float-right">مايو 2024</h1>
            <h1 className="card-title">Buildify</h1>
            <p className="card-body">
              مشروع التخرج لشهادة البكالوريوس. إنه تطبيق لإنشاء السير الذاتية
              وإنشاء روابط توثيق للشهادات
            </p>
          </div>
          <div
            onClick={() => router.push("Arabic/Projects/Server")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800 cursor-pointer"
            onMouseOver={() => setSelect("Server")}
          >
            <h1 className="float-right">ديسمبر 2022</h1>
            <h1 className="card-title">Home Server</h1>
            <p className="card-body">
              خادم ملفات مع تخزين زائدي باستخدام ZFS، يستضيف أكثر من 30 حاوية
              Docker
            </p>
          </div>
          <div
            onClick={() => router.push("Arabic/Projects/Library")}
            className="m-4 p-3 border border-gray-700 rounded-md hover:bg-gray-800 cursor-pointer"
            onMouseOver={() => setSelect("Library")}
          >
            <h1 className="float-right">يناير 2022</h1>
            <h1 className="card-title">موقع مكتبة</h1>
            <p className="card-body">مشروع تخرج لشهادة الدبلوم</p>
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
          <p>عرض لخبرتي في البرمجة والتصميم، مع تسليط الضوء على إنجازاتي.</p>
          <ul className="list-disc list-inside">
            <p>تم إنشاؤه باستخدام</p>
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
            مشروعي الثاني للتخرج لشهادة البكالوريوس. إنه تطبيق لإنشاء السير
            الذاتية وإنشاء روابط توثيق لشهاداتك.
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
          <h1 className="text-xl p-3">موقع مكتبة</h1>
          <p>
            A graduation project for my associate&apos;s degree. We used HTML,
            CSS, and JavaScript for the front-end, and PHP and SQL for the
            back-end.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
