import { FaTrophy, FaAward, FaMedal, FaStar, FaLanguage } from "react-icons/fa";

const AchievementsSection = () => {
  return (
    <section
      className="
        w-1/2
        bg-white
        border border-neutral-200
        rounded-xl
        shadow-sm
        p-6
        space-y-6
      "
    >
      {/* ================= Languages ================= */}
      <div>
        <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
          {/* <FaLanguage className="text-blue-600 text-2xl" /> */}
          Languages
        </h2>

        <div className="mt-4 space-y-3">
          {/* English */}
          <div>
            <div className="flex justify-between text-sm text-neutral-700">
              <span>English</span>
              <span className="text-blue-600 font-medium">Native</span>
            </div>
            <div className="w-full h-2 bg-neutral-100 rounded-full mt-1">
              <div className="w-full h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* French */}
          <div>
            <div className="flex justify-between text-sm text-neutral-700">
              <span>French</span>
              <span className="text-blue-600 font-medium">Professional</span>
            </div>
            <div className="w-full h-2 bg-neutral-100 rounded-full mt-1">
              <div className="w-[75%] h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Achievements ================= */}
      <div>
        <h2 className="text-base font-semibold text-neutral-900 mb-4">
          Achievements & Highlights
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Achievement 1 */}
          <div
            className="
              group
              p-4
              rounded-lg
              border border-neutral-200
              hover:border-blue-400
              hover:shadow-md
              transition-all
              cursor-pointer
              bg-gradient-to-br from-blue-50 to-white
            "
          >
            <FaTrophy className="text-blue-600 text-xl mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-neutral-900">
              Top Performer 2023
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              Awarded best frontend engineer of the year.
            </p>
          </div>

          {/* Achievement 2 */}
          <div
            className="
              group
              p-4
              rounded-lg
              border border-neutral-200
              hover:border-blue-400
              hover:shadow-md
              transition-all
              cursor-pointer
              bg-gradient-to-br from-blue-50 to-white
            "
          >
            <FaMedal className="text-blue-600 text-xl mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-neutral-900">
              Hackathon Winner
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              1st place in national AI innovation challenge.
            </p>
          </div>

          {/* Achievement 3 */}
          <div
            className="
              group
              p-4
              rounded-lg
              border border-neutral-200
              hover:border-blue-400
              hover:shadow-md
              transition-all
              cursor-pointer
              bg-gradient-to-br from-blue-50 to-white
            "
          >
            <FaAward className="text-blue-600 text-xl mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-neutral-900">
              AWS Certified
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              Certified Solutions Architect Associate.
            </p>
          </div>

          {/* Achievement 4 */}
          <div
            className="
              group
              p-4
              rounded-lg
              border border-neutral-200
              hover:border-blue-400
              hover:shadow-md
              transition-all
              cursor-pointer
              bg-gradient-to-br from-blue-50 to-white
            "
          >
            <FaStar className="text-blue-600 text-xl mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-semibold text-neutral-900">
              Open Source Contributor
            </h4>
            <p className="text-xs text-neutral-500 mt-1">
              Contributed to 15+ public repositories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
