export function Hero() {
  return (
    <div className="relative flex h-screen w-full">
      <div className="absolute -z-10 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <img src="/images/home/hero.webp" className="max-h-[80%] mt-[5%]" />
        </div>
      </div>
      <div className="flex justify-end px-[10%] pt-20 w-full">
        <h1 className="uppercase text-8xl font-londiania">
          Vegan
          <br />
          Ramen
        </h1>
      </div>
    </div>
  );
}
