"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill, BsCreditCardFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

import { mockCandidates } from "@/shared/data/mockData";

const CandidateOverviewCard = () => {
  const params = useParams();
  const username = params.username as string;
  const candidate = mockCandidates.find(c => c.username === username || c._id === username) || mockCandidates[0];
  const profileUsername = candidate.username;
  const topSkills = candidate.skills.slice(0, 4);

  const openProfilePage = () => {
    window.open(`/candidate/${profileUsername}/profile`, "_blank");
  };

  return (
    <aside className="w-full flex-shrink-0 self-start lg:sticky lg:top-24 lg:w-[316px]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image
              src={candidate.avatar}
              alt={candidate.fullName}
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-500">
                Open to work
              </span>
            </div>
            <h3 className="truncate text-lg font-bold tracking-tight text-slate-950 font-jakarta">
              {candidate.fullName}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600 font-inter">
              {candidate.headline}
            </p>
            <p className="mt-2 text-xs font-medium text-slate-500">
              {candidate.location}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">
              Profile strength
            </span>
            <span className="text-xs font-bold text-slate-800">75%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-3/4 rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Strong skills
          </p>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-700 font-inter"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={openProfilePage}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          View full profile
          <FiArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-950">Hireance Plus</h4>
            <span className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
              ACTIVE
            </span>
          </div>

          <div className="space-y-2.5 text-sm">
            <InfoRow label="Plan" value="Premium" />
            <InfoRow label="Valid till" value="12 Dec 2026" />
            <InfoRow label="Boosts" value="3 remaining" />
          </div>

          <button className="mt-5 w-full rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-200">
            Manage subscription
          </button>
        </div>

        <nav className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <SidebarItem
            icon={<AiFillHome size={18} />}
            label="My Home"
            active
            passUrl={`/candidate/${profileUsername}/home`}
          />
          <SidebarItem
            icon={<BsBriefcaseFill size={18} />}
            label="Jobs"
            passUrl={`/candidate/${profileUsername}/jobs`}
          />
          <SidebarItem
            icon={<FaBuilding size={18} />}
            label="Companies"
            passUrl={`/candidate/${profileUsername}/companies`}
          />
          <SidebarItem
            icon={<BsCreditCardFill size={18} />}
            label="Subscriptions"
            passUrl={`/candidate/${profileUsername}/subscriptions`}
          />
        </nav>
      </div>
    </aside>
  );
};

export default CandidateOverviewCard;

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between gap-4 font-inter">
    <span className="text-slate-500 text-xs">{label}</span>
    <span className="font-semibold text-slate-800 text-xs">{value}</span>
  </div>
);

const SidebarItem = ({
  icon,
  label,
  passUrl,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  passUrl: string;
  active?: boolean;
}) => {
  const openPage = () => {
    window.open(passUrl, "_blank");
  };

  return (
    <div
      onClick={openPage}
      className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
      }`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
};
