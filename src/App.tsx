//import React from "react";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6 text-center text-white relative">

      <div className="animate-fadeIn max-w-3xl">

        {/* Icon */}
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Maintenance"
          className="h-32 mx-auto drop-shadow-xl animate-spin-slow mb-10"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-4">
          Site is under maintenance
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-28">
          We're working hard to make this idea come to life. Please stay tuned!
        </p>
{/* Company Name */}
<h2 className="text-2xl font-bold mb-4 drop-shadow-lg">
  Biswass IT Services Private Limited
</h2>

{/* CIN */}
<p className="text-lg text-white/90 mb-3">
  CIN No: U62013DL2025PTC444236
</p>

{/* Address */}
<div className="text-white/90 text-lg space-y-1 mb-8 leading-relaxed">
  <p>Regd. Office: Prop No-332, Basement Floor, Gali No-6, Mohan Park,</p>
  <p>West Guru Angad Nagar, Laxmi Nagar, Opp Radhu Palace,</p>
  <p>East Delhi, Delhi 110092, India.</p>
</div>


        {/* Contact */}
        <div className="space-y-3 text-lg font-medium mb-24">
          <p>📞 +91 99536 94627</p>
          <p>✉️ info@biswass.com</p>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-white/80 text-sm">
        This page is maintained by{" "}
        <a
          href="https://www.biswass.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Biswass IT Services Private Limited
        </a>
      </div>

    </main>
  );
};

export default App;
