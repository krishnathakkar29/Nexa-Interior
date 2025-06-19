import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#F5F2ED] py-16 md:py-20 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-light text-[#2C2C2C]/5 select-none"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          SHREEN
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Section - Visit Our Studio */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3
                className="text-2xl font-light text-[#2C2C2C] mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Visit Our Studio
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed max-w-sm">
                Experience our design expertise in person at our flagship studio
                and discover how we transform spaces.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Facebook className="w-5 h-5 text-[#2C2C2C]/60 group-hover:text-[#8B7355] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#2C2C2C]/60 group-hover:text-[#8B7355] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-[#2C2C2C]/60 group-hover:text-[#8B7355] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Twitter className="w-5 h-5 text-[#2C2C2C]/60 group-hover:text-[#8B7355] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Mail className="w-5 h-5 text-[#2C2C2C]/60 group-hover:text-[#8B7355] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Section - Navigation & Contact */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Navigation Links */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3">
                  {["About", "Services", "Testimonials", "Why Choose Us"].map(
                    (link) => (
                      <a
                        key={link}
                        href="#"
                        className="text-[#2C2C2C]/70 hover:text-[#8B7355] transition-colors duration-300 text-sm font-medium"
                      >
                        {link}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-[#2C2C2C] mb-4">
                    Contact Us
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#8B7355]" />
                      <span className="text-[#2C2C2C]/70 text-sm">
                        +1 (555) 123-4567
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#8B7355]" />
                      <span className="text-[#2C2C2C]/70 text-sm">
                        hello@shreendesigns.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Language */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-[#2C2C2C] mb-4">
                    Location
                  </h4>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#8B7355] mt-0.5" />
                    <div className="text-[#2C2C2C]/70 text-sm">
                      <p>New York</p>
                      <p>1234 Design Ave, City, State,</p>
                      <p>ZIP, Country</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-16 pt-8 border-t border-[#2C2C2C]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-[#2C2C2C]/60 text-sm">© 2025 - Copyright</p>
              <p className="text-[#2C2C2C]/60 text-sm">All Rights Reserved</p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-[#2C2C2C]/60 hover:text-[#8B7355] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#2C2C2C]/60 hover:text-[#8B7355] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[#2C2C2C]/60 hover:text-[#8B7355] transition-colors duration-300 text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
