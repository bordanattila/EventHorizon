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
    data: {
        events_categories: EventCategory[];
    };
}

const HomePage = ({ data }: HomePageProps) => {
    return (
        <div className="home_body">
            {data.events_categories.map((ev) =>
                <Link key={ev.id} href={`/events/${ev.id}`} className="card">
                    <div className="image">
                        <Image src={ev.image} alt='event title' width={600} height={400}></Image>
                    </div>
                    <div className="content">
                        <h2>{ev.title}</h2><p>{ev.description}</p>
                    </div>
                </Link>)}
        </div>
    )
}

export default HomePage;