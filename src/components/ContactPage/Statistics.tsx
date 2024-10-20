 
import React from "react";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-10">
      <div className="self-start text-6xl font-bold text-yellow-400 max-md:text-4xl">
        {value}
      </div>
      <div className="mt-5 text-3xl font-medium text-white">{label}</div>
    </div>
  </div>
);

const Statistics: React.FC = () => {
  const stats = [
    { value: "350 +", label: "Clients Worldwide" },
    { value: "20 +", label: "Team Members" },
    { value: "100 +", label: "Projects Completed" },
    { value: "85M +", label: "Revenue Generated" },
  ];

  return (
    <section className="self-stretch px-20 py-14 mt-48 w-full bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {stats.map((stat, index) => (
          <Stat key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
