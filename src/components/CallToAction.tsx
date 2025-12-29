import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

interface CallToActionProps {
    onOpen: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpen }) => {
    return (
        <section className="cta-section" id="contact">
            <div className="cta-container">
                <h2 className="cta-title">Ready to Transform Your Healthcare Operations?</h2>
                <p className="cta-description">
                    Join leading hospitals that trust Vyaptek for their ERP needs.
                    Streamline workflows, reduce costs, and improve patient care today.
                </p>
                <button onClick={onOpen} className="cta-button">
                    Request a Demo <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
