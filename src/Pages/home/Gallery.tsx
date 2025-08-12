// import React, { useState } from 'react';
// import { FiX } from 'react-icons/fi'; // Close icon for fullscreen

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // List of image URLs for the gallery
//   const images = [
//     'https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1671394138163-ba8be139614b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1445979323117-80453f573b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
//     'https://images.unsplash.com/photo-1528451635828-f28cd48439a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1685156328658-da6116852b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1582391123232-6130296f1fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1713667417761-7d8514f1457f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1593967858208-67ddb5b4c406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//     'https://images.unsplash.com/photo-1498531872221-ce6d6216be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
//   ];

//   const openFullscreen = (imgSrc) => {
//     setSelectedImage(imgSrc);
//   };

//   const closeFullscreen = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <h1 className="text-center text-3xl font-bold my-8 p-5">Gallery</h1>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
//             onClick={() => openFullscreen(image)}
//           >
//             <img
//               src={image}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-auto rounded-lg transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen Overlay */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//           onClick={closeFullscreen}
//         >
//           <FiX
//             className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-50"
//             onClick={closeFullscreen}
//           />
//           <img
//             src={selectedImage}
//             alt="Fullscreen"
//             className="max-w-[90%] max-h-[90%] object-contain"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;


import React, { useState } from 'react';
import { FiX } from 'react-icons/fi'; // Close icon for fullscreen

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of image URLs for the gallery
  const images = [
    'https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1671394138163-ba8be139614b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1445979323117-80453f573b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1528451635828-f28cd48439a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1685156328658-da6116852b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1582391123232-6130296f1fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1713667417761-7d8514f1457f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1593967858208-67ddb5b4c406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1498531872221-ce6d6216be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1498531872221-ce6d6216be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1498531872221-ce6d6216be71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
  ];

  const openFullscreen = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8 p-5">Bento Grid Gallery</h1>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 auto-rows-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
              index % 3 === 0
                ? 'row-span-2'
                : index % 4 === 0
                ? 'col-span-2'
                : 'row-span-1 col-span-1'
            }`}
            onClick={() => openFullscreen(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <FiX
            className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-50"
            onClick={closeFullscreen}
          />
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
