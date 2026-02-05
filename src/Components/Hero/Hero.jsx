import React, { useEffect, useState } from "react";
import Video from "./Video";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'

const slides = [
  {
    title: "Discover Your Signature Scent",
    text: "Indulge in our exclusive collections, each telling a story of elegance and charm.",
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1600",
  },
  {
    title: "Luxury Redefined",
    text: "Experience timeless fragrances crafted for modern sophistication.",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1600",
  },
  {
    title: "Elegance in Every Drop",
    text: "A scent that defines confidence, beauty, and individuality.",
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1600",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
         
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover"
          />

        
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                {slide.text}
              </p>
              <button className="px-8 py-3 bg-pink-400 hover:bg-pink-700 transition duration-300 rounded-full tracking-widest text-sm font-semibold">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
      ))}

    
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-amber-500" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>

     <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              About <span className="text-pink-600">Luxury Line</span> Perfumes
            </h2>

            <div className="w-24 h-1 bg-pink-500"></div>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Luxury Line Perfumes, we believe that a fragrance is not just
              a scent but an experience. We offer an exquisite collection of
              hand-crafted perfumes, made from the finest ingredients sourced
              from around the world.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Each bottle is a testament to our commitment to quality,
              elegance, and sophistication. Whether you are looking for a
              signature scent, a custom blend, or a gift for a loved one, our
              expert perfumers will guide you on a sensory journey like no
              other.
            </p>

            <button className="px-8 py-3 bg-pink-400 hover:bg-pink-700 transition duration-300 text-white tracking-widest text-sm font-semibold rounded-full shadow-md hover:shadow-lg">
              LEARN MORE
            </button>
          </div>
                      <div className="relative group">
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink-500 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1200"
                alt="Luxury Perfume"
                className="relative rounded-2xl shadow-xl object-cover w-full h-[500px] transition duration-500 group-hover:scale-105"
                style={{
                  animation: "float 6s ease-in-out infinite"
                }}
              />
            </div>

            <style>
            {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            `}
            </style>


        </div>
      </div>
    </section>
         
        <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

   
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
        Sustainability
      </h2>
      <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        At our company, sustainability is at the core of our mission and values.
        We are dedicated to adopting and promoting eco-friendly practices across
        all aspects of our business.
      </p>
    </div>

    
    <div className="grid md:grid-cols-3 gap-10">

      
      <div className="bg-white border-2 border-pink-500  p-8 rounded-2xl shadow-md hover:shadow-pink-600  transition duration-500 hover:-translate-y-3">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Eco-friendly Production
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We utilize sustainable materials and processes in our production to
          reduce our carbon footprint. Our facilities minimize waste and
          optimize energy efficiency.
        </p>
      </div>

     
      <div className="bg-white border-2 border-pink-500 p-8 rounded-2xl shadow-md hover:shadow-pink-600  transition duration-500 hover:-translate-y-3">
        
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Community Engagement
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We engage with local communities to support environmental conservation
          projects and promote awareness about sustainable living.
        </p>
      </div>

      
      <div className="bg-white border-2 border-pink-500 p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
        
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Innovation & Efficiency
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We drive innovation that leads to greater sustainability. By enhancing
          our processes and technologies, we reduce environmental impact while
          improving product quality.
        </p>
      </div>

    </div>

  </div>
</section>

   <div>
    <Video/>
   </div>

   <section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

  
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
        Our Process
      </h2>
      <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        At Luxury Line Perfumes, our fragrances are created through a meticulous process that ensures every bottle is a masterpiece. Here's a glimpse into our process:

      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

      <div className="lg:col-span-2 border-2 border-pink-500 bg-white p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
       
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Ingredient Sourcing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.
        </p>
      </div>

     
      <div className="lg:col-span-2 border-2 border-pink-500 bg-white p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
       
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Ingredient Sourcing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.
        </p>
      </div>

      <div className="lg:col-span-2 border-2 border-pink-500 bg-white p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
       
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
           Ingredient Sourcing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.
        </p>
      </div>

      <div className="lg:col-start-2 border-2 border-pink-500 lg:col-span-2 bg-white p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
       
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Ingredient Sourcing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.
        </p>
      </div>

      
      <div className="lg:col-span-2 border-2 border-pink-500 bg-white p-8 rounded-2xl shadow-md hover:shadow-pink-600 transition duration-500 hover:-translate-y-3">
       
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Ingredient Sourcing
        </h3>
        <p className="text-gray-600 leading-relaxed">
          We source the finest ingredients from around the world, including rare flowers, exotic spices, and precious woods.
        </p>
      </div>

    </div>

  </div>
</section>

<div className="max-w-3xl mx-auto mt-16 space-y-6 px-4">

  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center tracking-wide">
    FREQUENTLY ASKED QUESTIONS
  </h1>

  <p className="text-center text-gray-500 text-base md:text-lg max-w-xl mx-auto">
    Learn more about our enchanting fragrances
  </p>

  <div className="space-y-4 mt-8">

    <Accordion className="rounded-xl shadow-md before:hidden">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-orange-500" />}
        className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6"
      >
        <Typography className="font-semibold text-lg text-gray-800">
          What ingredients are used in our fragrances?
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="px-6 pb-6">
        <Typography className="text-gray-600 leading-relaxed">
          We use a blend of natural and synthetic ingredients. Our fragrances feature essential oils, floral extracts, and carefully crafted synthetic compounds to create unique and lasting scents.
        </Typography>
      </AccordionDetails>
    </Accordion>


            <Accordion className="rounded-xl shadow-md before:hidden">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-orange-500" />}
          className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6"
        >
          <Typography className="font-semibold text-lg text-gray-800">
            How do our fragrances evoke emotions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="px-6 pb-6">
          <Typography className="text-gray-600 leading-relaxed">
            Each fragrance is crafted to evoke specific emotions. We combine top, middle, and base notes to create complex scents that can trigger feelings of relaxation, happiness, nostalgia, and even passion. For example, lavender is known for its calming properties, while citrus notes can uplift and energize.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="rounded-xl shadow-md before:hidden">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-orange-500" />}
          className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6"
        >
          <Typography className="font-semibold text-lg text-gray-800">
            What is the inspiration behind our signature scents?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="px-6 pb-6">
          <Typography className="text-gray-600 leading-relaxed">
            Our signature scents are inspired by nature and memories. We draw inspiration from lush gardens, tropical beaches, and serene forests to create fragrances that transport you to your favorite places. Additionally, we aim to capture the essence of unforgettable moments, making each scent a unique journey.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="rounded-xl shadow-md before:hidden">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-orange-500" />}
          className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6"
        >
          <Typography className="font-semibold text-lg text-gray-800">
            How can I choose the right fragrance for me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="px-6 pb-6">
          <Typography className="text-gray-600 leading-relaxed">
            Choosing the right fragrance is a personal journey. Consider the occasions you will wear it for, your personality, and the emotions you want to evoke. Sampling different scents can help you find one that resonates with you. Our experts are always available to provide personalized recommendations based on your preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="rounded-xl shadow-md before:hidden">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-orange-500" />}
          className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6"
        >
          <Typography className="font-semibold text-lg text-gray-800">
            
How long do your fragrances last?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="px-6 pb-6">
          <Typography className="text-gray-600 leading-relaxed">
            Our fragrances are designed to last throughout the day. The longevity of a fragrance depends on its concentration and the individual's skin chemistry. We offer a range of concentrations, from Eau de Toilette to Parfum, to suit your preferences. For longer-lasting scent, apply to pulse points and moisturize your skin before application.
          </Typography>
        </AccordionDetails>
      </Accordion>
  </div>
</div>

<section className="py-24">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-14">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
        Our Brands
      </h1>
      <p className="mt-4 text-gray-500 text-lg">
        Meet our famous brands
      </p>
    </div>

   
    <ul className="flex justify-center gap-10 mb-10">
      <li className="group relative w-76 h-46 bg-white rounded-2xl 
                     flex items-center justify-center
                     shadow-md transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl">

        <span className="absolute inset-0 rounded-2xl 
                         bg-orange-400/20 blur-xl opacity-0 
                         group-hover:opacity-100 transition"></span>

        <img
          src={brand1}
          alt="Brand 1"
          className="relative h-39 object-contain 
                     grayscale group-hover:grayscale-0 
                     transition duration-300"
        />
      </li>

      <li className="group relative w-76 h-46 bg-white rounded-2xl 
                     flex items-center justify-center
                     shadow-md transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl">

        <span className="absolute inset-0 rounded-2xl 
                         bg-orange-400/20 blur-xl opacity-0 
                         group-hover:opacity-100 transition"></span>

        <img
          src={brand2}
          alt="Brand 2"
          className="relative h-39 object-contain 
                     grayscale group-hover:grayscale-0 
                     transition duration-300"
        />
      </li>

      <li className="group relative w-76 h-46 bg-white rounded-2xl 
                     flex items-center justify-center
                     shadow-md transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl">

        <span className="absolute inset-0 rounded-2xl 
                         bg-orange-400/20 blur-xl opacity-0 
                         group-hover:opacity-100 transition"></span>

        <img
          src={brand3}
          alt="Brand 3"
          className="relative h-39 object-contain 
                     grayscale group-hover:grayscale-0 
                     transition duration-300"
        />
      </li>
    </ul>

   
    <ul className="flex justify-center gap-10">
      <li className="group relative w-76 h-46 bg-white rounded-2xl 
                     flex items-center justify-center
                     shadow-md transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl">

        <span className="absolute inset-0 rounded-2xl 
                         bg-orange-400/20 blur-xl opacity-0 
                         group-hover:opacity-100 transition"></span>

        <img
          src={brand4}
          alt="Brand 4"
          className="relative h-39 object-contain 
                     grayscale group-hover:grayscale-0 
                     transition duration-300"
        />
      </li>

      <li className="group relative w-76 h-46 bg-white rounded-2xl 
                     flex items-center justify-center
                     shadow-md transition-all duration-300
                     hover:-translate-y-2 hover:shadow-2xl">

        <span className="absolute inset-0 rounded-2xl 
                         bg-orange-400/20 blur-xl opacity-0 
                         group-hover:opacity-100 transition"></span>

        <img
          src={brand5}
          alt="Brand 5"
          className="relative h-39 object-contain 
                     grayscale group-hover:grayscale-0 
                     transition duration-300"
        />
      </li>
    </ul>

  </div>
</section>



    </>

  );
};

export default Hero;