"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

type HeaderProps = {
  username: string;
  onBellClick: () => void;
  onProfileClick: () => void;
};

const Header = ({ username, onBellClick, onProfileClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 lg:flex-nowrap">

      {/* ================= LEFT SECTION ================= */}
      <div className="flex min-w-0 items-center gap-6 lg:gap-10">

        {/* Logo */}
        <Link href={`/candidate/${username}/home`}>
          <Image
            src={"/hireance-PNG-logo.png"}
            alt="hireance-logo"
            width={130}
            height={40}
            style={{ height: "auto" }}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 sm:flex">
          <NavItem
            title="Jobs"
            href={`/candidate/${username}/jobs`}
          />
          <NavItem
            title="Companies"
            href={`/candidate/${username}/companies`}
          />
        </nav>
      </div>

     

      {/* ================= RIGHT SECTION ================= */}
      <div className="flex items-center gap-4 sm:gap-5">

        {/* Plus Button */}
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Hireance Plus
        </button>

        {/* Notification */}
        <div
          onClick={onBellClick}
          className="group relative cursor-pointer"
        >
          <FaBell className="text-lg text-slate-600 transition group-hover:text-blue-600" />
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            2
          </span>
        </div>

        {/* Profile */}
        <div
          onClick={onProfileClick}
          className="relative h-9 w-9 cursor-pointer"
        >
          <Image
            src="/random.jpg"
            alt="Profile"
            fill
            className="rounded-full border-2 border-transparent object-cover transition hover:border-blue-500"
          />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;

/* ================= NAV ITEM ================= */

const NavItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="relative transition hover:text-blue-600"
      >
        {title}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
      </Link>

      <MegaDropdown />
    </div>
  );
};

/* ================= MEGA DROPDOWN ================= */

const MegaDropdown = () => {
  return (
    <div
      className="
      invisible
      absolute
      left-0
      top-full
      mt-4
      grid
      w-[min(850px,calc(100vw-48px))]
      grid-cols-3
      gap-10
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-8
      opacity-0
      shadow-xl
      transition-all
      duration-200
      group-hover:visible
      group-hover:opacity-100
    "
    >

      {/* Column 1 */}
      <DropdownColumn
        title="Explore Categories"
        items={[
          "Unicorn",
          "MNC",
          "Startup",
          "Product Based",
          "Internet",
        ]}
      />

      {/* Column 2 */}
      <DropdownColumn
        title="Explore Collections"
        items={[
          "Top Companies",
          "IT Companies",
          "Fintech Companies",
          "Sponsored Companies",
          "Featured Companies",
        ]}
      />

      {/* Column 3 */}
      <DropdownColumn
        title="Research Companies"
        items={[
          "Interview Questions",
          "Company Salaries",
          "Company Reviews",
          "Salary Calculator",
        ]}
      />
    </div>
  );
};

/* ================= DROPDOWN COLUMN ================= */

const DropdownColumn = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="mb-3 font-semibold text-slate-900">
        {title}
      </h3>
      {items.map((item: string, index: number) => (
        <span
          key={index}
          className="cursor-pointer text-sm text-slate-600 transition hover:text-blue-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
};
