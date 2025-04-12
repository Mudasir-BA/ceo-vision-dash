
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mockSalesReturns } from '@/data/mockData';

const SalesReturnsChart = () => {
  return (
    <Card className="col-span-12 lg:col-span-6">
      <CardHeader>
        <CardTitle>Sales vs Returns</CardTitle>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockSalesReturns}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="category" 
              tickLine={false} 
              axisLine={false}
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={50}
            />
            <YAxis 
              yAxisId="left"
              orientation="left" 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right" 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              formatter={(value: any, name: string) => {
                if (name === "sales") return [`$${(value/1000).toFixed(1)}k`, 'Sales'];
                if (name === "returnRate") return [`${value}%`, 'Return Rate'];
                return [value, name];
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar 
              yAxisId="left" 
              dataKey="sales" 
              fill="#7c3aed" 
              name="Sales" 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              yAxisId="right" 
              dataKey="returnRate" 
              fill="#ef4444" 
              name="Return Rate" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesReturnsChart;
