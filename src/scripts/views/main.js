// Components
import '../components/AppBar';
import '../components/Hero';
import '../components/About';
import '../components/Info';
import '../components/Banner';
import '../components/Statistics';

// Data
import dataGlobal from '../data/data-global';
import select from '../data/country-list';
import showdata from '../data/data-covid';
import '../data/time';

document.getElementById('countryCode').addEventListener('change', () => {
  showdata();
});

dataGlobal();
select();
