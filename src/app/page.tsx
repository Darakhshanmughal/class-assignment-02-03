import Image from "next/image";
import Header from "@/components/header";
import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        {/* Left side: Introduction */}
        <div className="introduction">
          <h1>Hello i am Darakhshan</h1>
          <p>
            Currently exploring the exciting world of Generative AI. My focus is
            on understanding and developing AI models that can generate creative
            content, ranging from text to images, with the potential to
            revolutionize various industries. I’m passionate about the
            intersection of technology and creativity, and I aim to contribute
            to the growing field of artificial intelligence.
          </p>
          {/* Social Links */}
          <ul className="social-links">
            <li>
              <a href="https://github.com/">
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:xyz@example.com">
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Profile Image */}
        <div className="profile-image">
        <Image 
          src="/profile.jpg" // Path to your image
          alt="Profile"
          className="rounded-full shadow-lg" // Optional styling
          width={400} // Width
          height={500} // Height
        />
      </div>
      </div>
    </div>
  );
}
