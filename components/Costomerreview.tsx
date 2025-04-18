
import React from 'react';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';

const CustomerReviews = () => {
  return (
    <div className="container mx-auto px-4 mt-12 lg:mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read authentic reviews from our satisfied customers around the world.
        </p>
      </div>

      {/* Review Stats */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">4.9</div>
          <div className="flex items-center justify-center text-yellow-400 mb-2" aria-label="5 stars rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-gray-600">Average Rating</p>
        </div>
        <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">15K+</div>
          <p className="text-gray-600">Reviews Worldwide</p>
        </div>
        <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">98%</div>
          <p className="text-gray-600">Satisfied Customers</p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Review 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174034.jpg?t=st=1739112733~exp=1739116333~hmac=0bcfc75496469efcae6e1e6a9c37feb9de12df9427aae239dc6048e5b9fe2a65&w=740"
              alt="Sarah Johnson"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <div className="flex items-center text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            &ldquo;These headphones are absolutely amazing! The sound quality is crystal clear, and the noise cancellation
            feature works perfectly. Very comfortable for long listening sessions.&rdquo;
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Elite Wireless Pro</span>
            <span>2 days ago</span>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174034.jpg?t=st=1739112733~exp=1739116333~hmac=0bcfc75496469efcae6e1e6a9c37feb9de12df9427aae239dc6048e5b9fe2a65&w=740"
              alt="Mike Thompson"
              width={48}
              height={48}
              className=" rounded-full"
            />
            <div>
              <h3 className="font-semibold">Mike Thompson</h3>
              <div className="flex items-center text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            &ldquo;Great battery life and impressive sound quality. The build quality is excellent, and the app integration
            makes it easy to customize the settings to my preference.&rdquo;
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Bass Master X</span>
            <span>1 week ago</span>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174034.jpg?t=st=1739112733~exp=1739116333~hmac=0bcfc75496469efcae6e1e6a9c37feb9de12df9427aae239dc6048e5b9fe2a65&w=740"
              alt="Emily Chen"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Emily Chen</h3>
              <div className="flex items-center text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            &ldquo;The comfort level is outstanding! I can wear these for hours while working. The touch controls are
            intuitive, and the sound quality exceeds my expectations.&rdquo;
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Studio Pro Max</span>
            <span>3 days ago</span>
          </div>
        </div>
      </div>

      {/* Review CTA */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
          Read More Reviews
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
