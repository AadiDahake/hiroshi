import Image from 'next/image';

import type TimelineItem from '@/types/timeline';

export default function TimelineNode({
    heading,
    description,
    image,
    alt,
    imageLeft
}: TimelineItem) {
    const ImageBlock = (
        <div className = 'relative w-140 h-70 mx-10'>
            <Image 
                src = {`/images/${image}.jpg`}
                alt = {alt}
                layout = 'fill' 
                objectFit = 'cover'
                className = 'grayscale hover:grayscale-0 transition-all duration-500'
            />
        </div>
    );

    const LineBlock = (
        <div className = 'flex flex-col items-center'>
            <div className = 'rounded-full aspect-square bg-accent w-6 h-6'></div>
            <div className = 'border-x-1 border-secondary h-full'></div>
        </div>
    );

    const TextBlock = (
        <div className = 'flex flex-col w-140 mx-10'>
            <h2 className = 'uppercase text-3xl mb-2'>{heading}</h2>
            <p className = 'font-roboto text-lg'>{description}</p>
        </div>
    );

    return (
        <div className = 'flex'>
            {imageLeft ? (
                <>
                    {ImageBlock}
                    {LineBlock}
                    {TextBlock}
                </>
            ) : (
                <>
                    {TextBlock}
                    {LineBlock}
                    {ImageBlock}
                </>
            )}
        </div>
    );
}
