
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mockSalesTarget } from '@/data/mockData';

const SalesTargetChart = () => {
  return (
    <Card className="col-span-12 lg:col-span-6">
      <CardHeader>
        <CardTitle>Sales Target Achievement</CardTitle>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockSalesTarget}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 90, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              tickLine={false} 
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              type="category" 
              dataKey="region" 
              tickLine={false} 
              axisLine={false}
              width={90}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value: any) => [`${value}%`, 'Achievement']}
              cursor={{ fill: '#f3f4f6' }}
            />
            <Bar dataKey="achievement" minPointSize={2} background={{ fill: '#f3f4f6' }}>
              {mockSalesTarget.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.achievement >= 100 ? '#22c55e' : entry.achievement >= 80 ? '#14b8a6' : entry.achievement >= 60 ? '#f59e0b' : '#ef4444'} 
                />
              ))}
              <LabelList dataKey="achievement" position="insideRight" formatter={(value: number) => `${value}%`} fill="#ffffff" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesTargetChart;
