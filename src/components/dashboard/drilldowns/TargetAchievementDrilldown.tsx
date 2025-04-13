
import React from 'react';
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TargetAchievementDrilldown = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Target Achievement Drill-Down</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="shop">By Shop</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4">
          <h3 className="text-lg font-medium mb-4">Overall Target Achievement</h3>
          <div className="bg-gray-100 p-6 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Target: Rs. 1,000,000</span>
              <span className="text-sm text-gray-500">Achieved: Rs. 850,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-purple-600 h-4 rounded-full" 
                style={{ width: "85%" }}
              ></div>
            </div>
            <div className="mt-2 text-center font-bold">85% Achieved</div>
          </div>
        </TabsContent>
        <TabsContent value="category" className="p-4">
          <h3 className="text-lg font-medium mb-4">Achievement by Category</h3>
          <div className="space-y-4">
            {[
              { name: 'Beverages', target: 250000, achieved: 225000, percent: 90 },
              { name: 'Snacks', target: 300000, achieved: 225000, percent: 75 },
              { name: 'Dairy', target: 200000, achieved: 190000, percent: 95 },
              { name: 'Bakery', target: 150000, achieved: 127500, percent: 85 },
              { name: 'Frozen', target: 100000, achieved: 82500, percent: 82.5 }
            ].map((category) => (
              <div key={category.name} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{category.name}</span>
                  <span className={cn(
                    "font-bold text-sm",
                    category.percent >= 90 ? "text-green-600" : 
                    category.percent >= 75 ? "text-blue-600" : "text-orange-500"
                  )}>
                    {category.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={cn(
                      "h-2 rounded-full",
                      category.percent >= 90 ? "bg-green-500" : 
                      category.percent >= 75 ? "bg-blue-500" : "bg-orange-400"
                    )}
                    style={{ width: `${category.percent}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Rs. {category.achieved.toLocaleString()} of Rs. {category.target.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="shop" className="p-4">
          <h3 className="text-lg font-medium mb-4">Achievement by Shop</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { name: 'Shop A', achievement: 110 },
              { name: 'Shop B', achievement: 70 },
              { name: 'Shop C', achievement: 85 },
              { name: 'Shop D', achievement: 95 },
              { name: 'Shop E', achievement: 88 }
            ].map((shop) => (
              <div 
                key={shop.name} 
                className={cn(
                  "p-3 rounded-md flex justify-between items-center",
                  shop.achievement >= 100 ? "bg-green-50" : 
                  shop.achievement >= 80 ? "bg-blue-50" : "bg-orange-50"
                )}
              >
                <span className="font-medium">{shop.name}</span>
                <div className="flex items-center">
                  <span className={cn(
                    "font-bold",
                    shop.achievement >= 100 ? "text-green-600" : 
                    shop.achievement >= 80 ? "text-blue-600" : "text-orange-500"
                  )}>
                    {shop.achievement}%
                  </span>
                  {shop.achievement >= 100 ? 
                    <TrendingUp className="ml-1 h-4 w-4 text-green-600" /> : 
                    shop.achievement < 80 ? 
                      <TrendingDown className="ml-1 h-4 w-4 text-orange-500" /> : 
                      null
                  }
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TargetAchievementDrilldown;
