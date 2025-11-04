import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-900">
          Our Blog
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-1.6xl">
          Insights, guides, and expert opinions on technology, business, and more.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-99 border border-gray-200 rounded-full py-3 pl-5 pr-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300"
            />
          </div>
        </div>
        <div className="mt-18 bg-white shadow-sm border border-gray-100 rounded-2xl py-20">
          <h1 className="text-3xl font-semibold text-gray-700 <b>">
            No blog posts found
          </h1>
          <p className="mt-2 text-gray-500 text-sm text-3xl">
            Check back soon for new content!
          </p>
        </div>
      </div>
    </div>
  );
}
