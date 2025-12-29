import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import { products } from './data/products';
import EnquiryForm from './components/EnquiryForm';
import Modal from './components/Modal';
import CallToAction from './components/CallToAction';
import './App.css';

function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Simulating a route for "Hospital ERP" (the first product)
  const activeProduct = products[0];

  const handleOpenEnquiry = () => setIsEnquiryModalOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryModalOpen(false);

  return (
    <div className="App">
      <Navbar onOpenEnquiry={handleOpenEnquiry} />
      <ProductPage
        product={activeProduct}
        onOpenEnquiry={handleOpenEnquiry}
      />
      <CallToAction onOpen={handleOpenEnquiry} />
      <Footer />

      <Modal isOpen={isEnquiryModalOpen} onClose={handleCloseEnquiry}>
        <EnquiryForm onClose={handleCloseEnquiry} />
      </Modal>
    </div>
  );
}

export default App;
