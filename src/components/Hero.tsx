import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HeroConfig } from '../types';
import './Hero.css';

interface HeroProps {
    config: HeroConfig;
    onOpenEnquiry: () => void;
}

const Hero: React.FC<HeroProps> = ({ config, onOpenEnquiry }) => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{config.title}</h1>
                    <p>{config.subtitle}</p>
                    <div className="hero-actions">
                        <button onClick={onOpenEnquiry} className="btn btn-primary">
                            {config.ctaPrimary} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                        <a href="#demo" className="btn btn-outline">
                            <PlayCircle size={20} style={{ marginRight: '8px' }} /> {config.ctaSecondary}
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-blob"></div>
                    {/* Placeholder for dashboard screenshot or illustration */}
                    <div className="hero-img-placeholder">
                        <img
                            src={config.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
                            alt="Dashboard"
                            style={{ width: '100%', borderRadius: '0.5rem' }}
                        />
                        {/* Note: In a real scenario I would use generate_image or local asset */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
