
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import SalesChart from '@/components/dashboard/SalesChart';
import SalesTargetChart from '@/components/dashboard/SalesTargetChart';
import SalesReturnsChart from '@/components/dashboard/SalesReturnsChart';
import StockTable from '@/components/dashboard/StockTable';
import ShopPerformance from '@/components/dashboard/ShopPerformance';
import { mockStats } from '@/data/mockData';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {mockStats.map((stat, index) => (
            <StatCard 
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              icon={<span className="text-xl">{stat.icon}</span>}
              inverseColors={stat.inverseColors}
            />
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <SalesChart />
          <ShopPerformance />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <SalesTargetChart />
          <SalesReturnsChart />
        </div>

        <Alert variant="destructive" className="mb-6 bg-red-50 border-dashboard-negative/40 text-dashboard-negative">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Critical Stock Alert</AlertTitle>
          <AlertDescription>
            You have 7 items with zero stock and 5 fast-moving items with critically low stock levels.
          </AlertDescription>
        </Alert>

        <StockTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
