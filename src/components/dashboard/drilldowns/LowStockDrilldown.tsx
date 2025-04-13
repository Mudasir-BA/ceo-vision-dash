
import React from 'react';
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const LowStockDrilldown = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Low Stock Items Drill-Down</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="items">Critical Items</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4">
          <h3 className="text-lg font-medium mb-4">Low Stock Overview</h3>
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500">123</div>
              <div className="text-sm text-gray-500 mt-2">Items below reorder level</div>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Risk Assessment</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <span>45 items at critical level (less than 3 days of stock)</span>
              </li>
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-orange-500 mr-2"></div>
                <span>58 items at warning level (3-7 days of stock)</span>
              </li>
              <li className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <span>20 items approaching reorder point</span>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="category" className="p-4">
          <h3 className="text-lg font-medium mb-4">Low Stock by Category</h3>
          <div className="space-y-3">
            {[
              { name: 'Dairy', count: 30, critical: 12 },
              { name: 'Bakery', count: 25, critical: 8 },
              { name: 'Beverages', count: 20, critical: 5 },
              { name: 'Snacks', count: 18, critical: 7 },
              { name: 'Frozen', count: 15, critical: 6 },
              { name: 'Household', count: 15, critical: 7 }
            ].map((category) => (
              <div key={category.name} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{category.name}</span>
                  <div className="flex items-center">
                    <span className="text-orange-500 font-bold mr-1">{category.count}</span>
                    <span className="text-xs text-gray-500">items</span>
                  </div>
                </div>
                <div className="mt-1 flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-1"></div>
                  <span className="text-xs text-red-500">{category.critical} critical</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="items" className="p-4">
          <h3 className="text-lg font-medium mb-4">Critical Low Stock Items</h3>
          <div className="overflow-auto max-h-64">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Days Left</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: 'Milk 1L', current: 24, reorder: 50, days: 1.5 },
                  { name: 'Bread White', current: 12, reorder: 30, days: 1 },
                  { name: 'Eggs Dozen', current: 15, reorder: 40, days: 2 },
                  { name: 'Butter 250g', current: 18, reorder: 35, days: 2.5 },
                  { name: 'Rice 5kg', current: 8, reorder: 20, days: 1.5 },
                  { name: 'Sugar 1kg', current: 10, reorder: 25, days: 2 },
                  { name: 'Tea 500g', current: 5, reorder: 15, days: 1 },
                  { name: 'Salt 1kg', current: 7, reorder: 20, days: 3 },
                  { name: 'Cooking Oil 2L', current: 9, reorder: 20, days: 2 },
                  { name: 'Flour 2kg', current: 11, reorder: 25, days: 2.5 }
                ].map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right text-red-500 font-bold">{item.current}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right text-gray-500">{item.reorder}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                      <span 
                        className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          item.days <= 1 ? "bg-red-100 text-red-800" : 
                          item.days <= 2 ? "bg-orange-100 text-orange-800" : 
                          "bg-yellow-100 text-yellow-800"
                        )}
                      >
                        {item.days} days
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LowStockDrilldown;
