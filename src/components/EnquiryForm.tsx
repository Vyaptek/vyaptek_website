import React, { useState } from 'react';
import './EnquiryForm.css';

interface FormData {
    businessName: string;
    city: string;
    name: string;
    mobile: string;
    email: string;
    message: string;
}

interface EnquiryFormProps {
    onClose?: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        city: '',
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/tiwarideepesh08@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Enquiry from ${formData.businessName}`,
                    ...formData
                })
            });

            const result = await response.json();

            if (response.ok) {
                alert('Thank you! Your enquiry has been sent successfully.');
                // Reset form
                setFormData({
                    businessName: '',
                    city: '',
                    name: '',
                    mobile: '',
                    email: '',
                    message: ''
                });
                if (onClose) onClose();
            } else {
                console.error('Submission failed:', result);
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="enquiry-form-wrapper">
            <h2>Get in Touch with Us</h2>
            <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="businessName">Business Name</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Healthcare Solutions"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        required
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        required
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="form-actions full-width">
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                        style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnquiryForm;

