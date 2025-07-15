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
          Innovating Solutions for a Sustainable Future
        </motion.div>

        <motion.div
          className="text-base pt-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
        >
          We are a team of forward-thinking students passionate about
          reinventing business models. At the DSAG Ideathon, we aim to turn bold
          ideas into real impact.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
