import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { GoBook } from "react-icons/go";

const sidebarListItems = [
  {
    name: "Dashboard",
    icon: <MdOutlineSpaceDashboard className="w-6 h-6" />,
    href: "/dashboard",
  },
  {
    name: "Profile",
    icon: <CgProfile className="w-6 h-6" />,
    href: "/dashboard/profile",
  },
  {
    name: "Courses",
    icon: <GoBook className="w-6 h-6" />,
    href: "/dashboard/courses",
  },
  {
    name: "Calendar",
    icon: <CiCalendar className="w-6 h-6" />,
    href: "/dashboard/calendar",
  },
  {
    name: "Messages",
    icon: <TiMessage className="w-6 h-6" />,
    href: "/dashboard/messages",
  },

  {
    name: "Settings",
    icon: <CiSettings className="w-6 h-6" />,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center justify-between py-24 px-12 bg-foreground w-96 h-screen fixed">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <PiStudent className="w-24 h-24 text-background outline" />
          <h1 className="mt-4 text-2xl font-bold text-background">
            student_867
          </h1>
          <p className=" text-sm text-secondary/50">Student</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-6 w-full gap-2 mt-12">
          {sidebarListItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex text-background w-full items-center text-md gap-4 py-4 px-2 hover:bg-[hsl(223,50%,15%)] rounded-md text-muted"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
