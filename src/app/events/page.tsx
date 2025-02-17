import Link from 'next/link';
import Image from 'next/image';

export default async function Events() {
  const data = await getData();
  return (
    <div>
      <h1>Events</h1>
      <div className='events_page'>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className='card'>
            <h2>{ev.title}</h2>
            <Image src={ev.image} alt="image" width={200} height={200} />
          </Link>
        ))}
      </div>
    </div>
  );
}