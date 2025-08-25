"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./ad.css";


export default function advertizers() {
  return (
    <main>
      <div className="top">
        <h1>Advertiser</h1>
        <h3>Put Your Brand Where It Matters</h3>
        <p>We help advertisers reach the right audience at the right time. With powerful targeting and premium placements, your message won’t just be seen—it’ll be remembered. Our platform is designed for performance, whether you're building brand awareness or driving direct conversions. With deep audience insights, cross-device tracking, and high-quality publisher inventory, we make every ad dollar work harder. From strategy to creative execution, we ensure your campaigns run smoothly, securely, and successfully.
        We help advertisers reach the right audience at the right time. With powerful targeting and premium placements, your message won’t just be seen—it’ll be remembered.
        </p>
      </div>
      <div className="mid1">
        <h2>Smart Targeting, Better Results </h2>
        <p>We go beyond demographics. Use advanced targeting based on user intent, device, behavior, and more to make every ad impression count.
        </p>
      </div>
      <div className="mid2">
        <h2>Brand-Safe Environments</h2>
        <p>Your reputation is everything. That’s why we only run your ads on verified, brand-safe platforms and keep control in your hands.
        </p>
      </div>
      <div className="mid3">
        <h2>Flexible Campaign Models
        </h2>
        <p>Whether you’re after brand awareness or conversions, we offer performance-based models that align with your goals—CPM, CPC, or CPA.
        </p>
      </div>
      <div className="mid4">
        <h2>Transparent Reporting & Growth
        </h2>
        <p>Stay in control with real-time analytics. See what’s working, optimize creatives on the fly, and scale your reach with data-backed decisions.
        </p>
      </div>
      <div className="bottom">
        <h2>Creative That Actually Converts
        </h2>
        <p>Our creatives don’t just look good—they perform. From static banners to interactive formats, we help you craft campaigns that drive real action.
        </p>
      </div>
    </main>
  )
}