"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function whatwedo() {
  return (
    <main>
      <div className="heading">
        <h1>What We Do</h1>
        <p>At MINI DIGITAL MEDIA, we're not just service providers — we're your digital growth partners. With a keen eye on innovation and a relentless drive for performance, we craft result-oriented strategies that power your brand’s online presence. Whether you're looking to scale downloads, drive sales, or refine your online strategy, we’ve got the tools, talent, and tech to make it happen.</p>
        <h2>“We turn clicks into customers — and customers into loyal advocates.”</h2>
      </div>
      <div className="serve">
        <div className="CPS">
          <div className="head">🔗 CPS</div>
          <h1>Affiliate Marketing Services :</h1>
          <div className="text">
          Drive measurable results through strategic partnerships.
          We help brands build high-converting affiliate programs by connecting them with top-tier publishers and influencers. You pay only when results happen — a cost-per-sale model ensures your ROI is always optimized.
          </div>
          <div className="points">
            <p>✓ You only pay for results</p>
            <p>✓ Strategic onboarding of high-performing affiliates</p>
            <p>✓ Transparent tracking and real-time reporting</p>
            <p>✓ Scalable campaigns that grow with your business</p>
          </div>
          <h2>Your success is our benchmark — no upfront costs, just outcomes.</h2>
        </div>
        <div className="CPI">
          <div className="head">🔗 CPI</div>
          <h1>App Install Services :</h1>
          <div className="text">
          Grow your app’s reach through targeted install strategies.
          Our CPI campaigns are built to deliver quality users — not just downloads. With precision targeting and performance tracking, we help apps scale sustainably by improving both installs and user retention.
          </div>
          <div className="points">
            <p>✓ Hyper-targeted user acquisition strategies</p>
            <p>✓ In-depth analytics and user behavior insights</p>
            <p>✓ Geo, interest & device-based targeting</p>
            <p>✓ Continuous performance optimization</p>
          </div>
          <h2>From installs to impact — we help your app thrive, not just survive.</h2>
        </div>
        <div className="CPL">
          <div className="head">🔗 CPL</div>
          <h1>Lead Generation Services :</h1>
          <div className="text">
          Attract the Right Audience. Capture Quality Leads. Fuel Your Growth.
          Our CPL campaigns are engineered to deliver not just leads — but the right leads. Using a multi-channel strategy across paid media, content, social, and partnerships, we engage high-intent audiences and convert them into valuable prospects.
          </div>
          <div className="points">
            <p>✓ Precision targeting to reach your ideal customer</p>
            <p>✓ Engaging landing pages and lead magnets that convert</p>
            <p>✓ Seamless CRM integration for real-time lead flow</p>
            <p>✓ Campaigns optimized for both volume and quality</p>
          </div>
          <h2>Pay only for qualified leads that actually move the needle. More value, less guesswork.</h2>
        </div>
        <div className="monit">
          <div className="head">🔗 Search Monetization Services</div>
          <h1>Turn Searches Into Revenue. Monetize Intent Like Never Before.</h1>
          <div className="text">
          We help you unlock the true value of search with smart, scalable monetization strategies. By optimizing paid and organic search pathways, we drive high-intent traffic that converts — and pays. From affiliate search arbitrage to programmatic placements, we turn every query into a revenue opportunity.
          </div>
          <div className="points">
            <p>✓ Optimized search campaigns tailored for monetization</p>
            <p>✓ High-ROI keyword strategies that capture buyer intent</p>
            <p>✓ Real-time analytics and bid management</p>
            <p>✓ Google, Bing, and alternative search engine networks</p>
          </div>
          <h2>Stop spending on search — start earning from it.
          Let every click count toward your bottom line.</h2>
        </div>
      </div>
    </main>
  );
}
