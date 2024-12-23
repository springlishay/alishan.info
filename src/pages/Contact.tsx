import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Contact Me</h1>
          <p className="mt-4 text-xl text-slate-600">
            Get in touch for professional financial guidance
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-50 rounded-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-slate-900">Office Address</h3>
                  <p className="mt-1 text-slate-600">
                    123 Business Avenue<br />
                    Suite 456<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">contact@alishantanveer.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;