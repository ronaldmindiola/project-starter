import React from "react";

const ImageCollage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Background shapes - adjusted for better resemblance */}
      {/* <div className="absolute top-0 left-0 w-[200px] h-[300px] bg-blue-500 rounded-br-[150px] mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[250px] bg-yellow-500 rounded-bl-[100px] mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[300px] bg-red-500 rounded-tl-[150px] mix-blend-multiply filter blur-3xl opacity-30"></div> */}

      {/* Main image grid container */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-4 gap-4 auto-rows-min md:gap-6 lg:gap-8 p-4">
        {/* Image 1: Top group photo (span 2 columns, 1 row) */}
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
          <img
            src="https://placehold.co/600x450/A0A0A0/FFFFFF?text=Group+Photo"
            alt="Grupo de personas en una montaña"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2: Waterfall (span 2 columns, 1 row) */}
        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
          <img
            src="https://placehold.co/600x450/708090/FFFFFF?text=Waterfall"
            alt="Cascada en la naturaleza"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3: Woman on cliff left (span 2 columns, 2 rows) - positioned dynamically */}
        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl aspect-w-3 aspect-h-4">
          <img
            src="https://placehold.co/450x600/C0C0C0/000000?text=Woman+Cliff"
            alt="Mujer en un acantilado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4: Small top-left image (span 1 column, 1 row) - adjusted position slightly */}
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-xl aspect-w-3 aspect-h-2 -translate-y-4 md:-translate-y-8">
          <img
            src="https://placehold.co/300x200/B0C4DE/000000?text=Small+View"
            alt="Pequeña vista de paisaje"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 5: Person jumping (span 1 column, 2 rows) */}
        <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-xl aspect-w-2 aspect-h-3 translate-y-4 md:translate-y-8">
          <img
            src="https://placehold.co/300x450/D3D3D3/000000?text=Person+Jumping"
            alt="Persona saltando de un acantilado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 6: Woman relaxing (span 1 column, 1 row) */}
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-xl aspect-w-3 aspect-h-2 -translate-y-4 md:-translate-y-8">
          <img
            src="https://placehold.co/300x200/F0F0F0/000000?text=Woman+Relaxing"
            alt="Mujer relajándose"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 7: Bottom-right woman with sunglasses (span 2 columns, 1 row) */}
        <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
          <img
            src="https://placehold.co/600x450/ADD8E6/000000?text=Woman+Sunglasses"
            alt="Mujer con gafas de sol"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
