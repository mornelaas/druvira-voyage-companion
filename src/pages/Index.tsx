
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-druvira-gold" />,
      title: "Planificación personalizada",
      description: "Adaptada a tus intereses y presupuesto"
    },
    {
      icon: <Plane className="w-8 h-8 text-druvira-blue" />,
      title: "Gestión de servicios",
      description: "Vuelos, hoteles, transporte y experiencias"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-druvira-gold" />,
      title: "Prevención de errores",
      description: "Con IA predictiva que anticipa problemas"
    },
    {
      icon: <MapPin className="w-8 h-8 text-druvira-blue" />,
      title: "Recomendaciones auténticas",
      description: "Basadas en contexto y gustos personales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-inter">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-druvira-blue to-druvira-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-2xl font-bold text-druvira-blue">Druvira</span>
          </div>
          <Link to="/register">
            <Button className="bg-druvira-blue hover:bg-druvira-blue/90 text-white">
              Crea tu cuenta
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-druvira-blue mb-6">
              Druvira
            </h1>
            <p className="text-2xl md:text-3xl text-druvira-gold font-medium mb-8">
              Tu compañerIA de viaje
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Planifica, gestiona y disfruta de tus viajes con un asistente que piensa por ti.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-druvira-blue hover:bg-druvira-blue/90 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Crea tu cuenta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-druvira-blue mb-4">
              Lo que hacemos por ti
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Druvira combina inteligencia artificial avanzada con experiencia en viajes para ofrecerte un servicio completo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-druvira-blue mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-druvira-blue to-druvira-blue/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para viajar sin preocupaciones?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a Druvira y descubre cómo la inteligencia artificial puede transformar tu forma de viajar
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-druvira-gold hover:bg-druvira-gold/90 text-druvira-blue px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-semibold">
              Empezar ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-druvira-blue to-druvira-gold rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="text-xl font-bold text-druvira-blue">Druvira</span>
          </div>
          <p className="text-gray-600">
            © 2024 Druvira. Tu compañerIA de viaje inteligente.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
