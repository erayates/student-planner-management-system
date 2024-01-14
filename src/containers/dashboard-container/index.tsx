import { DashboardCard } from "@/components/cards/dashboard-card";
import OverviewCard from "@/components/cards/overview-card";
import ResponsiveBarChart from "@/components/charts/responsive-bar-chart";
import DashboardTable from "@/components/tables/dashboard-table";
import { GoBook, GoQuestion, GoVideo } from "react-icons/go";

export default function DashboardContainer() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="flex gap-8">
        <DashboardCard
          title="Total Courses"
          description="Shows the total number of courses"
          icon={<GoBook />}
        >
          56
        </DashboardCard>
        <DashboardCard
          title="Total Solved Questions"
          description="Shows the total number of questions"
          icon={<GoQuestion />}
        >
          1258
        </DashboardCard>
        <DashboardCard
          title="Total Videos"
          description="Shows the total number of videos"
          icon={<GoVideo />}
        >
          68
        </DashboardCard>

        <DashboardCard
          title="Total Videos"
          description="Shows the total number of the videos"
          icon={<GoQuestion />}
        >
          1258
        </DashboardCard>
      </div>

      <div className="flex gap-8">
        <OverviewCard
          className="w-[55%]"
          title="Overview"
          description="Solved questions date by date"
        >
          <ResponsiveBarChart />
        </OverviewCard>
        <OverviewCard
          className="w-[45%]"
          title="Recent Videos"
          description="Recently addes videos to your subjects"
        >
          <DashboardTable />
        </OverviewCard>
      </div>
    </div>
  );
}
