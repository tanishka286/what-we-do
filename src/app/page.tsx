"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function whatwedo() {
  return (
    <main>
      <div className="heading" data-aos="fade-down">
        <h1>What We Do</h1>
        <p>
          At MINI DIGITAL MEDIA, we're not just service providers — we're your
          digital growth partners. With a keen eye on innovation and a
          relentless drive for performance, we craft result-oriented strategies
          that power your brand’s online presence. Whether you're looking to
          scale downloads, drive sales, or refine your online strategy, we’ve
          got the tools, talent, and tech to make it happen.Our team of digital
          experts specializes in delivering data-driven solutions tailored to
          your business goals. From cutting-edge SEO and precision-targeted
          advertising, to conversion-optimized design and content that connects,
          we ensure every move we make pushes your brand forward.
        </p>
        <h2>
          “We turn clicks into customers — and customers into loyal advocates.”
        </h2>
      </div>
      <div className="anchors" data-aos="fade-right">
        <a>Optimization Based Services</a>
        <a>Web Based Services</a>
        <a>Collaboration Space</a>
      </div>
      <div className="sechead" data-aos="zoom-in">
        <p>OUR SUITE OF </p>
        <h3> SERVICES </h3>
        <p>FOR YOU</p>
      </div>
      <div className="serve">
        <div className="services-row">
          <div className="type1" data-aos="fade-right">--Optimization Based Services--</div>
          <div className="CPS" data-aos="fade-right">
            <div className="head"> CPS</div>
            <h1>Affiliate Marketing Services :</h1>
            <div className="text">
              We help brands build high-converting affiliate programs by
              connecting them with top-tier publishers and influencers. You pay
              only when results happen — a cost-per-sale model ensures your ROI
              is always optimized.
            </div>
            <h2>
              Your success is our benchmark — no upfront costs, just outcomes.
            </h2>
            <button>Read More</button>
          </div>
          <div className="CPI" data-aos="fade-up">
            <div className="head"> CPI</div>
            <h1>App Install Services :</h1>
            <div className="text">
              Our CPI campaigns are built to deliver quality users — not just
              downloads. With precision targeting and performance tracking, we
              help apps scale sustainably by improving both installs and user
              retention.
            </div>
            <h2>
              From installs to impact — we help your app thrive, not just
              survive.
            </h2>
            <button>Read More</button>
          </div>
          <div className="CPL" data-aos="fade-left">
            <div className="head"> CPL</div>
            <h1>Lead Generation Services :</h1>
            <div className="text">
              Our CPL campaigns are engineered to deliver not just leads — but
              the right leads. Using a multi-channel strategy across paid media,
              content, social, and partnerships, we engage high-intent audiences
              and convert them into valuable prospects.
            </div>
            <h2>More value, less guesswork.</h2>
            <button>Read More</button>
          </div>
          <div className="monit" data-aos="fade-up">
            <div className="head"> Search Monetization Services</div>
            <h1>
              Turn Searches Into Revenue. Monetize Intent Like Never Before.
            </h1>
            <div className="text">
              By optimizing paid and organic search pathways, we drive
              high-intent traffic that converts — and pays. From affiliate
              search arbitrage to programmatic placements, we turn every query
              into a revenue opportunity.
            </div>
            <h2>Stop spending on search — start earning from it.</h2>
            <button>Read More</button>
          </div>
        </div>
        <div className="type2" data-aos="fade-left">--Web Based Services--</div>
        <div className="grid">
          <div className="web" data-aos="fade-right">
            <div className="head"> Web Development Services</div>
            <h1>
              Build. Launch. Scale. Crafting Web Experiences That Convert.
            </h1>
            <div className="text">
              We create high-performance websites and web applications that
              don’t just look good — they work hard. Whether you're a startup,
              SaaS, or e-commerce brand, our development team blends design,
              functionality, and optimization to bring your digital vision to
              life.
            </div>
            <h2>
              From landing pages to custom platforms — we build with purpose,
              not templates.
            </h2>
            <button>Read More</button>
          </div>
          <div className="marketing" data-aos="fade-up">
            <div className="head"> Digital Marketing Services</div>
            <h1>Amplify Your Online Presence. Engage, Rank, and Convert.</h1>
            <div className="text">
              We help you cut through the noise and connect with the right
              audience through tailored digital marketing strategies. From SEO
              to social media to content that converts — we fuel your brand’s
              growth across every touchpoint.
            </div>
            <h2>
              We don’t just market — we position your brand to win online.
            </h2>
            <button>Read More</button>
          </div>
          <div className="graphic" data-aos="fade-left">
            <div className="head"> Graphic Design Services</div>
            <h1>Designs That Captivate. Visuals That Communicate.</h1>
            <div className="text">
              We craft striking visual assets that not only grab attention but
              also tell your brand’s story with clarity and impact. From social
              media creatives to full-scale brand kits, our designs are made to
              resonate, engage, and convert.
            </div>
            <h2>
              Where creativity meets clarity — design that works, not just looks
              good.
            </h2>
            <button>Read More</button>
          </div>
          <div className="video" data-aos="fade-right">
            <div className="head"> Video Production Services</div>
            <h1>Tell Your Story. Inspire Action. Make Every Frame Count.</h1>
            <div className="text">
              We produce high-quality, engaging videos that bring your brand to
              life. Whether it's a product launch, brand story, or social media
              reel — our team crafts compelling visuals that connect with your
              audience and leave a lasting impression.
            </div>
            <h2>
              Because in today’s world — video isn’t optional, it’s essential.
            </h2>
            <button>Read More</button>
          </div>
          <div className="promo" data-aos="fade-up">
            <div className="head"> Mobile App Promotion</div>
            <h1>Boost Installs. Expand Reach. Grow with Smart Distribution.</h1>
            <div className="text">
              We help your app break through the noise with targeted promotion
              strategies that drive real downloads and lasting engagement. By
              leveraging OEM partnerships and premium SDK inventory, we place
              your app where it matters — directly in front of high-intent
              users.
            </div>
            <h2>
              From visibility to virality — we accelerate your app’s growth
              journey.
            </h2>
            <button>Read More</button>
          </div>
          <div className="L" data-aos="fade-left">
            <div className="head"> Lead Generation</div>
            <h1>Quality Leads. Real Results. Built for Business Growth.</h1>
            <div className="text">
              We specialize in generating high-intent leads that convert. Using
              data-driven strategies and multi-channel campaigns, we connect
              your business with the right audience — delivering leads that
              drive measurable ROI.
            </div>
            <h2>We don’t chase leads — we deliver them, ready to convert.</h2>
            <button>Read More</button>
          </div>
        </div>
        <div className="type3" data-aos="fade-up">--Collaboration Space--</div>
        <div className="collab">
          <div className="advertisers" data-aos="fade-right">
            <div className="head">Advertisers</div>
            <h1>Reach your audience where it matters :</h1>
            <div className="text">
             We provide intelligent and targeted ad solutions to help your campaigns perform better. Our network ensures your brand reaches highly engaged users in the right context, at the right time.
            </div>
            <h2>Start turning impressions into impact.</h2>
            <a href="/pages/advertizers">
            <button>Read More</button>
            </a>
          </div>
          <div className="publishers" data-aos="fade-left">
            <div className="head">Publishers</div>
            <h1>Maximize your revenue without compromising user experience:</h1>
            <div className="text">
              We connect you with top-tier advertisers while giving you full control over how and where ads appear. Our tools are built to increase your earnings while keeping your content and audience front and center.
            </div>
            <h2>Monetization made simple, smart, and sustainable.</h2>
            <a href="/pages/publishers">
            <button>Read More</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
