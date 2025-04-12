
import React, { useState } from 'react';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [drilldownOpen, setDrilldownOpen] = useState(false);

  const handleStatCardClick = (statTitle: string) => {
    setSelectedStat(statTitle);
    setDrilldownOpen(true);
  };

  const renderDrilldownContent = () => {
    if (!selectedStat) return null;

    switch (selectedStat) {
      case 'Total Sales':
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
                          shop.achievement >= 80 ? 
                            null : 
                            <TrendingDown className="ml-1 h-4 w-4 text-orange-500" />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </>
        );
        
      case 'Return Rate':
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
        
      case 'Low Stock':
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
        
      case 'Zero Stock':
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
        
      default:
        return null;
    }
  };

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
              onClick={() => handleStatCardClick(stat.title)}
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

      <Dialog open={drilldownOpen} onOpenChange={setDrilldownOpen}>
        <DialogContent className="max-w-3xl h-[80vh] overflow-auto">
          {renderDrilldownContent()}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Index;
