
import { useState } from 'react';

export default function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/2a80f86aed5786453d06ecede352cc9c.png',
      alt: 'Green Sea Peel - Natürliche Hauterneuerung'
    },
    {
      id: 2,
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/da69da50153ceccf4d16859de2e3f5ca.png',
      alt: 'Gesichtsbehandlung bei BEBEK Beauty'
    },
    {
      id: 3,
      image: 'https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/65e37f81e19d1be67789fac7ab8c67a1.png',
      alt: 'Premium Kosmetikprodukte'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ein Blick in unser <span className="text-amber-700">Studio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Entdecke unsere moderne Ausstattung und entspannte Atmosphäre
          </p>
          <a 
            href="https://instagram.com/bebek.beauty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold text-lg transition-colors"
          >
            <i className="ri-instagram-line text-2xl"></i>
            Folge uns auf Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={post.image}
                alt={post.alt}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
