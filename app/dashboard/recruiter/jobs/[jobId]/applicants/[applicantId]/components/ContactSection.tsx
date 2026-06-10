import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaPhone,
  FaLink,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ContactSection = () => {
  return (
    <section
      className="
        bg-white
        border border-neutral-200
        rounded-2xl
        shadow-sm
        p-5
        space-y-4
      "
    >
      <h3 className="text-base font-semibold text-neutral-900">
        Contact Information
      </h3>

      <div className="flex flex-wrap gap-3">
        <ContactIcon>
          <FaLinkedin />
        </ContactIcon>
        <ContactIcon>
          <FaGithub />
        </ContactIcon>
        <ContactIcon>
          <FaXTwitter />
        </ContactIcon>
        <ContactIcon>
          <FaPhone />
        </ContactIcon>
        <ContactIcon>
          <SiGmail />
        </ContactIcon>
        <ContactIcon>
          <FaLink />
        </ContactIcon>
      </div>
    </section>
  );
};

export default ContactSection;

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      w-10 h-10
      rounded-full
      bg-blue-50
      text-blue-600
      flex items-center justify-center
      hover:bg-blue-100
      hover:text-blue-700
      transition-all
      cursor-pointer
    "
  >
    {children}
  </div>
);
