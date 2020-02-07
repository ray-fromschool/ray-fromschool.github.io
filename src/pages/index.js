import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Ryan Fitzgerald" />
    <Section id="about" title="About Me">
      <p>
        I'm a motivated full-stack engineer who has experience building and
        scaling web applications and services in various domains.
      </p>
      <p>
        I'm also passionate about open source contributions, working in high
        impact environments with frequent deployments, and helping growing
        development teams build great products.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="Ambyint"
        link="https://ambyint.com"
        desc="Full-Stack Developer, September 2018 - Present"
      />
      <Link
        title="Bank of Canada"
        link="https://bankofcanada.ca"
        desc="Full-Stack Developer, January 2018 - September 2018"
      />
      <Link
        title="Bank of Canada"
        link="https://bankofcanada.ca"
        desc="Full-Stack Developer (Co-op), May 2015 - August 2017"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Pivalink"
        link="https://pivalink.com"
        desc="Tool to create microlanding pages that can be easily updated and customized to fit any brand"
      />
      <Link
        title="Coursefacts"
        link="https://coursefacts.com"
        desc="A platform where students can read and write university / college course reviews anonymously"
      />
      <Link
        title="Dev Blog"
        link="https://github.com/RyanFitzgerald/devblog"
        desc="A open source and minimal personal blog template for developers built with Gatsby and React"
      />
      <Link
        title="Dev Portfolio"
        link="https://github.com/RyanFitzgerald/devportfolio"
        desc="An open source and customizable single-page personal portfolio template for developers"
      />
      <Link
        title="Day Counter"
        link="https://chrome.google.com/webstore/detail/day-counter-new-tab-page/popaiegponeiefbiddhmaphpbdjoegff?hl=en"
        desc="Chrome extension to track days until or since life events with over 5k active users"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), Python, React, Node.js, Express.js, Ruby on Rails, PHP"
      />
      <Link title="Databases" desc="MongoDB, PostreSQL, MySQL" />
      <Link
        title="Other"
        desc="Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum"
      />
    </Section>
  </Layout>
);

export default IndexPage;
