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
  {
    id: 'm3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZculqf6BqlJEs5iifInoK3CuPaXDFDlbqiQ&s',
    title: 'Third Meetup',
    address: '789 Oak St, City, Country',
    description: "This is the third meetup description.",
  },
  {
    id: 'm4',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZculqf6BqlJEs5iifInoK3CuPaXDFDlbqiQ&s',
    title: 'Fourth Meetup',
    address: '101 Pine St, City, Country',
    description: "This is the fourth meetup description.",
  },
  {
    id: 'm5',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZculqf6BqlJEs5iifInoK3CuPaXDFDlbqiQ&s',
    title: 'Fifth Meetup',
    address: '202 Maple St, City, Country',
    description: "This is the fifth meetup description.",
  },
];

function HomePage() {
  return  <Layout><MeetupList meetups={DUMMY_MEETUPS} /></Layout>;
    
  
}

export default HomePage;