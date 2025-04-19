import Image from 'next/image';

import type PlacardItem from '@/types/placard';

export default function Placard({
    title,
    description,
    image,
    alt
}: PlacardItem) {
    return (
        <div className = 'flex flex-col'>
            <h2 className = 'uppercase'>{title}</h2>

            <div className = 'flex'>
                <Image
                    src = {`/images/${image}.jpg`}
                    alt = {alt}
                />
                <p className = 'font-roboto'>{description}</p>
            </div>
        </div>
    );
}
