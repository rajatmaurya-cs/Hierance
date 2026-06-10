"use client";

import React, { useState } from "react";
import Header from "@/shared/components/layout/Header";
import Notifications from "@/shared/components/ui/Notifications";
import ProfileDrawer from "@/shared/components/ui/ProfileDrawer";

export default function ClientLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) {
  const { username } = React.use(params);
  const safeUsername = username === "undefined" ? "rajat" : username;
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isOverlayActive = isNotificationOpen || isProfileOpen;

  const closeAll = () => {
    setIsNotificationOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <div className="relative">
      {/* HEADER */}
      <Header
        username={safeUsername}
        onBellClick={() => {
          setIsProfileOpen(false);
          setIsNotificationOpen(true);
        }}
        onProfileClick={() => {
          setIsNotificationOpen(false);
          setIsProfileOpen(true);
        }}
      />

      {/* MAIN CONTENT */}
      <div
        className={`transition-opacity duration-300 ${
          isOverlayActive ? "opacity-40 pointer-events-none" : ""
        }`}
      >
        {children}
      </div>

      {/* OVERLAY */}
      {isOverlayActive && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={closeAll} />
      )}

      {/* NOTIFICATION DRAWER */}
      {isNotificationOpen && <Notifications onClose={closeAll} />}

      {/* PROFILE DRAWER */}
      {isProfileOpen && <ProfileDrawer onClose={closeAll} />}
    </div>
  );
}
