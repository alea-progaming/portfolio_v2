import Image from "next/image";
import Link from "next/link";
import profile_pic from "@/app/assets/kaji.jpg";
import Projects from "./components/Projects";
import { MapPin, FolderClosed } from "lucide-react";

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
            <div className="flex gap-2 md:mt-0 mt-4 font-bold text-2xl">
              <Link href="mailto:mikaela.programming@gmail.com">Contact</Link>
              <span>|</span>
              <p>Resume</p>
            </div>
          </div>
        </div>
        {/* Location, Animation, Brief intro */}
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <h2 className="text-2xl">
              I am a <span>Frontend Developer</span>
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

      <div className="sm:flex md:flex-row flex-col gap-5 ">
        {/* Projects */}
        <div className="w-[100%] m-auto my-5 p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10">
          <div className="text-start">
            <FolderClosed
              size={64}
              className="bg-white/10 rounded-[10px] p-2.5 inline-block align-middle"
            />
            <h3 className="inline-block ml-2 text-3xl">Projects</h3>
          </div>
          {/* Project Containers */}
          <Projects />
        </div>
        {/* Skills */}
        <div className="w-full m-auto my-5 p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10"></div>
      </div>
    </div>
  );
}
