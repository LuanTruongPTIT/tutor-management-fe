"use client";

import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type RevenueByAttendanceChartProps = {
  data: {
    name: string;
    count: number;
  }[];
};

export function RevenueByAttendanceChart({
  data,
}: RevenueByAttendanceChartProps) {
  return (
    <ResponsiveContainer width="120%" minHeight={200}>
      <PieChart>
        <Tooltip
          cursor={{ fill: "hsl(var(--muted))" }}
          formatter={(value) => formatNumber(value as number)}
        />
        <Pie
          data={data}
          label={(item) => item.name}
          dataKey="count"
          nameKey="name"
          fill="#adfa1d"
          // labelLine={false}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
