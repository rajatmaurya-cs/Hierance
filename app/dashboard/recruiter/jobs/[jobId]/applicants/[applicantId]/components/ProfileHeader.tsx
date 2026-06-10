import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { VscOpenPreview } from "react-icons/vsc";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaPhone,
  FaLink,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ProfileHeader = () => {
  return (
    <section
      className="
        w-full
        bg-white
        border border-neutral-200
        rounded-2xl
        shadow-sm
        px-6 py-5
        flex items-center justify-between
      "
    >
      {/* ================= LEFT SIDE ================= */}
      <div className="flex items-center gap-5">
        {/* Profile Image */}
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-semibold">
          S
        </div>

        <div className="flex flex-col gap-2">
          {/* Name */}
          <h2 className="text-2xl font-semibold text-neutral-900">
            Sarah Johnson
          </h2>

          {/* Position */}
          <p className="text-sm text-neutral-600">
            AI Full-Stack Engineer
            <span className="text-blue-600 font-medium"> · Google</span>
          </p>

          {/* 🔵 Contact Icons moved here */}
          <div className="flex items-center gap-3 mt-1">
            <HeaderIcon>
              <FaLinkedin />
            </HeaderIcon>
            <HeaderIcon>
              <FaGithub />
            </HeaderIcon>
            <HeaderIcon>
              <FaXTwitter />
            </HeaderIcon>
            <HeaderIcon>
              <FaPhone />
            </HeaderIcon>
            <HeaderIcon>
              <SiGmail />
            </HeaderIcon>
            <HeaderIcon>
              <FaLink />
            </HeaderIcon>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE INFO ================= */}
      <div className="flex items-center gap-8 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          <span>4 yrs experience</span>
        </div>

        <div className="flex items-center gap-2">
          <FaLocationDot className="text-blue-600" />
          <span>Washington, USA</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          <span>Immediate Joiner</span>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div>
        <button
          className="
            flex items-center gap-2
            bg-blue-600
            text-white
            px-5 py-2
            rounded-lg
            text-sm
            font-medium
            hover:bg-blue-700
            transition-colors
          "
        >
          Resume
          <VscOpenPreview className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;

/* 🔹 Small reusable icon component */
const HeaderIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      w-6 h-6
      rounded-full
      bg-blue-50
      text-blue-400
      flex items-center justify-center
      hover:bg-blue-100
      hover:text-blue-700
      transition-all
      cursor-pointer
      text-xs
    "
  >
    {children}
  </div>
);
