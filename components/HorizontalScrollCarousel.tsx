import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-950">
      <div className="flex h-48 items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    <h1 className="font-semibold text-white text-5xl md:text-6xl">
      <span className="text-[#ff0] ">Preline Agency:</span> Transforming ideas into reality
    </h1>
    <div className="max-w-4xl">
      <p className="mt-5 text-neutral-400 text-lg">
        It is a creative hub where imagination meets craftsmanship to transform ideas into tangible realities. At Preline Agency, we specialize in turning conceptual visions into concrete forms, whether it be through design, artistry, or technological innovation.
      </p>
    </div>
  </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-960">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid  ">
        <p className="p-8 text-6xl font-black uppercase text-white">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/Nw3a33C8bfO7VJMCTNgSz/3633c190fd7309970a9ac85d7c7d3989/avocado-square.jpg?w=3840&q=90&fm=webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/4tsscEEHQNwQVD9f8asJHd/cc4800290751be1bc6de29be6157d361/leaf.jpg?w=3840&q=90&fm=webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/7mS9WrS78h8D8wJmEY7xGw/107fe1065e3515a2bb9ba47b9927169f/lychee.jpg?w=3840&q=90&fm=webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/oTUHVfoemkHiNasFEeEEB/c2016400ba61ec33d67e40a0e6782609/coffeeshop.png?w=3840&q=90&fm=webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/1uXIgnK3ezRwBVmLmr6LhV/8d76002753557244109c3395eb5c774d/basketball3.png?w=3840&q=90&fm=webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/JzcApc2OQuk8lRyWEgOsP/8d16d11f783f0381ae15cc35d01aa16a/hedgehog.png?w=3840&q=90&fm=webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.ctfassets.net/kftzwdyauwt9/7EhlZGpj8SwCEJ9mBeBKgd/cd771d25046c25cbdea983906eef2bf0/ocean.jpg?w=3840&q=90&fm=webp",
    title: "Title 7",
    id: 7,
  },
];