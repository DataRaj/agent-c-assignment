import React from "react";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-6">
    <span className="text-4xl font-bold text-yellow-400 mb-2">{value}</span>
    <span className="text-white text-lg">{label}</span>
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
    <div className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;