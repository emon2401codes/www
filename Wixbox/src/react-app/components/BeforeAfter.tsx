export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dramatic <span className="text-black">Before & After</span> Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how a single website transformation changed the way our clients attract and convert customers online.
          </p>
        </div>

        {/* 2x2 Grid of Before/After Comparisons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Before/After Comparison */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Client Success Stories
              </h3>
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Screenshot-2025-10-30-at-10.44.46%E2%80%AFPM.png"
                  alt="Before and after comparison showing dramatic improvements for Junk Removal and Resort"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Second Before/After Comparison */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Website Traffic & Booking Transformation
              </h3>
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/Screenshot-2025-10-30-at-10.45.14%E2%80%AFPM.png"
                  alt="Before and after comparison showing website traffic and booking improvements for Coral View Resort"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Third Before/After Comparison - Lush Haven Spa */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Lush Haven Spa Transformation
              </h3>
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/10c1e864-8b1b-4080-bddc-d1ff7eeff00f.JPG"
                  alt="Before and after comparison showing Lush Haven Spa website and booking improvements"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Fourth Before/After Comparison - Orchard Landscaping */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Orchard Landscaping LLC Growth
              </h3>
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/019a31bf-530f-7948-b48e-cb86ee28270b/3abed61c-239b-4c8e-812f-41001bffe7d5.JPG"
                  alt="Before and after comparison showing Orchard Landscaping website traffic and lead generation improvements"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">95%+</div>
              <div className="text-gray-700 font-medium">Website Traffic Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">86%+</div>
              <div className="text-gray-700 font-medium">Booking Increase</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-700 font-medium">Inquiry Increase</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('https://wa.me/message/WM2DELWYY7VOG1', '_blank')}
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer"
          >
            <span>Get Your Website</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
