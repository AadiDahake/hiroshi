export function Awards() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-bianca-100 to-shiso-100 flex items-center justify-center">
      <div className="text-center px-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-shiso-900 mb-8">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-serif text-xl font-semibold text-shiso-800 mb-2">Best Vegetarian Restaurant 2024</h3>
            <p className="text-marshland-600">Local Food Critics Association</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-serif text-xl font-semibold text-shiso-800 mb-2">5-Star Rating</h3>
            <p className="text-marshland-600">Sustainable Dining Guide, Google Reviews, and Yelp</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-serif text-xl font-semibold text-shiso-800 mb-2">Green Restaurant Award</h3>
            <p className="text-marshland-600">Environmental Excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
