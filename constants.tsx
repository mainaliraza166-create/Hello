import React from 'react';
import { 
  Search, 
  Share2, 
  TrendingUp, 
  ShoppingBag, 
  Settings, 
  BarChart3,
  Globe,
  MessageSquare,
  Award,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';
import { Service, PortfolioItem, Testimonial, BlogPost } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'Advanced SEO Mastery',
    description: 'We don\'t just rank pages; we drive revenue. Our data-backed SEO strategies ensure your brand stays at the top of Google SERPs, attracting high-intent buyers.',
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    category: 'Digital Marketing'
  },
  {
    id: 'smm',
    title: 'Social Media Domination',
    description: 'Turn followers into brand advocates. We manage Facebook, Instagram, and LinkedIn with high-conversion creative assets and engagement-focused strategies.',
    icon: 'Share2',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
    category: 'Digital Marketing'
  },
  {
    id: 'ppc',
    title: 'ROI-Driven PPC Ads',
    description: 'Stop wasting budget on clicks that don\'t convert. Our expert-led Google and Meta Ads campaigns are optimized for the lowest CPA and highest ROI.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    category: 'Digital Marketing'
  },
  {
    id: 'daraz-setup',
    title: 'Daraz Store Launchpad',
    description: 'From niche research to live listing. We handle the technical complexities of Daraz Seller Center, ensuring a flawless professional launch.',
    icon: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600',
    category: 'Daraz VA'
  },
  {
    id: 'product-listing',
    title: 'Product SEO & Ranking',
    description: 'Dominate Daraz search. Our expert copywriters and SEO specialists optimize your titles, attributes, and images to beat the competition.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e905b6cd79?auto=format&fit=crop&q=80&w=600',
    category: 'Daraz VA'
  },
  {
    id: 'order-management',
    title: 'Full Account Management',
    description: 'Passive income made easy. We manage your inventory, customer queries, and logistics, providing weekly growth reports and scaling insights.',
    icon: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e787?auto=format&fit=crop&q=80&w=600',
    category: 'Daraz VA'
  }
];

export interface PricingPlan {
  category: string;
  items: {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  }[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    category: 'Social Media Management',
    items: [
      {
        title: 'Basic Plan',
        price: '8,000',
        features: ['12 High-Quality Posts', '2 Social Platforms', 'Monthly Reporting', 'Basic Engagement'],
      },
      {
        title: 'Standard Plan',
        price: '12,000',
        features: ['20 High-Quality Posts', '3 Social Platforms', 'Full Engagement Management', 'Ad Account Audit', 'Priority Support'],
        isPopular: true
      }
    ]
  },
  {
    category: 'Content Creation',
    items: [
      {
        title: 'Starter Pack',
        price: '3,000',
        features: ['10 Professional Posts', 'Custom Brand Graphics', 'Optimized Captions'],
      },
      {
        title: 'Growth Pack',
        price: '5,000',
        features: ['20 Professional Posts', 'Reels/Video Editing Help', 'Consistent Brand Voice', 'Hashtag Strategy'],
        isPopular: true
      }
    ]
  },
  {
    category: 'Meta & Google Ads',
    items: [
      {
        title: 'Campaign Setup',
        price: '6,000',
        features: ['1 Week Intensive Monitoring', 'Audience Research', 'Pixel/API Setup', 'Ad Copy Creation'],
      },
      {
        title: 'Monthly Management',
        price: '10,000',
        features: ['Full Scale Optimization', 'A/B Creative Testing', 'ROAS Focused Scaling', 'Retargeting Funnels'],
        isPopular: true
      }
    ]
  },
  {
    category: 'Daraz Seller Services',
    items: [
      {
        title: 'One-Time Setup',
        price: '5,000',
        features: ['Store Creation', 'Seller Center Config', 'Brand Protection Advice'],
      },
      {
        title: 'Store Listing',
        price: '5,000',
        features: ['20 Product Listings', 'SEO Titles & Attributes', 'Image Optimization'],
      },
      {
        title: 'Full Management',
        price: '9,000',
        features: ['Monthly Operations', 'Order Management', 'Customer Query Support', 'Growth Insights'],
        isPopular: true
      },
      {
        title: 'Daraz Ads Mastery',
        price: '10,000',
        features: ['PPC Ads Optimization', 'Keyword Bidding', 'Campaign Scaling', 'Monthly ROI Analysis'],
      }
    ]
  }
];

export interface EnhancedPortfolioItem extends PortfolioItem {
  stats: string;
  tags: string[];
}

export const PORTFOLIO: EnhancedPortfolioItem[] = [
  {
    id: '1',
    title: 'Electronics Hub: Daraz Market Dominance',
    category: 'Daraz VA',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1000',
    description: 'Transformed a local electronics retailer into a top-performing Daraz Mall store. Implemented proprietary product hunting and aggressive SEO ranking strategies.',
    stats: '+320% Revenue Growth',
    tags: ['Store Management', 'Daraz SEO', 'Inventory Audit']
  },
  {
    id: '2',
    title: 'Luxe Beauty: Meta Ads Scale-up',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1000',
    description: 'Scaled a high-end beauty brand using advanced Meta pixel tracking and high-conversion remarketing funnels to maximize ROAS.',
    stats: '5.4x ROAS Achieved',
    tags: ['Meta Ads', 'Lead Gen', 'Conversion Optimization']
  },
  {
    id: '3',
    title: 'Urban Threads: E-commerce Growth Engine',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    description: 'Complete digital overhaul for a premium apparel brand. Optimized their Shopify funnel and managed integrated Google Shopping and Meta campaigns.',
    stats: '+210% Site Traffic',
    tags: ['Google Ads', 'Shopify SEO', 'Brand Growth']
  },
  {
    id: '4',
    title: 'Kitchen Pro: Daraz Mall Transition',
    category: 'Daraz VA',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000',
    description: 'Successfully migrated a kitchenware manufacturer to Daraz Mall, achieving 100% SLA compliance and exclusive campaign features.',
    stats: '400% Reach Increase',
    tags: ['Daraz Mall', 'Account Onboarding', 'SLA Control']
  },
  {
    id: '5',
    title: 'Glow & Go: Brand Awareness Campaign',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000',
    description: 'Launched a multi-channel awareness campaign for a skincare startup, leveraging local influencers and aggressive Meta reach ads.',
    stats: '1.2M+ Reach Generated',
    tags: ['Influencer Marketing', 'UGC', 'Social Growth']
  },
  {
    id: '6',
    title: 'Sole Haven: Footwear SEO Ranking',
    category: 'Daraz VA',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    description: 'Optimized high-competition footwear keywords to maintain Page 1 position on Daraz search during major sales events.',
    stats: 'Top 1% Rank Stability',
    tags: ['Keywords', 'Ranking', 'Review Loop']
  },
  {
    id: '7',
    title: 'Organic Harvest: D2C Performance',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000',
    description: 'Built a sustainable acquisition funnel for an organic grocery brand using Meta Conversions API and advanced retargeting.',
    stats: '3.2x Campaign ROAS',
    tags: ['Retargeting', 'Sales Funnel', 'CAPI']
  },
  {
    id: '9',
    title: 'Pure Baby: High-LTV Funnel Strategy',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=1000',
    description: 'Executed a complete funnel strategy for a premium baby products brand, resulting in high customer lifetime value.',
    stats: '-45% CPA Reduction',
    tags: ['LTV Focus', 'Email Marketing', 'Ads']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fatima Zahra',
    role: 'CEO, Bloom Skincare PK',
    content: 'Ali’s team handled our Daraz store optimization so well that 70% of our traffic is now organic. We went from 10 orders a day to 80+ daily. They are the real deal for e-commerce growth in Pakistan.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Ahmed Malik',
    role: 'Director, SmartTech Electronics',
    content: 'The most transparent Daraz VA service I’ve worked with in Karachi. Our store monthly revenue crossed 2.5 Million PKR in just 4 months. Ali doesn’t just list products; he builds actual brands.',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Bilal Siddiqui',
    role: 'Founder, Urban Wear PK',
    content: 'We achieved a 5.2x ROAS on Meta Ads in our first month with Ali Raza Digital Solutions. They know the local audience psychology perfectly. Highly recommended for scaling any fashion brand.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];

export const TRUST_BADGES = [
  { icon: Award, label: 'Certified Pro', detail: 'Google & Meta Partner' },
  { icon: ShieldCheck, label: 'Secure Growth', detail: '100% Risk Management' },
  { icon: Star, label: 'Top Rated', detail: '5-Star Client Reviews' },
  { icon: Users, label: '500+ Clients', detail: 'Proven Success Stories' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Secrets to Skyrocket Your Daraz Sales in 2025',
    category: 'Daraz VA',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Learn the advanced SEO strategies that top Daraz sellers use to dominate search results and maximize their daily order volume.'
  }
];