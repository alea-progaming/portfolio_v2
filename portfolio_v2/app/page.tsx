import Image from "next/image";
import profile_pic from "./assets/kaji.jpg";

export default function Home() {
  return (
    <>
      <div className="min-w-5/6">
        {/* header */}
        <div className="border-[0.5px] border-black/20 dark:border-white/20  w-50vw inset-shadow-xs shadow-[inset_2px_4px_8px_rgba(0,0,0,0.1)] dark:inset-shadow-white/25 rounded-[10px]">
          <Image
            src={profile_pic}
            alt="profile"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
