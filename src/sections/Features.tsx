import React from 'react';
import { motion } from 'framer-motion';
import { FeatureItem } from '../types';
import './Features.css';

interface FeaturesProps {
    title: string;
    subtitle: string;
    items: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ title, subtitle, items }) => {
    return (
        <section id="features" className="section features-section">
            <div className="container features-container">
                <motion.div
                    className="features-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <video
                        src="/dummy-asset-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="features-video"
                    />
                </motion.div>

                <div className="features-text">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className="lead"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {subtitle}
                    </motion.p>

                    <div className="feature-list">
                        {items.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-item"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <div className="feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
