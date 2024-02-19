import { LineBarChart } from "./ui/Components";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24 bg-white w-full justify-center">
      <div className="w-11/12 mx-auto">
        <LineBarChart />
      </div>
    </main>
  );
}
