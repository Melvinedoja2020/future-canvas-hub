import { useState } from "react";
import { Wrench, CheckCircle, Camera, MapPin, Calendar, Clock, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TechnicianDashboard() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Field Technician Dashboard</h1>
          <p className="text-muted-foreground">Mobile inspection tools and maintenance tracking</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Inspections</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">8 completed, 4 pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">94.2%</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Time</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18 min</div>
              <p className="text-xs text-muted-foreground">Per inspection</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Issues Found</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">7</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Assigned Inspections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { id: "INS-2024-001", location: "Downtown Station A", cylinders: 45, time: "9:00 AM", status: "Pending" },
                { id: "INS-2024-002", location: "North Hub B", cylinders: 32, time: "11:30 AM", status: "Completed" },
                { id: "INS-2024-003", location: "East Facility C", cylinders: 28, time: "2:00 PM", status: "In Progress" },
              ].map((inspection, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{inspection.id}</p>
                    <p className="text-sm text-muted-foreground">{inspection.location}</p>
                    <p className="text-xs text-muted-foreground">{inspection.cylinders} cylinders • {inspection.time}</p>
                  </div>
                  <Badge variant={inspection.status === "Completed" ? "default" : "outline"}>{inspection.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                Inspection Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <Camera className="h-4 w-4 mr-2" />
                Scan Cylinder QR Code
              </Button>
              <Button variant="outline" className="w-full">
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete Inspection Checklist
              </Button>
              <Button variant="outline" className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Upload Evidence & Notes
              </Button>
              <Button variant="outline" className="w-full">
                <Wrench className="h-4 w-4 mr-2" />
                Replace IoT Device
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}