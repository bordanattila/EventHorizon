import { connectToDatabase } from '../lib/mongodb.js';
import EventModel from '../models/Event.js';
import CategoryModel from '../models/Category.js';
import dotenv from 'dotenv';

dotenv.config();
const seedData = async () => {
  await connectToDatabase();

  await EventModel.deleteMany();
  await CategoryModel.deleteMany();

  await CategoryModel.insertMany([
    {
      "id": "london",
      "title": "London – A City of Endless Possibilities",
      "description": "From West End theater shows to world-class music festivals, London's event scene is unmatched. Explore art exhibitions, networking events, and sports matches that make this city a global hub of entertainment.",
      "image": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "id": "san-francisco",
      "title": "San Francisco – Innovation Meets Entertainment",
      "description": "The heart of Silicon Valley offers more than just tech conferences. Discover outdoor festivals, food fairs, startup networking events, and concerts in the Golden City.",
      "image": "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      "id": "barcelona",
      "title": "Barcelona – Where Culture and Fun Collide",
      "description": "Barcelona is home to stunning architecture and vibrant nightlife. Experience international music festivals, traditional Catalan celebrations, and art expos in this Mediterranean hotspot.",
      "image": "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
    },
    {
      "id": "Budapest",
      "title": "Budapest – The Gem of Central Europe",
      "description": "From its famous ruin bars to thermal spa parties, Budapest offers unique experiences you won’t find anywhere else. Attend film festivals, jazz nights, and historical tours in this stunning city.",
      "image": "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVkYXBlc3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": "Singapore",
      "title": "Singapore – The City That Never Sleeps",
      "description": "Singapore hosts some of the most exclusive events, from tech summits to luxury fashion showcases. Whether you're into business networking, nightlife, or cultural exhibitions, there’s always something happening.",
      "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww"
    },
    {
      "id": "Tokyo",
      "title": "Tokyo – Tradition Meets the Future",
      "description": "Tokyo’s event scene is a perfect blend of modern and traditional. Enjoy anime conventions, sumo wrestling tournaments, fashion week, and high-tech expos in the heart of Japan.",
      "image": "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D"
    }
  ])

  await EventModel.insertMany([
    {
      "id": "london-comic-con-winter",
      "title": "London Comic Con Winter",
      "city": "London",
      "description": "Get ready for an action-packed weekend at London Comic Con Winter, where pop culture comes to life! Meet your favorite comic book artists, actors, and creators, explore exclusive merchandise, and participate in cosplay competitions. Whether you're a fan of Marvel, DC, anime, or gaming, this is the ultimate event to celebrate all things geeky.",
      "image": "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "emails_registered": [
        "mail.mail@com",
        "ati@mail.com",
        "abc@mail.com"
      ]
    },
    {
      "id": "hyde-park-winter-wonderland",
      "title": "Hyde Park Winter Wonderland",
      "city": "London",
      "description": "Experience the magic of the holiday season at Hyde Park Winter Wonderland, London’s most spectacular Christmas festival! Enjoy ice skating, thrilling fairground rides, circus performances, and festive food and drink stalls. Wander through the Christmas markets, sip on mulled wine, and soak in the festive atmosphere with live entertainment. A must-visit destination for holiday cheer!",
      "image": "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkZSUyMHBhcmslMjB3aW50ZXIlMjBsb25kb258ZW58MHx8MHx8fDA%3D",
      "emails_registered": [
        "mail@mail.com"
      ]
    },
    {
      "id": "new-years-eve-in-london-2025",
      "title": "New Years Eve in London 2025 ",
      "city": "London",
      "description": "Ring in 2025 in the heart of London with an unforgettable New Year's Eve celebration! Watch the world-famous fireworks display over the Thames, join exclusive parties across the city, or take in breathtaking views from the London Eye. Whether you're celebrating in a lively club or on a scenic dinner cruise, London offers an electric atmosphere to welcome the new year in style.",
      "image": "https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": []
    },
    {
      "id": "'edtech-world-summit-2025",
      "title": "EdTech World Summit 2025",
      "city": "london",
      "description": "Join the brightest minds in education technology at the EdTech World Summit 2025 in London. This global conference brings together educators, innovators, and industry leaders to explore the future of learning. Featuring keynote speeches, panel discussions, and hands-on workshops, the summit covers AI in education, online learning trends, and the latest advancements in edtech.",
      "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "sigala-at-electric-brixton",
      "title": "Sigala at Electric Brixton",
      "city": "london",
      "description": "Get ready for an electrifying night as Sigala takes the stage at Electric Brixton! The chart-topping DJ and producer will bring his signature dance-pop anthems to London, delivering an unforgettable set packed with hits like Easy Love, Came Here for Love, and Sweet Lovin'. Expect high-energy vibes, stunning visuals, and a crowd ready to dance the night away.",
      "image": "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": [
        "monica@gmail.com"
      ]
    },
    {
      "id": "kiss-haunted-house-party-2025",
      "title": "KISS Haunted House Party 2025",
      "city": "london",
      "description": "Prepare for the ultimate Halloween bash at the KISS Haunted House Party 2025! Hosted by KISS FM, this annual event brings together top artists for a night of spooky fun, live performances, and the best costumes in town. With a lineup featuring some of the biggest names in music, this is the perfect way to celebrate Halloween with a mix of beats and scares.",
      "image": "https://wembleypark.com/media/images/KISS-HHP-42-1440x810-Logos-Date-de.2e16d0ba.fill-496x279.jpg",
      "emails_registered": []
    },
    {
      "id": "sf-blockchain-week",
      "title": "SF Blockchain Week",
      "city": "san-francisco",
      "description": "SF Blockchain Week is a premier gathering for blockchain enthusiasts, developers, and industry leaders. This event showcases the latest innovations in decentralized technologies, Web3 applications, and crypto ecosystems through keynote speeches, panel discussions, and hands-on workshops. Whether you're a seasoned blockchain professional or a newcomer, this week-long event provides valuable networking opportunities and insights into the future of decentralized finance and technology.",
      "image": "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      "emails_registered": [
        "laura@gmail.com"
      ]
    },
    {
      "id": "innovation-summit-san-francisco",
      "title": "Innovation Summit San Francisco",
      "city": "san-francisco",
      "description": "The Innovation Summit San Francisco brings together visionaries, entrepreneurs, and investors to explore groundbreaking advancements across industries. Featuring keynote speakers from top tech companies and emerging startups, this summit highlights the latest trends in AI, fintech, sustainability, and digital transformation. Attendees will gain valuable knowledge through interactive panels, networking sessions, and product showcases designed to inspire the next wave of innovation.",
      "image": "https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "emails_registered": []
    },
    {
      "id": "fan-expo-san-francisco",
      "title": "FAN EXPO San Francisco",
      "city": "san-francisco",
      "description": "FAN EXPO San Francisco is the ultimate pop culture convention, celebrating comics, anime, gaming, and sci-fi fandoms. With celebrity guests, artist alley, cosplay contests, and immersive experiences, this event offers something for fans of all ages. Whether you're meeting your favorite stars, shopping for exclusive merchandise, or participating in gaming tournaments, FAN EXPO is the perfect place to embrace your fandom and connect with like-minded enthusiasts.",
      "image": "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "emails_registered": [
        "mail@mail.com"
      ]
    },
    {
      "id": "san-francisco-opera---san-francisco-tickets",
      "title": "San Francisco Opera - San Francisco Tickets",
      "city": "san-francisco",
      "description": "Experience the magic of opera in the heart of San Francisco at the iconic War Memorial Opera House. The San Francisco Opera presents world-class performances featuring breathtaking music, stunning stage designs, and powerful storytelling. Whether you're a longtime opera lover or new to the art form, each performance offers an unforgettable cultural experience that showcases the beauty and drama of opera at its finest.",
      "image": "https://images.unsplash.com/photo-1580809361436-42a7ec204889?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "emails_registered": []
    },
    {
      "id": "fc-barcelona-vs-real-madrid---el-clásico",
      "title": "FC Barcelona vs Real Madrid – El Clásico",
      "city": "barcelona",
      "description": "One of the most anticipated football matches in the world, El Clásico brings FC Barcelona and Real Madrid face-to-face in an electrifying battle at Spotify Camp Nou. Witness the intensity, skill, and rivalry between two of the biggest clubs in football history as they compete for dominance in La Liga. With star players, passionate fans, and an atmosphere like no other, this is a match every football lover must experience live in Barcelona!",
      "image": "https://images.unsplash.com/photo-1544366981-53db834f982a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmMlMjBiYXJjZWxvbmF8ZW58MHx8MHx8fDA%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "the-halloween-house-party",
      "title": "The Halloween House Party",
      "city": "barcelona",
      "description": "Get ready for a night of thrills, chills, and unforgettable beats at Barcelona’s most electrifying Halloween House Party! Featuring top DJs, eerie decorations, and a spine-tingling atmosphere, this event is the ultimate way to celebrate Halloween in the heart of the city. Dress up in your best costume, dance the night away, and enjoy a night filled with spooky surprises, themed cocktails, and an unbeatable party vibe!",
      "image": "https://images.unsplash.com/photo-1587407627257-27b7127c868c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com",
        "david@yahoo.com",
        "claire@ss.com"
      ]
    },
    {
      "id": "international-conference-on-industrial-design",
      "title": "International Conference on Industrial Design",
      "city": "barcelona",
      "description": "The International Conference on Industrial Design in Barcelona brings together designers, engineers, and industry professionals to explore the latest trends and innovations in product design, sustainability, and user experience. Through keynote speeches, panel discussions, and interactive workshops, attendees will gain insights into cutting-edge design solutions and technological advancements shaping the future of industrial design.",
      "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "world-congress-2025---barcelona",
      "title": "World Congress 2025 - Barcelona",
      "city": "barcelona",
      "description": "Barcelona welcomes global leaders, policymakers, and innovators to the prestigious World Congress 2025, an event that fosters collaboration across industries. This congress covers key topics such as technology, sustainability, healthcare, and economic development, featuring influential speakers, networking opportunities, and forward-thinking discussions. It’s the perfect platform for shaping the future through knowledge sharing and strategic partnerships.",
      "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "riskminds-international",
      "title": "RiskMinds International",
      "city": "barcelona",
      "description": "RiskMinds International is the world’s leading conference for risk management professionals, bringing together top minds in banking, insurance, and investment. Held in Barcelona, this event features expert-led discussions on financial risk, regulatory changes, AI-driven risk solutions, and global economic trends. With in-depth panels, networking sessions, and practical insights, RiskMinds International is a must-attend event for anyone in the financial risk sector.",
      "image": "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "singapore-grand-prix",
      "title": "Singapore Grand Prix (Formula 1 Night Race)",
      "city": "Singapore",
      "description": "Experience the electrifying atmosphere of the world’s first Formula 1 night race, held on the Marina Bay Street Circuit, with a backdrop of dazzling city lights.",
      "image": "https://images.unsplash.com/photo-1541267226650-673e4bc869c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlJTIwZ3JhbmQlMjBwcml4fGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "singapore-food-festival",
      "title": "Singapore Food Festival",
      "city": "Singapore",
      "description": "A paradise for food lovers, this festival highlights Singapore’s diverse culinary heritage through street food markets, gourmet experiences, and chef collaborations.",
      "image": "https://plus.unsplash.com/premium_photo-1670002227114-5274d6318446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlJTIwZm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "national-day-parade",
      "title": "National Day Parade",
      "city": "Singapore",
      "description": "A grand celebration of Singapore’s independence featuring a spectacular display of fireworks, military parades, and cultural performances.",
      "image": "https://images.unsplash.com/photo-1648366314309-ed77cf36507b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlJTIwcGFyYWRlfGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "singapore-art-week",
      "title": "Singapore Art Week",
      "city": "Singapore",
      "description": "An annual celebration of contemporary and traditional art, featuring exhibitions, interactive installations, and street art displays throughout the city.",
      "image": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlJTIwYXJ0JTIwd2Vla3xlbnwwfHwwfHx8MA%3D%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "chery-blossom-festival",
      "title": "Cherry Blossom Festival (Hanami)",
      "city": "Tokyo",
      "description": "A mesmerizing spring tradition where parks and streets are filled with blooming cherry blossoms, offering breathtaking scenery and lively picnics under the trees.",
      "image": "https://plus.unsplash.com/premium_photo-1723983556753-720945de2973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fENoZXJyeSUyMEJsb3Nzb20lMjBGZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "Tokyo-game-show",
      "title": "Tokyo Game Show",
      "city": "Tokyo",
      "description": "One of the largest gaming conventions in the world, featuring the latest in video game technology, exclusive game demos, and exciting announcements from major developers.",
      "image": "https://images.unsplash.com/photo-1511882150382-421056c89033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMHNob3d8ZW58MHx8MHx8fDA%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "sumo-grand-torunament",
      "title": "Sumo Grand Tournament",
      "city": "Tokyo",
      "description": "Witness the power and tradition of Japan’s national sport as sumo wrestlers compete in thrilling matches at Ryōgoku Kokugikan.",
      "image": "https://images.unsplash.com/photo-1602152043142-1d25a6d56a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vtb3xlbnwwfHwwfHx8MA%3D%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "shibuya-halloween-street-party",
      "title": "Shibuya Halloween Street Party",
      "city": "Tokyo",
      "description": "Tokyo’s biggest Halloween celebration takes over the streets of Shibuya, where thousands of costumed revelers create a spectacular, energetic atmosphere.",
      "image": "https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFsbG93ZWVufGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "tokyo-international-film-festival",
      "title": "Tokyo International Film Festival",
      "city": "Tokyo",
      "description": "A prestigious event showcasing global cinema, where filmmakers and movie enthusiasts gather to celebrate storytelling through film.",
      "image": "https://plus.unsplash.com/premium_photo-1664303124313-126bf7456982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbSUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "budapest-spring-festival",
      "title": "Budapest Spring Festival",
      "city": "Budapest",
      "description": "A celebration of art and culture, the Budapest Spring Festival hosts opera, classical music concerts, theater performances, and exhibitions in historic venues.",
      "image": "https://plus.unsplash.com/premium_photo-1661957705604-15f37be44856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJ1ZGFwZXN0JTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "christmas-fair-at-vörösmarty-square",
      "title": "Christmas Fair at Vörösmarty Square",
      "city": "Budapest",
      "description": "Budapest’s iconic Christmas market features beautifully decorated stalls, delicious traditional treats, and handcrafted gifts in the heart of the city.",
      "image": "https://images.unsplash.com/photo-1726930117096-90cff164328b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVkYXBlc3QlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "formula-1-hungarian-grand-prix",
      "title": "Formula 1 Hungarian Grand Prix",
      "city": "Budapest",
      "description": "The adrenaline-pumping Formula 1 Hungarian Grand Prix takes place at the Hungaroring, bringing motorsport enthusiasts from around the world for a weekend of high-speed racing action.",
      "image": "https://images.unsplash.com/photo-1683380399873-9d2b43947728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bmdhcm9yaW5nfGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com",
        "mail@mail.com"
      ]
    },
    {
      "id": "sziget-festival",
      "title": "Sziget Festival",
      "city": "Budapest",
      "description": "One of Europe's largest music and cultural festivals, Sziget transforms Óbuda Island into a vibrant paradise featuring world-class music, art installations, and international performances.",
      "image": "https://images.unsplash.com/photo-1660624723390-422b7874c6a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVkYXBlc3QlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    },
    {
      "id": "budapest-wine-festival",
      "title": "Budapest wine Festival",
      "city": "Budapest",
      "description": "Held at Buda Castle, this festival showcases Hungary's rich winemaking traditions, offering tastings of exquisite wines and breathtaking views of the Danube.",
      "image": "https://images.unsplash.com/photo-1607596169152-e311b7fbfe38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVkYXBlc3QlMjB3aW5lfGVufDB8fDB8fHww",
      "emails_registered": [
        "alicia@gmail.com",
        "monica@gmail.com"
      ]
    }
  ]);

  console.log('Database seeded!');
  process.exit();
};

seedData().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});