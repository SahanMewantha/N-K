import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h2 className="text-5xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Web Development", description: "Custom digital solutions" },
            { title: "Design", description: "Creative UI/UX experiences" },
            { title: "Consulting", description: "Strategic technology advice" }
          ].map(service => (
            <div 
              key={service.title}
              className="bg-black/50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;