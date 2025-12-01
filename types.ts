export interface Experience {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  inclusions: string[];
  recommendedFor: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
}

export interface TeamMember {
  name: string;
  role: string;
  certification: string;
  experience: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
