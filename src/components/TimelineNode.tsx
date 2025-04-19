import Image from "next/image";

export default function TimelineNode() {
    return (
        <div className = 'flex'>
            <div className = 'relative w-140 h-70 mr-10'>
                <Image 
                    src = '/images/4.jpg' 
                    alt = 'A grayscale portrait of an elderly Italian woman.' 
                    layout = 'fill' 
                    objectFit = 'cover' 
                />
            </div>

            <div className = 'flex flex-col items-center'>
                <div className = 'rounded-full aspect-square bg-accent w-6 h-6'></div>
                <div className = 'border-x-1 border-secondary h-full'></div>
            </div>

            <div className = 'flex flex-col w-140 ml-10'>
                <h2 className = 'uppercase text-3xl mb-2'>Humble Beginnings</h2>
                <p className = 'font-roboto text-lg'>
                    Aldo Bernadi immigrated to the United States of America, from his tiny village of Foiano di Val Fortore, during the Industrial Revolution. Aldo toiled in an aeronautical factory, where he produced engines.

                    Later, he married Giorgio Amato. Seeking escape from a monotonous and laborious life, Aldo and Giorgio opened Bellissimo Cucina, the first authentic Italian restaurant in the town.

                    As an increasing number of Italians immigrated to the US, the Bernadis expanded the restaurant in scale and size, bringing comfort in a foreign land.
                </p>
            </div>
        </div>
    );
}
