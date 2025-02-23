import React from 'react';
import { Award, Heart, Clock } from 'lucide-react';

const instructors = [
  {
    name: 'Marco Rossi',
    role: 'Istruttore di Yoga',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Certificato RYT 500, con 10 anni di esperienza nell\'insegnamento dello yoga.'
  },
  {
    name: 'Laura Bianchi',
    role: 'Insegnante di Pilates',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Specializzata in Mat Pilates e Reformer, formatasi presso la Scuola Italiana di Pilates.'
  },
  {
    name: 'Sofia Conti',
    role: 'Insegnante di Danza',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Ballerina professionista con esperienza ventennale nell\'insegnamento della danza moderna.'
  }
];

const About = () => {
  return (
    <div className="animate-fadeIn bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Chi Siamo</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Dal 2015 Armonia Fitness è il punto di riferimento per il benessere nel cuore di Paolo Sarpi.
              La nostra missione è aiutare le persone a trovare il proprio equilibrio attraverso il movimento.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professionalità</h3>
              <p className="text-gray-600">
                Istruttori certificati e costantemente aggiornati sulle ultime tecniche e metodologie.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passione</h3>
              <p className="text-gray-600">
                Mettiamo il cuore in quello che facciamo, creando un ambiente positivo e motivante.
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedizione</h3>
              <p className="text-gray-600">
                Seguiamo ogni allievo nel suo percorso, adattando l'insegnamento alle sue esigenze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                  <p className="text-purple-600 mb-4">{instructor.role}</p>
                  <p className="text-gray-600">{instructor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
