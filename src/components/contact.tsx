import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaDiscord, FaLinkedin, FaCheck } from 'react-icons/fa';
import { Particles } from "react-tsparticles";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'; 

const ContactSection = () => {
  const [greeting, setGreeting] = useState('');
  const [isSwiped, setIsSwiped] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const controls = useAnimation();


  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning, Visionary.');
    else if (hour < 18) setGreeting('Good Afternoon, Innovator.');
    else setGreeting('Good Evening, Trailblazer.');
  }, []);

  
  useEffect(() => {
    emailjs.init('adM0nkricvkw9sq9L');
  }, []);


  const onSubmit = async (data: any) => {
    try {
  
      await emailjs.send('service_ci3u0or', 'template_lrqu8ek', {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      });

      setIsSwiped(true);
      await controls.start({ x: 200, opacity: 0 });
      setTimeout(() => {
        setIsSwiped(false);
        controls.start({ x: 0, opacity: 1 });
        reset(); 
      }, 2000); 
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  const handleSwipe = async (event: any, info: any) => {
    if (info.offset.x > 100) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-black text-white relative overflow-hidden"
    >
      <Particles
        params={{
          particles: {
            number: { value: 30 },
            size: { value: 3 },
            color: { value: '#00FF00' },
            line_linked: { color: '#00FF00', opacity: 0.5 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 relative z-10 text-center mb-16">
        <motion.h2
          className="text-5xl font-extrabold text-green-500 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Build the Future Together
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {greeting}
        </motion.p>

        <div className="flex justify-center gap-8 mt-8">
          <motion.a
            href="https://wa.me/+2347068578749"
            className="text-green-500 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp size={32} />
          </motion.a>
          <motion.a
            href="mailto:paul2devs@gmail.com"
            className="text-green-500 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={32} />
          </motion.a>
          <motion.a
            href="https://discordapp.com/users/1008029781046075392"
            className="text-green-500 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaDiscord size={32} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/paul2dev"
            className="text-green-500 hover:text-green-400 transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="p-8 bg-black/50 backdrop-blur-md border border-green-500 rounded-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       
            <div>
              <label className="text-green-500">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 bg-black/50 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-glow"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>
              )}
            </div>

     
            <div>
              <label className="text-green-500">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full p-3 bg-black/50 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-glow"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>
              )}
            </div>

            <div>
              <label className="text-green-500">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="w-full p-3 bg-black/50 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-glow"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message?.toString()}</p>
              )}
            </div>
            <motion.div
              className="w-full h-16 bg-green-500/20 rounded-lg relative overflow-hidden"
            >
              <motion.button
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleSwipe}
                animate={controls}
                className="w-24 h-full bg-green-500 text-black rounded-lg font-semibold absolute left-0 flex items-center justify-center"
              >
                {isSwiped ? <FaCheck /> : 'Swipe'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16 text-center">
        <h2 className="text-green-500 text-3xl font-bold mb-8">
          Connect Like a VIP
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
   
          <motion.a
            href="https://wa.me/+2347068578749"
            className="px-8 py-4 bg-green-500 text-black rounded-lg font-semibold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp /> Call / WhatsApp Me
          </motion.a>

          <motion.a
            href="mailto:paul2devs@gmail.com"
            className="px-8 py-4 bg-green-500 text-black rounded-lg font-semibold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope /> Drop an Email
          </motion.a>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16 text-center">
        <h2 className="text-green-500 text-3xl font-bold mb-4">
          Let’s Create Something Today
        </h2>
      </div>
    </section>
  );
};

export default ContactSection;