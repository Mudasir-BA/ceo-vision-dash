
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  ShoppingCart, 
  PackageOpen, 
  Settings, 
  Users, 
  Calendar, 
  LineChart
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger
} from "@/components/ui/sidebar";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "#",
  },
  {
    title: "Sales",
    icon: BarChart3,
    url: "#",
  },
  {
    title: "Inventory",
    icon: PackageOpen,
    url: "#",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    url: "#",
  },
  {
    title: "Forecasting",
    icon: LineChart,
    url: "#",
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "#",
  },
  {
    title: "Team",
    icon: Users,
    url: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
  },
];

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold">CEO Vision</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-1">
                  <SidebarMenuButton asChild className={item.title === "Dashboard" ? "bg-sidebar-accent" : ""}>
                    <a href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="absolute bottom-4 left-4 md:hidden">
        <SidebarTrigger />
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
