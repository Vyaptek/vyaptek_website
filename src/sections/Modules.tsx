import React from 'react';
import { motion } from 'framer-motion';
import { FeatureItem } from '../types';
import './Modules.css';

interface ModulesProps {
    title: string;
    subtitle: string;
    items: FeatureItem[];
}

const Modules: React.FC<ModulesProps> = ({ title, subtitle, items }) => {
    return (
        <section id="modules" className="section modules-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="modules-grid">
                    {items.map((module, index) => (
                        <motion.div
                            key={index}
                            className="module-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="module-icon">{module.icon}</div>
                            <h3>{module.title}</h3>
                            <p>{module.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Modules;
