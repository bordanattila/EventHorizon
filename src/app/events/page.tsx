import Link from 'next/link';
import Image from 'next/image';
import getPropsFromDatabase from './params';

export default async function Events() {
  const {data} = await getPropsFromDatabase();
  
  return (
    <div>
      <h1 className='locations'>Wonderful Event Locations</h1>
      <div className='events_page' >
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.id}`}
            className='events_card'>
            <div
              className="image"
              style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}
            >
              <Image
                src={ev.image}
                alt='image of the city'
                sizes='(max-width: 768px) 50dvw, 100%'
                style={{ objectFit: 'cover' }}
                fill
                priority
              />
              <div className="image-overlay">
                <h2>{ev.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}