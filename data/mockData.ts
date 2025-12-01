import { Experience, Package, BlogPost, FAQ, TeamMember } from "../types";

export interface Course {
  slug: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  curriculum: string[];
}

export const experiences: Experience[] = [
  {
    slug: "stay-rooms-netrani",
    title: "Rooms Available",
    shortDescription:
      "Comfortable rooms to relax before and after your adventure.",
    image:
      "https://images.pexels.com/photos/17432312/pexels-photo-17432312.jpeg",
  },
  {
    slug: "cab-services-netrani",
    title: "Cab Services Available",
    shortDescription:
      "Comfortable cab transfers to ensure a smooth and stress-free journey.",
    image: "https://images.pexels.com/photos/7598015/pexels-photo-7598015.jpeg",
  },
];

export const courses: Course[] = [
  {
    slug: "open-water-course",
    title: "PADI Open Water Diver",
    level: "Beginner Certification",
    duration: "4 Days",
    price: "₹24,000",
    description:
      "The world’s most popular scuba course. Get certified to dive anywhere in the world up to 18 meters.",
    image: "https://picsum.photos/id/54/800/600",
    curriculum: [
      "Knowledge Development (eLearning)",
      "Confined Water Dives (Pool training)",
      "4 Open Water Dives at Netrani",
      "Final Exam & Certification",
    ],
  },
  {
    slug: "advanced-open-water",
    title: "PADI Advanced Open Water",
    level: "Continuing Education",
    duration: "2-3 Days",
    price: "₹22,000",
    description:
      "Explore new environments and go deeper. Includes Deep Dive and Navigation Dive plus 3 specialties.",
    image: "https://picsum.photos/id/192/800/600",
    curriculum: [
      "Deep Dive (up to 30m)",
      "Underwater Navigation",
      "Peak Performance Buoyancy",
      "Fish Identification",
      "Boat Diving",
    ],
  },
  {
    slug: "rescue-diver",
    title: "PADI Rescue Diver",
    level: "Pro Preparation",
    duration: "3-4 Days",
    price: "₹26,000",
    description:
      "Learn to prevent and manage problems in the water. Serious fun.",
    image: "https://picsum.photos/id/184/800/600",
    curriculum: [
      "Self Rescue",
      "Rescuing Panicked Divers",
      "Unresponsive Diver Underwater",
      "Emergency Management",
    ],
  },
];

export const packages: Package[] = [
  {
    id: "beginner-bliss",
    title: "Netrani Beginner Bliss",
    subtitle: "Try Scuba + Temple Visit",
    price: "₹6,500",
    duration: "2 Days",
    inclusions: [
      "Discover Scuba Diving (2 Dives)",
      "Hotel Stay (1 Night)",
      "Temple Visit Assistance",
      "Breakfast",
    ],
    recommendedFor: "First Timers",
  },
  {
    id: "certification-camp",
    title: "Zero to Hero",
    subtitle: "Open Water Certification",
    price: "₹28,000",
    duration: "4 Days / 3 Nights",
    inclusions: [
      "PADI Open Water Course",
      "Accommodation (3 Nights)",
      "Learning Materials",
      "Logbook",
    ],
    recommendedFor: "Aspiring Divers",
  },
  {
    id: "pro-diver-weekend",
    title: "Pro Diver Weekend",
    subtitle: "6 Dives Package",
    price: "₹12,000",
    duration: "3 Days",
    inclusions: [
      "6 Boat Dives",
      "Nitrox (Optional)",
      "Equipment Rental",
      "Lunch on Boat",
    ],
    recommendedFor: "Certified Divers",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Open Water Diver",
    quote:
      "Netrani Island is unbelievable. The visibility was 20 meters! Scuba Hub made me feel so safe during my first course.",
    rating: 5,
    avatar: "https://picsum.photos/id/64/100/100",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    quote:
      "I have dived in Thailand and Bali, but the fish life at Netrani rivals them all. The Scuba Hub team is world-class.",
    rating: 5,
    avatar: "https://picsum.photos/id/65/100/100",
  },
  {
    id: 3,
    name: "Rahul & Priya",
    role: "Couple Divers",
    quote:
      "We did the Discover Scuba package. The instructors held our hands the whole time. Best experience of our lives!",
    rating: 5,
    avatar: "https://picsum.photos/id/91/100/100",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Do I need to know how to swim to scuba dive?",
    answer:
      'For the "Discover Scuba Diving" experience at Netrani, swimming is NOT required. However, for certification courses like the Open Water Diver, basic swimming skills are mandatory.',
  },
  {
    question: "What is the best time to visit Netrani Island?",
    answer:
      "The diving season at Netrani runs from October to May. The clearest water is usually found between December and March.",
  },
  {
    question: "How do we reach Netrani Island?",
    answer:
      "Our dives operate from Murudeshwar. We take a 75-90 minute boat ride from the Murudeshwar temple jetty to reach the island.",
  },
  {
    question: "Is it safe for kids?",
    answer:
      "Yes! Kids aged 10 and above can participate in scuba diving. We have special gear and instructors trained to work with children.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "beginners-guide-netrani",
    title: "Beginner’s Guide to Scuba Diving at Netrani Island",
    excerpt:
      "Everything you need to know before taking your first plunge into the Arabian Sea.",
    date: "March 15, 2024",
    category: "Guides",
    coverImage: "https://picsum.photos/id/119/800/600",
  },
  {
    slug: "marine-life-netrani",
    title: "5 Marine Creatures You Will See at Netrani",
    excerpt:
      "From Bannerfish to Moray Eels, discover the biodiversity of Karnataka’s coral reef.",
    date: "February 20, 2024",
    category: "Marine Life",
    coverImage: "https://picsum.photos/id/162/800/600",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Rajesh Kumar",
    role: "Lead Instructor",
    certification: "PADI MSDT",
    experience: "12 Years",
    image: "https://picsum.photos/id/237/400/400",
  },
  {
    name: "Anita Desai",
    role: "Dive Master",
    certification: "PADI Divemaster",
    experience: "5 Years",
    image: "https://picsum.photos/id/238/400/400",
  },
];

export const diveProcess = [
  {
    title: "Briefing",
    description: "Safety checks, hand signals, and site map overview.",
    icon: "📋",
  },
  {
    title: "Gear Up",
    description: "Fitting masks, fins, and wetsuits at the dive shop.",
    icon: "🤿",
  },
  {
    title: "Boat Ride",
    description: "90 min scenic ride from Murudeshwar to Netrani.",
    icon: "🚤",
  },
  {
    title: "The Dive",
    description: "Descend into the blue with your instructor.",
    icon: "🐠",
  },
  {
    title: "Snorkelling",
    description: "Explore marine life with mask and snorkel.",

    icon: "🏊‍♂️",
  },
];

export const equipment = [
  {
    name: "Go Pro 13 Camera",
    image:
      "https://images.pexels.com/photos/37545/diver-scuba-scuba-diving-regulator-37545.jpeg",
    desc: "Balanced airflow for smooth breathing underwater",
  },
  {
    name: "BCD Jacket",
    image: "https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg",
    desc: "Integrated weights and secure buoyancy control",
  },
  {
    name: "Tank & Cylinder",
    image:
      "https://images.pexels.com/photos/37536/diver-scuba-tank-cylinder-37536.jpeg",
    desc: "High-pressure aluminum cylinder for extended air supply",
  },
  {
    name: "Dive Computer",
    image: "https://images.pexels.com/photos/1806950/pexels-photo-1806950.jpeg",
    desc: "Real-time depth, time & safety tracking",
  },
  {
    name: "Wetsuit",
    image: "https://images.pexels.com/photos/3851387/pexels-photo-3851387.jpeg",
    desc: "3mm neoprene thermal protection",
  },
  {
    name: "Fins",
    image:
      "https://images.pexels.com/photos/37526/diver-scuba-snorkel-swimming-37526.jpeg",
    desc: "Powerful propulsion with minimal effort",
  },
  {
    name: "Dive Mask",
    image:
      "https://images.pexels.com/photos/37547/diver-scuba-equipment-mask-37547.jpeg",
    desc: "Anti-fog tempered glass & wide vision",
  },
  {
    name: "Snorkel Tube",
    image: "https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg",
    desc: "Dry-top valve for comfortable surface breathing",
  },
  {
    name: "Weight Belt",
    image: "https://images.pexels.com/photos/90449/pexels-photo-90449.jpeg",
    desc: "Lead weights for buoyancy fine-tuning",
  },
];
