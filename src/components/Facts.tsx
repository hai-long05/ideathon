import {
  BadgeCheck,
  BriefcaseBusiness,
  Users,
  type LucideProps,
} from 'lucide-react';
import { motion } from 'motion/react';

const Facts = () => {
  return (
    <div className="flex items-center justify-center pb-12 w-screen h-screen flex-col">
      <div className="font-normal text-4xl w-2xl text-center pb-32">
        Driven by Curiosity. United by Purpose. Inspired to Build.
      </div>
      <div className="px-20 flex flex-row space-x-40">
        <Card
          title="We're Ready to Challenge Convention"
          text="
            We are applying for the DSAG Ideathon to rethink outdated models and
            explore what business can look like in a world of rapid change.
            Innovation starts with asking better questions.
            "
          icon={BriefcaseBusiness}
          delay={0}
        />
        <Card
          title="A Future Built on Bold, Responsible Ideas"
          text="We aim to develop solutions that go beyond hype - 
              grounded in real needs, scalable, and impactful for both people and organizations.
              "
          icon={BadgeCheck}
          delay={0.2}
        />
        <Card
          title="Three Minds. One Vision. Countless Perspectives."
          text="Our strength lies in collaboration: different skillsets, shared ambition, 
          and a clear goal - creating sustainable innovation with real-world value.
          "
          icon={Users}
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default Facts;

type CardProps = {
  title: string;
  text: string;
  icon: React.ComponentType<LucideProps>;
  delay: number;
};

const Card = ({ title, text, icon: Icon, delay }: CardProps) => {
  return (
    <motion.div
      className="flex items-center flex-col text-center w-[340px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <Icon size={40} className="mb-4" />
      <div className="text-2xl pb-6">{title}</div>
      <div className="text-sm text-gray-600">{text}</div>
    </motion.div>
  );
};
