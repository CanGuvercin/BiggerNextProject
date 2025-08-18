import MeetupList from "../components/meetups/MeetupList";


const  DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://example.com/image1.jpg',
    title: 'First Meetup',
    address: '123 Main St, City, Country',
    description: "This is the first meetup description.",
  },
  {
    id: 'm2',
    image: 'https://example.com/image2.jpg',
    title: 'Second Meetup',
    address: '456 Elm St, City, Country',
    description: "This is the second meetup description.",
  },
];

function HomePage() {
  return  <MeetupList meetups={DUMMY_MEETUPS} />;
    
  
}

export default HomePage;