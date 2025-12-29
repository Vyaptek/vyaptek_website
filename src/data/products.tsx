import {
    Users, Activity, Bed, Pill,
    FlaskConical, CreditCard, ShieldCheck,
    Smile, Settings, Headset
} from 'lucide-react';
import { ProductConfig } from '../types';

export const products: ProductConfig[] = [
    {
        id: 'hospital-erp',
        name: 'Hospital ERP',
        slug: 'hospital-management-system',
        hero: {
            title: 'Complete Hospital ERP Solution',
            subtitle: "Streamline your hospital operations with Vyaptek's advanced, secure, and user-friendly management system. Trusted by healthcare providers.",
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Watch Demo'
        },
        modules: [
            {
                icon: <Users size={24} />,
                title: "Patient Management",
                desc: "Streamline patient registration, appointments, and history tracking in one unified interface."
            },
            {
                icon: <Activity size={24} />,
                title: "OPD Management",
                desc: "Efficiently manage Out-Patient Department queues, prescriptions, and follow-ups."
            },
            {
                icon: <Bed size={24} />,
                title: "IPD Management",
                desc: "Complete In-Patient care tracking from admission to discharge, including bed management."
            },
            {
                icon: <Pill size={24} />,
                title: "Pharmacy & Store",
                desc: "Integrated inventory control, stock alerts, and billing for hospital pharmacies."
            },
            {
                icon: <FlaskConical size={24} />,
                title: "Pathology & Radiology",
                desc: "Manage lab tests, generate reports instantly, and link them to patient records."
            },
            {
                icon: <CreditCard size={24} />,
                title: "Billing & Finance",
                desc: "Automated billing, insurance (TPA) processing, and financial reporting dashboards."
            }
        ],
        features: [
            {
                icon: <Smile size={24} />,
                title: "User-Friendly Interface",
                desc: "Designed for medical professionals with minimal training required. Intuitive and fast."
            },
            {
                icon: <ShieldCheck size={24} />,
                title: "Stable, Safe & Secure",
                desc: "Enterprise-grade security with role-based access control and regular data backups."
            },
            {
                icon: <Settings size={24} />,
                title: "Highly Customizable",
                desc: "Tailor the ERP to fit your hospital's specific workflows and reporting needs."
            },
            {
                icon: <Headset size={24} />,
                title: "24/7 Expert Support",
                desc: "Dedicated support team ensuring your hospital operations never face downtime."
            }
        ]
    }
];
