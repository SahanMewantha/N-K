import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="h-screen flex items-center justify-center bg-black/80"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white w-full max-w-md"
      >
        <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 bg-black/50 border border-white/30 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 bg-black/50 border border-white/30 rounded"
          />
          <textarea 
            placeholder="Message" 
            className="w-full p-3 bg-black/50 border border-white/30 rounded h-32"
          ></textarea>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;