
import { Button } from "../components/button";
import { Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#302343] via-[#43315e] to-[#7d5fab] text-black min-h-screen flex items-center">
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              Running for Mapleton City Council
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Melanie <span className="text-grape-300">Bott</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Rooted in Service. Driven by Faith. Focused on Families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
              Support Melanie
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-medium">27+ Years Community Service</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-blue-300"></div>
            <div className="text-center">
              <div className="font-bold text-2xl text-white">2025</div>
              <div className="text-sm">Election Year</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;