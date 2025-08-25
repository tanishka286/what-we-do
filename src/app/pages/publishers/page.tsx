"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./publisher.css";

export default function publishers() {
  return (
    <main>
      <div className="top">
        <h1>Publishers</h1>
        <h3>Unlock Revenue from Every Click</h3>
        <p>Our Publisher solutions help you monetize efficiently without compromising user experience. Whether you're running a blog, a streaming site, or an app, we offer smart, scalable monetization tailored to your audience.
          We focus on clean ad formats, fast-loading technology, and seamless integration—so your content remains the hero while your revenue grows in the background. With access to premium demand sources, real-time data insights, and hands-on support, we help you turn traffic into long-term value.
          Maximized Revenue Opportunities -
          We don’t do generic. Every publisher gets a custom strategy based on their traffic, content, and audience behavior—so you earn more, consistently.
        </p>
      </div>
      <div className="mid1">
        <h2>Real-Time Optimization & Insights</h2>
        <p>Track performance in real-time with detailed dashboards. We test, tweak, and optimize continuously to make sure your monetization scales with your growth. 
        </p>
      </div>
      <div className="mid2">
        <h2>Seamless Integration & Human Support</h2>
        <p>Plug in with ease—no complex tech setup. And if you ever need help, we have a dedicated support team (real humans!) available when you need them.
        </p>
      </div>
      <div className="bottom">
        <h2>Access to Premium Advertisers
        </h2>
        <p>Work with trusted global advertisers. Get higher CPMs and better fill rates without junk ads slowing down your site or turning off your users.
        </p>
      </div>
    </main>
  )
}