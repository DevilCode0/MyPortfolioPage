import Image from "next/image";
import SendMessage from "./Components/SendMessage";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="xl:w-1/2 max-md:w-full justify-center flex">
          <div className="text-white p-12 w-5/6">
            <h1 className="text-5xl xl:text-7xl drop-shadow-glow ">
              Saad Alkathiri
            </h1>
            <p className="p-2">
              Software engineer with a strong foundation in computer programming
              and experience in web development, devops, and docker
              containerization. Seeking an opportunity to contribute my
              technical expertise and passion for software production. Committed
              to delivering high-quality solutions and continuously expanding my
              knowledge in the ever-evolving field of software engineering.
            </p>
            <div className="flex pt-11">
              <a href="https://www.linkedin.com/in/saad-alkathiri/">
                <svg
                  className="fill-slate-50 hover:fill-slate-400 hover:scale-110 transition-transform duration-3000 ease-in-out"
                  width="40px"
                  height="40px"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                </svg>
              </a>
              <a href="https://github.com/DevilCode0/">
                <svg
                  className="fill-slate-50 hover:fill-slate-400 hover:scale-110 transition-transform duration-3000 ease-in-out"
                  width="40px"
                  height="40px"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" />{" "}
                </svg>
              </a>
            </div>
            <a
              href="https://next.s3d340.com/s/LppJa2K7ZgdGwtZ"
              className="mt-4 inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="xl:w-1/2 md:w-full justify-center flex phone:max-md:hidden"></div>
      </div>
      <AboutMe />
      <Projects />
      <SendMessage />
    </>
  );
}
