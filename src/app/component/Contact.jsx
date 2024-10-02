const Contact = () => {
    return (
  
        <section className="py-16 text-white bg-black" id="contact">
  <div className="container mx-auto text-center">
    <h2 className="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Get in Touch</h2>
    <p className="mb-8">Feel free to reach out for any project or collaboration!</p>
    <form className="grid max-w-3xl grid-cols-1 gap-4 mx-auto md:grid-cols-2">
      <input type="text" placeholder="Your Name" className="p-4 text-white bg-gray-800 border border-gray-600 rounded-lg" />
      <input type="email" placeholder="Your Email" className="p-4 text-white bg-gray-800 border border-gray-600 rounded-lg" />
      <textarea placeholder="Your Message" className="col-span-2 p-4 text-white bg-gray-800 border border-gray-600 rounded-lg"></textarea>
      <button type="submit" className="col-span-2 py-3 text-white rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:bg-orange-600">Send Message</button>
    </form>
  </div>
</section>

  
    );
  };
  
  export default Contact;
  