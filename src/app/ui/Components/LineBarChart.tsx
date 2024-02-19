"use client";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ws from "../../../../public/walletSummary.json";

const _data = Object.keys(ws.totalBuySellTimes.month).map((itm) => ({
  name: itm,
  // @ts-ignore
  totalTimes: ws.totalBuySellTimes.month[itm],
  // @ts-ignore
  totalBuy: ws.totalBuyAmounts.month[itm],
  // @ts-ignore
  totalSell: ws.totalSellAmounts.month[itm],
}));

export function LineBarChart() {
  const gradientOffset = () => {
    const dataMax = Math.max(..._data.map((i) => i.totalBuy - i.totalSell));
    const dataMin = Math.min(..._data.map((i) => i.totalBuy - i.totalSell));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ComposedChart
      width={800}
      height={400}
      data={_data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        scale="band"
        angle={-45}
        alignmentBaseline="after-edge"
        tickMargin={30}
        fontSize={12}
        height={60}
      />
      <YAxis yAxisId="left" orientation="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend verticalAlign="top" style={{ color: "black" }} />
      <defs>
        <linearGradient id="myBuys" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={0.5} />
          <stop offset={off} stopColor="red" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id="mySells" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Bar
        dataKey="totalSell"
        stackId="a"
        yAxisId="left"
        barSize={30}
        fill="url(#mySells)"
        name="Total Sells"
      />
      <Bar
        dataKey="totalBuy"
        stackId="a"
        yAxisId="left"
        barSize={30}
        fill="url(#myBuys)"
        name="Total Buys"
        // label={{ position: "top" }}
      />
      <Line
        type="monotone"
        dataKey="totalTimes"
        yAxisId="right"
        stroke="#8884d8"
        name="Total Buy and Sell Times"
      />
    </ComposedChart>
  );
}
