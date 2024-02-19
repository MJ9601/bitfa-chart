import {
  BarChartComp,
  BioAxialBarChat,
  BioAxialLineChart,
  LineBarChart,
} from "./ui/Components";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24 bg-white w-full justify-center">
      <BarChartComp />
      {/* <BioAxialLineChart /> */}
      <LineBarChart />
      {/* <BioAxialBarChat /> */}
    </main>
  );
}
