import ProjectDetail from '@/components/ProjectDetail';
import { Globe } from 'lucide-react';

const goGuideProject = {
  title: "goGuide — Campus Navigation System",
  description: "Cross-platform campus guide for Parul University students",
  longDescription: "goGuide is a comprehensive campus navigation system designed specifically for Parul University students. This cross-platform application provides seamless access to campus facilities, academic resources, and real-time navigation assistance. The project addresses the common challenge new students face when navigating large university campuses by offering an intuitive, user-friendly interface that combines wayfinding, resource discovery, and academic information in one unified platform.",
  tech: ["React Native", "React", "TypeScript", "Firebase", "Google Maps API", "Node.js"],
  features: [
    "Interactive campus map with real-time navigation",
    "Building and facility search with detailed information",
    "Class schedule integration with location reminders",
    "Emergency services and quick contact features",
    "Accessibility features for differently-abled students",
    "Offline mode for core campus information",
    "Push notifications for important campus updates",
    "Student dashboard with personalized shortcuts"
  ],
  challenges: [
    "Creating accurate indoor navigation for complex building layouts",
    "Implementing real-time location tracking without draining battery",
    "Designing intuitive UI for users with varying technical skills",
    "Handling large amounts of campus data efficiently",
    "Ensuring cross-platform consistency between iOS and Android"
  ],
  solutions: [
    "Developed hybrid positioning system combining GPS, WiFi, and Bluetooth beacons",
    "Implemented smart caching and background location optimization",
    "Created user-tested interface with progressive disclosure of features",
    "Used Firebase real-time database with intelligent data partitioning",
    "Leveraged React Native's shared component library with platform-specific optimizations"
  ],
  outcomes: [
    "Reduced new student campus orientation time by 60%",
    "Achieved 4.8-star rating with 500+ downloads in first month",
    "Decreased student support queries related to navigation by 40%",
    "Recognized as 'Best Student Innovation' by Parul University"
  ],
  role: "Lead Developer & UI/UX Designer",
  duration: "3 months",
  teamSize: "4 members",
  liveUrl: "https://example.com/goguide",
  githubUrl: "https://github.com/lilblackboot/goguide",
  color: "accent-green",
  icon: <Globe className="text-accent-green" size={32} />
};

export default function GoGuidePage() {
  return <ProjectDetail project={goGuideProject} />;
}
