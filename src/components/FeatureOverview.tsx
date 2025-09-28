import { Shield, Factory, Truck, Building, Home, Wrench, Bell, BarChart3, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "System Administration",
    description: "Complete organization management with user roles, cylinder registry, and global oversight.",
    capabilities: ["Organization Management", "User & Role Control", "Global Telemetry", "Billing & Revenue"],
    href: "/admin",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Government Oversight",
    description: "National dashboard for regulatory compliance and safety incident monitoring.",
    capabilities: ["Safety Incidents Map", "Compliance Reports", "Adoption Statistics", "Policy Data Export"],
    href: "/government", 
    color: "text-green-600"
  },
  {
    icon: Factory,
    title: "Gas Company Operations",
    description: "Comprehensive cylinder lifecycle management with IoT monitoring and forecasting.",
    capabilities: ["Cylinder Inventory", "Health Lifecycle", "Refilling Management", "Demand Forecasting"],
    href: "/gas-company",
    color: "text-purple-600"
  },
  {
    icon: Truck,
    title: "Smart Delivery Network",
    description: "Intelligent fleet management with route optimization and delivery analytics.",
    capabilities: ["Fleet Dashboard", "Route Optimization", "Delivery Tracking", "Performance Analytics"],
    href: "/delivery",
    color: "text-orange-600"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Multi-location monitoring with usage analytics and automated reordering.",
    capabilities: ["Multi-Site Monitoring", "Usage Analytics", "Auto-Reorder System", "Expense Tracking"],
    href: "/enterprise",
    color: "text-indigo-600"
  },
  {
    icon: Home,
    title: "Consumer Portal",
    description: "Smart home gas monitoring with safety alerts and convenient ordering.",
    capabilities: ["Real-time Monitoring", "Safety Notifications", "Mobile Ordering", "Usage Reports"],
    href: "/consumer",
    color: "text-pink-600"
  },
  {
    icon: Wrench,
    title: "Field Operations",
    description: "Mobile tools for technicians with inspection checklists and device management.",
    capabilities: ["Inspection Checklists", "Evidence Upload", "Repair Logging", "IoT Device Replacement"],
    href: "/technician",
    color: "text-yellow-600"
  },
  {
    icon: Bell,
    title: "Monitoring & Alerts",
    description: "Real-time telemetry monitoring with instant safety and operational alerts.",
    capabilities: ["Live Telemetry", "Safety Alerts", "Leak Detection", "System Notifications"],
    href: "/monitoring/telemetry",
    color: "text-red-600"
  }
];

export default function FeatureOverview() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Complete IoT Gas Management Platform</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solution serving all stakeholders from system administrators to end consumers,
            with role-based dashboards and real-time monitoring capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={feature.href}>Access Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground">Advanced data visualization and insights across all connected devices and operations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">Comprehensive safety monitoring with leak detection and automated emergency protocols.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-warning-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-muted-foreground">Scalable platform supporting operations from local distributors to national regulators.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}