// services.js
const services = [
  {
    title: "Body Corporate Cleaning Services",
    slug: "body-corporate-cleaning",
    description: "With over a decade of experience serving a diverse range of clients—from small businesses to large corporations across Melbourne—Shining Pearl Cleaning Services has become a trusted name in body corporate cleaning and maintenance. We specialise in maintaining apartment complexes, common areas, commercial buildings, and more. At Shining Pearl, we understand that no two buildings are the same. That’s why we take the time to understand your specific requirements and deliver customised cleaning solutions tailored to your space. Our comprehensive services are suitable for buildings of all sizes and types. We’re committed to creating fresh, clean, and welcoming environments—ensuring your property always looks its best.",
    servicesIncluded:[
      "Common area cleaning",
      "Lobby and hallway maintenance",
      "Lift and stairwell cleaning",
      "Garbage room and bin management",
      "Garden and outdoor maintenance",
      "Window and glass cleaning",
      "Body Corporate Cleaning Services"
    ]
  },
  {
    title: "Leisure & Entertainment Cleaning",
    slug: "leisure-entertainment-cleaning",
    description: "Shining Pearl Cleaning Services provides comprehensive cleaning solutions tailored for the leisure and entertainment industries. We specialize in maintaining cleanliness and hygiene in cinemas, theatres, concert venues, amusement centers, and other entertainment facilities. Our services also include thorough pre- and post-event cleaning for events of all sizes—whether large public gatherings or private functions—ensuring every space is spotless, safe, and guest-ready.",
    servicesIncluded:[
      "Pre-event and post-event cleaning",
      "Restroom sanitation",
      "Floor care and maintenance",
      "Concession stand and kitchen cleaning",
      "Seating area cleaning",
      "Window and glass cleaning"
    ]
  },
  {
    title: "Gym, Health & Fitness Centers Cleaning",
    slug: "gym-health-fitness-cleaning",
    description: "Our gym cleaning services provide a thorough cleaning of your entire facility, including all fitness equipment, locker rooms, and common areas. We focus on sanitizing high-contact surfaces to reduce the spread of germs and maintain a safe, hygienic environment for your members. Shining Pearl Cleaning Services uses only high-quality, environmentally friendly products that effectively disinfect while being safe for both people and equipment.",
    servicesIncluded:[
      "Gym equipment cleaning and sanitization",
      "Locker room and shower cleaning",
      "Restroom sanitation",
      "Floor care and maintenance",
      "Common area cleaning",
      "Window and glass cleaning"
    ]
  },
  {
    title: "Age Care & Medical Facilities Cleaning",
    slug: "age-care-medical-cleaning",
    description: "Shining Pearl Cleaning Services delivers specialized cleaning for medical centers and clinics, ensuring a sanitary and compliant environment. Our team uses eco-friendly, hospital-grade disinfectants and follows strict hygiene protocols, including a color-coded cleaning system to prevent cross-contamination. We pay extra attention to high-touch areas such as door handles, push plates, faucets, and dispensers to reduce the risk of infection and maintain a safe space for patients and staff.",
    servicesIncluded:[
      "Waiting room and reception area cleaning",
      "Exam room and treatment area cleaning",
      "Restroom sanitation",
      "Floor care and maintenance",
      "Window and glass cleaning",
      "Medical equipment cleaning"
    ]
  },
  {
    title: "School & Educational Facilities Cleaning",
    slug: "school-educational-cleaning",
    description: "Shining Pearl Cleaning Services provides tailored cleaning solutions for a wide range of educational institutions, including public and private schools, universities, training centers, colleges, preschools, and daycare facilities. We understand that each educational environment has unique needs, and we are fully equipped to clean all areas—from classrooms, laboratories, and libraries to gymnasiums, auditoriums, playgrounds, and cafeterias. Our services also include window cleaning, garden and lawn care, and sanitization of washroom and lunchroom facilities. For peace of mind, all our cleaners have undergone police checks and hold clearances to work safely around children.",
    servicesIncluded:[
      "Classroom and common area cleaning",
      "Restroom sanitation",
      "Floor care and maintenance",
      "Window and glass cleaning",
      "Gymnasium and auditorium cleaning",
      "Playground and outdoor area maintenance"
    ]
  },
  {
    title: "Retail & Shopping Centers Cleaning",
    slug: "retail-shopping-cleaning",
    description: "Maintain a spotless environment in retail outlets and shopping centers.Expert cleaning services for retail stores and shopping centers, focusing on high-traffic areas to maintain a spotless, inviting environment for customers and staff.",
    servicesIncluded:[
      "Storefront and entrance cleaning",
      "Floor care and maintenance",
      "Restroom sanitation",
      "Window and glass cleaning",
      "Food court and dining area cleaning",
      "Trash removal and recycling"
    ]
  },
  {
    title: "Window Cleaning",
    slug: "window-cleaning",
    description: "Shining Pearl Cleaning Services offers professional window cleaning for commercial and industrial buildings. Our team handles both interior and exterior window cleaning, including screens and tracks, using high-quality tools and safe techniques. We service a wide range of properties such as office buildings, factories, warehouses, hotels, schools, universities, community centers, and leisure facilities—ensuring spotless, streak-free results every time.",
    servicesIncluded: [
      "Interior and exterior window cleaning",
      "Screen and track cleaning",
      "Window cleaning for office buildings",
      "Window cleaning for commercial buildings",
      "Factory and warehouse window cleaning",
      "Hotel window cleaning",
      "Window cleaning for educational facilities (schools and universities)",
      "Window cleaning for community centers",
      "Window cleaning for leisure centers"
    ]
  },
  {
    title: "End Of Lease & Move In Cleaning",
    slug: "end-of-lease-move-in-cleaning",
    description: "Every property has unique cleaning needs, and Shining Pearl Cleaning Services is here to ensure your space is spotless, on time, and within budget. Our experienced team provides thorough cleaning for both new and existing properties, preparing them to the highest standards for leasing, moving in, or handover. Whether it’s a brand-new build or an older property requiring a deep clean, we deliver reliable, top-quality results.",
    servicesIncluded:[
      "Full interior deep cleaning",
    "Carpet and floor cleaning",
    "Bathroom and kitchen sanitization",
    "Window and glass cleaning",
    "Wall, skirting, and baseboard cleaning",
    "Dusting and cobweb removal",
    "Rubbish removal and disposal",
    "Spot cleaning and stain treatment",
    "Move-in ready presentation"
  ]
  },
  {
    title: "Building Cleaning",
    slug: "building-cleaning",
    description: "At Shining Pearl Cleaning Services, we understand the importance of a final clean on a construction site. Our goal is to ensure your new build looks its absolute best when presented to your client. We work closely with you to understand site-specific requirements and pass those details on to our skilled cleaning team. With a strong focus on safety and compliance, our highly trained staff deliver construction cleaning services that meet strict quality and OH&S standards—ensuring a spotless and safe presentation of your completed project.",
    servicesIncluded: [
    "Final construction site cleans",
    "Dust and debris removal",
    "Window and glass cleaning",
    "Floor scrubbing and polishing",
    "Bathroom and kitchen area cleaning",
    "Paint, plaster, and adhesive removal",
    "Pressure washing of external areas",
    "Rubbish removal and disposal",
    "Compliance with OH&S and site safety standards"
  ]
  },
  {
    title: "Factory/Warehouse Cleaning",
    slug: "factory-warehouse-cleaning",
    description: "At Shining Pearl Cleaning Services, we understand the unique demands of industrial environments such as warehouses and factories, which often operate around the clock. We offer tailored cleaning solutions that support uninterrupted operations and maintain a safe, hygienic workspace. Every facility is different, and our experienced team uses the right techniques, products, and equipment to avoid damage and ensure compliance with safety standards. Our friendly and skilled staff work efficiently to meet your expectations and keep your facility clean and operational.",
    servicesIncluded: [
    "General industrial cleaning",
    "Warehouse floor scrubbing and degreasing",
    "High dusting and rafter cleaning",
    "Machine and equipment surface cleaning",
    "Restroom and breakroom sanitation",
    "Pressure washing of loading docks and external areas",
    "Rubbish and waste removal",
    "Safe chemical use for specialized surfaces",
    "Scheduled cleaning to minimize operational disruption"
  ]
  },
  {
    title: "Office Cleaning",
    slug: "office-cleaning",
    description: "A clean office environment plays a key role in boosting employee satisfaction and enhancing the quality of your company’s services. At Shining Pearl Cleaning Services, we offer customizable office cleaning solutions to suit the unique needs of your workplace. Our experienced team ensures a spotless, welcoming, and hygienic environment that supports productivity and well-being—because a cleaner office means happier employees.",
    servicesIncluded: [
      "Daily or scheduled office cleaning",
      "Desk and workstation sanitization",
      "Kitchen and breakroom cleaning",
      "Restroom sanitization and restocking",
      "Floor vacuuming and mopping",
      "Waste bin emptying and disposal",
      "Window and glass cleaning",
      "High-touch surface disinfection",
      "Reception and meeting room maintenance"
  ]
  },
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    description: "Your home should always be the cleanest place you spend time in, as it’s where your loved ones live and create memories. At Shining Pearl Cleaning Services, we understand the importance of a clean and healthy home environment. Let our specialized team take care of the dust and dirt, providing you with top-tier cleaning solutions to maintain a space that’s both spotless and welcoming. Trust us to make your home the clean, comfortable, and relaxing space it should be—a place you can truly call your dream home.",
    servicesIncluded: [
      "General home cleaning",
      "Dusting and surface sanitizing",
      "Vacuuming and floor mopping",
      "Kitchen cleaning (counters, appliances, sink)",
      "Bathroom sanitization (toilets, showers, sinks)",
      "Bedroom cleaning (bed linens, furniture dusting)",
      "Window and glass cleaning",
      "Waste disposal",
      "Deep cleaning services upon request"
  ]
  },
  {
    title: "Carpet Steam Cleaning",
    slug: "carpet-steam-cleaning",
    description: "With over 10 years of experience, Shining Pearl Cleaning Services specializes in professional carpet steam cleaning. We understand that carpets are a significant investment, and we use the most effective cleaning techniques to extend their lifespan while maintaining their appearance. Our skilled team uses the latest technology to ensure thorough cleaning without damaging your carpets. Steam cleaning uses heated vapor to break down dirt and grime, followed by dry steam extraction to remove debris, leaving your carpets fresh, clean, and revitalized.",
    servicesIncluded: [
      "Carpet steam cleaning for residential and commercial spaces",
      "Rug cleaning with specialized steam techniques",
      "Removal of dirt, stains, and odors",
      "Use of eco-friendly, non-toxic cleaning agents",
      "Professional-grade equipment for deep cleaning",
      "Dry steam extraction to eliminate dust and debris",
      "Post-cleaning carpet protection (optional)"
  ]
  },
  {
    title: "Customized Cleaning",
    slug: "customized-cleaning",
    description: "Shining Pearl Cleaning Services offers a highly flexible and personalized approach through our Customized Cleaning option. With this service, our skilled team works closely with you to tailor the cleaning process using the most suitable equipment and techniques for your specific needs. Whether it’s a unique space, special requirements, or specialized cleaning tasks, we adapt to ensure the best results. With a wide range of services included, contact us today to discuss your cleaning challenges, and we'll provide a customized solution to meet your needs.",
    servicesIncluded: [
      "Tailored cleaning solutions for unique spaces",
      "Specialized equipment and techniques",
      "Flexible scheduling to suit your needs",
      "Wide range of services available",
      "Expert consultation to determine the best approach",
      "Commitment to quality and customer satisfaction"
    ]
  },
];

export default services;
