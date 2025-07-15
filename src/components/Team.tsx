import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Team = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-row px-20 space-x-40">
        <Card
          name="Hai Long Do Pham"
          title="Driving Ideas into Impact"
          text="From vision to execution - Hai Long combines creativity with technical skill to bring ideas to life."
          picture="/hailong.png"
          delay={0}
          link="https://github.com/hai-long05"
        />
        <Card
          name="Patrick Woznik"
          title="Bringing Structure to Innovation"
          text="Patrick translates bold concepts into actionable plans that empower teamwork and real progress."
          picture="/patrick.png"
          delay={0.2}
          link="https://www.linkedin.com/in/patrick-woznik/"
        />
        <Card
          name="Jason Rückheim"
          title="Turning Potential into Performance"
          text="With a sharp focus on outcomes, Jason bridges ambition and strategy to build meaningful solutions."
          picture="/jason.jpg"
          delay={0.4}
          link="https://linkedin.com/in/jasonrückheim"
        />
      </div>
    </div>
  );
};

export default Team;

type CardProps = {
  name: string;
  title: string;
  text: string;
  picture: string;
  delay: number;
  link: string;
};

const Card = ({ name, title, text, picture, delay, link }: CardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center w-[360px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <div className="w-full h-96 flex items-center justify-center">
        <img
          src={picture}
          alt={name}
          className="w-72 h-72 rounded-full object-scale-down"
        />
      </div>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-2xl pb-6">{title}</div>
      <div className="text-sm text-gray-600">{text}</div>
      <a href={link} className="pt-8 flex flex-row items-center justify-center">
        <p className="pr-2">See More</p>
        <ChevronRight size={20} />
      </a>
    </motion.div>
  );
};
