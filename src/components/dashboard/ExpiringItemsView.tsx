
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

interface ExpiringItemsViewProps {
  dataType: 'quantity' | 'amount';
}

const ExpiringItemsView: React.FC<ExpiringItemsViewProps> = ({ dataType }) => {
  const nearExpiringData = [
    {
      shop: "Shop A",
      items: [
        { name: "Milk 1L", quantity: 45, amount: 2250, expiryDate: "2025-04-25" },
        { name: "Yogurt 500g", quantity: 30, amount: 1500, expiryDate: "2025-04-23" }
      ]
    },
    {
      shop: "Shop B",
      items: [
        { name: "Cheese 200g", quantity: 25, amount: 3750, expiryDate: "2025-04-24" },
        { name: "Butter 100g", quantity: 20, amount: 1000, expiryDate: "2025-04-22" }
      ]
    }
  ];

  const expiredData = [
    {
      shop: "Shop A",
      items: [
        { name: "Bread", quantity: 10, amount: 400, expiryDate: "2025-04-17" },
        { name: "Eggs", quantity: 15, amount: 750, expiryDate: "2025-04-16" }
      ]
    },
    {
      shop: "Shop B",
      items: [
        { name: "Juice 1L", quantity: 8, amount: 560, expiryDate: "2025-04-15" },
        { name: "Pasta 500g", quantity: 12, amount: 600, expiryDate: "2025-04-14" }
      ]
    }
  ];

  const renderTable = (data: typeof nearExpiringData) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Shop</TableHead>
          <TableHead>Item Name</TableHead>
          <TableHead>{dataType === 'quantity' ? 'Quantity' : 'Amount (Rs.)'}</TableHead>
          <TableHead>Expiry Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((shop) => (
          shop.items.map((item, itemIndex) => (
            <TableRow key={`${shop.shop}-${itemIndex}`}>
              {itemIndex === 0 && (
                <TableCell rowSpan={shop.items.length}>{shop.shop}</TableCell>
              )}
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {dataType === 'quantity' 
                  ? item.quantity 
                  : `Rs. ${item.amount.toLocaleString()}`
                }
              </TableCell>
              <TableCell>{new Date(item.expiryDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expiring Items Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="near-expiring" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="near-expiring">Near Expiring Items</TabsTrigger>
            <TabsTrigger value="expired">Expired Items</TabsTrigger>
          </TabsList>
          <TabsContent value="near-expiring" className="mt-4">
            {renderTable(nearExpiringData)}
          </TabsContent>
          <TabsContent value="expired" className="mt-4">
            {renderTable(expiredData)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ExpiringItemsView;
