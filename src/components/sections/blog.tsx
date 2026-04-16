"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "Building AI Agents: From Idea to Execution",
    excerpt: "Learn how to design and build autonomous AI agents that can think, plan, and execute tasks.",
    date: "April 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    slug: "building-ai-agents",
  },
  {
    title: "Introduction to RAG Systems",
    excerpt: "Understand how Retrieval-Augmented Generation works and how to build your own AI knowledge system.",
    date: "April 02, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    slug: "intro-to-rag",
  },
  {
    title: "Automating Workflows with AI",
    excerpt: "Explore how AI can automate repetitive tasks and improve productivity using APIs and tools.",
    date: "March 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    slug: "automating-workflows",
  },
  {
    title: "Creating Multi-Agent Systems",
    excerpt: "Learn how multiple AI agents can collaborate to solve complex problems efficiently.",
    date: "March 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    slug: "multi-agent-systems",
  },
  {
    title: "AI Chatbot with Memory",
    excerpt: "Build a smart chatbot that remembers context and provides better responses.",
    date: "March 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531297172867-4f506cd4bb0b?q=80&w=800&auto=format&fit=crop",
    slug: "chatbot-with-memory",
  },
  {
    title: "Integrating OpenAI APIs in Projects",
    excerpt: "Step-by-step guide to using OpenAI APIs in real-world applications.",
    date: "February 22, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    slug: "integrating-openai-apis",
  },
];

export const Blog = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 flex items-center">
        <span className="text-cyan font-mono mr-2 text-xl">04.</span> Latest Articles
        <span className="h-[1px] bg-lightest-navy flex-1 ml-4" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-light-navy rounded-2xl overflow-hidden border border-cyan/10 flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[10px] text-slate font-mono uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-cyan transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate text-sm mb-8 flex-1">
                {post.excerpt}
              </p>
              
              <a href={`/blog/${post.slug}`} className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider group/link">
                Read Article <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
