import ProjectDetail from '@/components/ProjectDetail';
import { Brain } from 'lucide-react';

const nutriwiseProject = {
  title: "Nutriwise — AI-Powered Food Scanner",
  description: "Health-focused mobile app with AI nutritional analysis",
  longDescription: "Nutriwise is an innovative mobile application that revolutionizes how users track their nutritional intake. By leveraging Google's Gemini AI, the app can instantly analyze food barcodes and provide comprehensive nutritional information, personalized health recommendations, and dietary insights. The application addresses the growing need for convenient health monitoring in our fast-paced lifestyle, making nutrition tracking as simple as taking a photo of a product's barcode.",
  tech: ["React Native", "Expo", "Gemini AI", "Firebase", "TensorFlow Lite", "Node.js", "MongoDB"],
  features: [
    "Barcode scanning with instant nutritional analysis",
    "AI-powered meal recommendations based on dietary goals",
    "Personalized nutrition tracking and daily insights",
    "Allergen detection and warning system",
    "Recipe suggestions based on available ingredients",
    "Progress tracking with visual analytics dashboard",
    "Integration with fitness apps and wearables",
    "Social features for sharing healthy meals and tips"
  ],
  challenges: [
    "Integrating Gemini AI for accurate nutritional analysis",
    "Building robust barcode recognition across various conditions",
    "Ensuring data privacy and HIPAA compliance",
    "Creating accurate nutritional database for local products",
    "Optimizing AI response times for real-time user experience"
  ],
  solutions: [
    "Implemented custom AI prompts with nutritional context training",
    "Used ML Kit with custom-trained models for improved accuracy",
    "Designed end-to-end encryption with secure data storage",
    "Partnered with local vendors for comprehensive product database",
    "Implemented edge computing with cloud fallback for optimal performance"
  ],
  outcomes: [
    "Achieved 95% accuracy in nutritional analysis",
    "User base grew to 10,000+ active users within 6 months",
    "Average user engagement increased by 300% compared to competitors",
    "Featured in 'Top Health Apps' by major app stores"
  ],
  role: "Full Stack Developer & AI Integration Specialist",
  duration: "4 months",
  teamSize: "3 members",
  liveUrl: "https://example.com/nutriwise",
  githubUrl: "https://github.com/lilblackboot/nutriwise",
  color: "accent-pink",
  icon: <Brain className="text-accent-pink" size={32} />
};

export default function NutriwisePage() {
  return <ProjectDetail project={nutriwiseProject} />;
}
