import HyperItem from "./hyperItem"
import BlobSVG from "./BlobSVG"
import img from "../assets/prfl.png";
import resume from "../assets/HAITAM_ELGHARRAS.pdf";
import coverLetter from "../assets/Haitam_elgharras_cover_letter.pdf";
import { Link } from "react-router-dom";



export default function Hyper() {
  return (
    <div className="flex flex-col items-center justify-center h-screen from-[#6b7280] to-[#1e293b] text-white">
      <div className="relative w-[550px] h-[550px] bg-[#576ee0] rounded-full shadow-[0_0_35px_rgba(0,10,0,0.4)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <BlobSVG x="0" y="-70" href={img} />
          <h2 className="text-3xl font-bold mb-2">Haitam Elgharras</h2>
          <p className="text-lg text-[#e2e8f0]">Software Engineering Student</p>
          <p className="text-sm text-[#e2e8f0] mt-2">
            Passionate about building high quality software and learning new technologies.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute top-0 left-0 w-full h-full">
              <a
                className="group absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                href="https://www.linkedin.com/in/haitam-elgharras/"
                target="_blank"
              >
                <HyperItem name="LinkedIn" />
              </a>
              <a
                className="group absolute top-1/4 right-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                href="https://github.com/Haitam-Elgharras"
                target="_blank"
              >
                <HyperItem name="GitHub" />
              </a>
              <a
                className="group absolute bottom-1/4 right-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                href="https://haitam-elgharras.vercel.app/"
                target="_blank"
              >
                <HyperItem name="Portfolio" />
              </a>
              <a
                className="group absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                target="_blank"
                href={resume}
              >
                <HyperItem name="Resume" />

              </a>
              <Link
                className="group absolute bottom-1/4 left-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                to={"/essays"}
              >
                <HyperItem name="Essays" />
              </Link>
              <a
                className="group absolute text-center top-1/4 left-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0284c7] transition-colors duration-300"
                href={coverLetter}
                target="_blank"
              >
                <HyperItem name="Cover Letter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}