"use client";

import RewardsHeader from "./components/RewardsHeader";
import RewardsHistoryTable from "./components/RewardsHistoryTable";
import Leaderboard from "./components/Leaderboard";
import WalletCard from "./components/WalletCard";
import ReputationCard from "./components/ReputationCard";

const RewardsOverviewPage = () => {
  return (
    <section className="w-full min-h-screen bg-slate-50">
      {/* Sticky Header */}
      <RewardsHeader />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Heading Section */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Rewards Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track your earnings, monitor performance, and climb the leaderboard.
          </p>
        </div>

        {/* History + Leaderboard */}
        <div className="flex gap-6">
          <RewardsHistoryTable />
          <Leaderboard />
        </div>

        {/* Wallet + Reputation */}
        <div className="flex gap-6">
          <WalletCard />
          <ReputationCard />
        </div>
      </div>
    </section>
  );
};

export default RewardsOverviewPage;
