
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string; // Added for realistic card imagery
  category: 'Digital Marketing' | 'Daraz VA';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

// Added BlogPost interface to define the structure of blog articles
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}
