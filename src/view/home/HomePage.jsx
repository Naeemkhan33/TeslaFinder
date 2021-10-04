import { Head } from '../../components/Head';
import SectionHero from './Sections/SectionHero';
import SectionNewSletter from './Sections/SectionNewSletter';
import SectionPacks from './Sections/SectionPacks';
import SectionTesla from './Sections/SectionTesla';
import SectionWhyChoose from './Sections/SectionWhyChoose';

export default function HomePage() {
  return (
    <main className='mt-5 mb-20 fade-in'>
      <Head title='Home' />
      <SectionHero />
      <SectionTesla />
      <SectionNewSletter />
      <SectionPacks />
      <SectionWhyChoose />
    </main>
  );
}
