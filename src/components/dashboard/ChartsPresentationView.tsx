
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from "recharts";

const ChartsPresentationView = () => {
  // Data for returns by reason
  const returnReasons = [
    { name: 'Expired', value: 35, color: '#ef4444' },
    { name: 'Damaged', value: 25, color: '#f59e0b' },
    { name: 'Quality Issues', value: 18, color: '#3b82f6' },
    { name: 'Wrong Item', value: 12, color: '#10b981' },
    { name: 'Packaging', value: 10, color: '#8b5cf6' }
  ];

  // Data for most popular items
  const popularItems = [
    { name: 'Milk 1L', value: 240, color: '#7c3aed' },
    { name: 'Bread Large', value: 170, color: '#06b6d4' },
    { name: 'Rice 5kg', value: 130, color: '#22c55e' },
    { name: 'Eggs Dozen', value: 120, color: '#eab308' },
    { name: 'Coffee 200g', value: 90, color: '#f97316' }
  ];

  // Data for category returns
  const categoryReturns = [
    { name: 'Dairy', value: 42, color: '#0ea5e9' },
    { name: 'Bakery', value: 28, color: '#ec4899' },
    { name: 'Frozen', value: 15, color: '#14b8a6' },
    { name: 'Beverages', value: 10, color: '#6366f1' },
    { name: 'Snacks', value: 5, color: '#a855f7' }
  ];

  // Custom tooltip formatter
  const renderCustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">
            <span className="font-semibold">{payload[0].value}</span>
            {payload[0].payload.percentage && ` (${payload[0].payload.percentage}%)`}
          </p>
        </div>
      );
    }
    return null;
  };

  // Calculate percentages for each dataset
  const calculatePercentages = (data: any[]) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return data.map(item => ({
      ...item,
      percentage: Math.round((item.value / total) * 100)
    }));
  };

  const reasonsWithPercentage = calculatePercentages(returnReasons);
  const itemsWithPercentage = calculatePercentages(popularItems);
  const categoriesWithPercentage = calculatePercentages(categoryReturns);

  return (
    <div className="animate-fade-in space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard Insights</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Returns by Reason</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reasonsWithPercentage}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percentage}) => `${name}: ${percentage}%`}
                  labelLine={false}
                >
                  {reasonsWithPercentage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Popular Items</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={itemsWithPercentage}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percentage}) => `${name}: ${percentage}%`}
                  labelLine={false}
                >
                  {itemsWithPercentage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Returns by Category</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoriesWithPercentage}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percentage}) => `${name}: ${percentage}%`}
                  labelLine={false}
                >
                  {categoriesWithPercentage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChartsPresentationView;
