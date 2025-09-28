import { useState } from "react";
import { Shield, Map, FileText, TrendingUp, AlertTriangle, Download, Users, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GovernmentDashboard() {
  const [activeTab, setActiveTab] = useState("national");

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Government Regulatory Dashboard</h1>
          <p className="text-muted-foreground">
            National oversight, safety monitoring, and compliance reporting for gas infrastructure
          </p>
        </div>

        {/* National Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cylinders Nationwide</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892,456</div>
              <p className="text-xs text-muted-foreground">
                Across all regions and sectors
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Safety Incidents</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">47</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">-23%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <Shield className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">94.7%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+2.1%</span> from last quarter
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Adoption Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67.3%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+5.4%</span> this year
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="national">National Dashboard</TabsTrigger>
            <TabsTrigger value="safety">Safety Incidents</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="national" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Map className="h-5 w-5 mr-2" />
                    Regional Distribution
                  </CardTitle>
                  <CardDescription>Gas cylinder deployment by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { region: "Metropolitan Areas", cylinders: 234567, percentage: 26.3, growth: "+8.2%" },
                      { region: "Urban Centers", cylinders: 189234, percentage: 21.2, growth: "+5.1%" },
                      { region: "Suburban Districts", cylinders: 167890, percentage: 18.8, growth: "+12.4%" },
                      { region: "Industrial Zones", cylinders: 156432, percentage: 17.5, growth: "+3.7%" },
                      { region: "Rural Areas", cylinders: 144333, percentage: 16.2, growth: "+15.8%" },
                    ].map((region, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{region.region}</span>
                          <div className="flex items-center gap-2">
                            <span>{region.cylinders.toLocaleString()}</span>
                            <Badge variant="outline" className="text-xs text-success">{region.growth}</Badge>
                          </div>
                        </div>
                        <Progress value={region.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { sector: "Residential", count: 456789, color: "bg-blue-500" },
                    { sector: "Commercial", count: 234567, color: "bg-green-500" },
                    { sector: "Industrial", count: 123456, color: "bg-purple-500" },
                    { sector: "Healthcare", count: 45678, color: "bg-red-500" },
                    { sector: "Government", count: 31966, color: "bg-yellow-500" },
                  ].map((sector, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${sector.color}`}></div>
                        <span className="text-sm">{sector.sector}</span>
                      </div>
                      <span className="text-sm font-medium">{sector.count.toLocaleString()}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Adoption Statistics</CardTitle>
                <CardDescription>Onboarding progress by sector type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">234,567</div>
                    <p className="text-sm text-muted-foreground">Households</p>
                    <p className="text-xs text-success mt-1">+12.4% this year</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">12,345</div>
                    <p className="text-sm text-muted-foreground">Hotels & Restaurants</p>
                    <p className="text-xs text-success mt-1">+8.7% this year</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">3,456</div>
                    <p className="text-sm text-muted-foreground">Hospitals</p>
                    <p className="text-xs text-success mt-1">+15.2% this year</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">8,901</div>
                    <p className="text-sm text-muted-foreground">Housing Estates</p>
                    <p className="text-xs text-success mt-1">+22.1% this year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
                  Safety Incidents Heatmap
                </CardTitle>
                <CardDescription>Real-time monitoring of safety events nationwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Incident Categories</h4>
                    <div className="space-y-3">
                      {[
                        { type: "Gas Leaks", count: 23, severity: "High", color: "text-red-600" },
                        { type: "Pressure Anomalies", count: 15, severity: "Medium", color: "text-yellow-600" },
                        { type: "Equipment Tampering", count: 6, severity: "High", color: "text-red-600" },
                        { type: "Connection Issues", count: 3, severity: "Low", color: "text-blue-600" },
                      ].map((incident, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{incident.type}</p>
                            <p className={`text-sm ${incident.color}`}>Severity: {incident.severity}</p>
                          </div>
                          <Badge variant="outline">{incident.count} incidents</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Regional Incidents (Last 30 Days)</h4>
                    <div className="space-y-3">
                      {[
                        { region: "Northern Region", incidents: 18, trend: "↓ -15%" },
                        { region: "Central Region", incidents: 12, trend: "↑ +8%" },
                        { region: "Southern Region", incidents: 9, trend: "↓ -22%" },
                        { region: "Eastern Region", incidents: 5, trend: "↔ 0%" },
                        { region: "Western Region", incidents: 3, trend: "↓ -40%" },
                      ].map((region, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <span>{region.region}</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{region.incidents}</span>
                            <span className="text-sm text-muted-foreground">{region.trend}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Response Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-success">4.2 min</div>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">98.7%</div>
                    <p className="text-sm text-muted-foreground">Resolution Rate</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-warning">2</div>
                    <p className="text-sm text-muted-foreground">Critical Incidents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Inspection Coverage</CardTitle>
                <CardDescription>Safety inspection status across all registered cylinders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Current Status</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Up to Date Inspections</span>
                          <span>845,123 (94.7%)</span>
                        </div>
                        <Progress value={94.7} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Due Within 30 Days</span>
                          <span>32,456 (3.6%)</span>
                        </div>
                        <Progress value={3.6} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Overdue Inspections</span>
                          <span>14,877 (1.7%)</span>
                        </div>
                        <Progress value={1.7} className="h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Inspection Timeline</h4>
                    <div className="space-y-3">
                      {[
                        { period: "Next 7 Days", count: 8234, priority: "High" },
                        { period: "Next 30 Days", count: 24222, priority: "Medium" },
                        { period: "Next 90 Days", count: 45667, priority: "Normal" },
                        { period: "Beyond 90 Days", count: 789333, priority: "Scheduled" },
                      ].map((timeline, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{timeline.period}</p>
                            <p className="text-sm text-muted-foreground">Priority: {timeline.priority}</p>
                          </div>
                          <Badge variant="outline">{timeline.count.toLocaleString()}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance by Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { org: "Metropolitan Gas Corp", compliance: 97.8, inspections: "Current", violations: 2 },
                    { org: "Urban Gas Solutions", compliance: 94.2, inspections: "Current", violations: 8 },
                    { org: "Regional Distribution Co", compliance: 91.5, inspections: "3 Overdue", violations: 12 },
                    { org: "Industrial Gas Networks", compliance: 98.9, inspections: "Current", violations: 1 },
                  ].map((org, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{org.org}</h4>
                        <p className="text-sm text-muted-foreground">Inspections: {org.inspections}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{org.compliance}% Compliant</p>
                        <p className="text-sm text-muted-foreground">{org.violations} violations</p>
                      </div>
                      <Badge variant={org.compliance > 95 ? "default" : "destructive"}>
                        {org.compliance > 95 ? "Compliant" : "Action Required"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Reports & Data Export</h3>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "National Usage Report", description: "Comprehensive usage statistics", format: "PDF, CSV" },
                    { title: "Safety Incidents Analysis", description: "Detailed safety incident breakdown", format: "PDF, Excel" },
                    { title: "Compliance Status Report", description: "Inspection and compliance data", format: "PDF, CSV" },
                    { title: "Adoption Metrics", description: "Sector-wise adoption statistics", format: "PDF, JSON" },
                    { title: "Regional Performance", description: "Performance by geographic region", format: "PDF, CSV" },
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Available: {report.format}</p>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Export Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Quick Exports</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">Last 30 Days</Button>
                        <Button variant="outline" size="sm">Last Quarter</Button>
                        <Button variant="outline" size="sm">Last Year</Button>
                        <Button variant="outline" size="sm">Custom Range</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Data Categories</h4>
                      <div className="space-y-2">
                        {["Usage Statistics", "Safety Incidents", "Compliance Data", "Adoption Metrics"].map((category, index) => (
                          <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Custom Report
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>Configure automated alerts for critical events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Alert Types</h4>
                    <div className="space-y-3">
                      {[
                        { type: "Critical Safety Incidents", enabled: true, method: "Push, Email, SMS" },
                        { type: "Compliance Violations", enabled: true, method: "Email" },
                        { type: "Mass Outages", enabled: true, method: "Push, SMS" },
                        { type: "Weekly Reports", enabled: false, method: "Email" },
                      ].map((alert, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{alert.type}</p>
                            <p className="text-sm text-muted-foreground">{alert.method}</p>
                          </div>
                          <Badge variant={alert.enabled ? "default" : "secondary"}>
                            {alert.enabled ? "Enabled" : "Disabled"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recent Alerts</h4>
                    <div className="space-y-2">
                      {[
                        { message: "Gas leak reported in Central Region", time: "2 hours ago", severity: "Critical" },
                        { message: "Weekly compliance report generated", time: "1 day ago", severity: "Info" },
                        { message: "Inspection overdue threshold reached", time: "2 days ago", severity: "Warning" },
                      ].map((alert, index) => (
                        <div key={index} className="p-3 bg-muted rounded-lg">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                            <Badge variant={alert.severity === "Critical" ? "destructive" : "outline"} className="text-xs">
                              {alert.severity}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}