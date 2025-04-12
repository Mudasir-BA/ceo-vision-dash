
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
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlertCircle, MoreHorizontal, Truck } from 'lucide-react';
import { mockLowStockItems } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const StockTable = () => {
  return (
    <Card className="col-span-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Stock Alerts</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Low Stock
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>View Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Low Stock</DropdownMenuItem>
            <DropdownMenuItem>Zero Stock</DropdownMenuItem>
            <DropdownMenuItem>Fast-Moving Low Stock</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
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
            {mockLowStockItems.map((item) => (
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
                  {item.currentStock === 0 ? (
                    <Badge variant="destructive" className="gap-1">
                      <AlertCircle size={12} /> Zero Stock
                    </Badge>
                  ) : item.fastMoving ? (
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Truck size={14} />
                        Order More
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>View History</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StockTable;
