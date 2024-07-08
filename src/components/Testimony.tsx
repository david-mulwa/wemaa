"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold  bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Director",
    designation: "Panda",
    content: (
      <p>
        I cant explain howthe parcel <Highlight> was abkle to reach the client quickly</Highlight>. THe product Arrived to the clients safe and in good condition. 98% recommend 
      </p>
    ),
  },
  {
    id: 1,
    name: "Director ",
    designation: "Kenpoly",
    content: (
      <p>
        Thank you to your team from going the extra mile and working on Friday to deliver to site <Highlight>as soon as possible </Highlight> .Appreciate that it is difficult to affect the flight times but very grateful to both you and your team. 
      </p>
    ),
  },
  {
    id: 2,
    name: "Director",
    designation: "Plastico",
    content: (
      <p>
        I must explain to you <Highlight>how all this mistaken idea of denouncing pleasure and praising pain was born </Highlight>and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
      </p>
    ),
  },
];
