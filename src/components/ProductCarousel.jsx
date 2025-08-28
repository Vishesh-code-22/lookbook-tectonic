import React from "react";
import { products as allProducts } from "../data/mock";

export default function ProductCarousel({ productRefs = [] }) {
    const items = productRefs
        .map((ref) => allProducts.find((p) => p.id === ref.id))
        .filter(Boolean);

    if (!items.length) return null;

    return (
        <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex gap-3 px-4 py-3 snap-x snap-mandatory">
                {items.map((product) => (
                    <a
                        key={product.id}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-none w-28 snap-start bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                        <div className="aspect-[3/4] w-full bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-2 space-y-1">
                            <h3 className="text-[10px] font-medium text-gray-700 truncate">
                                {product.brand}
                            </h3>
                            <p className="text-xs font-semibold truncate leading-tight">
                                {product.title}
                            </p>
                            <p className="text-[10px] text-gray-500">
                                ₹{product.price.toLocaleString()}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
