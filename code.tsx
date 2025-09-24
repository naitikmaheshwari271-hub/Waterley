import React, { useState } from 'react';

const WaterleyCustomization = () => {
  const [selectedBottle, setSelectedBottle] = useState('1l');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Waterley Custom Bottles</h1>
          <p className="text-xl md:text-2xl mb-8">Premium plastic bottles customized for your brand</p>
          <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
            Start Customizing
          </button>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Bottle Collection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1L Bottle */}
            <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/300x400?prompt=1 liter plastic water bottle with sleek design and modern appearance&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="1 liter plastic water bottle with sleek design and modern appearance" 
                  className="w-full h-64 object-contain rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">1L Standard Bottle</h3>
              <p className="text-muted-foreground mb-4">Perfect for daily hydration with ample capacity</p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• 1000ml capacity</li>
                <li>• Durable plastic construction</li>
                <li>• Leak-proof screw cap</li>
                <li>• Custom branding options</li>
              </ul>
              <button 
                onClick={() => setSelectedBottle('1l')}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Customize This Bottle
              </button>
            </div>

            {/* 200ml Bottle */}
            <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/300x400?prompt=200ml compact plastic water bottle perfect for on-the-go hydration&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="200ml compact plastic water bottle perfect for on-the-go hydration" 
                  className="w-full h-64 object-contain rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">200ml Compact Bottle</h3>
              <p className="text-muted-foreground mb-4">Ideal for events, samples, and quick hydration</p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• 200ml compact size</li>
                <li>• Lightweight and portable</li>
                <li>• Sport cap available</li>
                <li>• Perfect for branding</li>
              </ul>
              <button 
                onClick={() => setSelectedBottle('200ml')}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Customize This Bottle
              </button>
            </div>

            {/* Premium Bottle */}
            <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/300x400?prompt=Premium luxury plastic water bottle with elegant design and sophisticated finish&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="Premium luxury plastic water bottle with elegant design and sophisticated finish" 
                  className="w-full h-64 object-contain rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Collection</h3>
              <p className="text-muted-foreground mb-4">Elevate your brand with our premium bottle line</p>
              <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                <li>• Premium plastic materials</li>
                <li>• Sophisticated design options</li>
                <li>• Enhanced durability</li>
                <li>• Luxury finish available</li>
              </ul>
              <button 
                onClick={() => setSelectedBottle('premium')}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Customize This Bottle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customization Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Professional logo printing on water bottle surface&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="Professional logo printing on water bottle surface" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold mb-2">Logo Printing</h3>
              <p className="text-sm text-muted-foreground">High-quality logo imprinting</p>
            </div>

            <div className="text-center">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Custom color options for plastic water bottles&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="Custom color options for plastic water bottles" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold mb-2">Custom Colors</h3>
              <p className="text-sm text-muted-foreground">Wide range of color options</p>
            </div>

            <div className="text-center">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Different cap styles for water bottles including sport caps and screw tops&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="Different cap styles for water bottles including sport caps and screw tops" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold mb-2">Cap Options</h3>
              <p className="text-sm text-muted-foreground">Various closure styles</p>
            </div>

            <div className="text-center">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4">
                <img 
                  src="https://placeholder-image-service.onrender.com/image/200x200?prompt=Packaging options for customized water bottles&id=3334c5a1-be93-4ac8-945d-410b1f146050" 
                  alt="Packaging options for customized water bottles" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>
              <h3 className="font-semibold mb-2">Packaging</h3>
              <p className="text-sm text-muted-foreground">Custom packaging solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Customize Your Waterley Bottles?</h2>
          <p className="text-xl mb-8">Get started with our easy customization process and elevate your brand</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Waterley Custom Bottles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WaterleyCustomization;
