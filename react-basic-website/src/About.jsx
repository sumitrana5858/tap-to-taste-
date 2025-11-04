import React from "react";

export default function About() {
  return (
    <section className="pb-10 flex items-center justify-center bg-[#fffdf8]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-x-4 gap-b-4">
        {/* Image Section (Left Side) */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <img
            src="https://taptotaste.novanectar.in/assets/ourmenu-DBbcJIKu.jpg"
            alt="QR Code Scan and Order"
            className="rounded-4xl shadow-md"
          />
        </div>

        {/* Steps Section (Right Side) */}
        <div className="w-full md:w-1/2">
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                1. Create Your Menu
              </h3>
              <p className="text-gray-600">
                Create and manage a sleek, mobile-friendly digital menu effortlessly — anytime, from any device.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                2. Generate QR Code
              </h3>
              <p className="text-gray-600">
                Create a custom QR code instantly and let customers access your digital menu with a simple scan.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                3. Start Serving Customers
              </h3>
              <p className="text-gray-600">
                Serve customers faster and safer with quick, contactless ordering through a simple QR code scan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
