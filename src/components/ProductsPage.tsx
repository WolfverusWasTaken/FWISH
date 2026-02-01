import { type FC } from 'react';
import ModelSection from './ModelSection';

const ProductsPage: FC = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-between">
            <main className="pt-20 md:pt-24 flex-grow flex flex-col justify-center">
                <ModelSection />
            </main>

            {/* Products Footer Info */}
            <div className="max-w-4xl mx-auto px-8 py-10 border-t border-white/5 text-center">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
                    All variants are verified through aerodynamic prototyping.
                </p>
            </div>
        </div>
    );
};

export default ProductsPage;
