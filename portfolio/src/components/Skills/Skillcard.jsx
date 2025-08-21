import RevealOnScroll from "../global/RevealOnScroll";

const Skillcard = ({ skill }) => {
  return (
    <RevealOnScroll>
      <div className="group relativeflex flex-col items-center justify-center p-4 border-2 border-green-600 gap-2 rounded-xl hover:scale-110 hover:shadow-xl hover:bg-green-950/70 transition-all duration-300">
        <img
          height={60}
          width={60}
          src={skill.src}
          alt={skill.alt}
          className="object-contain mb-2 p-2"
        />
        <div className="flex justify-between w-full">
          <p className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">{skill.alt}</p>
          <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">{skill.level}%</p>
        </div>
        <div className="w-full bg-gray-800 rounded-xs h-2 overflow-hidden">
          <div
            className="bg-green-600 h-4 text-xs rounded-xs font-bold flex items-center justify-center text-white transition-all duration-700 ease-in-out"
            style={{ width: `${skill.level}%` }}
          >
            {/* {skill.level}% */}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Skillcard;
