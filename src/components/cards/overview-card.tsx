import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResponsiveBarChart from "../charts/responsive-bar-chart";

export default function OverviewCard() {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle className="flex justify-between text-lg">Overview</CardTitle>
        <CardDescription>Solved questions date by date</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveBarChart />
      </CardContent>
    </Card>
  );
}
