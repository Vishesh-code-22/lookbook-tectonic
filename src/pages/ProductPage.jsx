import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/mock";

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find((p) => p.url.endsWith(id));

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700">
                <h1 className="text-xl font-semibold">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <div className="max-w-4xl mx-auto p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-2xl shadow-md object-cover mb-6"
                />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <h2 className="text-sm text-gray-500 mb-2">{product.brand}</h2>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                    ₹{product.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                    This is a placeholder description for the product. Detailed
                    product information can be added here.
                </p>
            </div>
        </div>
    );
}
