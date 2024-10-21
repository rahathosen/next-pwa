"use client"

import React from "react"
import { Card } from "../Card/Card"
import { SparkAreaChart } from "../SparkChart/SparkChart"

const chartdata = [
  {
    month: "Jan 21",
    Performance: 4000,
  },
  {
    month: "Feb 21",
    Performance: 3000,
  },
  {
    month: "Mar 21",
    Performance: 2000,
  },
  {
    month: "Apr 21",
    Performance: 2780,
  },
  {
    month: "May 21",
    Performance: 1890,
  },
  {
    month: "Jun 21",
    Performance: 2390,
  },
  {
    month: "Jul 21",
    Performance: 3490,
  },
]

export function SparkAreaExample() {
  return (
    <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-3.5">
      <div className="flex items-center space-x-2.5">
        <p className="font-medium text-gray-700 dark:text-gray-300">APPL</p>
        <span className="text-sm text-gray-500 dark:text-gray-500">
          Apple Inc.
        </span>
      </div>
      <SparkAreaChart
        data={chartdata}
        categories={["Performance"]}
        index={"month"}
        colors={["emerald"]}
        className="h-8 w-20 sm:h-10 sm:w-36"
      />
      <div className="flex items-center space-x-2.5">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          179.26
        </span>
        <span className="rounded bg-emerald-500 px-2 py-1 text-sm font-medium text-white">
          +1.72%
        </span>
      </div>
    </Card>
  )
}