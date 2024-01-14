import {
  RiMessage3Line,
  RiNotificationLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { PiStudent } from "react-icons/pi";

export default function NavigationBar() {
  return (
    <nav className="flex ml-[26rem] px-4 py-6">
      <div className="flex-1">
        <h1 className="text-2xl font-medium text-foreground">
          <PiStudent className="w-8 h-8 inline-block" /> Stums
        </h1>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <Input placeholder="Search your courses..." className="mr-2" />
        <Switch id="theme-mode" className="mx-2" />
        <Button className="bg-transparent text-foreground hover:bg-transparent">
          <RiMessage3Line className="w-6 h-6" />
        </Button>
        <Button className="bg-transparent text-foreground hover:bg-transparent">
          <RiNotificationLine className="w-6 h-6" />
        </Button>
        <Button className="bg-transparent text-foreground hover:bg-transparent">
          <RiLogoutBoxLine className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
