import { useState } from "react";
import { Building, BarChart3, DollarSign, AlertTriangle, Settings, Users, Package, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EnterpriseDashboard() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Enterprise Operations Dashboard</h1>
          <p className="text-muted-foreground">Multi-location gas monitoring, usage analytics, and automated management</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Locations</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Across 8 cities</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Cylinders</CardTitle>
              <Package className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,847</div>
              <p className="text-xs text-muted-foreground">98.2% operational</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Usage</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-xs text-muted-foreground"><span className="text-success">+12%</span> vs last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$23.4K</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { location: "Downtown Office", cylinders: 156, level: 78, status: "Good" },
                      { location: "Manufacturing Plant", cylinders: 423, level: 34, status: "Low" },
                      { location: "Research Center", cylinders: 89, level: 67, status: "Good" },
                      { location: "Warehouse Facility", cylinders: 234, level: 91, status: "Full" },
                    ].map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{location.location}</p>
                          <p className="text-sm text-muted-foreground">{location.cylinders} cylinders</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{location.level}% avg</p>
                          <Badge variant={location.status === "Low" ? "destructive" : "default"}>{location.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Auto-Reorder System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <div className="text-lg font-bold text-success">89</div>
                        <p className="text-xs text-muted-foreground">Auto Orders</p>
                      </div>
                      <div className="text-center p-3 bg-warning/10 rounded-lg">
                        <div className="text-lg font-bold text-warning">12</div>
                        <p className="text-xs text-muted-foreground">Pending</p>
                      </div>
                    </div>
                    <Button className="w-full">Configure Auto-Reorder Rules</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Location Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    { name: "Downtown Office", address: "123 Business Ave", cylinders: 156, users: 45, manager: "Sarah Johnson" },
                    { name: "Manufacturing Plant", address: "456 Industrial Rd", cylinders: 423, users: 89, manager: "Mike Chen" },
                    { name: "Research Center", address: "789 Innovation Blvd", cylinders: 89, users: 23, manager: "Dr. Emily Rodriguez" },
                  ].map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                        <p className="text-xs text-muted-foreground">Manager: {location.manager}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{location.cylinders} cylinders</p>
                        <p className="text-sm text-muted-foreground">{location.users} users</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}