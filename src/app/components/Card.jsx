import { MotionDiv } from "./Motion";

const stagger = 0.05;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Card({item, index}) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
    }}
      viewport={{ amount: 0 }}
    >
      <div className="border border-black-500 p-4 rounded bg-black">
        {index}. {item.speciality_name}
      </div>
    </MotionDiv>
  );
}

export default Card;