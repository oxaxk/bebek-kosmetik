
import { useState, useEffect } from 'react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const correctPassword = 'BEBEK2025';

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem('bebek_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('bebek_authenticated', 'true');
      setError('');
    } else {
      setError('Falsches Passwort. Bitte versuchen Sie es erneut.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lock-line text-2xl text-rose-600"></i>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                BEBEK Beauty & Kosmetik
              </h1>
              <p className="text-gray-600">
                Bitte geben Sie das Passwort ein, um fortzufahren
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Passwort
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="Passwort eingeben..."
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-500 mr-2"></i>
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer"
              >
                Anmelden
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                © 2024 BEBEK Beauty & Kosmetik
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PasswordProtection;
