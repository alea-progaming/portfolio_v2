import Image from "next/image";
import Link from "next/link";
import profile_pic from "@/app/assets/kaji.jpg";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col m-auto my-5 max-w-7xl justify-center">
      {/* Header Container */}
      <div className="w-7xl p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10">
        {/* Profile, h1, contact and resume */}
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-4 h-full">
            <Image
              src={profile_pic}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full"
            />
            <h1 className="text-6xl font-medium">Hi, I'm Mika!</h1>
          </div>
          <div className="flex gap-2 font-bold">
            <Link href="mailto:mikaela.programming@gmail.com">Contact</Link>
            <span>|</span>
            <p>Resume</p>
          </div>
        </div>
        {/* Location, Animation, Brief intro */}
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-center gap-2">
            <span>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1568 16.8819L16.9698 18.0558C16.0949 18.9144 14.9598 20.0184 13.5639 21.3679C12.6917 22.2113 11.3079 22.2112 10.4358 21.3677L6.94466 17.9718C6.5059 17.541 6.13863 17.1777 5.84279 16.8819C2.44238 13.4815 2.44238 7.9683 5.84279 4.56789C9.2432 1.16748 14.7564 1.16748 18.1568 4.56789C21.5572 7.9683 21.5572 13.4815 18.1568 16.8819ZM14.5 10.9996C14.5 9.61875 13.3806 8.49936 11.9998 8.49936C10.619 8.49936 9.49958 9.61875 9.49958 10.9996C9.49958 12.3804 10.619 13.4998 11.9998 13.4998C13.3806 13.4998 14.5 12.3804 14.5 10.9996Z"
                  fill="#6155F5"
                />
              </svg>
            </span>
            <p>Quezon City, Metro Manila, Philippines</p>
          </div>
          <div>
            <h2 className="text-3xl">
              I am a <span>Frontend Developer</span>
            </h2>
          </div>
          <div>
            <p>
              I am a 22 years old passionate web developer based in Metro
              Manila, Philippines.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {/* Projects */}
        <div className="w-[100%] m-auto my-5 p-5 rounded-[10px] border border-black/10 dark:border-white/10 outline-[0.5px] outline-offset-4 outline-black/10 dark:outline-white/10">
          <div className="text-start">
            <div className="inline-block align-middle p-2.5 rounded-md bg-black/10 dark:bg-white/10">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                stroke="square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.8 3.97222V6.11111H7.35442C7.59311 6.11111 7.82203 6.01453 7.99081 5.84263L9.82716 3.97222L7.99081 2.10182C7.82203 1.92991 7.59311 1.83333 7.35442 1.83333H3.9C2.7402 1.83333 1.8 2.79094 1.8 3.97222ZM0 3.97222C0 1.77842 1.74608 0 3.9 0H7.35442C8.0705 0 8.75725 0.289728 9.26361 0.805457L11.4728 3.05556H20.1C22.2539 3.05556 24 4.83397 24 7.02778V18.0278C24 20.2215 22.2539 22 20.1 22H3.9C1.74608 22 0 20.2215 0 18.0278V3.97222ZM1.8 7.94444V18.0278C1.8 19.2091 2.7402 20.1667 3.9 20.1667H20.1C21.2598 20.1667 22.2 19.2091 22.2 18.0278V7.02778C22.2 5.8465 21.2598 4.88889 20.1 4.88889H11.4728L9.26361 7.13899C8.75725 7.65472 8.0705 7.94444 7.35442 7.94444H1.8Z" />
              </svg>
            </div>
            <h3 className="inline-block align-middle ml-2 text-2xl">
              Projects
            </h3>
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
