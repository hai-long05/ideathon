import { motion } from 'motion/react';

const Motivation = () => (
  <motion.div
    className="w-screen h-screen flex flex-row"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
    }}
  >
    <motion.div
      className="h-full w-1/2 flex flex-col justify-center px-32"
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: 'easeOut' },
        },
      }}
    >
      <div className="text-sm font-medium pb-4">Motivation</div>
      <div className="text-4xl font-normal pb-6">
        Reimagining Business for a Changing World
      </div>
      <div>
        We believe that bold ideas, diverse perspectives, and digital innovation
        can reshape how companies create value. Our motivation: challenge the
        status quo and build something that truly matters.
      </div>
    </motion.div>

    <motion.div
      className="h-full w-1/2 bg-[url('/motivation.png')] bg-cover"
      variants={{
        hidden: { opacity: 0, x: 50, scale: 1.1 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 1, ease: 'easeOut' },
        },
      }}
    >
      {/* You can overlay content here if needed */}
    </motion.div>
  </motion.div>
);

export default Motivation;
