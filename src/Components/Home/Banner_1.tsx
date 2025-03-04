import React from "react";
import finger from "../../assets/vector-illustration/finger.png";
import Love from "../../assets/vector-illustration/love.png";
import Ellipse from "../../assets/vector-illustration/Ellipse.png";
import Star from "../../assets/vector-illustration/bi_stars.png";
import heroImage from "../../assets/vector-illustration/homeBnr.png";
import { motion } from "framer-motion";

const Banner_1: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2  md:text-left md:py-30 py-10 md:ml-8">
        <h1 className="text-4xl text-start md:text-5xl lg:text-[85px] md:ml-9 ml-3  font-semibold md:max-w-2xl text-[#181818] font-poppins">
          Create Branded Letterheads{" "}
          <span className="text-gradient">Effortlessly</span>
        </h1>
        <p className="text-[#000000] text-start md:mt-5 md:ml-9 text-2xl md:text-2xl max-w-md font-poppins m-3">
          Customize templates, generate content with AI, and download in
          minutes.
        </p>
        <button className="md:mt-20 md:ml-9 ml-3 px-9 py-3 bg-[#ff5733] text-white font-poppins rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition hover:scale-105">
          Explore Templates
        </button>
      </div>

      {/* Right Side: Image & Floating Badges (Hidden on Small Screens) */}
      <motion.div className="flex md:w-/2 relative md:py-20 py-15 px-5 md:ml-[120px]">
        {/* Light Blue Background */}
        <div className="absolute inset-y-0 right-0 md:w-1/2 w-3/4 lg:bg-blue-100"></div>

        {/* Image */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="lg:w-[85%] md:h-auto  rounded-full shadow-lg"
          />

          {/* Floating Badges */}
          <div className="absolute lg:-top-7 lg:left-[19%] left-[2%] -top-[9%] bg-white lg:px-4 lg:py-2 p-1 border-2 border-[#003366] rounded-3xl shadow-md flex flex-col items-center w-40">
            {/* Hand Icon Positioned at Top-Right */}
            <div className="absolute -top-6 -right-1">
              <img src={finger} alt="" />
            </div>

            {/* Text Content */}
            <span className="text-sm font-semibold mr-7">98% Success</span>
            <p className="text-sm font-semibold mr-7">Guaranteed!</p>
          </div>

          <div className="absolute flex flex-col lg:bottom-12 bottom-10 lg:right-[77px] -right-[1%] bg-white lg:px-5 lg:py-2 lg:w-[170px] w-[140px] border border-[#003366] rounded-2xl shadow-md">
            <span className="text-[16px] font-semibold ml-3 lg:ml-0">200+ Businesses</span>
            <p className="text-[16px] font-semibold ml-3 lg:ml-0">Empowered</p>
            <img
              src={Star}
              alt=""
              className="absolute -right-[16px] -top-[17px] w-[27%]"
            />
          </div>

          <div className="absolute bottom-[-25px] lg:left-[125px] -left-1 border-2 bg-white border-[#003366] px-4 py-3 lg:rounded-2xl rounded-full shadow-md">
            <img
              src={Ellipse}
              alt=""
              className="absolute bottom-2 w-8 left-2"
            />
            <span className="ml-9">We are Amazing</span>
            <img src={Love} alt="" className="absolute -bottom-2 left-40 w-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner_1;




// import React from "react";
// import finger from "../../assets/vector-illustration/finger.png";
// import Love from "../../assets/vector-illustration/love.png";
// import Ellipse from "../../assets/vector-illustration/Ellipse.png";
// import Star from "../../assets/vector-illustration/bi_stars.png";
// import heroImage from "../../assets/vector-illustration/homeBnr.png";
// import { motion } from "framer-motion";

// const Banner_1: React.FC = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center bg-white">
//       {/* Left Side: Text Content */}
//       <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 py-10">
//         <h1 className="text-3xl md:text-5xl font-semibold text-[#181818] leading-tight">
//           Create Branded Letterheads{" "}
//           <span className="text-blue-600">Effortlessly</span>
//         </h1>
//         <p className="text-gray-600 text-lg mt-4">
//           Customize templates, generate content with AI, and download in
//           minutes.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-[#ff5733] text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition">
//           Explore Templates
//         </button>
//       </div>

//       {/* Right Side: Image & Floating Badges */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative w-full md:w-1/2 flex justify-center py-10"
//       >
//         {/* Image */}
//         <img
//           src={heroImage}
//           alt="Hero"
//           className="w-60 md:w-[85%] rounded-full shadow-lg"
//         />

//         {/* Floating Badges */}
//         <div className="absolute top-0 left-10 bg-white px-4 py-2 border-2 border-[#003366] rounded-3xl shadow-md flex flex-col items-center w-40">
//           <img src={finger} alt="" className="absolute -top-6 right-2 w-8" />
//           <span className="text-sm font-semibold">99% Success</span>
//           <p className="text-sm font-semibold">Guaranteed!</p>
//         </div>

//         <div className="absolute bottom-10 right-8 bg-white px-5 py-2 border border-[#003366] rounded-2xl shadow-md w-40 text-center">
//           <span className="text-sm font-semibold">200+ Businesses</span>
//           <p className="text-sm font-semibold">Empowered</p>
//           <img src={Star} alt="" className="absolute -right-4 -top-4 w-6" />
//         </div>

//         <div className="absolute -bottom-6 left-12 border-2 bg-white border-[#003366] px-4 py-3 rounded-2xl shadow-md flex items-center">
//           <img src={Ellipse} alt="" className="w-6 mr-2" />
//           <span className="text-sm font-semibold">We are Amazing</span>
//           <img src={Love} alt="" className="w-4 ml-2" />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Banner_1;
