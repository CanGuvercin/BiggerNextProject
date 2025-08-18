import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const  DUMMY_MEETUPS = [
  {
    id: 'm1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZculqf6BqlJEs5iifInoK3CuPaXDFDlbqiQ&s',
    title: 'First Meetup',
    address: '123 Main St, City, Country',
    description: "This is the first meetup description.",
  },
  {
    id: 'm2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZculqf6BqlJEs5iifInoK3CuPaXDFDlbqiQ&s',
    title: 'Second Meetup',
    address: '456 Elm St, City, Country',
    description: "This is the second meetup description.",
  },
];

function HomePage() {
  return  <Layout><MeetupList meetups={DUMMY_MEETUPS} /></Layout>;
    
  
}

export default HomePage;