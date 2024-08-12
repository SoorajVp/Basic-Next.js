import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Column 1 */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Press</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Support</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li><a href="mailto:support@company.com" className="hover:text-gray-400">support@company.com</a></li>
                            <li><a href="tel:+1234567890" className="hover:text-gray-400">+1 234 567 890</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center border-t border-gray-700 pt-6">
                    <p className="text-gray-500">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
