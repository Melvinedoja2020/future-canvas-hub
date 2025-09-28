import HeroSlider from "@/components/HeroSlider";
import FeatureOverview from "@/components/FeatureOverview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Overview */}
      <FeatureOverview />

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Transforming Gas Management Nationwide</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Connected Cylinders</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Monitoring Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Safety Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Every Stakeholder</h2>
            <p className="text-xl text-muted-foreground">
              Tailored experiences for each role in the gas management ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:text-primary-foreground" />
                </div>
                <CardTitle>Administrators & Regulators</CardTitle>
                <CardDescription>
                  Government oversight and system administration with compliance monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    National compliance dashboards
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Safety incident mapping
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Organization management
                  </li>
                </ul>
                <Button variant="outline" asChild className="group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link to="/government">Explore Government Portal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success group-hover:text-success-foreground transition-colors">
                  <Users className="h-8 w-8 text-green-600 group-hover:text-success-foreground" />
                </div>
                <CardTitle>Industry Partners</CardTitle>
                <CardDescription>
                  Gas companies, distributors, and delivery networks working together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Fleet & inventory management
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Route optimization
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Demand forecasting
                  </li>
                </ul>
                <Button variant="outline" asChild className="group-hover:bg-success group-hover:text-success-foreground">
                  <Link to="/gas-company">View Industry Solutions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Globe className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle>Consumers & Enterprises</CardTitle>
                <CardDescription>
                  Homes, businesses, and institutions with smart monitoring needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time gas monitoring
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Automated reordering
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Safety notifications
                  </li>
                </ul>
                <Button variant="outline" asChild className="group-hover:bg-purple-600 group-hover:text-white">
                  <Link to="/consumer">Try Consumer Portal</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Gas Operations?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of organizations already using our IoT platform to improve safety,
            efficiency, and compliance in gas management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-blue-50">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">Gas IoT Platform</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Comprehensive IoT solution for gas cylinder management, safety monitoring, and logistics optimization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Dashboards</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/admin" className="hover:text-foreground">System Admin</Link></li>
                <li><Link to="/government" className="hover:text-foreground">Government</Link></li>
                <li><Link to="/gas-company" className="hover:text-foreground">Gas Company</Link></li>
                <li><Link to="/delivery" className="hover:text-foreground">Delivery Network</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/enterprise" className="hover:text-foreground">Enterprise</Link></li>
                <li><Link to="/consumer" className="hover:text-foreground">Consumer</Link></li>
                <li><Link to="/technician" className="hover:text-foreground">Field Operations</Link></li>
                <li><Link to="/monitoring/telemetry" className="hover:text-foreground">Monitoring</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About Us</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Gas IoT Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
