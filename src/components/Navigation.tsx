import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gauge, Shield, Factory, Truck, Home, Building, User, Wrench, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Dashboards",
    icon: Gauge,
    items: [
      { title: "System Admin", href: "/admin", description: "Organization & user management", icon: Shield },
      { title: "Government Portal", href: "/government", description: "Regulatory oversight & compliance", icon: Shield },
      { title: "Gas Company", href: "/gas-company", description: "Cylinder inventory & operations", icon: Factory },
      { title: "Delivery Network", href: "/delivery", description: "Fleet & logistics management", icon: Truck },
      { title: "Enterprise Portal", href: "/enterprise", description: "Multi-location monitoring", icon: Building },
      { title: "Consumer App", href: "/consumer", description: "Home gas monitoring", icon: Home },
      { title: "Field Technician", href: "/technician", description: "Inspection & maintenance", icon: Wrench },
    ]
  },
  {
    title: "Monitoring",
    icon: Bell,
    items: [
      { title: "Real-time Telemetry", href: "/monitoring/telemetry", description: "Live IoT data streams" },
      { title: "Safety Alerts", href: "/monitoring/alerts", description: "Critical incident monitoring" },
      { title: "Compliance Reports", href: "/monitoring/compliance", description: "Regulatory reporting" },
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Gauge className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Gas IoT Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-foreground">
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block p-3 space-y-1 rounded-lg hover:bg-accent group transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              {subItem.icon && <subItem.icon className="h-4 w-4 text-primary" />}
                              <div className="text-sm font-medium group-hover:text-accent-foreground">
                                {subItem.title}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground group-hover:text-accent-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Gauge className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">Gas IoT Platform</span>
                  </Link>

                  {navigationItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm font-semibold text-foreground">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      <div className="grid gap-2 ml-6">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block p-2 rounded-lg text-sm hover:bg-accent transition-colors ${
                              location.pathname === subItem.href ? "bg-accent" : ""
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {subItem.icon && <subItem.icon className="h-4 w-4 text-primary" />}
                              <span className="font-medium">{subItem.title}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {subItem.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-6 space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link to="/register" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}