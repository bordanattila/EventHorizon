import Image from "next/image"
import Link from "next/link"

// Define the type for a single event category
interface EventCategory {
    id: string;
    title: string;
    description: string;
    image: string;
}

// Define the props type
interface HomePageProps {
    data: EventCategory[];
}

const HomePage = ({ data }: HomePageProps) => {
    return (
        <div className="main">
            <div className="home_body">
                {data.map((ev, index) =>
                    <Link
                        key={ev.id} href={`/events/${ev.id}`}
                        className={`card ${index % 2 === 1 ? 'card-reverse' : ''}`}
                    >
                        <div
                            className="image"
                            style={{ width: '400px', aspectRatio: '16/9', position: 'relative' }}
                        >
                            <Image
                                src={ev.image}
                                alt='image of the city'
                                sizes='(max-width: 768px) 50dvw, 400px'
                                style={{ objectFit: 'cover' }}
                                fill
                                priority
                            />
                        </div>
                        <div className="content">
                            <h2>{ev.title}</h2><p>{ev.description}</p>
                        </div>
                    </Link>)}
            </div>
        </div>
    )
}

export default HomePage;