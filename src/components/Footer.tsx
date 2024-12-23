import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Alishan Tanveer, ACA</h3>
            <p className="text-slate-400">Chartered Accountant</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-slate-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-slate-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-slate-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="mailto:contact@alishantanveer.com"
               className="hover:text-slate-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Alishan Tanveer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;