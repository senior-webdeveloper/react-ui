import './assets/common.css';
import Header from './components/Header';
import Card from './components/Card';

const cards = [
  {
    title: '2021 Dolphins Member Hat',
    date: 'Sun Nov 07, 2021 08:30 AM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '../assets/img/135189.png',
  },
  {
    title: 'Texans vs Dophins',
    date: 'sun Nov 07 2021 01:00 PM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '164300.png',
  },
  {
    title: 'Ravens vs Dolphins',
    date: 'Thu Nov 11, 2021 08:20 PM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '164305.png',
  },
  {
    title: 'Panthers vs Dophins',
    date: 'Thu Nov 11,2021 08:20 PM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '../assets/img/164305.png',
  },
  {
    title: 'Giants vs Dophins',
    date: 'sun Dec 05,2021 01:00 PM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '../assets/img/164303.png',
  },
  {
    title: 'Patriots vs Dophins',
    date: 'sun Jan 09, 2022 01:00 PM',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '../assets/img/164306.png',
  },
  {
    title: 'Jets vs Dophins',
    date: 'TBD TBD',
    description: 'Miami, FL-Hard Rock Stadium',
    image: '../assets/img/164304.png',
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <div className='section'>
        {cards.map((card, index) => {
          return <Card key={index} card={card} />
        })}
      </div>
    </div>
  );
}

export default App;
