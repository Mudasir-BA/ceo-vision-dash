
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockDailySales, mockWeeklySales, mockMonthlySales } from '@/data/mockData';

const SalesChart = () => {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Sales Trends</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <div className="flex justify-end mb-2">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="daily" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockDailySales}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Sales']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="current" 
                  stroke="#7c3aed" 
                  strokeWidth={2.5} 
                  dot={false} 
                  name="This Year"
                />
                <Line 
                  type="monotone" 
                  dataKey="previous" 
                  stroke="#94a3b8" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  dot={false} 
                  name="Last Year" 
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#14b8a6" 
                  strokeWidth={2} 
                  strokeDasharray="3 3" 
                  dot={false}
                  name="Forecast" 
                />
                <Legend verticalAlign="top" height={36} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="weekly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockWeeklySales}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="week" 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Sales']}
                  labelFormatter={(label) => `Week: ${label}`}
                />
                <Area 
                  type="monotone" 
                  dataKey="current" 
                  stroke="#7c3aed" 
                  fill="#7c3aed33" 
                  name="This Year"
                />
                <Area 
                  type="monotone" 
                  dataKey="previous" 
                  stroke="#94a3b8" 
                  fill="#94a3b833" 
                  name="Last Year"
                />
                <Legend verticalAlign="top" height={36} />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="monthly" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMonthlySales}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickLine={false} 
                  axisLine={false} 
                  tickMargin={10}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Sales']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar dataKey="current" fill="#7c3aed" name="This Year" radius={[4, 4, 0, 0]} />
                <Bar dataKey="previous" fill="#94a3b8" name="Last Year" radius={[4, 4, 0, 0]} />
                <Legend verticalAlign="top" height={36} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
