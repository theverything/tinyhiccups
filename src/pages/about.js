import React from 'react';
import Layout from '../components/layout';
import pic from '../images/IMG_7416.jpg'

export default function AboutPage() {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>
          Hi my name is Kat and I’m the mama of Paisley Nova. I want to share with you how I’m “Momming. “ Let’s be
          real, does any parent know what they’re doing 100% of the time? I sure don’t! Everyday is a learning process
          for me and I rely a lot on my other mama friends for advice and tips to keep me moving along. Everything on
          this blog will show you my personal experience as a new mom.
        </p>

        <p>
          Where I got the name? Well, we all have “hiccups” along the way, right, little surprises and unexpected turns?
          Well here’s a small recap of my pregnancy. In the beginning I struggled a lot with my physical and mental
          health. Then Paisley decided she wanted to meet us 6 weeks early. We were so shocked and unprepared. Even more
          unprepared for her stay at the NICU.
        </p>

        <p>
          Fast forward to us bringing her home, Paisley always had hiccups!!! Sometimes they’d go for like 15 minutes
          straight. They were the cutest, tiniest sounding hiccups I ever did hear.
        </p>

        <p>And so, Tiny Hiccups was born.</p>

        <p>Hope you enjoy this parenthood journey with me as I share my world with you.</p>

        <img className="resp-img" src={pic} alt="kat and paisley"/>

        <p>
          Best,
          <br />
          Kat
        </p>
      </div>
    </Layout>
  );
}
