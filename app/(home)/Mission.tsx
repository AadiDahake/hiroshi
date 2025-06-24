export function Mission() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="relative flex-1 flex items-center justify-center px-[10%] py-10 overflow-hidden">
        <div
          className="absolute inset-0 object-cover object-center -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1687382130081-ebd36ecd38a9?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="bg-white/30 absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-aka-900 mb-6">
              About the Restaurant
            </h2>
            <p className="text-black max-w-80  md:max-w-2xl md:text-2xl mx-auto">
              Experience the art of vegetarian ramen at Hiroshi Ramen, where
              tradition meets innovation. Our slow-cooked broths and house-made
              noodles create pure comfort in every bowl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
