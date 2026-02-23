import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants.tsx';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../utils.tsx';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = BLOG_POSTS.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO title="Digital Growth Blog | Ali Raza Digital Solutions" description="Marketing insights." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-center">
          <h1 className="text-4xl font-black text-secondary">Insights & Strategy</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPosts.map(post => (
            <Link to="/contact" key={post.id}>
              <article className="group cursor-pointer">
                <div className="rounded-[2.5rem] overflow-hidden mb-8 aspect-video">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center space-x-3 text-primary text-xs font-black uppercase tracking-widest mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h2 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;