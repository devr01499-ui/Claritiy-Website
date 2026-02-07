import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export function Success() {
    const [searchParams] = useSearchParams();
    const templateId = searchParams.get('templateId');

    return (
        <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-12 text-center border border-orange-100"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    Thank you for your purchase. You can now download your premium automation template.
                </p>

                <div className="flex flex-col gap-4">
                    <button className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                        <Download className="w-5 h-5" />
                        Download Premium JSON
                    </button>

                    <Link to="/templates">
                        <button className="flex items-center justify-center gap-2 w-full py-4 text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                            Browse More Templates
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
