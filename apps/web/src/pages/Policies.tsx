
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";

const Policies = () => {
  const policies = [
    {
      title: "Affordable Housing",
      description: "Develop inclusive housing policies that ensure families can afford to live in our community while preventing displacement of long-term residents.",
      points: [
        "Support first-time homebuyer programs",
        "Advocate for inclusive zoning policies",
        "Protect tenants' rights and prevent unfair evictions"
      ]
    },
    {
      title: "Transportation & Infrastructure",
      description: "Improve public transportation, maintain our roads, and create bike-friendly infrastructure for all residents.",
      points: [
        "Expand public transit routes and frequency",
        "Fix potholes and improve road maintenance",
        "Build safe bike lanes and walking paths"
      ]
    },
    {
      title: "Small Business Support",
      description: "Foster an environment where local businesses can thrive and contribute to our community's economic vitality.",
      points: [
        "Reduce bureaucratic barriers for small businesses",
        "Support local procurement policies",
        "Create business development incentive programs"
      ]
    },
    {
      title: "Environmental Sustainability",
      description: "Implement green initiatives that protect our environment while creating a healthier community for future generations.",
      points: [
        "Expand recycling and composting programs",
        "Increase urban tree canopy coverage",
        "Promote renewable energy in public buildings"
      ]
    },
    {
      title: "Public Safety & Community",
      description: "Build stronger community relationships with law enforcement while addressing root causes of crime through social programs.",
      points: [
        "Increase community policing initiatives",
        "Expand youth programs and after-school activities",
        "Improve street lighting in high-crime areas"
      ]
    },
    {
      title: "Government Transparency",
      description: "Ensure city government operates with full transparency and actively engages residents in decision-making processes.",
      points: [
        "Make city budget information easily accessible",
        "Hold regular town halls in different neighborhoods",
        "Create online platforms for resident feedback"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Policy Priorities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My platform focuses on the issues that matter most to our community. 
              These priorities are based on extensive conversations with residents across all neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {policy.description}
                  </p>
                  <ul className="space-y-2">
                    {policy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;