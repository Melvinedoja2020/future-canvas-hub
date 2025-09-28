import { useState } from "react";
import { Factory, Package, Activity, Truck, Calendar, TrendingUp, Wrench, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GasCompanyDashboard() {
  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Gas Company Operations Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive cylinder lifecycle management, IoT monitoring, and operational analytics
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cylinders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,567</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+3.2%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active IoT Devices</CardTitle>
              <Activity className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23,891</div>
              <p className="text-xs text-muted-foreground">
                97.2% connectivity rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Refills</CardTitle>
              <Truck className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+12%</span> vs yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue (Month)</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$847K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+18.5%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
            <TabsTrigger value="telemetry">IoT Monitoring</TabsTrigger>
            <TabsTrigger value="refilling">Refilling</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Cylinder Inventory Overview
                  </CardTitle>
                  <CardDescription>Real-time inventory status across all locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-success">18,456</div>
                        <p className="text-sm text-muted-foreground">In Circulation</p>
                      </div>
                      <div className="text-center p-4 bg-warning/10 rounded-lg">
                        <div className="text-2xl font-bold text-warning">3,245</div>
                        <p className="text-sm text-muted-foreground">At Stations</p>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">2,866</div>
                        <p className="text-sm text-muted-foreground">In Transit</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Inventory by Location</h4>
                      {[
                        { location: "Central Depot", cylinders: 5432, capacity: 8000, utilization: 67.9 },
                        { location: "North Distribution Hub", cylinders: 3456, capacity: 4500, utilization: 76.8 },
                        { location: "South Warehouse", cylinders: 2876, capacity: 3500, utilization: 82.2 },
                        { location: "East Storage Facility", cylinders: 1987, capacity: 2800, utilization: 71.0 },
                      ].map((location, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{location.location}</span>
                            <span>{location.cylinders}/{location.capacity} ({location.utilization}%)</span>
                          </div>
                          <Progress value={location.utilization} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">
                    <Package className="h-4 w-4 mr-2" />
                    Register New Cylinder
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Truck className="h-4 w-4 mr-2" />
                    Schedule Delivery
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Activity className="h-4 w-4 mr-2" />
                    View Live Telemetry
                  </Button>
                  <Button variant="outline" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Inventory Movements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: "CYL-2024-8901", action: "Dispatched", location: "North Hub → Station A", time: "2 hours ago", status: "In Transit" },
                    { id: "CYL-2024-8902", action: "Refilled", location: "Central Depot", time: "3 hours ago", status: "Ready" },
                    { id: "CYL-2024-8903", action: "Returned", location: "Customer → Station B", time: "4 hours ago", status: "Needs Refill" },
                    { id: "CYL-2024-8904", action: "Inspected", location: "South Warehouse", time: "5 hours ago", status: "Certified" },
                    { id: "CYL-2024-8905", action: "Delivered", location: "Station C → Customer", time: "6 hours ago", status: "In Use" },
                  ].map((movement, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{movement.id}</p>
                        <p className="text-sm text-muted-foreground">{movement.action} - {movement.location}</p>
                        <p className="text-xs text-muted-foreground">{movement.time}</p>
                      </div>
                      <Badge variant="outline">{movement.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifecycle" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Inspection Schedule
                  </CardTitle>
                  <CardDescription>Upcoming and overdue inspections</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-danger/10 rounded-lg">
                      <div className="text-xl font-bold text-danger">42</div>
                      <p className="text-sm text-muted-foreground">Overdue</p>
                    </div>
                    <div className="p-3 bg-warning/10 rounded-lg">
                      <div className="text-xl font-bold text-warning">156</div>
                      <p className="text-sm text-muted-foreground">This Week</p>
                    </div>
                    <div className="p-3 bg-success/10 rounded-lg">
                      <div className="text-xl font-bold text-success">23,445</div>
                      <p className="text-sm text-muted-foreground">Up to Date</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Upcoming Inspections</h4>
                    {[
                      { batch: "Batch #A247", cylinders: 45, due: "Tomorrow", inspector: "John Smith" },
                      { batch: "Batch #B156", cylinders: 32, due: "Dec 30", inspector: "Sarah Johnson" },
                      { batch: "Batch #C089", cylinders: 28, due: "Jan 2", inspector: "Mike Chen" },
                    ].map((inspection, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{inspection.batch}</p>
                          <p className="text-sm text-muted-foreground">{inspection.cylinders} cylinders</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Due: {inspection.due}</p>
                          <p className="text-xs text-muted-foreground">{inspection.inspector}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2" />
                    Maintenance Records
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { cylinder: "CYL-2024-1234", action: "Valve Replacement", date: "Dec 26", technician: "Tech-001", status: "Completed" },
                      { cylinder: "CYL-2024-1235", action: "Pressure Test", date: "Dec 25", technician: "Tech-002", status: "Passed" },
                      { cylinder: "CYL-2024-1236", action: "Leak Detection", date: "Dec 24", technician: "Tech-003", status: "Failed" },
                      { cylinder: "CYL-2024-1237", action: "IoT Device Replacement", date: "Dec 23", technician: "Tech-001", status: "Completed" },
                      { cylinder: "CYL-2024-1238", action: "Visual Inspection", date: "Dec 22", technician: "Tech-002", status: "Passed" },
                    ].map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{record.cylinder}</p>
                          <p className="text-sm text-muted-foreground">{record.action}</p>
                          <p className="text-xs text-muted-foreground">{record.date} • {record.technician}</p>
                        </div>
                        <Badge variant={record.status === "Failed" ? "destructive" : record.status === "Completed" ? "default" : "outline"}>
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">View Full Maintenance Log</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="telemetry" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Real-time IoT Monitoring
                  </CardTitle>
                  <CardDescription>Live telemetry data from all connected cylinders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-3 border rounded-lg">
                        <div className="text-lg font-bold text-success">23,891</div>
                        <p className="text-xs text-muted-foreground">Online</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <div className="text-lg font-bold text-warning">456</div>
                        <p className="text-xs text-muted-foreground">Low Battery</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <div className="text-lg font-bold text-danger">124</div>
                        <p className="text-xs text-muted-foreground">Offline</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <div className="text-lg font-bold text-primary">96</div>
                        <p className="text-xs text-muted-foreground">Alerts</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Recent Alerts</h4>
                      {[
                        { cylinder: "CYL-A-1234", alert: "Low Gas Level (15%)", location: "Downtown Station", priority: "High", time: "5 min ago" },
                        { cylinder: "CYL-B-5678", alert: "Pressure Anomaly", location: "North Hub", priority: "Medium", time: "12 min ago" },
                        { cylinder: "CYL-C-9012", alert: "Connection Lost", location: "East Facility", priority: "Low", time: "28 min ago" },
                        { cylinder: "CYL-D-3456", alert: "Temperature Warning", location: "Central Depot", priority: "Medium", time: "1 hour ago" },
                      ].map((alert, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{alert.cylinder}</p>
                            <p className="text-sm text-muted-foreground">{alert.alert}</p>
                            <p className="text-xs text-muted-foreground">{alert.location} • {alert.time}</p>
                          </div>
                          <Badge variant={alert.priority === "High" ? "destructive" : alert.priority === "Medium" ? "secondary" : "outline"}>
                            {alert.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Battery Health</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Connectivity Rate</span>
                        <span>97.2%</span>
                      </div>
                      <Progress value={97.2} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Accuracy</span>
                        <span>99.1%</span>
                      </div>
                      <Progress value={99.1} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Response Time</span>
                        <span>1.2s avg</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Maintenance Required</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Battery Replacement</span>
                        <Badge variant="destructive" className="text-xs">45 devices</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Firmware Update</span>
                        <Badge variant="secondary" className="text-xs">234 devices</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Calibration</span>
                        <Badge variant="outline" className="text-xs">67 devices</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="refilling" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Refilling Operations
                  </CardTitle>
                  <CardDescription>Today's refilling activities and schedules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <div className="text-2xl font-bold text-success">1,234</div>
                      <p className="text-sm text-muted-foreground">Refilled Today</p>
                    </div>
                    <div className="text-center p-4 bg-warning/10 rounded-lg">
                      <div className="text-2xl font-bold text-warning">567</div>
                      <p className="text-sm text-muted-foreground">Pending Refill</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Recent Refilling Log</h4>
                    {[
                      { cylinder: "CYL-R-1001", station: "Central Station A", operator: "OP-001", time: "2:30 PM", volume: "45.2L" },
                      { cylinder: "CYL-R-1002", station: "North Station B", operator: "OP-002", time: "2:15 PM", volume: "46.8L" },
                      { cylinder: "CYL-R-1003", station: "East Station C", operator: "OP-003", time: "2:00 PM", volume: "44.9L" },
                      { cylinder: "CYL-R-1004", station: "West Station D", operator: "OP-001", time: "1:45 PM", volume: "47.1L" },
                    ].map((refill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{refill.cylinder}</p>
                          <p className="text-sm text-muted-foreground">{refill.station}</p>
                          <p className="text-xs text-muted-foreground">{refill.operator} • {refill.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{refill.volume}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ERP Integration</CardTitle>
                  <CardDescription>Billing, invoices, and stock synchronization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Billing Sync Status</p>
                        <p className="text-sm text-muted-foreground">Last sync: 5 minutes ago</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Invoice Generation</p>
                        <p className="text-sm text-muted-foreground">1,234 invoices processed today</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Running</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Stock Updates</p>
                        <p className="text-sm text-muted-foreground">Real-time synchronization</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Online</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Recent Transactions</h4>
                    <div className="space-y-2">
                      {[
                        { invoice: "INV-2024-5678", amount: "$1,245", customer: "Metro Restaurant", status: "Paid" },
                        { invoice: "INV-2024-5679", amount: "$892", customer: "City Hospital", status: "Pending" },
                        { invoice: "INV-2024-5680", amount: "$2,156", customer: "Industrial Plant", status: "Paid" },
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                          <div>
                            <p className="text-sm font-medium">{transaction.invoice}</p>
                            <p className="text-xs text-muted-foreground">{transaction.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{transaction.amount}</p>
                            <Badge variant={transaction.status === "Paid" ? "default" : "secondary"} className="text-xs">
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Demand Forecasting
                </CardTitle>
                <CardDescription>AI-powered demand prediction for next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Predicted Demand</h4>
                    <div className="space-y-4">
                      {[
                        { period: "Next 7 Days", demand: "8,456", confidence: 94, trend: "↑ +12%" },
                        { period: "Next 14 Days", demand: "16,892", confidence: 89, trend: "↑ +8%" },
                        { period: "Next 30 Days", demand: "35,678", confidence: 82, trend: "↑ +15%" },
                      ].map((forecast, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{forecast.period}</span>
                            <span className="text-success">{forecast.trend}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">{forecast.demand}</span>
                            <span className="text-sm text-muted-foreground">{forecast.confidence}% confidence</span>
                          </div>
                          <Progress value={forecast.confidence} className="h-1 mt-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Regional Demand Analysis</h4>
                    <div className="space-y-3">
                      {[
                        { region: "Metropolitan", current: 2456, predicted: 2789, growth: "+13.5%" },
                        { region: "Urban Centers", current: 1892, predicted: 2045, growth: "+8.1%" },
                        { region: "Industrial Zones", current: 1567, predicted: 1823, growth: "+16.3%" },
                        { region: "Suburban Areas", current: 1234, predicted: 1345, growth: "+9.0%" },
                      ].map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{region.region}</p>
                            <p className="text-sm text-muted-foreground">Current: {region.current}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{region.predicted}</p>
                            <p className="text-sm text-success">{region.growth}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">94.7%</div>
                      <p className="text-sm text-muted-foreground">Delivery SLA</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">12.3 hrs</div>
                      <p className="text-sm text-muted-foreground">Avg Response Time</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">99.2%</div>
                      <p className="text-sm text-muted-foreground">Safety Rate</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">$23.45</div>
                      <p className="text-sm text-muted-foreground">Cost per Cylinder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Monthly Revenue</span>
                      <span className="font-bold">$847,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Quarterly Growth</span>
                      <span className="font-bold text-success">+18.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Order Value</span>
                      <span className="font-bold">$67.23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Customer Retention</span>
                      <span className="font-bold">94.2%</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      Generate Detailed Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}