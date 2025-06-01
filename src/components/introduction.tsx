import { motion, useScroll, useTransform } from 'framer-motion';
import avatar from "./avatar.gif";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ y, rotateX, scale }}
      >
        <div className="w-64 h-64 relative">
          <img
            src={avatar}
            alt="3D Avatar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
