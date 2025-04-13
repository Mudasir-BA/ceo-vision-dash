
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { SidebarProvider } from '@/components/ui/sidebar';
import ChartsPresentationView from './ChartsPresentationView';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const togglePresentationMode = () => {
    setIsPresentationMode(!isPresentationMode);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {!isPresentationMode && <Sidebar />}
        <div className="flex-1 flex flex-col">
          <TopBar isPresentationMode={isPresentationMode} togglePresentationMode={togglePresentationMode} />
          <main className="flex-1 p-4 md:p-6 bg-gray-50 overflow-auto">
            {isPresentationMode ? <ChartsPresentationView /> : children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
