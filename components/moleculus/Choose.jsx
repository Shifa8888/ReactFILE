// import React from 'react'
// import '../../app/globals.css';

// function Choose() {
//   return (
//     <>
//       <section className="bg-gray-900 text-white py-12 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           {/* Left Side - Title and Services */}
//           <div className="w-full md:w-1/2">
//             <button className="bg-gray-700 text-yellow-600 px-4 py-2 rounded-full mb-4">Why Choose Us</button>
//             <h2 className="text-4xl font-bold mb-8">Best Service just For You and Your Family</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="flex flex-col items-start space-y-3">
//                 <div className="p-4 rounded-full">
//                   <img src="/images/head.png" alt="Qualified Doctors" className="w-14 h-14" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Qualified Doctors</h3>
//                 <p className="text-gray-400 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                 </p>
//               </div>
//               <div className="flex flex-col items-start space-y-3">
//                 <div className="p-4 rounded-full">
//                   <img src="/images/head.png" alt="Modern Tech" className="w-14 h-14" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Modern Tech</h3>
//                 <p className="text-gray-400 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                 </p>
//               </div>
//               <div className="flex flex-col items-start space-y-3">
//                 <div className="p-4 rounded-full">
//                   <img src="/images/head.png" alt="24/7 Availability" className="w-14 h-14" />
//                 </div>
//                 <h3 className="text-xl font-semibold">24/7 Availability</h3>
//                 <p className="text-gray-400 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                 </p>
//               </div>
//               <div className="flex flex-col items-start space-y-3">
//                 <div className="p-4 rounded-full">
//                   <img src="/images/head.png" alt="Quality Service" className="w-14 h-14" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Quality Service</h3>
//                 <p className="text-gray-400 text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Text */}
//           <div className="w-full md:w-1/2 flex flex-col items-end">
//             <div className="p-6 rounded-lg w-full max-w-md">
//               <p className="text-white text-sm mt-4 md:-mt-60 text-center md:text-left">
//                 Every family deserves to be seen, heard, and respected in their choices. I am here to support, inform, and strengthen your own resources. A place where it is possible to fully take ownership of one's experiences, to go through the stages consciously and to make informed choices.
//               </p>
              
//             </div>
            
            
//           </div>
//         </div>
//       </section>

//       <div className="relative w-full h-[300px] md:h-[600px] flex justify-end items-end overflow-hidden rounded-lg -mt-10 md:-mt-80">
//         <img
//           src="/images/doctor.png"
//           alt="Description"
//           className="h-[300px] md:h-[600px] w-auto object-contain translate-y-[-20px] md:translate-y-[-50px]"
//         />
//       </div>
//     </>
//   )
// }

// export default Choose
import React from 'react'
import '../../app/globals.css';

function Choose() {
  return (
    <>
<section className="py-0 px-0 flex justify-center items-center min-h-screen overflow-hidden bg-white">
  <div className="w-full flex justify-center md:justify-end">
    <img
      src="/images/check.png"
      alt="Check Image"
      className="
        w-full
        h-screen
        object-contain         // Mobile: poori image dikhe bina cut
        md:object-cover        // Medium se large screens: image fill kare
        md:h-[140vh]           // Medium+ par height bada do
      "
    />
  </div>
</section>
    </>
  )
}

export default Choose
