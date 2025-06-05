
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, User, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulamos un registro
    setTimeout(() => {
      toast({
        title: "¡Cuenta creada!",
        description: "Bienvenido a Druvira. Te estamos redirigiendo al chat.",
      });
      navigate("/chat");
    }, 1500);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.password.length >= 6;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-poppins flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-druvira-orange hover:text-druvira-orange-light mb-6 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/44cefbf0-dfd5-4b29-ba32-9f949cb62bb0.png" 
                alt="Druvira Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-3xl font-bold text-druvira-orange-dark">Druvira</span>
          </div>
          
          <h1 className="text-2xl font-semibold text-druvira-orange-dark mb-2">
            Crea tu cuenta
          </h1>
          <p className="text-gray-600 font-medium">
            Comienza tu aventura con tu compañerIA de viaje
          </p>
        </div>

        {/* Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-center text-druvira-orange-dark font-semibold">Registro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-druvira-orange-dark font-semibold">
                  Nombre completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 h-12 border-gray-200 focus:border-druvira-orange"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-druvira-orange-dark font-semibold">
                  Correo electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 h-12 border-gray-200 focus:border-druvira-orange"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-druvira-orange-dark font-semibold">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 h-12 border-gray-200 focus:border-druvira-orange"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-druvira-orange hover:bg-druvira-orange-light text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? "Creando cuenta..." : "Empezar con Druvira"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Al crear una cuenta, aceptas nuestros términos de servicio y política de privacidad.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
