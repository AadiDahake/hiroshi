import WavesContainer from "./WavesContainer";

export default function PageHeader({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="flex-1 relative">
      <WavesContainer />

      <div className="flex flex-col justify-center ml-30 mt-60 w-135 z-1">
        <h1 className="uppercase italic text-accent text-8xl mb-6">
          {heading}
        </h1>
        <p className="text-2xl font-roboto">{description}</p>
      </div>
    </div>
  );
}
