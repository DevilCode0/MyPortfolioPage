export default function AboutMe() {
  return (
    <div className="bg-gray-950 p-10 pb-32">
      <h1 className="title">About me</h1>
      <div className="flex">
        <div className="xl:w-1/3 max-xl:hidden"></div>
        <div className="xl:w-2/3 w-full items-center justify-center justify flex">
          <div>
            <h1 className="text-3xl">
              A{" "}
              <span className="drop-shadow-glow text-sky-300">
                Software Engineer
              </span>
            </h1>
            <p className="pb-5">With experience in</p>
            <li>FullStack Development</li>
            <li>Application evelopment</li>
            <li>DevOps</li>
            <li>Docker Containerization</li>
            <li>3D Designing</li>
          </div>
        </div>
      </div>
    </div>
  );
}
