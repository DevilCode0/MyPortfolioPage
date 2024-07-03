import Header from "@/app/Arabic/Components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Server",
  description: "My Home Server",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="m-10 border border-gray-700 rounded-md bg-gray-950 max-sm:m-5">
        <div className=" border-gray-700">
          <div className="projects-grid">
            <h1 className="text-5xl">Home Server</h1>
            <p className="pb-5 card-body">
              This project Is being used and updated
            </p>

            <p className="text-lg">
              This project is a home server equipped with ZFS redundant storage,
              hosting over 30 Docker containers that support various services
              including smart home automation, DNS, Git, VPN, and NextCloud.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Goal of the Project</h1>
            <p>
              The primary goal of this project is to create a reliable and
              secure home server that centralizes and manages multiple services
              efficiently. By using Docker containers and ZFS storage, the
              project aims to ensure data redundancy, ease of management, and
              high availability for essential home and development services.
            </p>
          </div>
          <div className="projects-grid">
            <h1 className="title p-2">Key Features</h1>
            <ul className="list-disc list-inside">
              <li>
                ZFS Redundant Storage: Ensures data integrity and protection
                through advanced features like snapshots, replication, and
                self-healing.
              </li>
              <li>
                Smart Home Server: Manages and automates various smart home
                devices for improved convenience and energy efficiency.
              </li>
              <li>
                DNS Server: Provides a local DNS service for faster and more
                reliable network name resolution.
              </li>
              <li>
                Git Server: Hosts Git repositories for version control and
                collaborative development.
              </li>
              <li>
                VPN Server: Offers secure remote access to the home network,
                ensuring privacy and protection.
              </li>
              <li>
                NextCloud: Provides a personal cloud solution for file storage,
                synchronization, and sharing.
              </li>
            </ul>
          </div>

          <div className="projects-grid">
            <h1 className="title p-2">Conclusion</h1>
            <p>
              The home server project demonstrates the effective use of Docker
              and ZFS to create a versatile and robust home network
              infrastructure. By integrating multiple services, it offers
              enhanced data security, improved home automation, and streamlined
              management of development and personal resources.
            </p>
          </div>
          <div className="p-12">
            <h1 className="title p-2">full documentation</h1>
            <p>
              Due to the private nature of this home server project, detailed
              documentation is not available for public distribution. This
              ensures the security and privacy of the personal and sensitive
              information managed by the server.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
