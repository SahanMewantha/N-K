import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h2 className="text-5xl font-bold mb-6">About Our Journey</h2>
        <p className="text-xl max-w-3xl mx-auto">
          Founded with a passion for innovation, we've been pushing 
          technological boundaries since 2010. Our team combines creativity, 
          expertise, and a relentless drive to solve complex challenges.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;