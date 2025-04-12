
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: number;
  colorClass?: string;
  inverseColors?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  colorClass = "bg-white",
  inverseColors = false
}) => {
  const isTrendPositive = trend && trend > 0;
  const isTrendNegative = trend && trend < 0;
  
  let trendColor = "text-dashboard-neutral";
  if (isTrendPositive) trendColor = inverseColors ? "text-dashboard-negative" : "text-dashboard-positive";
  if (isTrendNegative) trendColor = inverseColors ? "text-dashboard-positive" : "text-dashboard-negative";

  // Format the value to include PKR currency symbol and comma-separated thousands
  const formattedValue = typeof value === 'number' 
    ? `Rs. ${value.toLocaleString()}` 
    : value;

  return (
    <Card className={cn("overflow-hidden", colorClass)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formattedValue}</div>
        {description && (
          <div className="flex items-center mt-1">
            {trend !== undefined && (
              <>
                {isTrendPositive && <TrendingUp className={cn("mr-1 h-4 w-4", trendColor)} />}
                {isTrendNegative && <TrendingDown className={cn("mr-1 h-4 w-4", trendColor)} />}
                <span className={cn("text-xs font-medium", trendColor)}>
                  {Math.abs(trend).toFixed(1)}% {isTrendPositive ? "increase" : "decrease"}
                </span>
              </>
            )}
            {!trend && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
