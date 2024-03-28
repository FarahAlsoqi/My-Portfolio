// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <div className="max-w-2xl mx-auto">
//       <div className="border-gray-200 px-2 mb-10">
//         <div className="container mx-auto flex flex-wrap items-center justify-between">
//           <Link href="/">
//             <div className="flex">
//               <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g clipPath="url(#clip0)">
//                   <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path>
//                   <path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path>
//                   <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0">
//                     <rect width="51" height="70" fill="white"></rect>
//                   </clipPath>
//                 </defs>
//               </svg>
//               <span className="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
//             </div>
//           </Link>
//           <div className="flex md:order-2">
//           <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
//             <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
//             <li>
//                 <a href="#" class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>
//             </li>
//             <li>
//                 <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
//             </li>
//             <li>
//                 <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
//             </li>
//             </ul>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <div>
//       <div className="w-full border-gray-200 border-b border-gray-200">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-2"> {/* Adjusted padding */}
//             <Link href="/">
//               <div className="flex items-center">
//                     <img src='./1.jpg' className="h-6 mr-2" alt="Logo" />
//                   <defs>
//                     <clipPath id="clip0">
//                       <rect width="51" height="70" fill="white"></rect>
//                     </clipPath>
//                   </defs>
//               </div>
//             </Link>
//             <div className="hidden md:flex items-center">
//               <ul className="flex space-x-8 justify-center">
//                 <li>
//                   <Link href="/">
//                     <span className="text-black hover:text-gray-100">Home</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about">
//                     <span className="text-black hover:text-gray-100">My Project</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/services">
//                     <span className="text-black hover:text-gray-100">Contact</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <div className="w-full border-blue-200 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <Link href="/">
              <div className="flex items-center">
                <img src="./1.jpg" className="h-6 mr-8" alt="Logo" />
              </div>
            </Link>
            <div className="hidden md:flex items-center justify-left flex-grow"> 
              <ul className="flex space-x-8">
                <li>
                  <Link href="/">
                    <span className="text-black hover:text-gray-100">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <span className="text-black hover:text-gray-100">My Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-black hover:text-gray-100">Contact Me</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
