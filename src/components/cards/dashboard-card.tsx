import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DashboardCard({
  title,
  description,
  children,
  icon,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle className="flex justify-between text-lg items-center">
          {title} {icon}
        </CardTitle>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{children}</div>
      </CardContent>
    </Card>
  );
}
