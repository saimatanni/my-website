// import Image from "next/image";

// const About = () => {
//   return (
//     <section className="py-16 text-white bg-black" id="about">
//       <div className="container mx-auto text-center">
//         <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
//           About Me
//         </h2>
//         <p className="text-lg">
//           I am a passionate Frontend Developer with years of experience in
//           building and scaling responsive web applications. My focus lies in
//           developing rich user experiences and solving complex frontend
//           challenges using technologies like React, Redux, and Tailwind CSS.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 text-white bg-black" id="about">
      <div className="container grid items-center grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <Image
            src="/my-photo.png" // Replace with your image
            alt="Shaima Alam Tanni"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            About Me
          </h2>
          <p className="mb-6 text-lg">
            I am a passionate Frontend Developer with years of experience in
            building and scaling responsive web applications. I specialize in
            developing rich user experiences and solving complex frontend
            challenges using technologies like React, Redux, and Tailwind CSS.
          </p>
          <p className="text-lg">
            My passion for frontend development is reflected in my extensive
            experience and dedication to each project.
          </p>

          {/* Skills Progress Bars */}
          {/* <div className="mt-8">
            <div className="mb-4">
              <span className="text-sm text-gray-400">HTML & CSS</span>
              <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
                <div className="w-4/5 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">React JS</span>
              <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
                <div className="w-3/4 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">JavaScript</span>
              <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
                <div className="w-4/5 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-400">Next JS</span>
              <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
                <div className="w-4/5 h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              </div>
            </div>
          </div> */}

          {/* Statistics */}
          <section className="py-16 text-white bg-black">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                {/* Years of Experience */}
                <div className="flex flex-col items-center">
                  <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    3+
                  </h3>
                  <p className="mt-2 text-gray-400">Years of Experience</p>
                </div>

                {/* Projects Completed */}
                <div className="flex flex-col items-center">
                  <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    90+
                  </h3>
                  <p className="mt-2 text-gray-400">Projects Completed</p>
                </div>

                {/* Happy Clients */}
                <div className="flex flex-col items-center">
                  <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    15+
                  </h3>
                  <p className="mt-2 text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
