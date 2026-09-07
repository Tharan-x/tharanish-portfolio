import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import SpatialCanvas3D, { type SectionKey } from './components/3d/SpatialCanvas3D';
import SpatialViewport from './components/layout/SpatialViewport';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionKey>('home');

  useEffect(() => {
    // Dynamic tab title updating
    const sectionTitles: Record<SectionKey, string> = {
      home: 'THARANISH M. — AI & Data Science Portfolio',
      about: 'About — THARANISH M.',
      projects: 'Projects & Platforms — THARANISH M.',
      experience: 'Experience & Certifications — THARANISH M.',
      skills: 'Technical Skills — THARANISH M.',
      achievements: 'Achievements & Hackathons — THARANISH M.',
      contact: 'Contact & Hire — THARANISH M.',
    };
    document.title = sectionTitles[activeSection] || 'THARANISH M. — Portfolio';
  }, [activeSection]);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={(section) => setActiveSection(section)} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={(section) => setActiveSection(section)} />;
    }
  };

  return (
    <div className="app-main-wrapper">
      {/* 3D WebGL Background Canvas with section camera morphing */}
      <SpatialCanvas3D activeSection={activeSection} />

      {/* Floating 3D Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* 3D Spatial Viewport Transition Stage */}
      <SpatialViewport activeSection={activeSection}>
        <main className="active-section-content">{renderActiveSection()}</main>
      </SpatialViewport>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
