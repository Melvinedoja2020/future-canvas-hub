import { useState } from "react";
import { Truck, Route, MapPin, Clock, Users, BarChart3, Navigation, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DeliveryDashboard() {
  const [activeTab, setActiveTab] = useState("fleet");

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Delivery Network Dashboard</h1>
          <p className="text-muted-foreground">
            Fleet management, route optimization, and delivery analytics for gas cylinder logistics
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">85%</span> fleet utilization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Deliveries</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+15%</span> vs yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
              <Clock className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 min</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">-8%</span> improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SLA Compliance</CardTitle>
              <BarChart3 className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">96.8%</div>
              <p className="text-xs text-muted-foreground">
                Above 95% target
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="fleet">Fleet Management</TabsTrigger>
            <TabsTrigger value="deliveries">Active Deliveries</TabsTrigger>
            <TabsTrigger value="optimization">Route Optimization</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="fleet" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Fleet Overview
                  </CardTitle>
                  <CardDescription>Real-time vehicle status and driver assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-success/10 rounded-lg">
                        <div className="text-xl font-bold text-success">57</div>
                        <p className="text-sm text-muted-foreground">On Route</p>
                      </div>
                      <div className="text-center p-3 bg-warning/10 rounded-lg">
                        <div className="text-xl font-bold text-warning">8</div>
                        <p className="text-sm text-muted-foreground">Loading</p>
                      </div>
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-xl font-bold text-primary">12</div>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-xl font-bold">3</div>
                        <p className="text-sm text-muted-foreground">Maintenance</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Vehicle Status</h4>
                      {[
                        { vehicle: "TRK-001", driver: "John Smith", status: "On Route", location: "Downtown Area", fuel: 85, deliveries: "3/5" },
                        { vehicle: "TRK-002", driver: "Sarah Johnson", status: "Loading", location: "Central Depot", fuel: 92, deliveries: "0/6" },
                        { vehicle: "TRK-003", driver: "Mike Chen", status: "On Route", location: "North District", fuel: 78, deliveries: "2/4" },
                        { vehicle: "TRK-004", driver: "Emma Davis", status: "Available", location: "South Hub", fuel: 88, deliveries: "4/4" },
                        { vehicle: "TRK-005", driver: "James Wilson", status: "On Route", location: "East Zone", fuel: 65, deliveries: "1/5" },
                      ].map((vehicle, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{vehicle.vehicle}</p>
                            <p className="text-sm text-muted-foreground">{vehicle.driver}</p>
                            <p className="text-xs text-muted-foreground">{vehicle.location}</p>
                          </div>
                          <div className="text-center">
                            <Badge variant={
                              vehicle.status === "On Route" ? "default" : 
                              vehicle.status === "Loading" ? "secondary" : 
                              "outline"
                            }>
                              {vehicle.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              Fuel: {vehicle.fuel}% • {vehicle.deliveries}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">Track</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Driver Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-lg font-bold">89</div>
                      <p className="text-xs text-muted-foreground">Total Drivers</p>
                    </div>
                    <div className="text-center p-3 border rounded-lg">
                      <div className="text-lg font-bold">67</div>
                      <p className="text-xs text-muted-foreground">On Duty</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Top Performers Today</h4>
                    {[
                      { name: "John Smith", deliveries: 12, rating: 4.9, efficiency: "98%" },
                      { name: "Sarah Johnson", deliveries: 11, rating: 4.8, efficiency: "96%" },
                      { name: "Mike Chen", deliveries: 10, rating: 4.7, efficiency: "94%" },
                    ].map((driver, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{driver.name}</p>
                          <p className="text-sm text-muted-foreground">{driver.deliveries} deliveries</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">⭐ {driver.rating}</p>
                          <p className="text-xs text-muted-foreground">{driver.efficiency} efficiency</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Drivers
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Fleet Maintenance Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { vehicle: "TRK-007", service: "Oil Change", due: "Today", mileage: "45,230" },
                    { vehicle: "TRK-012", service: "Brake Inspection", due: "Tomorrow", mileage: "38,567" },
                    { vehicle: "TRK-019", service: "Tire Rotation", due: "Dec 30", mileage: "42,890" },
                    { vehicle: "TRK-025", service: "Full Service", due: "Jan 2", mileage: "51,234" },
                  ].map((maintenance, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{maintenance.vehicle}</span>
                        <Badge variant={maintenance.due === "Today" ? "destructive" : "outline"}>
                          {maintenance.due}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{maintenance.service}</p>
                      <p className="text-xs text-muted-foreground">{maintenance.mileage} miles</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deliveries" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Active Delivery Requests
                  </CardTitle>
                  <CardDescription>Real-time delivery assignments and status updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-warning/10 rounded-lg">
                      <div className="text-lg font-bold text-warning">45</div>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="text-lg font-bold text-primary">128</div>
                      <p className="text-xs text-muted-foreground">In Transit</p>
                    </div>
                    <div className="p-3 bg-success/10 rounded-lg">
                      <div className="text-lg font-bold text-success">342</div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Recent Requests</h4>
                    {[
                      { order: "ORD-2024-5671", customer: "Metro Restaurant", address: "123 Main St", priority: "High", eta: "25 min", driver: "John Smith" },
                      { order: "ORD-2024-5672", customer: "City Hospital", address: "456 Health Ave", priority: "Medium", eta: "35 min", driver: "Sarah Johnson" },
                      { order: "ORD-2024-5673", customer: "Home User", address: "789 Elm St", priority: "Low", eta: "45 min", driver: "Mike Chen" },
                      { order: "ORD-2024-5674", customer: "Industrial Plant", address: "321 Factory Rd", priority: "High", eta: "20 min", driver: "Emma Davis" },
                    ].map((request, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{request.order}</p>
                          <p className="text-sm text-muted-foreground">{request.customer}</p>
                          <p className="text-xs text-muted-foreground">{request.address}</p>
                          <p className="text-xs text-muted-foreground">Driver: {request.driver}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={request.priority === "High" ? "destructive" : request.priority === "Medium" ? "secondary" : "outline"}>
                            {request.priority}
                          </Badge>
                          <p className="text-sm font-medium mt-1">ETA: {request.eta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Status Tracker</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      { order: "ORD-2024-5668", status: "Picked Up", progress: 25, nextStep: "En Route to Customer", time: "2:30 PM" },
                      { order: "ORD-2024-5669", status: "En Route", progress: 60, nextStep: "Delivery in Progress", time: "2:45 PM" },
                      { order: "ORD-2024-5670", status: "Delivered", progress: 100, nextStep: "Complete", time: "3:15 PM" },
                    ].map((delivery, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{delivery.order}</span>
                          <span className="text-sm text-muted-foreground">{delivery.time}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Status: {delivery.status}</span>
                            <span>{delivery.progress}%</span>
                          </div>
                          <Progress value={delivery.progress} className="h-2" />
                          <p className="text-xs text-muted-foreground">Next: {delivery.nextStep}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Live Tracking Map
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Manual Order Assignment</CardTitle>
                <CardDescription>Assign delivery orders to available drivers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Unassigned Orders</h4>
                    <div className="space-y-3">
                      {[
                        { order: "ORD-2024-5675", customer: "Downtown Cafe", address: "555 Center St", cylinders: 2, priority: "Medium" },
                        { order: "ORD-2024-5676", customer: "Suburban Home", address: "777 Oak Ave", cylinders: 1, priority: "Low" },
                        { order: "ORD-2024-5677", customer: "Factory Complex", address: "999 Industrial Blvd", cylinders: 5, priority: "High" },
                      ].map((order, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{order.order}</p>
                            <p className="text-sm text-muted-foreground">{order.customer}</p>
                            <p className="text-xs text-muted-foreground">{order.cylinders} cylinders • {order.priority} priority</p>
                          </div>
                          <Button size="sm">Assign</Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Available Drivers</h4>
                    <div className="space-y-3">
                      {[
                        { driver: "Tom Brown", vehicle: "TRK-008", location: "Central Depot", capacity: "0/6", distance: "2.1 km" },
                        { driver: "Lisa Garcia", vehicle: "TRK-015", location: "North Hub", capacity: "1/4", distance: "5.4 km" },
                        { driver: "David Lee", vehicle: "TRK-022", location: "East Station", capacity: "0/5", distance: "3.8 km" },
                      ].map((driver, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <p className="font-medium">{driver.driver}</p>
                            <p className="text-sm text-muted-foreground">{driver.vehicle} • {driver.location}</p>
                            <p className="text-xs text-muted-foreground">Load: {driver.capacity} • {driver.distance} away</p>
                          </div>
                          <Badge variant="outline">Available</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="h-5 w-5 mr-2" />
                  Route Optimization Engine
                </CardTitle>
                <CardDescription>AI-powered route planning for maximum efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Optimization Results</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-success/10 rounded-lg">
                          <div className="text-xl font-bold text-success">32%</div>
                          <p className="text-sm text-muted-foreground">Time Saved</p>
                        </div>
                        <div className="text-center p-4 bg-primary/10 rounded-lg">
                          <div className="text-xl font-bold text-primary">28%</div>
                          <p className="text-sm text-muted-foreground">Fuel Saved</p>
                        </div>
                        <div className="text-center p-4 bg-warning/10 rounded-lg">
                          <div className="text-xl font-bold text-warning">15</div>
                          <p className="text-sm text-muted-foreground">Fewer Vehicles</p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-xl font-bold">342</div>
                          <p className="text-sm text-muted-foreground">Orders Optimized</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">Today's Optimized Routes</h4>
                        {[
                          { route: "Route A", driver: "John Smith", stops: 8, distance: "45.2 km", time: "4h 15m", efficiency: "92%" },
                          { route: "Route B", driver: "Sarah Johnson", stops: 6, distance: "38.7 km", time: "3h 45m", efficiency: "95%" },
                          { route: "Route C", driver: "Mike Chen", stops: 9, distance: "52.1 km", time: "4h 30m", efficiency: "88%" },
                        ].map((route, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{route.route}</span>
                              <Badge variant="outline">{route.efficiency} efficient</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{route.driver}</p>
                            <p className="text-xs text-muted-foreground">
                              {route.stops} stops • {route.distance} • {route.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Route Planning Tools</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Traffic-Aware Routing</h5>
                        <p className="text-sm text-muted-foreground mb-3">Real-time traffic integration for optimal path selection</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm">Active</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Delivery Window Optimization</h5>
                        <p className="text-sm text-muted-foreground mb-3">Align deliveries with customer preferences and availability</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm">Enabled</span>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium mb-2">Multi-Stop Optimization</h5>
                        <p className="text-sm text-muted-foreground mb-3">Minimize total distance for multiple delivery points</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <span className="text-sm">Running</span>
                        </div>
                      </div>

                      <Button className="w-full">
                        <Route className="h-4 w-4 mr-2" />
                        Create New Route
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Route Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Best Performing Routes</h4>
                    <div className="space-y-2">
                      {[
                        { route: "Downtown Circuit", efficiency: 96, avgTime: "3h 22m" },
                        { route: "Suburban Loop", efficiency: 94, avgTime: "4h 15m" },
                        { route: "Industrial Zone", efficiency: 91, avgTime: "5h 8m" },
                      ].map((route, index) => (
                        <div key={index} className="p-3 bg-muted rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{route.route}</span>
                            <span className="text-success font-bold">{route.efficiency}%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Avg: {route.avgTime}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Optimization Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Distance Reduction</span>
                        <span className="font-medium">-28.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Time Savings</span>
                        <span className="font-medium">-32.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Fuel Efficiency</span>
                        <span className="font-medium">+24.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Customer Satisfaction</span>
                        <span className="font-medium">+18.3%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Route Constraints</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Traffic Conditions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Vehicle Capacity</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-sm">Delivery Windows</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Driver Preferences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Delivery Performance Analytics
                  </CardTitle>
                  <CardDescription>KPIs and performance metrics for delivery operations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">96.8%</div>
                      <p className="text-sm text-muted-foreground">SLA Compliance</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">24 min</div>
                      <p className="text-sm text-muted-foreground">Avg Delivery Time</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">4.7/5</div>
                      <p className="text-sm text-muted-foreground">Customer Rating</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-xl font-bold">98.2%</div>
                      <p className="text-sm text-muted-foreground">Delivery Success</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Performance Trends</h4>
                    {[
                      { metric: "Daily Deliveries", current: 342, target: 320, trend: "+6.9%" },
                      { metric: "On-Time Rate", current: 96.8, target: 95, trend: "+1.9%" },
                      { metric: "Fuel Efficiency", current: 12.4, target: 11.8, trend: "+5.1%" },
                      { metric: "Driver Productivity", current: 8.7, target: 8.2, trend: "+6.1%" },
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{metric.metric}</p>
                          <p className="text-sm text-muted-foreground">Target: {metric.target}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{metric.current}</p>
                          <p className="text-sm text-success">{metric.trend}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Operational Efficiency</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Fleet Utilization</span>
                        <span>85.2%</span>
                      </div>
                      <Progress value={85.2} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Route Efficiency</span>
                        <span>92.7%</span>
                      </div>
                      <Progress value={92.7} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Driver Performance</span>
                        <span>88.9%</span>
                      </div>
                      <Progress value={88.9} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Customer Satisfaction</span>
                        <span>94.3%</span>
                      </div>
                      <Progress value={94.3} className="h-2" />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Cost Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cost per Delivery</span>
                        <span>$8.45</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Fuel Cost per Mile</span>
                        <span>$0.32</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Driver Cost per Hour</span>
                        <span>$18.50</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Vehicle Maintenance</span>
                        <span>$0.08/mile</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Regional Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { region: "North Zone", deliveries: 98, efficiency: 94.2, sla: 97.1, rating: 4.8 },
                    { region: "South Zone", deliveries: 87, efficiency: 91.5, sla: 95.8, rating: 4.6 },
                    { region: "East Zone", deliveries: 76, efficiency: 89.3, sla: 94.2, rating: 4.5 },
                    { region: "West Zone", deliveries: 81, efficiency: 92.1, sla: 96.4, rating: 4.7 },
                  ].map((region, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-3">{region.region}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Deliveries</span>
                          <span className="font-medium">{region.deliveries}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Efficiency</span>
                          <span className="font-medium">{region.efficiency}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>SLA Rate</span>
                          <span className="font-medium">{region.sla}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Rating</span>
                          <span className="font-medium">{region.rating}/5</span>
                        </div>
                      </div>
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