import timelineData from '@/data/timeline';

import TimelineNode from '@/components/TimelineNode';

export default function About() {
    return (
        <div className = 'flex flex-col'>
            <div className = 'flex flex-col justify-center ml-30 mt-40 w-135'>
                <h1 className = 'uppercase italic text-accent text-8xl mb-6'>About</h1>
                <h2 className = 'text-2xl font-roboto'>
                    Elevato is a restaurant with a history as rich as its dishes, a true
                    culmination of culinary ingenuity. Read more about our story below.
                </h2>
            </div>

            <div className = 'z-2 flex flex-col items-center mt-50 gap-6'>
                {timelineData.map((item, index) => (
                    <TimelineNode
                        key = {index}
                        heading = {item.heading}
                        description = {item.description}
                        image = {item.image}
                        alt = {item.alt}
                        imageLeft = {item.imageLeft}
                    />
                ))}
            </div>
        </div>
    );
}
