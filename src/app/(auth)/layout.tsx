import { PiStudent } from "react-icons/pi";

export default function AuthLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-between ">
    <div className="flex-auto w-64 flex justify-between flex-col p-16 h-screen">
      <div className="flex items-center gap-2 text-xl">
        <PiStudent /> <h1>Stums</h1>
      </div>
      <p className="uppercase font-bold text-4xl">
        Success is not final, failure is not fatal: it is the courage to
        continue that counts
      </p>
    </div>
    <div className="flex-auto w-24 bg-foreground min-h-screen flex justify-center items-center">
      {children}
    </div>
  </main>
  );
}