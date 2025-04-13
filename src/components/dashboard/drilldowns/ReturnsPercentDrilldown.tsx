
import React from 'react';
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const ReturnsPercentDrilldown = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Returns % Drill-Down</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="products">Top Returns</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4">
          <h3 className="text-lg font-medium mb-4">Overall Returns %</h3>
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-red-500">3.2%</span>
              </div>
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#f1f5f9" 
                  strokeWidth="10" 
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="10" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="243"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Of all products sold, 3.2% were returned by customers.
              <br/>This represents 320 out of 10,000 units sold this month.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="category" className="p-4">
          <h3 className="text-lg font-medium mb-4">Returns by Category</h3>
          <div className="space-y-4">
            {[
              { name: 'Dairy', rate: 5.0, units: 150 },
              { name: 'Snacks', rate: 1.2, units: 36 },
              { name: 'Frozen', rate: 0.5, units: 15 },
              { name: 'Beverages', rate: 4.3, units: 129 },
              { name: 'Bakery', rate: 2.1, units: 63 }
            ].map((category) => (
              <div key={category.name} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{category.name}</span>
                  <span className={cn(
                    "font-bold text-sm",
                    category.rate <= 1 ? "text-green-600" : 
                    category.rate <= 3 ? "text-orange-500" : "text-red-500"
                  )}>
                    {category.rate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={cn(
                      "h-2 rounded-full",
                      category.rate <= 1 ? "bg-green-500" : 
                      category.rate <= 3 ? "bg-orange-400" : "bg-red-400"
                    )}
                    style={{ width: `${Math.min(category.rate * 10, 100)}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {category.units} units returned
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="products" className="p-4">
          <h3 className="text-lg font-medium mb-4">Top 10 Returned Products</h3>
          <div className="space-y-2">
            {[
              { name: 'Milk 1L', rate: 3.2, reason: 'Expired' },
              { name: 'Chips Family Pack', rate: 2.8, reason: 'Damaged' },
              { name: 'Yogurt 500g', rate: 2.5, reason: 'Quality Issue' },
              { name: 'Bread Large', rate: 2.3, reason: 'Mold' },
              { name: 'Ice Cream Vanilla', rate: 2.2, reason: 'Melted' },
              { name: 'Butter 250g', rate: 2.0, reason: 'Packaging' },
              { name: 'Soda 2L', rate: 1.8, reason: 'Flat' },
              { name: 'Eggs Dozen', rate: 1.5, reason: 'Broken' },
              { name: 'Cheese Slices', rate: 1.3, reason: 'Expired' },
              { name: 'Coffee 200g', rate: 1.2, reason: 'Wrong Item' }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-2 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{product.name}</span>
                    <span className="ml-2 text-xs px-2 py-0.5 bg-gray-200 rounded-full">
                      {product.reason}
                    </span>
                  </div>
                  <span className={cn(
                    "font-bold text-sm",
                    product.rate <= 1.5 ? "text-orange-500" : "text-red-500"
                  )}>
                    {product.rate}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ReturnsPercentDrilldown;
