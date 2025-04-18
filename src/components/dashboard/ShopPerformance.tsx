
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp } from 'lucide-react';
import { mockTopShops, mockBottomShops } from '@/data/mockData';

interface ShopPerformanceProps {
  dataType: 'quantity' | 'amount';
}

const ShopPerformance: React.FC<ShopPerformanceProps> = ({ dataType }) => {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Shop Performance</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="top">
          <div className="flex justify-end mb-2">
            <TabsList>
              <TabsTrigger value="top">Top</TabsTrigger>
              <TabsTrigger value="bottom">Bottom</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="top">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shop</TableHead>
                  <TableHead className="text-right">Target %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTopShops.map((shop) => (
                  <TableRow key={shop.name}>
                    <TableCell className="font-medium">{shop.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <TrendingUp className="h-4 w-4 mr-1 text-dashboard-positive" />
                        <span className="text-dashboard-positive">{shop.achievement}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="bottom">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shop</TableHead>
                  <TableHead className="text-right">Target %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBottomShops.map((shop) => (
                  <TableRow key={shop.name}>
                    <TableCell className="font-medium">{shop.name}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end">
                        <TrendingDown className="h-4 w-4 mr-1 text-dashboard-negative" />
                        <span className="text-dashboard-negative">{shop.achievement}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ShopPerformance;
