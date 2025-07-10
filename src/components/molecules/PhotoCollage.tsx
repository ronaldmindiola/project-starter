interface CollageProps {
  images: Array<{ src: string; alt: string }>;
}

const PhotoCollage: React.FC<CollageProps> = ({ images }) => {
  return (
    <>
      <div className="w-full bg-yellow-400">
        <div className="grid grid-cols-6 grid-rows-6 gap-4 max-w-2xl auto-rows-[80px]">
          {images?.slice(0, 5).map((image, index) => {
            const styles = getGridStyles(index);

            return (
              <div key={index} className={`${styles} w-full`}>
                <div className="w-full h-full aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full px-4 py-8 flex justify-center">
        <div className="grid grid-cols-6 grid-rows-6 gap-4 max-w-2xl auto-rows-[80px]">
          {images?.slice(0, 5).map((image, index) => {
            const styles = getGridStyles(index);

            return (
              <div key={index} className={`${styles} w-full`}>
                <div className="w-full h-full aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const getGridStyles = (index: number): string => {
  const gridStyles = [
    "col-span-3 row-span-1", // Grande a la izquierda arriba
    "col-span-2 row-span-1", // Segunda a la derecha arriba
    "col-span-2 row-span-2",
    "col-span-3 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
    "col-span-2 row-span-2",
  ];

  return gridStyles[index] || "col-span-3 row-span-2";
};

export default PhotoCollage;
