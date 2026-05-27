// src/features/portfolio/PortfolioData.js

// 1. Bespoke Dining Imports
import bespokeCover from '../../assets/images/portfolio/bespoke-dining/cover.jpg';
import bespokeImg1 from '../../assets/images/portfolio/bespoke-dining/plating-1.jpg';
import bespokeImg2 from '../../assets/images/portfolio/bespoke-dining/setup.jpg';

// 2. Private Events Imports
import privateCover from '../../assets/images/portfolio/private-events/cover.jpg';
import privateImg1 from '../../assets/images/portfolio/private-events/ambiance.jpg';

// 3. Luxury Catering Imports
import cateringCover from '../../assets/images/portfolio/luxury-catering/cover.jpg';
import cateringImg1 from '../../assets/images/portfolio/luxury-catering/buffet-spread.jpg';

// 4. Estate Cooking Imports
import estateCover from '../../assets/images/portfolio/estate-cooking/cover.jpg';
import estateImg1 from '../../assets/images/portfolio/estate-cooking/kitchen-action.jpg';

// 5. Restaurant Consulting Imports
import consultingCover from '../../assets/images/portfolio/restaurant-consulting/cover.jpg';
import consultingImg1 from '../../assets/images/portfolio/restaurant-consulting/menu-dev.jpg';


export const pastEvents = [
  {
    id: 'bespoke-dining-1',
    title: 'Intimate 5-Course Anniversary Dinner',
    category: 'Bespoke Dining',
    location: 'Sandton',
    description: 'Bringing restaurant-quality to your table. An intimate, candle-lit fine dining experience customized for a private couple anniversary.',
    coverImage: bespokeCover,
    images: [bespokeCover, bespokeImg1, bespokeImg2]
  },
  {
    id: 'private-events-1',
    title: 'Milestone Birthday Celebration Dinner',
    category: 'Private Events',
    location: 'Rosebank',
    description: 'An elegant sit-down dinner experience featuring custom curated tasting menus tailored for a private birthday celebration.',
    coverImage: privateCover,
    images: [privateCover, privateImg1]
  },
  {
    id: 'luxury-catering-1',
    title: 'High-End Corporate Launch Cocktail Event',
    category: 'Luxury Catering',
    location: 'Johannesburg',
    description: 'Bespoke canapés, luxury platter arrays, and premium food presentation for executive corporate gatherings.',
    coverImage: cateringCover,
    images: [cateringCover, cateringImg1]
  },
  {
    id: 'estate-cooking-1',
    title: 'Exclusive Weekend Estate Culinary Residence',
    category: 'Estate Cooking',
    location: 'Fourways',
    description: 'Full-day private chef service inside a luxury estate, managing customized breakfast, lunch, and high-end dinner sets for family and guests.',
    coverImage: estateCover,
    images: [estateCover, estateImg1]
  },
  {
    id: 'restaurant-consulting-1',
    title: 'Fine Dining Menu Conceptualization & Overhaul',
    category: 'Restaurant Consulting',
    location: 'Midrand',
    description: 'Kitchen workflow design, staff training execution, and upscale menu development to elevate culinary standards.',
    coverImage: consultingCover,
    images: [consultingCover, consultingImg1]
  }
];