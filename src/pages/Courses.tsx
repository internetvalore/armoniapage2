import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    title: 'Yoga',
    description: 'Un percorso di benessere per corpo e mente attraverso posture, respirazione e meditazione.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    schedule: 'Lunedì e Mercoledì: 10:00-11:30, 18:30-20:00',
    level: 'Tutti i livelli',
    price: '€80/mese'
  },
  {
    title: 'Pilates',
    description: 'Rafforza il core e migliora la postura con esercizi mirati e controllati.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    schedule: 'Martedì e Giovedì: 9:00-10:30, 19:00-20:30',
    level: 'Principianti e Intermedio',
    price: '€85/mese'
  },
  {
    title: 'Danza per Bambini',
    description: 'Corso di danza creativa per bambini dai 5 ai 12 anni.',
    image: 'https://images.unsplash.com/photo-1472033155776-7a46d657b80c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    schedule: 'Mercoledì e Venerdì: 16:30-17:30',
    level: 'Bambini 5-12 anni',
    price: '€60/mese'
  },
  {
    title: 'Danza per Adulti',
    description: 'Danza contemporanea e moderna per adulti di ogni età.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    schedule: 'Lunedì e Giovedì: 20:00-21:30',
    level: 'Tutti i livelli',
    price: '€75/mese'
  },
  {
    title: 'Ginnastica Dolce',
    description: 'Attività fisica leggera e controllata, ideale per seniors e chi cerca un approccio graduale.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    schedule: 'Martedì e Venerdì: 11:00-12:00',
    level: 'Adatto a tutti',
    price: '€65/mese'
  }
];

const Courses = () => {
  return (
    <div className="animate-fadeIn py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Corsi</h1>
          <p className="text-xl text-gray-600">Scopri tutti i corsi disponibili presso Armonia Fitness</p>
        </div>

        <div className="space-y-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h2>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-600">{course.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-600">{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-600">{course.price}</span>
                    </div>
                  </div>

                  <a 
                    href="#lead-form"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
                  >
                    Prenota una Prova Gratuita
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
