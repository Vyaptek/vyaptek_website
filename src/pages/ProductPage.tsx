import React from 'react';
import Hero from '../components/Hero';
import Modules from '../sections/Modules';
import Features from '../sections/Features';
import { ProductConfig } from '../types';

interface ProductPageProps {
    product: ProductConfig;
    onOpenEnquiry: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onOpenEnquiry }) => {
    return (
        <div className="product-page">
            <Hero config={product.hero} onOpenEnquiry={onOpenEnquiry} />
            <Modules
                title="Comprehensive ERP Modules"
                subtitle="Our all-in-one platform covers every aspect of administration."
                items={product.modules}
            />
            <Features
                title={`Why Choose ${product.name}?`}
                subtitle="We combine technology and expertise to deliver a solution that just works."
                items={product.features}
            />
        </div>
    );
};

export default ProductPage;
