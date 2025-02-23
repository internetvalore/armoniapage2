import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fadeIn bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contattaci</h1>
          <p className="text-xl text-gray-600">Siamo qui per rispondere a tutte le tue domande</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Informazioni di Contatto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Indirizzo</h3>
                  <p className="text-gray-600">Via Paolo Sarpi 123<br />20154 Milano (MI)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Telefono</h3>
                  <p className="text-gray-600">
                    <a href="tel:+390212345678" className="hover:text-purple-600">02 1234 5678</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@armoniafitness.it" className="hover:text-purple-600">
                      info@armoniafitness.it
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium">Orari di Apertura</h3>
                  <div className="text-gray-600">
                    <p>Lunedì - Venerdì: 8:00 - 22:00</p>
                    <p>Sabato: 9:00 - 18:00</p>
                    <p>Domenica: Chiuso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Invia un Messaggio</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Oggetto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            title="Mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.3442401056546!2d9.177899776271791!3d45.48431573715281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c133b44035a3%3A0x2922e4e6a6a5e368!2sVia%20Paolo%20Sarpi%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1709557547749!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
