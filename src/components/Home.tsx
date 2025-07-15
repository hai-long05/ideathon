import { motion } from 'motion/react';

const Home = () => {
  return (
    <motion.div className="w-screen h-screen bg-[url('/main.png')] bg-cover bg-no-repeat flex justify-center items-center">
      <motion.div
        className="font-normal text-white w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
        >
          Reinventing Business for a New Era
        </motion.div>

        <motion.div
          className="text-base pt-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
        >
          We're a team of students turning bold ideas into sustainable
          innovation — by challenging outdated models and building what's next.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
