import Image from "next/image";
import Link from "next/link";
import profile_pic from "@/app/assets/kaji.jpg";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import {
  MapPin,
  FolderClosed,
  Layers,
  User,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-11/12 m-auto my-5 justify-center">
      {/* Header Container */}
      <div className="p-7 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10 text-base">
        {/* Profile, h1, contact and resume */}
        <div className="flex flex-col justify-between items-start gap-4">
          <div className="flex items-center gap-4 h-full">
            <Image
              src={profile_pic}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full"
            />
            <h1 className="text-5xl font-medium">Hi, I'm Mika!</h1>
          </div>
          <div className="w-full md:flex gap-4 justify-between">
            <div className="flex items-center gap-2 text-white/40">
              <MapPin color="#6155F5" />
              <p>Quezon City, Metro Manila, Philippines</p>
            </div>
            <div className="flex gap-2 md:mt-0 mt-4 font-bold text-lg">
              <Link href="mailto:mikaela.programming@gmail.com">Contact</Link>
              <span>|</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
        {/* Location, Animation, Brief intro */}
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <h2 className="text-2xl">
              I am a{" "}
              <span className="text-[#6155F5] font-bold">
                Frontend Developer
              </span>
            </h2>
          </div>
          <div>
            <p className="bg-white/5 p-2 rounded">
              I am a 22 years old passionate web developer based in Metro
              Manila, Philippines.
            </p>
          </div>
        </div>
      </div>

      {/* Projects and Skills */}
      <div className="flex md:flex-row space-x-5 flex-col md:h-[500px]">
        {/* Projects */}
        <div className="w-[100%] mt-5 p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10 md:overflow-y-scroll custom-scrollbar">
          <div className="text-start">
            <FolderClosed
              size={64}
              className="bg-white/10 rounded-[10px] p-2.5 inline-block align-middle"
            />
            <h3 className="inline-block ml-2 text-4xl">Projects</h3>
          </div>
          {/* Project Containers */}
          <Projects />
        </div>
        {/* Skills */}
        <div className="w-full mt-5 p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10">
          <div className="text-start">
            <Layers
              size={64}
              className="bg-white/10 rounded-[10px] p-2.5 inline-block align-middle"
            />
            <h3 className="inline-block ml-2 text-4xl">Tech Stack</h3>
          </div>
          <TechStack />
        </div>
      </div>
      {/* About me & Links */}
      <div className="p-7 mt-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10 text-base">
        <div className="text-start ">
          <User
            size={64}
            className="bg-white/10 rounded-[10px] p-2.5 inline-block align-middle"
          />
          <h3 className="inline-block ml-2 text-4xl">About Me</h3>
          <div className="text-start flex md:flex-row md:justify-between md:items-center flex-col">
            <p className="mt-5 text-lg md:w-4/6">
              Hi, I’m Mika — a 22-year-old web developer from Metro Manila. I
              build user-focused websites and keep up with the latest in web
              development. Off the clock, I’m into watching films and playing
              horror games.
            </p>
            <div className="mt-5">
              <h4 className="text-3xl">Connect with Me</h4>
              {/* Social links  */}
              <div className="flex gap-4 mt-5 text-lg">
                <Link href="mailto:mikaela.purugganan@gmail.com">
                  <Mail size={50} className="bg-white/10 p-2 rounded-lg" />
                </Link>
                <Link href="https://github.com/alea-progaming">
                  <Github size={50} className="bg-white/10 p-2 rounded-lg" />
                </Link>
                <Link href="www.linkedin.com/in/mikaela-purugganan-6643b0277">
                  <Linkedin size={50} className="bg-white/10 p-2 rounded-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
