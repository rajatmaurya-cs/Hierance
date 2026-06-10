"use client";

import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <HomePageHeader />
      
      <main className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8">Refund Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: May 10, 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Overview</h2>
            <p>
              At Hireance, we strive to ensure complete satisfaction with our services. This Refund Policy outlines 
              the conditions under which refunds may be issued for paid services purchased through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Eligibility for Refunds</h2>
            <p>
              Refund requests are evaluated on a case-by-case basis. You may be eligible for a refund under the 
              following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service not delivered:</strong> If a purchased service was not delivered as described within the stated timeframe.</li>
              <li><strong>Technical issues:</strong> If persistent technical issues on our end prevented you from accessing or using the paid service.</li>
              <li><strong>Duplicate payment:</strong> If you were charged more than once for the same service.</li>
              <li><strong>Cancellation within cooling-off period:</strong> If you cancel a subscription or service within 7 days of purchase and have not used the service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Non-Refundable Services</h2>
            <p>
              The following services are generally non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services that have been fully delivered and consumed.</li>
              <li>One-time preparation plan purchases after the materials have been accessed or downloaded.</li>
              <li>Services where a refund request is made after 30 days from the date of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. How to Request a Refund</h2>
            <p>
              To request a refund, please contact our support team at{" "}
              <a href="mailto:info@smallfare.com" className="text-indigo-600 hover:underline">info@smallfare.com</a>{" "}
              with the following details:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your registered email address.</li>
              <li>Order or transaction ID.</li>
              <li>Reason for the refund request.</li>
              <li>Any supporting documentation or screenshots.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Refund Processing</h2>
            <p>
              Once your refund request is received and reviewed, we will notify you of the approval or rejection of 
              your refund. If approved, your refund will be processed within 7–10 business days and credited back to 
              your original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact us at{" "}
              <a href="mailto:info@smallfare.com" className="text-indigo-600 hover:underline">info@smallfare.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
