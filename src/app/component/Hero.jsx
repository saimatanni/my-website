import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 text-center text-white bg-black" id="home">
      <div className="container mx-auto">
        <div className="relative w-40 h-40 mx-auto my-6 overflow-hidden rounded-full shadow-lg">
          {/* <Image src="/photo.jpg" alt="Profile" layout="fill" objectFit="cover" className="rounded-full" /> */}
          <Image src="/my-photo.png" alt="Profile" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500">
          I’m Shaima Alam Tanni
        </h1>
        <p className="mt-4 text-xl">Frontend Developer | Problem Solver</p>
        <div className="mt-8">
          <a href="#contact" className="inline-block px-6 py-3 font-bold text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-indigo-700">
            Contact Me
          </a>
          <a href="/resume.pdf" className="inline-block px-6 py-3 ml-4 font-bold text-white transition rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-yellow-700">
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
