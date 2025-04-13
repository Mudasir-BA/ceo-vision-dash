
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, Eye, MoreHorizontal } from 'lucide-react';
import { mockLowStockItems } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StockTable = () => {
  const [selectedItem, setSelectedItem] = useState<typeof mockLowStockItems[0] | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [viewType, setViewType] = useState("Low Stock");

  const handleViewDetails = (item: typeof mockLowStockItems[0]) => {
    setSelectedItem(item);
    setDetailsOpen(true);
  };

  // Mock hourly stock data for demo purposes
  const generateHourlyStockData = (item: typeof mockLowStockItems[0]) => {
    const hours = [];
    const currentHour = new Date().getHours();
    
    for (let i = 0; i < 24; i++) {
      const hour = (currentHour - i + 24) % 24;
      const hourLabel = `${hour}:00`;
      
      // Generate some realistic stock fluctuations based on current stock
      let stockLevel = item.currentStock;
      if (i > 0) {
        // Add some random fluctuations for past hours
        const fluctuation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        stockLevel = Math.max(0, stockLevel + fluctuation);
      }
      
      hours.unshift({
        hour: hourLabel,
        stock: stockLevel
      });
    }
    
    return hours;
  };

  return (
    <>
      <Card className="col-span-12">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Stock Alerts</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {viewType}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setViewType("Low Stock")}>Low Stock</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setViewType("Zero Stock")}>Zero Stock</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setViewType("Return Card")}>Return Card</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          {viewType === "Low Stock" && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="mb-4">
                    View Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Show by Shop</DropdownMenuItem>
                  <DropdownMenuItem>Show by Category</DropdownMenuItem>
                  <DropdownMenuItem>Show Summary</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Code</TableHead>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Division / Sub Division</TableHead>
                    <TableHead className="text-right">Current Stock</TableHead>
                    <TableHead className="text-right">Reorder Level</TableHead>
                    <TableHead className="text-right">Coverage (Days)</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLowStockItems.filter(item => item.currentStock > 0).map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="font-medium">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.division} / {item.subdivision}</TableCell>
                      <TableCell className="text-right">{item.currentStock}</TableCell>
                      <TableCell className="text-right">{item.reorderLevel}</TableCell>
                      <TableCell className="text-right">
                        <span className={item.coverageDays < 3 ? "text-dashboard-negative" : item.coverageDays < 7 ? "text-dashboard-warning" : ""}>
                          {item.coverageDays}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        {item.fastMoving ? (
                          <Badge variant="secondary" className="gap-1 bg-dashboard-warning text-white">
                            Fast-Moving
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="gap-1 border-dashboard-negative text-dashboard-negative">
                            Low Stock
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => handleViewDetails(item)}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {viewType === "Zero Stock" && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="mb-4">
                    View Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Show by Shop</DropdownMenuItem>
                  <DropdownMenuItem>Show by Category</DropdownMenuItem>
                  <DropdownMenuItem>Show Summary</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Code</TableHead>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Division / Sub Division</TableHead>
                    <TableHead className="text-right">Current Stock</TableHead>
                    <TableHead className="text-right">Reorder Level</TableHead>
                    <TableHead className="text-right">Last in Stock</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLowStockItems.filter(item => item.currentStock === 0).map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="font-medium">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.division} / {item.subdivision}</TableCell>
                      <TableCell className="text-right">{item.currentStock}</TableCell>
                      <TableCell className="text-right">{item.reorderLevel}</TableCell>
                      <TableCell className="text-right">3 days ago</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="destructive" className="gap-1">
                          <AlertCircle size={12} /> Zero Stock
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => handleViewDetails(item)}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {viewType === "Return Card" && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="mb-4">
                    View Options
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Show Overview</DropdownMenuItem>
                  <DropdownMenuItem>Show by Category</DropdownMenuItem>
                  <DropdownMenuItem>Show by Reason</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Code</TableHead>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Units Sold</TableHead>
                    <TableHead className="text-right">Units Returned</TableHead>
                    <TableHead className="text-right">Return Rate</TableHead>
                    <TableHead>Return Reason</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { code: 'P001', name: 'Milk 1L', category: 'Dairy', sold: 450, returned: 14, returnRate: '3.1%', reason: 'Expired' },
                    { code: 'P002', name: 'Bread', category: 'Bakery', sold: 320, returned: 8, returnRate: '2.5%', reason: 'Damaged' },
                    { code: 'P003', name: 'Yogurt', category: 'Dairy', sold: 250, returned: 10, returnRate: '4.0%', reason: 'Quality Issue' },
                    { code: 'P004', name: 'Chips', category: 'Snacks', sold: 180, returned: 5, returnRate: '2.8%', reason: 'Packaging' },
                    { code: 'P005', name: 'Ice Cream', category: 'Frozen', sold: 120, returned: 3, returnRate: '2.5%', reason: 'Melted' }
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">{item.sold}</TableCell>
                      <TableCell className="text-right">{item.returned}</TableCell>
                      <TableCell className="text-right text-dashboard-negative">{item.returnRate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">
                          {item.reason}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Hourly Stock Level Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-3xl h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {selectedItem?.name} - Hourly Stock Levels
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <Tabs defaultValue="hourly" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="hourly">Hourly View</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hourly" className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{selectedItem?.name}</h3>
                      <p className="text-sm text-gray-500">Code: {selectedItem?.code}</p>
                    </div>
                    <Badge variant={selectedItem?.currentStock === 0 ? "destructive" : "outline"} className="gap-1">
                      {selectedItem?.currentStock === 0 ? "Zero Stock" : "Low Stock"}
                    </Badge>
                  </div>
                  
                  <div className="overflow-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hour</th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Level</th>
                          <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {selectedItem && generateHourlyStockData(selectedItem).map((hour, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{hour.hour}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-right font-semibold">
                              {hour.stock}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-center">
                              <Badge 
                                variant={hour.stock === 0 ? "destructive" : hour.stock < (selectedItem.reorderLevel / 2) ? "secondary" : "outline"}
                                className={`${hour.stock === 0 ? "bg-red-100 text-red-800" : 
                                  hour.stock < (selectedItem.reorderLevel / 2) ? "bg-orange-100 text-orange-800" : 
                                  "bg-gray-100 text-gray-800"}`}
                              >
                                {hour.stock === 0 ? "Zero" : 
                                  hour.stock < (selectedItem.reorderLevel / 2) ? "Critical" : "Low"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="summary" className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-4">Stock Level Summary</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-sm text-gray-500">Current Stock</div>
                      <div className="text-2xl font-bold mt-1">{selectedItem?.currentStock}</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-sm text-gray-500">Reorder Level</div>
                      <div className="text-2xl font-bold mt-1">{selectedItem?.reorderLevel}</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-sm text-gray-500">Coverage</div>
                      <div className="text-2xl font-bold mt-1">{selectedItem?.coverageDays} days</div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-md border">
                      <div className="text-sm text-gray-500">Last Delivery</div>
                      <div className="text-2xl font-bold mt-1">3 days ago</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Recommendations</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Place order for {Math.max(0, selectedItem?.reorderLevel - (selectedItem?.currentStock || 0))} units to reach optimal inventory level</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Consider increasing reorder point based on recent sales velocity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StockTable;
