import React from "react";

const CustomerSection = () => {
  return (
    <section className="bg-[#fffdf8] py-12 px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ===== Left Image Section ===== */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://taptotaste.novanectar.in/assets/ourmenu-DBbcJIKu.jpg"
            alt="QR Code Scan and Order"
            className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg h-auto object-cover"
          />
        </div>

        {/* ===== Right Content Section ===== */}
        <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">
          {/* Step 1 */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 mb-2">
              1. Create Your Menu
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Create and manage a sleek, mobile-friendly digital menu effortlessly — anytime, from any device.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 mb-2">
              2. Generate QR Code
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Create a custom QR code instantly and let customers access your digital menu with a simple scan.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 mb-2">
              3. Start Serving Customers
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Serve customers faster and safer with quick, contactless ordering through a simple QR code scan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
