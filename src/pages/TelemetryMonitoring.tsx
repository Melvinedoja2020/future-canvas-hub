import { useState } from "react";
import { Activity, Wifi, Battery, Thermometer, Gauge, AlertTriangle, MapPin, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TelemetryMonitoring() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Real-time Telemetry Monitoring</h1>
          <p className="text-muted-foreground">Live IoT data streams and device connectivity monitoring</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Online Devices</CardTitle>
              <Wifi className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">86,432</div>
              <p className="text-xs text-muted-foreground">97.2% connectivity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">247</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Zap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-muted-foreground">Device response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Points/min</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <p className="text-xs text-muted-foreground">Real-time stream</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="live">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="live">Live Data</TabsTrigger>
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="devices">Device Status</TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Real-time Telemetry Stream
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { device: "CYL-A-1234", level: 78, pressure: 2.1, temp: 23, status: "Normal" },
                    { device: "CYL-B-5678", level: 15, pressure: 1.8, temp: 25, status: "Low" },
                    { device: "CYL-C-9012", level: 92, pressure: 2.3, temp: 22, status: "Good" },
                    { device: "CYL-D-3456", level: 45, pressure: 2.0, temp: 28, status: "Warning" },
                  ].map((device, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{device.device}</p>
                        <p className="text-sm text-muted-foreground">
                          Level: {device.level}% • Pressure: {device.pressure} bar • Temp: {device.temp}°C
                        </p>
                      </div>
                      <Badge variant={device.status === "Low" ? "destructive" : device.status === "Warning" ? "secondary" : "default"}>
                        {device.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Network Connectivity</span>
                        <span>97.2%</span>
                      </div>
                      <Progress value={97.2} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Processing Rate</span>
                        <span>99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Alert Response Time</span>
                        <span>85.4%</span>
                      </div>
                      <Progress value={85.4} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Critical Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { device: "CYL-X-7890", alert: "Gas Leak Detected", location: "Downtown Station", severity: "Critical", time: "2 min ago" },
                  { device: "CYL-Y-2345", alert: "Low Battery Level", location: "North Hub", severity: "Warning", time: "15 min ago" },
                  { device: "CYL-Z-6789", alert: "Connection Lost", location: "East Facility", severity: "Medium", time: "1 hour ago" },
                ].map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{alert.device}</p>
                      <p className="text-sm text-muted-foreground">{alert.alert}</p>
                      <p className="text-xs text-muted-foreground">{alert.location} • {alert.time}</p>
                    </div>
                    <Badge variant={alert.severity === "Critical" ? "destructive" : "secondary"}>
                      {alert.severity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}