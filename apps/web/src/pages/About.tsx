
import { Card, CardContent } from "../components/card";
import { Users, Flag, Mail } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Sarah Martinez
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dedicated community leader with a proven track record of bringing people together 
              to solve problems and create positive change in our neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sarah Martinez speaking at community event"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Committed to Our Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For over 15 years, I've been actively involved in making our community a better place to live, 
                work, and raise families. From organizing neighborhood cleanups to advocating for better public 
                transportation, I believe in the power of grassroots action and collaborative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a small business owner, parent, and longtime resident, I understand the challenges our 
                community faces firsthand. I'm running for city council to ensure every voice is heard 
                and every neighborhood thrives.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Leader</h3>
                <p className="text-muted-foreground">
                  Served on the Neighborhood Association Board and organized 50+ community events
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Flag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Policy Advocate</h3>
                <p className="text-muted-foreground">
                  Successfully advocated for improved street lighting and pedestrian safety measures
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Small Business Owner</h3>
                <p className="text-muted-foreground">
                  Built and operated a local business, creating jobs and supporting the local economy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;