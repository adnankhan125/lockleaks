'use client';

import React from 'react';
import '../styles/PricingStarter.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

type Feature = {
  text: string;
  icon: string;
};

type Plan = {
  title: string;
  description: string;
  extraNote?: string;
  price: string;
  badge?: string;
  features: Feature[];
  button: string;
};

type PricingStarterProps = {
  hideStartFree?: boolean; 
};

const monthlyPlans: Plan[] = [
  {
    title: 'Starter',
    description: 'Essential protection for new and small creators.',
    price: '$100 /month',
    features: [
      { text: 'Weekly scans & removals', icon: '/icons/weekly.svg' },
      { text: 'Leak-Site Removals', icon: '/icons/removal.svg' },
      { text: 'Search Engine Removals', icon: '/icons/search.svg' },
      { text: 'Social Media Protection', icon: '/icons/social.svg' },
      { text: '24/7 Support Access', icon: '/icons/support.svg' },
    ],
    button: 'Active',
  },
];

export default function PricingStarter({ hideStartFree = false }: PricingStarterProps) {
  return (
    <section className="pricing-starter-section">
      <div className="container text-center">
        <h2 className="section-title">Your Current Plan: Starter</h2>
        {/* Subscription Info */}
        <p className="section-subtitle">
          Automatically renews on 18.05.2025.<br />
          You can cancel anytime.
        </p>
        {/* Button Below Subscription Info */}
        <a href="/manage-subscription" className="custom-btn mt-3 mb-4 text-center d-inline-block">
         Cancel Subscription        
         </a>
        {/* Plans Grid */}
        <div className="row justify-content-center">
          {monthlyPlans.map((plan, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card plan-card text-start">
                <div className="card-body d-flex flex-column justify-content-between text-white">
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                  <h4>{plan.price}</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature">
                      <img src={feature.icon} alt={feature.text} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                  <a href="/start" className="custom-btn mt-3 w-100 text-center d-inline-block">
                    {plan.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
