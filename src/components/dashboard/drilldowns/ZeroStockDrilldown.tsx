
import React from 'react';
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const ZeroStockDrilldown = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Zero Stock Items Drill-Down</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="frequency">Frequent Stockouts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4">
          <h3 className="text-lg font-medium mb-4">Zero Stock Overview</h3>
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500">45</div>
              <div className="text-sm text-gray-500 mt-2">Items currently out of stock</div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Impact Assessment</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span>15 high-demand items (potential revenue loss)</span>
              </li>
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-orange-500 mr-2"></div>
                <span>20 medium-demand items</span>
              </li>
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <span>10 low-demand items</span>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="category" className="p-4">
          <h3 className="text-lg font-medium mb-4">Zero Stock by Category</h3>
          <div className="space-y-3">
            {[
              { name: 'Dairy', count: 12, highDemand: 5 },
              { name: 'Bakery', count: 8, highDemand: 3 },
              { name: 'Beverages', count: 6, highDemand: 2 },
              { name: 'Snacks', count: 7, highDemand: 2 },
              { name: 'Frozen', count: 5, highDemand: 1 },
              { name: 'Household', count: 7, highDemand: 2 }
            ].map((category) => (
              <div key={category.name} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{category.name}</span>
                  <div className="flex items-center">
                    <span className="text-red-500 font-bold mr-1">{category.count}</span>
                    <span className="text-xs text-gray-500">items</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
                  <span className="text-xs text-red-500">{category.highDemand} high demand</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="frequency" className="p-4">
          <h3 className="text-lg font-medium mb-4">Frequent Stockouts (Last 90 Days)</h3>
          <div className="space-y-2">
            {[
              { name: 'Milk 1L', occurrences: 5, lastStockout: '3 days ago', avgDuration: '5 days' },
              { name: 'Bread White', occurrences: 4, lastStockout: 'Today', avgDuration: '3 days' },
              { name: 'Rice Basmati', occurrences: 3, lastStockout: 'Today', avgDuration: '7 days' },
              { name: 'Eggs Large', occurrences: 3, lastStockout: '2 days ago', avgDuration: '4 days' },
              { name: 'Butter Salted', occurrences: 3, lastStockout: 'Today', avgDuration: '6 days' },
              { name: 'Cooking Oil', occurrences: 2, lastStockout: '1 week ago', avgDuration: '8 days' },
              { name: 'Chicken Whole', occurrences: 2, lastStockout: 'Today', avgDuration: '3 days' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    {item.occurrences}× stockouts
                  </span>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Last: {item.lastStockout}</span>
                  <span>Avg. duration: {item.avgDuration}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ZeroStockDrilldown;
