'use client';

import React from 'react';
import styled from 'styled-components';

// SVG Logos as inline components
const NetBankingLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.15)" />
    <rect x="5" y="10" width="22" height="3" rx="1.5" fill="white" opacity="0.9" />
    <rect x="5" y="15" width="6" height="8" rx="1" fill="white" opacity="0.8" />
    <rect x="13" y="15" width="6" height="8" rx="1" fill="white" opacity="0.8" />
    <rect x="21" y="15" width="6" height="8" rx="1" fill="white" opacity="0.8" />
  </svg>
);

const UPILogo = () => (
  <svg width="36" height="20" viewBox="0 0 60 28" fill="none">
    <text x="0" y="20" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="white" opacity="0.95">UPI</text>
    <rect x="48" y="4" width="3" height="20" rx="1.5" fill="#22C55E" />
    <rect x="54" y="8" width="3" height="16" rx="1.5" fill="#22C55E" />
  </svg>
);

const CreditCardLogo = () => (
  <svg width="32" height="22" viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <rect x="0" y="7" width="48" height="8" fill="rgba(255,255,255,0.25)" />
    <rect x="6" y="20" width="14" height="5" rx="2" fill="rgba(255,255,255,0.6)" />
    <rect x="28" y="20" width="14" height="5" rx="2" fill="rgba(255,255,255,0.4)" />
  </svg>
);

const Card = () => {
  return (
    <StyledWrapper>
      <div className="app-container">
        <div className="wallet">
          <div className="wallet-back" />

          {/* Net Banking Card */}
          <div className="card netbanking">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-label">Net Banking</span>
                <div className="card-logo"><NetBankingLogo /></div>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">Holder</span>
                  <span className="value">ALEX SMITH</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 4242</span>
                  <span className="card-number">5524 9910 4242</span>
                </div>
              </div>
            </div>
          </div>

          {/* UPI Card */}
          <div className="card upi">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-label">UPI</span>
                <div className="card-logo"><UPILogo /></div>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">UPI ID</span>
                  <span className="value">Hierance@upi</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 8810</span>
                  <span className="card-number">9012 4432 8810</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className="card creditcard">
            <div className="card-inner">
              <div className="card-top">
                <span className="card-label">Credit Card</span>
                <div className="card-logo"><CreditCardLogo /></div>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <span className="label">Card Type</span>
                  <span className="value">VISA PLATINUM</span>
                </div>
                <div className="card-number-wrapper">
                  <span className="hidden-stars">**** 0094</span>
                  <span className="card-number">3312 0045 0094</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pocket / Wallet Base */}
          <div className="pocket">
            <svg className="pocket-svg" viewBox="0 0 280 160" fill="none">
              <path
                d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z"
                fill="#1a2f3a"
              />
              <path
                d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z"
                stroke="#2a4a5a"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>
            <div className="pocket-content">
              <div className="eye-icon-wrapper">
                {/* Eye slash (hidden state) */}
                <svg className="eye-icon eye-slash" width={18} height={18} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                  <line x1={3} y1={3} x2={21} y2={21} />
                </svg>
                {/* Eye open (visible state) */}
                <svg className="eye-icon eye-open" style={{ opacity: 0 }} width={18} height={18} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* ── Wallet Container ── */
  .wallet {
    position: relative;
    width: 280px;
    height: 230px;
    cursor: pointer;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: transform 0.4s ease;
  }

  /* Entry animation */
  @keyframes slideIntoPocket {
    0%   { transform: translateY(-110px); opacity: 0; }
    100% { transform: translateY(0);      opacity: 1; }
  }

  /* ── Wallet Back ── */
  .wallet-back {
    position: absolute;
    bottom: 0;
    width: 280px;
    height: 200px;
    background: linear-gradient(160deg, #1a2f3a 0%, #0d1e28 100%);
    border-radius: 22px 22px 60px 60px;
    z-index: 5;
    box-shadow:
      inset 0 25px 35px rgba(0, 0, 0, 0.5),
      inset 0 5px 15px rgba(0, 0, 0, 0.4),
      0 20px 40px rgba(0, 0, 0, 0.4);
  }

  /* ── Cards ── */
  .card {
    position: absolute;
    width: 260px;
    height: 140px;
    left: 10px;
    border-radius: 18px;
    padding: 16px 18px;
    color: white;
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.25),
      0 8px 24px rgba(0, 0, 0, 0.3);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    animation: slideIntoPocket 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
    overflow: hidden;
  }

  /* Shimmer overlay */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.12) 0%,
      transparent 50%,
      rgba(255,255,255,0.04) 100%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    opacity: 0.95;
  }

  .card-logo {
    display: flex;
    align-items: center;
  }

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .label {
    font-size: 8px;
    opacity: 0.65;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 2px;
    display: block;
  }

  .value {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .card-number-wrapper {
    text-align: right;
  }

  .hidden-stars {
    font-size: 15px;
    letter-spacing: 2px;
    opacity: 0.9;
  }

  .card-number {
    display: none;
    font-size: 13px;
    letter-spacing: 1px;
    font-family: 'Courier New', monospace;
    opacity: 0.95;
  }

  /* ── Card Variants ── */
  .netbanking {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 60%, #60a5fa 100%);
    bottom: 90px;
    z-index: 10;
    animation-delay: 0.1s;
  }

  .upi {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 60%, #c084fc 100%);
    bottom: 65px;
    z-index: 20;
    animation-delay: 0.2s;
  }

  .creditcard {
    background: linear-gradient(135deg, #0f766e 0%, #14b8a6 60%, #5eead4 100%);
    bottom: 40px;
    z-index: 30;
    animation-delay: 0.3s;
  }

  /* ── Pocket ── */
  .pocket {
    position: absolute;
    bottom: 0;
    width: 280px;
    height: 160px;
    z-index: 40;
    filter: drop-shadow(0 15px 30px rgba(0, 30, 50, 0.5));
  }

  .pocket-svg {
    width: 100%;
    height: 100%;
  }

  .pocket-content {
    position: absolute;
    top: 30px;
    width: 100%;
    text-align: center;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  /* ── Eye Icon ── */
  .eye-icon-wrapper {
    height: 20px;
    width: 20px;
    position: relative;
    opacity: 0.35;
    transition: opacity 0.3s ease;
  }

  .eye-icon {
    position: absolute;
    top: 0;
    left: 0;
    stroke: #38bdf8;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  /* ── Hover Effects ── */
  .wallet:hover {
    transform: translateY(-6px);
  }

  .wallet:hover .eye-icon-wrapper {
    opacity: 1;
  }

  /* Fan cards out on hover */
  .wallet:hover .netbanking {
    transform: translateY(-80px) rotate(-4deg);
  }

  .wallet:hover .upi {
    transform: translateY(-50px) rotate(2deg);
  }

  .wallet:hover .creditcard {
    transform: translateY(-12px) rotate(0deg);
  }

  /* Individual card hover — pop to front */
  .card:hover {
    z-index: 100 !important;
  }

  .wallet:hover .netbanking:hover {
    transform: translateY(-68px) scale(1.06) rotate(0deg);
  }

  .wallet:hover .upi:hover {
    transform: translateY(-75px) scale(1.06) rotate(0deg);
  }

  .wallet:hover .creditcard:hover {
    transform: translateY(-65px) scale(1.06) rotate(0deg);
  }

  /* Reveal full card number on hover */
  .card:hover .hidden-stars  { display: none; }
  .card:hover .card-number   { display: block; }

  /* Eye toggle on wallet hover */
  .wallet:hover .eye-slash {
    opacity: 0;
    transform: scale(0.4);
  }

  .wallet:hover .eye-open {
    opacity: 1 !important;
    transform: scale(1.1);
  }
`;

export default Card;