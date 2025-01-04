
// LeftSidebar.js
import React from 'react';
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const LeftSidebar = () => {
  const navItems = ['Dashboard', 'Analytics', 'Settings', 'Users', 'Reports', 'Integration'];
  
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-8rem)] w-full md:w-96 border-r bg-background">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <a href="#">{item}</a>
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default LeftSidebar;