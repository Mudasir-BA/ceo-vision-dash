
import React from 'react';
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TotalSalesDrilldown = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Total Sales Drill-Down</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Sales Trends</TabsTrigger>
          <TabsTrigger value="comparison">Year Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="p-4">
          <h3 className="text-lg font-medium mb-4">Sales Performance Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-sm text-gray-500 mb-1">Total Sales</div>
              <div className="text-2xl font-bold">Rs. 850,000</div>
              <div className="text-xs text-dashboard-positive mt-1">+12.5% vs Last Month</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-sm text-gray-500 mb-1">Average Transaction</div>
              <div className="text-2xl font-bold">Rs. 2,430</div>
              <div className="text-xs text-dashboard-positive mt-1">+5.2% vs Last Month</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-md text-center">
              <div className="text-sm text-gray-500 mb-1">Total Transactions</div>
              <div className="text-2xl font-bold">349</div>
              <div className="text-xs text-dashboard-positive mt-1">+7.1% vs Last Month</div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-3">Sales Breakdown</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cash Sales</span>
                  <span className="font-medium">Rs. 297,500 (35%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Card Sales</span>
                  <span className="font-medium">Rs. 425,000 (50%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Online Sales</span>
                  <span className="font-medium">Rs. 127,500 (15%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="trends" className="p-4">
          <h3 className="text-lg font-medium mb-4">Sales Trends</h3>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h4 className="font-medium mb-2">Daily Sales Trend (Last 7 Days)</h4>
            <div className="h-48 flex items-end justify-between space-x-2">
              {[65, 72, 78, 68, 82, 91, 86].map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-purple-500 rounded-t-sm" 
                    style={{height: `${value}%`}}
                  ></div>
                  <div className="text-xs mt-1">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-3">Peak Sales Hours</h4>
            <div className="space-y-2">
              {[
                {time: '9am-12pm', sales: 215000, percent: 25},
                {time: '12pm-3pm', sales: 297500, percent: 35},
                {time: '3pm-6pm', sales: 170000, percent: 20},
                {time: '6pm-9pm', sales: 167500, percent: 20}
              ].map((slot) => (
                <div key={slot.time}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{slot.time}</span>
                    <span className="font-medium">Rs. {slot.sales.toLocaleString()} ({slot.percent}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: `${slot.percent}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="comparison" className="p-4">
          <h3 className="text-lg font-medium mb-4">Year-over-Year Comparison</h3>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-sm text-gray-500">This Year (YTD)</div>
                <div className="text-xl font-bold">Rs. 6,850,000</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last Year (YTD)</div>
                <div className="text-xl font-bold">Rs. 5,920,000</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-2 bg-green-50 rounded-md">
              <TrendingUp className="h-5 w-5 text-dashboard-positive mr-2" />
              <span className="font-medium text-dashboard-positive">+15.7% Growth</span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Monthly Comparison</h4>
            {[
              {month: 'January', thisYear: 580000, lastYear: 520000, growth: 11.5},
              {month: 'February', thisYear: 620000, lastYear: 540000, growth: 14.8},
              {month: 'March', thisYear: 730000, lastYear: 610000, growth: 19.7},
              {month: 'April', thisYear: 850000, lastYear: 710000, growth: 19.7}
            ].map((month) => (
              <div key={month.month} className="bg-gray-50 p-3 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{month.month}</span>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-dashboard-positive" />
                    <span className="text-dashboard-positive">{month.growth}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>This Year: <span className="font-medium">Rs. {month.thisYear.toLocaleString()}</span></div>
                  <div>Last Year: <span className="font-medium">Rs. {month.lastYear.toLocaleString()}</span></div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TotalSalesDrilldown;
