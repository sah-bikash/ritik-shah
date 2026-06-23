import { Helmet } from 'react-helmet-async';
import { personalInfo } from '../../data/portfolioData';

export default function SEOHead() {
  return (
    <Helmet>
      <title>{personalInfo.name} — {personalInfo.title}</title>
      <meta name="description" content={personalInfo.description} />
      <link rel="canonical" href={personalInfo.website} />
    </Helmet>
  );
}