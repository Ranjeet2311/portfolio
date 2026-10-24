"use client";

import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import {
  contactLinks,
  experience,
  marqueeItems,
  navItems,
  stackGroups,
  stats,
  strengths,
} from "./data/portfolio";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Nav } from "./components/Nav";
import { posts } from "./data/blog-posts";
import { featuredProject, projects } from "./data/projects";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

type ThemeName = "forest" | "ocean";

export default function PortfolioClient() {
  const [theme, setTheme] = useState<ThemeName>("ocean");
  const [activeId, setActiveId] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      let current = "hero";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) current = section.id;
      });
      setActiveId(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Nav
        activeId={activeId}
        isScrolled={isScrolled}
        items={navItems}
        onThemeToggle={() =>
          setTheme((current) => (current === "ocean" ? "forest" : "ocean"))
        }
        theme={theme}
      />
      <Hero stats={stats} />
      <Marquee items={marqueeItems} />
      <About strengths={strengths} />
      <Projects featured={featuredProject} projects={projects} />
      <Stack groups={stackGroups} />
      <Experience items={experience} />
      <Blog posts={posts} />
      <Contact links={contactLinks} />
      <Footer year={2026} />
    </main>
  );
}
