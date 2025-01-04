
// RightSidebar.js
import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const RightSidebar = () => {
  return (
    <aside className="fixed top-16 right-0 h-[calc(100vh-8rem)] w-full md:w-96 border-l bg-background">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No new notifications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full">New Item</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">User logged in</p>
              <p className="text-sm text-muted-foreground">New report generated</p>
              <p className="text-sm text-muted-foreground">Settings updated</p>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default RightSidebar;