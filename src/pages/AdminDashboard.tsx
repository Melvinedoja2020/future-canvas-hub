import { useState } from "react";
import { Users, Building2, Database, Bell, DollarSign, BarChart3, Settings, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">System Administration Dashboard</h1>
          <p className="text-muted-foreground">
            Manage organizations, users, and monitor global system performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Organizations</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+5.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cylinder Registry</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89,452</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+8.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+15.3%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">System Overview</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="monitoring">Global Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>API Uptime</span>
                      <span>99.98%</span>
                    </div>
                    <Progress value={99.98} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Database Performance</span>
                      <span>97.5%</span>
                    </div>
                    <Progress value={97.5} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>IoT Connectivity</span>
                      <span>96.2%</span>
                    </div>
                    <Progress value={96.2} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">High CPU usage detected</p>
                      <p className="text-sm text-muted-foreground">Database server cluster</p>
                    </div>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Bulk user registration</p>
                      <p className="text-sm text-muted-foreground">Gas Company Delta Corp</p>
                    </div>
                    <Badge variant="outline">Info</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">System backup completed</p>
                      <p className="text-sm text-muted-foreground">Daily backup successful</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">Success</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Organization Performance</CardTitle>
                <CardDescription>Top performing organizations by various metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Metropolitan Gas Corp", cylinders: 12456, uptime: 99.2, revenue: "$145K" },
                    { name: "Urban Delivery Network", cylinders: 8932, uptime: 98.7, revenue: "$98K" },
                    { name: "Industrial Gas Solutions", cylinders: 6754, uptime: 97.9, revenue: "$87K" },
                    { name: "Regional Distribution Co", cylinders: 5421, uptime: 98.4, revenue: "$76K" },
                  ].map((org, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{org.name}</p>
                        <p className="text-sm text-muted-foreground">{org.cylinders} cylinders</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{org.revenue}</p>
                        <p className="text-sm text-muted-foreground">{org.uptime}% uptime</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organizations" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Organization Management</h3>
              <Button>Add Organization</Button>
            </div>
            
            <div className="grid gap-4">
              {[
                { name: "Metropolitan Gas Corp", type: "Gas Company", users: 145, status: "Active", cylinders: 12456 },
                { name: "CityWide Delivery Services", type: "Delivery Company", users: 89, status: "Active", cylinders: 0 },
                { name: "Government Regulatory Body", type: "Government", users: 23, status: "Active", cylinders: 0 },
                { name: "Enterprise Solutions Ltd", type: "Enterprise", users: 67, status: "Active", cylinders: 3421 },
              ].map((org, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <h4 className="font-semibold">{org.name}</h4>
                      <p className="text-sm text-muted-foreground">{org.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{org.users} users</p>
                      {org.cylinders > 0 && (
                        <p className="text-sm text-muted-foreground">{org.cylinders} cylinders</p>
                      )}
                    </div>
                    <Badge className="bg-success text-success-foreground">{org.status}</Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">User Management</h3>
              <Button>Add User</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sarah Johnson", email: "sarah@metrogas.com", role: "Gas Company Admin", org: "Metropolitan Gas Corp", status: "Active" },
                { name: "Mike Chen", email: "mike@citydelivery.com", role: "Fleet Manager", org: "CityWide Delivery", status: "Active" },
                { name: "Dr. Emily Rodriguez", email: "emily@gov.reg", role: "Safety Inspector", org: "Government Regulatory", status: "Active" },
                { name: "James Wilson", email: "james@enterprise.com", role: "Operations Manager", org: "Enterprise Solutions", status: "Active" },
                { name: "Lisa Thompson", email: "lisa@quickgas.com", role: "Technician", org: "QuickGas Services", status: "Inactive" },
                { name: "David Park", email: "david@smartdelivery.com", role: "Driver Supervisor", org: "Smart Delivery Co", status: "Active" },
              ].map((user, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{user.name}</h4>
                        <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                          {user.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-sm font-medium">{user.role}</p>
                      <p className="text-xs text-muted-foreground">{user.org}</p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Global Telemetry Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <div className="text-2xl font-bold text-success">86,432</div>
                      <p className="text-sm text-muted-foreground">Online Devices</p>
                    </div>
                    <div className="text-center p-4 bg-warning/10 rounded-lg">
                      <div className="text-2xl font-bold text-warning">2,341</div>
                      <p className="text-sm text-muted-foreground">Warning Status</p>
                    </div>
                    <div className="text-center p-4 bg-danger/10 rounded-lg">
                      <div className="text-2xl font-bold text-danger">679</div>
                      <p className="text-sm text-muted-foreground">Offline Devices</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">89,452</div>
                      <p className="text-sm text-muted-foreground">Total Registered</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Gas Threshold</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SLA Timeout (Delivery)</span>
                    <Badge variant="outline">24 hours</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Inspection Cycle</span>
                    <Badge variant="outline">2 years</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto-backup Schedule</span>
                    <Badge variant="outline">Daily 2:00 AM</Badge>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}