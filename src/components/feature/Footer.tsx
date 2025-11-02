
export default function Footer() {
  return (
    <footer className="bg-stone-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img 
            src="https://static.readdy.ai/image/c2dd90fc406d7d04d15e04925690c4cc/35259159ebd26f1edd581850df41cf5a.png"
            alt="BEBEK Beauty & Kosmetik Logo"
            className="h-20 w-auto mx-auto mb-4"
          />
          <nav className="flex justify-center space-x-8 text-stone-600">
            <a href="/impressum" className="hover:text-amber-700 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-amber-700 transition-colors">Datenschutz</a>
          </nav>
        </div>
        
        <div className="border-t border-stone-200 pt-8">
          <p className="text-stone-600 mb-2">
            © 2025 BEBEK Beauty & Kosmetik. Alle Rechte vorbehalten.
          </p>
          <a 
            href="https://slicker.agency/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-amber-700 transition-colors text-sm"
          >
            by Slicker
          </a>
        </div>
      </div>
    </footer>
  );
}
