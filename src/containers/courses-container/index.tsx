import { DataTable } from "@/components/tables/data-table";
import { Payment, columns } from "@/components/tables/data-table/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function CoursesContainer() {
  const data = await getData();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-bold text-4xl">Courses</h1>
        <p className="text-sm">Manage your courses and their subjects</p>
      </div>
      <div className="flex gap-8">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
