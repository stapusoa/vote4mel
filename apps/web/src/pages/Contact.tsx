
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Mail, MapPin, Users } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your voice matters in this campaign and in our community. 
              Join us in building a stronger, more inclusive future for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Ways to Support</h3>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-0">
                    <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Volunteer</h4>
                      <p className="text-muted-foreground text-sm">Help with canvassing, phone banking, and community events</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-0">
                    <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Spread the Word</h4>
                      <p className="text-muted-foreground text-sm">Share our message with friends, family, and neighbors</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-0">
                    <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Attend Events</h4>
                      <p className="text-muted-foreground text-sm">Join us at town halls, community meetings, and campaign events</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Campaign Office</h4>
                  <p className="text-muted-foreground">
                    123 Main Street, Suite 200<br />
                    Your City, State 12345
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Get in Touch</h4>
                  <p className="text-muted-foreground mb-2">
                    Email: sarah@sarahforcitycouncil.com<br />
                    Phone: (555) 123-4567
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Together, we can build the community we all deserve to live in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Volunteer Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-border">
        <p className="text-muted-foreground">
          Paid for by Sarah Martinez for City Council | 
          <span className="ml-2">sarah@sarahforcitycouncil.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;