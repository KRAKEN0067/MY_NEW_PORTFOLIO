import RevealOnScroll from "../global/RevealOnScroll";

const Skillcard = ({ skill }) => {
  return (
    <RevealOnScroll>
      <div className="flex flex-col items-center justify-center p-4 border-2 border-green-600 gap-2 rounded-xl hover:scale-110 hover:shadow-xl hover:bg-green-950/20 transition-all duration-300">
        <img
          height={60}
          width={60}
          src={skill.src}
          alt={skill.alt}
          className="object-contain mb-2 p-2"
        />
        {/* <p className="overflow-hidden text-gray-200 text-sm font-medium">{skill.alt}</p> */}
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
