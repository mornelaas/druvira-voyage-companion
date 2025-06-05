
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "dru";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hola, soy Dru, tu compañerIA de viaje. Cuéntame sobre tu próximo viaje y me encargo de ayudarte.",
      sender: "dru",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateDruResponse = (userMessage: string): string => {
    const responses = [
      "¡Excelente! Me encanta ayudarte a planificar tu viaje. ¿Podrías contarme cuál es tu destino ideal?",
      "Perfecto, estoy analizando las mejores opciones para ti. ¿Tienes alguna fecha específica en mente?",
      "Interesante elección. Déjame buscar las mejores recomendaciones basadas en tus preferencias.",
      "¡Qué emocionante! Voy a crear un plan personalizado para ti. ¿Cuál es tu presupuesto aproximado?",
      "Entiendo perfectamente. Permíteme sugerirte algunas opciones increíbles que se adapten a lo que buscas."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simular respuesta de Dru
    setTimeout(() => {
      const druResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateDruResponse(inputMessage),
        sender: "dru",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, druResponse]);
      setIsTyping(false);
    }, 2000);

    // TODO: Aquí se integrará el webhook externo para respuestas reales
    // const response = await fetch('YOUR_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: inputMessage })
    // });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-inter flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-druvira-blue to-druvira-gold rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-druvira-blue">Dru</h1>
              <p className="text-sm text-gray-600">Tu compañerIA de viaje</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-druvira-blue to-druvira-gold rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-lg font-bold text-druvira-blue">Druvira</span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs md:max-w-md lg:max-w-lg ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "user" 
                    ? "bg-druvira-blue" 
                    : "bg-gradient-to-r from-druvira-blue to-druvira-gold"
                }`}>
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <Card className={`p-4 ${
                  message.sender === "user" 
                    ? "bg-druvira-blue text-white" 
                    : "bg-white border border-gray-200"
                }`}>
                  <p className={`${message.sender === "user" ? "text-white" : "text-gray-800"}`}>
                    {message.content}
                  </p>
                  <p className={`text-xs mt-2 ${
                    message.sender === "user" ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </Card>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-druvira-blue to-druvira-gold flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="p-4 bg-white border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-druvira-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-druvira-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-druvira-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </Card>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 h-12 border-gray-200 focus:border-druvira-blue"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="h-12 px-6 bg-druvira-blue hover:bg-druvira-blue/90 text-white transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Dru está aquí para ayudarte a planificar el viaje perfecto
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
