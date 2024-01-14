import { DashboardCard } from "@/components/cards/dashboard-card";
import OverviewCard from "@/components/cards/overview-card";
import { GoBook, GoQuestion } from "react-icons/go";

export default function DashboardContainer() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="flex">
        <DashboardCard
          title="Total Courses"
          description="Shows the total number of the courses"
          icon={<GoBook />}
        >
          56
        </DashboardCard>
        <DashboardCard
          title="Total Solved Questions"
          description="Shows the total number of the solved questions"
          icon={<GoQuestion />}
        >
          1258
        </DashboardCard>
        <DashboardCard
          title="Total Videos"
          description="Shows the total number of the videos"
          icon={<GoQuestion />}
        >
          1258
        </DashboardCard>
    
      </div>

      <OverviewCard />
    </div>
  );
}
