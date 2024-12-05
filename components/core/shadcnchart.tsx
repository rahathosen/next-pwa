"use client";

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { GitGraph } from 'lucide-react';
const data = [
  { month: "Jan 23", gold22karat: 2900, gold24karat: 2300 },
  { month: "Mar 23", gold22karat: 2800, gold24karat: 2100 },
  { month: "May 23", gold22karat: 3300, gold24karat: 2200 },
  { month: "Jul 23", gold22karat: 3200, gold24karat: 1900 },
  { month: "Sep 23", gold22karat: 2800, gold24karat: 2400 },
  { month: "Nov 23", gold22karat: 5200, gold24karat: 5800 },
];

export default function ShadcnChart() {
  return (
    <div className="pb-8">
      <Card className="shadow-md ">
        <CardHeader className="bg-[#EDD7AE] mb-2">
          <CardDescription >
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <GitGraph className="h-6 w-6 mr-2" />
          Yearly Price Map
        </h2>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ChartContainer
            config={{
              gold22karat: {
                label: "Gold",
                color: "#D3BA89",
              },
              // gold24karat: {
              //   label: "Series 2",
              //   color: "#EDD7AE",
              // },
            }}
            className=""
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                  tickFormatter={(value) => `$${value}`}
                  domain={[0, 4000]}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  cursor={{
                    stroke: "hsl(var(--muted-foreground))",
                    strokeWidth: 1,
                  }}
                />
                <Legend />
                <defs>
                  <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#D3BA89"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="#D3BA89"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  {/* <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(150, 100%, 90%)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(150, 100%, 90%)" stopOpacity={0.1}/>
                </linearGradient> */}
                </defs>
                <Area
                  type="monotone"
                  dataKey="gold22karat"
                  stroke="#D3BA89"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSeries1)"
                  dot={false}
                  activeDot={{ r: 8 }}
                />
                {/* <Area
                  type="monotone"
                  dataKey="gold24karat"
                  stroke="#EDD7AE"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSeries2)"
                  dot={false}
                  activeDot={{ r: 8 }}
                /> */}
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>

        {/* Select Box */}
        {/* <div className="my-5 flex items-center gap-5 px-2">
          <label htmlFor="" className="mt-2">
            Select Type
          </label>
          <div className="flex-1 pt-2 sm:pt-0">
            <select
              id="select"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="bdt">BDT</option>
              <option value="dollar">Dollar</option>
              <option value="gold22">22K GOLD</option>
              <option value="gold18">18K GOLD</option>
            </select>
          </div>
        </div> */}
      </Card>
    </div>
  );
}
