/* ==========================================================================
   Shaahi Creations - site configuration
   Single source of truth for contact details, URLs and global metadata.
   Update values here and re-run `node _build/build.js`.
   ========================================================================== */

const site = {
  name: 'Shaahi Creations',
  legalName: 'Shaahi Creations Events',
  tagline: 'Ideas. People. Experiences. Together.',
  descriptor: 'Corporate Events and Experiences',
  founded: '2018',
  origin: 'https://www.shaahicreations.com',
  basePath: '',
  twitterHandle: '',

  phones: [
    { label: '+91 91000 37360', href: 'tel:+919100037360' },
    { label: '+91 70758 37070', href: 'tel:+917075837070' }
  ],
  hours: 'Mon - Sat, 10:00 AM - 6:30 PM',

  emails: [
    { label: 'events@shaahicreations.com', href: 'mailto:events@shaahicreations.com' },
    { label: 'sales@shaahicreations.com', href: 'mailto:sales@shaahicreations.com' }
  ],

  /* NOTE: street address for the Hyderabad head office is pending from the client.
     Replace `street` below and the `map` link once confirmed. */
  offices: [
    {
      city: 'Hyderabad',
      role: 'Head Office',
      street: 'Jubilee Hills, Hyderabad',
      region: 'Telangana',
      postal: '500033',
      country: 'India',
      map: 'https://www.google.com/maps/search/?api=1&query=Shaahi+Creations+Jubilee+Hills+Hyderabad',
      primary: true
    },
    {
      city: 'Pune',
      role: 'Client Meetings',
      street: 'Pune',
      region: 'Maharashtra',
      country: 'India',
      map: 'https://www.google.com/maps/search/?api=1&query=Shaahi+Creations+Pune'
    },
    {
      city: 'Mumbai',
      role: 'Client Meetings',
      street: 'Mumbai',
      region: 'Maharashtra',
      country: 'India',
      map: 'https://www.google.com/maps/search/?api=1&query=Shaahi+Creations+Mumbai'
    }
  ],

  social: [
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/shaahicreationsevents/' },
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/shaahicreationsevents' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@shaahicreations' }
  ],

  stats: [
    { value: '1500+', label: 'Events Executed' },
    { value: '1000+', label: 'Corporate Events' },
    { value: '25+', label: 'Cities Across India' },
    { value: '4000', label: 'Largest Audience' }
  ],

  eventTypes: [
    'Conference / Leadership Summit',
    'Annual Day / Celebration',
    'Family Day',
    'Team Offsite / Engagement',
    'Product Launch',
    'Dealer Meet / R&R',
    'Brand Activation / Expo',
    'Destination Event',
    'Other'
  ]
};

const nav = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'about.html' },
  {
    label: 'Our Work',
    href: 'our-work.html',
    children: [
      { label: 'Gallery', href: 'our-work.html' },
      { label: 'Case Studies', href: 'case-studies.html' },
      { label: 'Blogs', href: 'blog.html' }
    ]
  },
  { label: 'Destinations', href: 'destinations.html' },
  { label: 'Contact Us', href: 'contact.html' }
];

module.exports = { site, nav };
