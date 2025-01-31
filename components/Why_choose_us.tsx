
import React from "react";
import { Award, Cpu, Heart, Leaf, Shield } from "lucide-react";

const WhyChooseSoundWave = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12 lg:mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose SoundWave</h2>
        <p className="text-gray-600">Our commitment to excellence in audio technology</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Premium Quality */}
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Award className="text-3xl text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Premium Quality</h3>
          <p className="text-gray-600 text-center">
            Every product is crafted with premium materials and undergoes rigorous testing to ensure exceptional performance and durability.
          </p>
        </div>

        {/* Innovation First */}
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Cpu className="text-3xl text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Innovation First</h3>
          <p className="text-gray-600 text-center">
            We continuously push the boundaries of audio technology to deliver cutting-edge features and unmatched sound quality.
          </p>
        </div>

        {/* Customer First */}
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Heart className="text-3xl text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Customer First</h3>
          <p className="text-gray-600 text-center">
            Our dedicated support team ensures your complete satisfaction with 24/7 assistance and hassle-free returns.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <p className="text-white/80">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-white/80">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/80">Expert Support</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5⭐</div>
            <p className="text-white/80">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Leaf className="text-2xl text-green-500 mr-4" />
            <h3 className="text-xl font-bold">Sustainability Commitment</h3>
          </div>
          <p className="text-gray-600">
            We're committed to reducing our environmental impact through eco-friendly packaging and responsible manufacturing processes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Shield className="text-2xl text-blue-500 mr-4" />
            <h3 className="text-xl font-bold">Quality Guarantee</h3>
          </div>
          <p className="text-gray-600">
            Every product comes with a 2-year warranty and 30-day money-back guarantee for your peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSoundWave;
