/* ==========================================================================
   Shaahi Creations - content data
   Sourced from the client capability deck and the website plan document.
   ========================================================================== */

/* --- What We Do (home) ---------------------------------------------------- */
const services = [
  {
    icon: 'conference',
    title: 'Conferences &amp; Meetings',
    blurb: 'Leadership summits, town halls, sales conferences and multi-city hybrid meets, produced end to end.',
    tone: 'coral'
  },
  {
    icon: 'celebration',
    title: 'Annual Days &amp; Celebrations',
    blurb: 'Large-format annual days, R&amp;R nights and festive celebrations that bring an entire organisation together.',
    tone: 'gold'
  },
  {
    icon: 'team',
    title: 'Team Engagement &amp; Offsites',
    blurb: 'Offsites, leadership retreats and engagement programmes designed around how teams actually connect.',
    tone: 'teal'
  },
  {
    icon: 'rocket',
    title: 'Product Launches',
    blurb: 'Launches and dealer meets with stage design, production and hospitality built for maximum brand impact.',
    tone: 'purple'
  },
  {
    icon: 'activation',
    title: 'Experiential Brand Activations',
    blurb: 'Immersive activations, expos and showcases that let audiences experience a brand rather than watch it.',
    tone: 'blue'
  },
  {
    icon: 'destination',
    title: 'Destination Corporate Events',
    blurb: 'Beach, palace and mountain destinations across India, with travel, stay and on-ground teams handled.',
    tone: 'pink'
  }
];

/* --- Client logos (capability deck, page 9) ------------------------------- */
/* w/h: size of the trimmed mark in assets/img/clients/marks/, used to give
   every logo the same visual weight on the home page. */
const clients = [
  { name: 'Microsoft', file: 'microsoft', w: 340, h: 80 },
  { name: 'NVIDIA', file: 'nvidia', w: 190, h: 145 },
  { name: 'Amazon', file: 'amazone', w: 351, h: 112 },
  { name: 'Marriott', file: 'marriott', w: 288, h: 146 },
  { name: 'Porsche', file: 'porsche', w: 284, h: 146 },
  { name: 'Capgemini', file: 'capgimini', w: 348, h: 83 },
  { name: "Dr. Reddy's Laboratories", file: 'dr-reddys', w: 350, h: 82 },
  { name: 'Welspun Industries', file: 'welspun', w: 344, h: 94 },
  { name: 'ITC Limited', file: 'itc-limited', w: 145, h: 151 },
  { name: 'JSW', file: 'jsw', w: 318, h: 154 },
  { name: 'DBS', file: 'dbs', w: 352, h: 108 },
  { name: 'GMR', file: 'gmr', w: 352, h: 134 },
  { name: 'Tanla Tech', file: 'tanla', w: 352, h: 94 },
  { name: 'GEP', file: 'gep', w: 352, h: 90 },
  { name: 'GM Switches', file: 'gm', w: 306, h: 145 },
  { name: 'KCP Cement', file: 'kcp', w: 156, h: 156 },
  { name: 'Hitachi Digital Services', file: 'hitachi-digital-services', w: 339, h: 38 },
  { name: 'Celon Labs', file: 'celonlabs', w: 342, h: 115 },
  { name: 'Yashoda Hospitals', file: 'yashoda-hospital', w: 212, h: 155 }
];

/* Named clients without a supplied logo file - listed as text. */
const clientsTextOnly = ['Google', 'Deloitte', 'World Health Organization', 'Syntazin', 'Marriott Bonvoy'];

/* --- Testimonials --------------------------------------------------------- */
const testimonials = [
  {
    quote: 'The Shaahi Creations team brought our vision to life with exceptional creativity and flawless execution. It was more than an event &mdash; it was an experience.',
    name: 'HR Director',
    org: 'Global Technology Company'
  },
  {
    quote: 'Their professionalism, attention to detail and ability to manage complex logistics made our annual event a huge success. Truly a partner we can rely on.',
    name: 'Head &ndash; Marketing',
    org: 'Leading Pharmaceutical Company'
  },
  {
    quote: 'Creative, agile and an absolute pleasure to work with. Shaahi Creations elevates every brief with fresh ideas and a can-do attitude.',
    name: 'India Head',
    org: 'Global Consulting Firm'
  },
  {
    quote: 'Your team consistently delivers exceptional events with creativity, flawless execution and great attention to detail.',
    name: 'Leadership Team',
    org: 'Marriott'
  },
  {
    quote: 'Your team did an amazing job on our Annual Day. Everything was seamless and perfectly executed.',
    name: 'Events Team',
    org: 'ZEST'
  },
  {
    quote: 'Shaahi Creations is our one point of contact for any event requirement. Professional, reliable and an outstanding team.',
    name: 'Onsite US Team',
    org: 'Marriott Bonvoy'
  }
];

/* --- Featured work (home carousel) --------------------------------------- */
/* Each card is drawn from the case study with this slug: title, category, link
   and photo. `img` swaps in another photo from that case study when the hero
   crops badly at the card's 4:3 shape. */
const featured = [
  { slug: 'microsoft-leadership-summit', overlay: 'Lead. Collaborate. Innovate.' },
  { slug: 'zest-annual-family-day', img: 'zest-celebration', overlay: 'Four Years And Counting' },
  { slug: 'marriott-bonvoy-hospitality-partnership', overlay: 'Stronger Partnerships.' },
  { slug: 'nvidia-annual-employee-event', overlay: 'People. Ideas. Together.' },
  { slug: 'welspun-dealer-meet', overlay: 'Product In The Room' },
  { slug: 'who-virtual-conference', overlay: 'Knowledge Without Borders' },
  { slug: 'shaadi-by-marriott', overlay: 'Moments That Matter' },
  { slug: 'gm-switches-brand-launch', overlay: 'Switch To A Better World' }
];

/* --- Destination highlights (home): the four metro cities, in this fixed
   order, followed by a link to the full signature/offbeat list. ----------- */
const destHighlights = [
  { name: 'Mumbai', tag: 'Business &amp; Glamour', hue: 'mumbai', photo: 'mumbai', venues: 'mumbai' },
  { name: 'Hyderabad', tag: 'Culture &amp; Cuisine', hue: 'hyderabad', photo: 'hyderabad', venues: 'hyderabad' },
  { name: 'Bangalore', tag: 'Innovation &amp; Energy', hue: 'bangalore', photo: 'bengaluru', venues: 'bengaluru' },
  { name: 'Delhi NCR', tag: 'Power &amp; Prestige', hue: 'delhi', photo: 'delhi', venues: 'delhi' }
];

/* --- About: what we believe ---------------------------------------------- */
const beliefs = [
  { icon: 'bulb', title: 'Ideas First', text: 'We start with the objective, not the template. Every event begins with a question, not a checklist.' },
  { icon: 'pen', title: 'Design Matters', text: 'Every touchpoint should serve a purpose, from the stage to the smallest detail on the table.' },
  { icon: 'handshake', title: 'People Come First', text: 'We create experiences designed around how people feel, connect and participate.' },
  { icon: 'gearcheck', title: 'Execution Makes the Difference', text: 'Great ideas mean little without disciplined planning and flawless delivery.' }
];

/* --- About: how we think (capability deck, page 5) ----------------------- */
const process = [
  { icon: 'search', title: 'Understand', text: 'We listen, learn and deep dive into your objectives, audience and vision.' },
  { icon: 'bulb', title: 'Strategise', text: 'We craft a tailored concept and strategy aligned with your business objectives.' },
  { icon: 'pen', title: 'Design', text: 'Our creative team brings the concept to life with designs, layouts and 3D simulations.' },
  { icon: 'clipboard', title: 'Plan', text: 'We plan every detail: logistics, production, talent and timelines.' },
  { icon: 'gear', title: 'Execute', text: 'Our on-ground team executes with precision, passion and professionalism.' },
  { icon: 'deliver', title: 'Deliver', text: 'We review, analyse and gather feedback so the next experience goes further.' }
];

/* --- About: our expertise (capability deck, page 6) ---------------------- */
const expertise = [
  { icon: 'consult', title: 'Event Consulting', text: 'Strategic guidance and creative inputs to align events with your goals.' },
  { icon: 'pen', title: 'Creative Concept &amp; Design', text: 'Innovative ideas and stunning designs that bring your vision to life.' },
  { icon: 'clipboard', title: 'Planning &amp; Project Management', text: 'Meticulous planning, seamless coordination and flawless execution.' },
  { icon: 'building', title: 'Venue Sourcing &amp; Management', text: 'Finding the right venue and managing every detail with precision.' },
  { icon: 'sliders', title: 'Production &amp; Technology', text: 'State-of-the-art AV, lighting and technical solutions for impactful experiences.' },
  { icon: 'decor', title: 'D&eacute;cor &amp; Experience Design', text: 'Immersive d&eacute;cor and thematic experiences tailored to your brand and audience.' },
  { icon: 'plane', title: 'Travel &amp; Hospitality', text: 'End-to-end travel, stay and hospitality solutions for a seamless experience.' },
  { icon: 'mic', title: 'Talent &amp; Entertainment', text: 'Curating the right talent and engagement for memorable moments.' },
  { icon: 'chart', title: 'Measurement &amp; Reporting', text: 'Data-driven insights and reporting to measure impact and ROI.' }
];

/* --- About: technology integration (capability deck, page 8) ------------- */
const techStack = [
  'Seamless attendee registration',
  'Custom event apps for agendas, networking and live Q&amp;A',
  'RFID for cashless, contactless access and real-time analytics',
  'AI and automation for personalisation at scale',
  'AR and VR activations that engage and captivate',
  'High-impact LED setups and live streaming'
];

/* --- About: team ---------------------------------------------------------- */
const team = [
  {
    name: 'Snehal Deshpande',
    role: 'Founder &amp; Business Development',
    photo: 'snehal',
    bio: 'Founded Shaahi Creations with a vision to create a more thoughtful, creative and client-centric approach to events. Today, she leads business development and strategic growth across markets.',
    linkedin: 'https://www.linkedin.com/in/snehal-deshpande-98b9a340'
  },
  {
    name: 'Rupesh Patil',
    role: 'Co-Founder<br>Client Servicing &amp; Operations',
    photo: 'rupesh',
    bio: 'Leads client servicing and operations, ensuring ideas translate into seamless experiences. His hospitality background brings a strong focus on relationships, strategy and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/rupesh-patil-97712a1b/'
  },
  {
    name: 'Mukesh Deshmukh',
    role: 'Lead &ndash; Creative Director &amp; Design',
    photo: 'mukesh',
    bio: 'Translates ideas into visual experiences through creative direction, design and experiential thinking &ndash; shaping environments that engage and leave an impression.',
    linkedin: 'https://www.linkedin.com/in/mukesh-deshmukh-11828b17/'
  },
  {
    name: 'Neetu Elluri',
    role: 'Lead &ndash; BDM &amp; Client Servicing',
    photo: 'neetu',
    bio: 'Builds new opportunities, nurtures client relationships and ensures every engagement is thoughtful, responsive and aligned to client objectives.',
    linkedin: 'https://www.linkedin.com/in/neetu-elluri-700876432/'
  },
  {
    name: 'Mrunalinli Bhurle',
    role: 'Lead &ndash; Operations',
    photo: 'mrunalinli',
    bio: 'Leads planning, coordination and on-ground execution, bringing structure, precision and consistency to every event.',
    linkedin: 'https://www.linkedin.com/in/mrunalini-bhurle-5b227561'
  }
];

/* --- Industries served (capability deck, page 4) ------------------------- */
const industries = [
  'IT &amp; Technology', 'GCCs', 'Healthcare', 'Pharma', 'Retail', 'Hospitality',
  'Government', 'Manufacturing', 'Automobile', 'Education', 'Telecom', 'BFSI'
];

/* --- Gallery (Our Work, tab 1) ------------------------------------------- */
const CAT = {
  annual: 'Annual Days',
  conf: 'Conferences',
  launch: 'Product Launches',
  team: 'Team Engagement',
  family: 'Family Days',
  brand: 'Brand Activations',
  dest: 'Destination Events',
  other: 'Others'
};

const gallery = [
  { img: 'g14', title: 'Annual Employee Event', meta: 'Technology | 600+ Guests', cats: ['annual', 'conf'], overlay: 'People. Ideas. Together.' },
  { img: 'g40', title: 'Destination Partner Connect', meta: 'Goa | 300+ Guests', cats: ['dest', 'brand'], overlay: 'Under The Lights' },
  { img: 'g20', title: 'On-Stage Brand Reveal', meta: 'Automobile | 500+ Guests', cats: ['launch'], overlay: 'Driven By A Brighter Tomorrow' },
  { img: 'g07', title: 'Annual Family Day', meta: 'IT | 2000+ Guests', cats: ['family', 'annual'], overlay: 'A Day To Belong' },
  { img: 'g38', title: 'Leadership Conference', meta: 'Pharma | 600+ Guests', cats: ['conf'], overlay: 'Knowledge. Collaboration. Action.' },
  { img: 'g11', title: 'Team Offsite', meta: 'Udaipur | 150+ Guests', cats: ['team', 'dest'], overlay: 'Breathe. Connect. Grow.' },
  { img: 'g34', title: 'Shaadi by Marriott Showcase', meta: 'Hospitality | Pan India', cats: ['brand'], overlay: 'Moments That Matter' },
  { img: 'g06', title: 'Employee Engagement Evening', meta: 'BFSI | 400+ Guests', cats: ['team'], overlay: 'Ideas In Motion' },
  { img: 'g39', title: 'Starlit Ceiling Installation', meta: 'Rishikesh | 100+ Guests', cats: ['dest', 'other'], overlay: 'Design That Lifts A Room' },
  { img: 'g02', title: 'ZEST Annual Day', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Four Years And Counting' },
  { img: 'g37', title: 'Annual Day Main Stage', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Centre Stage' },
  { img: 'g08', title: 'Grand Banquet Setup', meta: 'Corporate | 1200+ Guests', cats: ['annual', 'conf'], overlay: 'Set For The Night' },
  { img: 'g03', title: 'Annual Celebration Showcase', meta: 'IT | 900+ Guests', cats: ['annual'], overlay: 'Lights. Motion. Applause.' },
  { img: 'g04', title: 'Leadership Summit', meta: 'Technology | 800+ Guests', cats: ['conf'], overlay: 'Lead. Collaborate. Innovate.' },
  { img: 'g09', title: 'Corporate Conference Setup', meta: 'GCC | 400+ Guests', cats: ['conf'], overlay: 'Every Detail, Considered' },
  { img: 'g23', title: 'Rewards &amp; Recognition Night', meta: 'Manufacturing | 500+ Guests', cats: ['conf', 'annual'], overlay: 'Recognised. Celebrated.' },
  { img: 'g36', title: '10th Anniversary Special Event', meta: 'Aviation | 200+ Guests', cats: ['conf', 'other'], overlay: 'A Decade In Hyderabad' },
  { img: 'g01', title: 'Dealer Meet &amp; Brand Launch', meta: 'Hospitality | 800+ Dealers', cats: ['launch', 'brand'], overlay: 'A Night With The Tiger' },
  { img: 'g13', title: 'Outdoor Launch Night', meta: 'FMCG | Pan India', cats: ['launch', 'brand'], overlay: 'Out In The Open' },
  { img: 'g05', title: 'Networking Evening', meta: 'Consulting | 150+ Guests', cats: ['team', 'conf'], overlay: 'Conversations That Count' },
  { img: 'g21', title: 'Employee Performance Night', meta: 'IT | 700+ Guests', cats: ['team', 'annual'], overlay: 'Their Stage' },
  { img: 'g22', title: 'Engagement Act', meta: 'BFSI | 400+ Guests', cats: ['team'], overlay: 'All In' },
  { img: 'g32', title: 'Team Showcase', meta: 'GCC | 600+ Guests', cats: ['team', 'annual'], overlay: 'Together On Stage' },
  { img: 'g24', title: 'Global Teams Family Day', meta: 'Technology | 2000+ Guests', cats: ['family', 'team'], overlay: 'Surfs Up' },
  { img: 'g28', title: 'Beach Theme Family Day', meta: 'Healthcare Tech | 3000+ Guests', cats: ['family', 'annual'], overlay: 'Sun. Sand. Celebration.' },
  { img: 'g33', title: 'Finale Showcase', meta: 'IT | 1500+ Guests', cats: ['annual', 'family'], overlay: 'The Big Finish' },
  { img: 'g12', title: 'Cultural Night', meta: 'Pharma | 800+ Guests', cats: ['annual'], overlay: 'Roots On Stage' },
  { img: 'g16', title: 'Dance Showcase', meta: 'IT | 700+ Guests', cats: ['annual'], overlay: 'Sparks Fly' },
  { img: 'g17', title: 'Fire &amp; Rhythm Act', meta: 'Manufacturing | 600+ Guests', cats: ['annual'], overlay: 'Turn Up The Heat' },
  { img: 'g18', title: 'LED Stage Performance', meta: 'Telecom | 900+ Guests', cats: ['annual'], overlay: 'Pixel Perfect' },
  { img: 'g19', title: 'Skyline Theme Showcase', meta: 'BFSI | 800+ Guests', cats: ['annual'], overlay: 'City Lights' },
  { img: 'g25', title: 'Classical Solo Performance', meta: 'Education | 500+ Guests', cats: ['annual', 'other'], overlay: 'Tradition, Reimagined' },
  { img: 'g26', title: 'Folk Ensemble', meta: 'Government | 700+ Guests', cats: ['annual'], overlay: 'Colour And Craft' },
  { img: 'g27', title: 'Mandala Stage Design', meta: 'Pharma | 900+ Guests', cats: ['annual'], overlay: 'Designed To Be Seen' },
  { img: 'g30', title: 'Festive Stage Design', meta: 'Retail | 600+ Guests', cats: ['annual', 'other'], overlay: 'Festival Mode' },
  { img: 'g31', title: 'Heritage Theme Stage', meta: 'Government | 800+ Guests', cats: ['annual'], overlay: 'Sunrise Sequence' },
  { img: 'g35', title: 'Bridal Couture Runway', meta: 'Hospitality | 400+ Guests', cats: ['brand'], overlay: 'Shaadi by Marriott' },
  { img: 'g10', title: 'Ceremonial D&eacute;cor', meta: 'Special Event | 500+ Guests', cats: ['other', 'dest'], overlay: 'Craft In Every Corner' },
  { img: 'g15', title: 'Holiday Party Red Carpet', meta: 'Healthcare Tech | 1000+ Guests', cats: ['other', 'family'], overlay: 'Holiday Party' },
  { img: 'g41', title: 'ZEST Annual Day Solo Feature', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Centre Stage', dims: [1067, 1600] },
  { img: 'g42', title: 'ZEST Annual Day Choreography', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'In Full Flight', dims: [1067, 1600] },
  { img: 'g43', title: 'ZEST Annual Day Performance', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'On Beat', dims: [1067, 1600] },
  { img: 'g44', title: 'ZEST Annual Day Classical Feature', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Ten Arms, One Story', dims: [1600, 1067] },
  { img: 'g45', title: 'ZEST Annual Day Ensemble', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Full Company On Stage', dims: [1600, 1067] },
  { img: 'g46', title: 'ZEST Annual Day Mandala Stage', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Designed To Be Seen', dims: [1600, 1067] },
  { img: 'g47', title: 'ZEST 26 Stage Design', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Wave After Wave', dims: [1600, 1067] },
  { img: 'g48', title: 'ZEST 26 Finale', meta: 'Healthcare Tech | 1500+ Guests', cats: ['annual'], overlay: 'Sun, Sand, Celebration', dims: [820, 547] }
];

/* --- Case study photography ---------------------------------------------- */
/* Cropped from the capability deck at native resolution into
   assets/img/case-studies/. Values are [width, height] in pixels. Case study
   `hero` and `images` accept these names or a gallery id such as 'g20'. */
const csPhotos = {
  'microsoft-ballroom': [1600, 374],
  'microsoft-cseo-pm-day': [776, 396],
  'microsoft-gdc-awards': [742, 396],
  'microsoft-keynote': [776, 282],
  'microsoft-virtual': [744, 282],
  'zest-celebration': [1148, 724],
  'zest-beach-stage': [1278, 456],
  'zest-entrance': [872, 460],
  'zest-performance': [1672, 392],
  'zest-stage': [796, 262],
  'marriott-bonvoy-team': [840, 528],
  'marriott-dance-floor': [1194, 734],
  'marriott-five-years': [930, 418],
  'marriott-peak-summit': [824, 418],
  'shaadi-runway': [930, 402],
  'shaadi-showcase': [824, 402],
  'welspun-booth': [958, 752],
  'welspun-product-display': [784, 752],
  'welspun-conference': [958, 700],
  'welspun-team': [784, 700],
  'nvidia-annual-day': [1264, 784],
  'who-virtual-conference': [1280, 776],
  'turkish-cargo-sales-conference': [1230, 784],
  'government-of-india-event': [834, 502],
  'anbai-annual-event': [1246, 770],
  'bel-leadership-conference': [1226, 770],
  'gm-switches-launch': [1244, 772],
  'tiger-palace-dealer-meet': [1208, 818]
};

/* --- Case studies (Our Work, tab 2) -------------------------------------- */
/* Ordered as in the capability deck. The last two are not in the deck and
   still use gallery photography. */
const caseStudies = [
  {
    slug: 'microsoft-leadership-summit',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'Microsoft',
    logo: 'microsoft',
    title: 'Microsoft Leadership Summit',
    strap: 'Strategy. People. Progress.',
    summary: 'A multi-city leadership summit designed to inspire alignment and drive the next phase of growth.',
    hero: 'microsoft-ballroom',
    facts: [
      ['Partnership', '4+ years and continuing'],
      ['Cities', 'Hyderabad, Bengaluru, Noida'],
      ['Scale', 'Up to 3000+ pax across events'],
      ['Format', 'In-person, VC and hybrid']
    ],
    objective: 'Microsoft needed a single event partner able to run leadership summits, town halls and internal conferences across three cities without losing consistency of experience, branding or production quality.',
    approach: [
      'A shared production language across cities so a delegate in Noida and one in Bengaluru had the same experience.',
      'Multi-city and virtual conference management, including VC and hybrid formats for distributed teams.',
      'End-to-end execution and production, from stage design and content playback to delegate hospitality.',
      'A single point of contact across multiple Microsoft verticals, so internal teams never had to re-brief.'
    ],
    delivered: ['Conferences &amp; leadership summits', 'Town halls &amp; internal conferences', 'Team celebrations &amp; engagement programmes', 'Multi-city &amp; virtual conference events'],
    result: 'Four continuing years as a trusted event partner, with repeat mandates across multiple Microsoft verticals and consistent delivery across Hyderabad, Bengaluru and Noida.',
    quote: { text: 'Thank you Rupesh. Everyone liked everything your team did.', by: 'Microsoft Team' },
    images: ['microsoft-ballroom', 'microsoft-cseo-pm-day', 'microsoft-gdc-awards', 'microsoft-keynote', 'microsoft-virtual']
  },
  {
    slug: 'zest-annual-family-day',
    kicker: 'Annual Day',
    cat: 'annual',
    client: 'ZEST',
    logo: '',
    title: 'ZEST Annual Day &amp; Family Day',
    strap: 'Four Years. Still Growing.',
    summary: 'Two large-scale celebrations every year for a healthcare technology organisation, delivered as their extended event team.',
    hero: 'g02',
    facts: [
      ['Partnership', '4+ years, still on'],
      ['Annual Day', '1500+ pax'],
      ['Family Day', '3000+ pax'],
      ['Scope', 'Venue to execution']
    ],
    objective: 'ZEST wanted a partner who could hold two flagship celebrations a year at very different scales, keep the creative fresh each edition, and act as one extended team rather than a vendor.',
    approach: [
      'A new creative concept and theme for every edition, so returning employees never see the same show twice.',
      'End-to-end event management from venue sourcing to on-ground execution.',
      'Festival d&eacute;cor and theming across the calendar, not only for the flagship days.',
      'Single point of contact for any event requirement, including conferences, client visits and offsites.'
    ],
    delivered: ['Annual Day &amp; Family Day celebrations', 'Festive d&eacute;cor &amp; theming', 'Conferences &amp; client visits', 'Offsites &amp; team engagement events'],
    result: 'Preferred vendor status with the CEO and onsite US team, a growing scope every year, and consistent delivery of innovative, flawless events.',
    quote: { text: 'The Family Day was a huge hit. Thank you for the energy, creativity and flawless management.', by: 'ZEST Team' },
    images: ['zest-celebration', 'zest-entrance', 'zest-performance', 'zest-beach-stage', 'zest-stage']
  },
  {
    slug: 'marriott-bonvoy-hospitality-partnership',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'Marriott Bonvoy',
    logo: 'marriott',
    title: 'Marriott Bonvoy &ndash; Strategic Hospitality Partner',
    strap: 'Six Years. Fifty-Plus Events.',
    summary: 'Leadership conferences, the PEAK Leadership Summit and C-level Marriott Bonvoy experiences, delivered PAN India across a six-year partnership.',
    hero: 'marriott-peak-summit',
    facts: [
      ['Partnership', '6+ years with Marriott'],
      ['Events', '50+ hospitality events'],
      ['Reach', 'PAN India hospitality conferences'],
      ['Scope', 'End-to-end event management']
    ],
    objective: 'Marriott International needed one partner who could bring its own standard of hospitality to its internal events, from PAN India leadership conferences and C-level experiences to employee appreciation programmes, without briefing a new agency every time.',
    approach: [
      'PEAK Leadership Summit: a two-day leadership conference with a cocktail networking evening and PAN India Marriott leadership participation.',
      'Marriott Bonvoy Experience: a PAN India C-level corporate event hosting celebrity stand-up comedian Anubhav Singh Bassi.',
      'Marriott Bonvoy PAN India leadership conferences and awards nights, planned, designed and produced end to end.',
      'Marriott Employee Appreciation Week (AAW), festival celebrations and employee engagement programmes across the calendar.'
    ],
    delivered: ['Marriott Bonvoy corporate events', 'PAN India leadership conferences &amp; awards nights', 'PEAK Leadership Summit', 'Employee Appreciation Week &amp; festival celebrations'],
    result: 'More than 50 hospitality events across six-plus years, with Shaahi Creations trusted as Marriott&rsquo;s one point of contact for event requirements.',
    quote: { text: 'Your team consistently delivers exceptional events with creativity, flawless execution and great attention to detail.', by: 'Marriott Leadership Team' },
    images: ['marriott-peak-summit', 'marriott-bonvoy-team', 'marriott-five-years', 'marriott-dance-floor']
  },
  {
    slug: 'shaadi-by-marriott',
    kicker: 'Brand Activation',
    cat: 'brand',
    client: 'Marriott International',
    logo: 'marriott',
    title: 'Shaadi by Marriott',
    strap: 'Moments That Matter.',
    summary: 'Associate event partner for a fashion and hospitality showcase featuring designer collections and celebrity presentations.',
    hero: 'shaadi-runway',
    facts: [
      ['Role', 'Associate event partner'],
      ['Format', 'Fashion &amp; hospitality showcase'],
      ['Featuring', 'Designer &amp; celebrity showcases'],
      ['Reach', 'PAN India']
    ],
    objective: 'A hospitality brand entering the wedding category needed a showcase that read as fashion, not as a hotel sales event.',
    approach: [
      'Runway production and d&eacute;cor designed to carry designer collections credibly.',
      'Fashion showcase featuring Harbhajan Singh and Geeta Basra, bridal collections by Swapnil Shinde and a designer showcase by Anju Modi.',
      'Fashion presentation featuring Aditi Rao Hydari.',
      'Guest experience and hospitality management for an audience used to being hosted well.'
    ],
    delivered: ['Associate event partner', 'Runway &amp; showcase production', 'Talent &amp; artist coordination', 'Guest experience &amp; hospitality'],
    result: 'A showcase that positioned the brand credibly in a new category, and a continuing six-year hospitality partnership.',
    quote: { text: 'Shaahi Creations is our one point of contact for any event requirement. Professional, reliable and outstanding team.', by: 'Onsite US Team, Marriott' },
    images: ['shaadi-runway', 'shaadi-showcase']
  },
  {
    slug: 'welspun-dealer-meet',
    kicker: 'Product Launch',
    cat: 'launch',
    client: 'Welspun Industries',
    logo: 'welspun',
    title: 'Welspun Flooring Dealer Meet &amp; Launch',
    strap: 'Product In The Room.',
    summary: 'Four-plus years of dealer meets, leadership conferences and product launches delivered across PAN India locations.',
    hero: 'welspun-conference',
    facts: [
      ['Partnership', '4+ years'],
      ['Events', '100+ delivered'],
      ['Locations', 'Hyderabad, Jaipur, Bangalore, Ludhiana, Chennai, Pune &amp; more'],
      ['Scope', 'End-to-end coordination']
    ],
    objective: 'A flooring business sells a product people need to see, touch and stand on. The event had to put the product in the room, not on a slide.',
    approach: [
      'Experience zones where dealers could handle the product range directly.',
      'Venue research and selection across multiple cities with one consistent standard.',
      'End-to-end coordination from venue to production, F&amp;B, entertainment and logistics.',
      'Awards and recognition built into the programme to make dealer attendance worth the trip.'
    ],
    delivered: ['Dealer meets &amp; product launches', 'Leadership &amp; business conferences', 'Awards &amp; recognition', 'Annual meets, town halls &amp; client interactions'],
    result: 'More than 100 events across multiple locations in four-plus years, with end-to-end coordination trusted across the calendar.',
    quote: null,
    images: ['welspun-conference', 'welspun-booth', 'welspun-product-display', 'welspun-team']
  },
  {
    slug: 'nvidia-annual-employee-event',
    kicker: 'Annual Day',
    cat: 'annual',
    client: 'NVIDIA',
    logo: 'nvidia',
    title: 'NVIDIA Annual Employee Event',
    strap: 'Celebrating People and Their Work.',
    summary: 'A 600+ employee annual day delivered end to end, from venue booking to artist management and production.',
    hero: 'nvidia-annual-day',
    facts: [
      ['Guests', '600+ employees'],
      ['Format', 'Annual day'],
      ['Scope', 'End-to-end event management'],
      ['Includes', 'Artist management &amp; logistics']
    ],
    objective: 'An annual day for a technology organisation whose employees see world-class production every day at work. The bar for what feels impressive is already high.',
    approach: [
      'Venue selection driven by production capability, not only capacity.',
      'Entertainment and artist management curated to the audience rather than to a standard package.',
      'Full logistics ownership so internal teams could attend their own event.',
      'Production and staging designed for a room that reads scale instantly.'
    ],
    delivered: ['600+ employee annual day', 'End-to-end event management', 'Venue booking', 'Artist management, logistics, entertainment &amp; production'],
    result: 'A flagship internal celebration delivered without escalation, and a template the organisation has returned to.',
    quote: null,
    images: ['nvidia-annual-day']
  },
  {
    slug: 'who-virtual-conference',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'World Health Organization',
    logo: '',
    title: 'WHO Global Virtual Conference',
    strap: 'Knowledge. Collaboration. Reach.',
    summary: 'A multi-location virtual conference for 1000+ international delegates and stakeholders.',
    hero: 'who-virtual-conference',
    facts: [
      ['Participants', '1000+'],
      ['Locations', 'Multi-location'],
      ['Format', 'Virtual conference (VC)'],
      ['Scope', 'Production &amp; delegate management']
    ],
    objective: 'A global health conference where delegates joined from multiple countries and time zones. The production had to be invisible, and the registration experience had to be effortless.',
    approach: [
      'Leadership conference production and branding built for a virtual-first audience.',
      'Registration and delegates management for 1000+ international participants.',
      'Broadcast-grade production so remote delegates experienced a single, coherent event.',
      'Onsite coordination at the host location running in parallel with the virtual room.'
    ],
    delivered: ['1000+ participants across international delegates &amp; stakeholders', 'Leadership conference production &amp; branding &ndash; VC', 'Registration &amp; delegates management', 'Production and onsite coordination'],
    result: 'A virtual conference that held a thousand-plus international delegates across locations without the format getting in the way of the content.',
    quote: null,
    images: ['who-virtual-conference']
  },
  {
    slug: 'turkish-cargo-sales-conference',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'Turkish Cargo',
    logo: '',
    title: 'Turkish Cargo Sales Conference',
    strap: 'Ten Years In Hyderabad.',
    summary: 'A 600+ attendee sales conference at Trident, Hyderabad, bringing together the PAN India leadership and sales team.',
    hero: 'turkish-cargo-sales-conference',
    facts: [
      ['Attendees', '600+'],
      ['Venue', 'Trident, Hyderabad'],
      ['Audience', 'PAN India leadership &amp; sales team'],
      ['Scope', 'Production, branding &amp; logistics']
    ],
    objective: 'A sales conference for Turkish Cargo&rsquo;s PAN India leadership and sales team, staged as a Hyderabad 10th anniversary special event. It had to mark a milestone for the brand and still work as a business meeting for 600+ attendees.',
    approach: [
      'High-impact conference production built around a branded anniversary stage.',
      'Brand identity carried through the stage, backdrops and venue at Trident, Hyderabad.',
      'Guest experience and logistics for a leadership and sales team arriving from across India.',
      'Entertainment and engagement programmed alongside the business sessions.'
    ],
    delivered: ['PAN India leadership &amp; sales conference', 'High-impact conference production', 'Branding, guest experience &amp; logistics', 'Entertainment &amp; engagement'],
    result: 'A 600+ attendee conference that gave the anniversary the presence of a brand milestone while keeping the focus of a sales meeting.',
    quote: null,
    images: ['turkish-cargo-sales-conference']
  },
  {
    slug: 'government-diplomatic-event',
    kicker: 'Others',
    cat: 'other',
    client: 'Government of India',
    logo: '',
    title: 'Government &amp; Diplomatic Event',
    strap: 'Protocol, Precisely.',
    summary: 'Event and artist management partner for an international Government of India programme hosted under the National Security Council Secretariat, Hyderabad.',
    hero: 'government-of-india-event',
    facts: [
      ['Client', 'PMO Events, Government of India'],
      ['Hosted under', 'National Security Council Secretariat'],
      ['Location', 'Hyderabad'],
      ['Scope', 'Event &amp; artist management']
    ],
    objective: 'A diplomatic programme where protocol is not a preference. Every element had to be cleared, timed and confidential.',
    approach: [
      'Cultural entertainment curated to represent India credibly to an international audience.',
      'Artist management and VIP hospitality within protocol constraints.',
      'Coordination with government stakeholders across approvals and timelines.',
      'Confidential event operations throughout planning and delivery.'
    ],
    delivered: ['Cultural entertainment curation', 'Artist management', 'VIP hospitality management', 'Protocol-compliant execution &amp; confidential operations'],
    result: 'A protocol-compliant programme delivered for an international audience under government stakeholder coordination.',
    quote: null,
    images: ['government-of-india-event']
  },
  {
    slug: 'anbai-annual-event-yashoda',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'ANBAI',
    logo: '',
    title: 'ANBAI Annual Event &ndash; Yashoda',
    strap: 'A VIP Evening For Healthcare Leaders.',
    summary: 'An 800+ guest VIP event at Marriott Convention Centre, Hyderabad, with former Vice President of India Venkaiah Naidu as chief guest.',
    hero: 'anbai-annual-event',
    facts: [
      ['Venue', 'Marriott Convention Centre, Hyderabad'],
      ['Chief guest', 'Venkaiah Naidu, former Vice President of India'],
      ['Guests', '800+ | VIP event'],
      ['Participants', 'MDs &amp; CEOs of leading hospitals']
    ],
    objective: 'An annual event organised by ANBAI for MDs and CEOs from leading hospitals across Hyderabad, with a former Vice President of India as chief guest. With 800+ guests and a VIP on stage, protocol and guest coordination mattered as much as the production.',
    approach: [
      'End-to-end event management, from venue coordination at Marriott Convention Centre to on-ground execution.',
      'Stage production and event branding for the programme.',
      'Protocol management around the chief guest&rsquo;s arrival, time on stage and departure.',
      'Hospitality and guest coordination for 800+ guests, including senior healthcare leadership.'
    ],
    delivered: ['End-to-end event management', 'Production', 'Hospitality &amp; guest coordination', 'Protocol management'],
    result: 'A VIP event delivered to protocol for 800+ guests, with healthcare leadership from across Hyderabad in the room.',
    quote: null,
    images: ['anbai-annual-event']
  },
  {
    slug: 'bel-leadership-conference',
    kicker: 'Conference &amp; Meeting',
    cat: 'conf',
    client: 'Bharat Electronics Limited',
    logo: '',
    title: 'BEL Leadership Conference',
    strap: 'Sessions, Knowledge And Culture.',
    summary: 'A two-day leadership conference for 500+ participants from Bharat Electronics, combining leadership sessions, knowledge sharing and cultural activities.',
    hero: 'bel-leadership-conference',
    facts: [
      ['Duration', '2 days'],
      ['Guests', '500+ participants'],
      ['Event type', 'Leadership conference'],
      ['Scope', 'End-to-end event management']
    ],
    objective: 'A two-day leadership conference for 500+ participants that had to balance serious content with time to connect: leadership sessions and knowledge sharing, with cultural activities alongside.',
    approach: [
      'End-to-end event management across both days of the conference.',
      'Stage production for leadership sessions and knowledge-sharing formats.',
      'Hospitality and logistics for 500+ participants.',
      'Cultural entertainment built into the agenda, including classical dance performances.'
    ],
    delivered: ['End-to-end event management', 'Stage production', 'Hospitality &amp; logistics', 'Cultural entertainment'],
    result: 'Two days of leadership sessions, knowledge sharing and cultural programming delivered for 500+ participants.',
    quote: null,
    images: ['bel-leadership-conference']
  },
  {
    slug: 'gm-switches-brand-launch',
    kicker: 'Product Launch',
    cat: 'launch',
    client: 'GM Switches',
    logo: 'gm',
    title: 'GM Switches Brand Launch',
    strap: 'Switch To A Better World.',
    summary: 'A celebrity-led brand launch at Marriott Convention Centre, Hyderabad, produced end to end.',
    hero: 'gm-switches-launch',
    facts: [
      ['Venue', 'Marriott Convention Centre, Hyderabad'],
      ['Celebrity', 'Sunil Shetty'],
      ['Event type', 'Brand launch'],
      ['Scope', 'End-to-end event management']
    ],
    objective: 'A brand launch anchored by a celebrity appearance needed the production to match the name on the poster.',
    approach: [
      'Stage design and technical production scaled to the convention centre without losing the brand.',
      'Entertainment and artist coordination, including celebrity movement and press interaction.',
      'F&amp;B management for a full-house launch audience.',
      'Event production run as a single timeline from doors to close.'
    ],
    delivered: ['Event production', 'F&amp;B management', 'Entertainment &amp; artist coordination', 'Stage design &amp; technical production'],
    result: 'A launch that used its celebrity moment as the centrepiece of a well-produced evening rather than as a substitute for one.',
    quote: null,
    images: ['gm-switches-launch']
  },
  {
    slug: 'tiger-palace-resort-dealer-meet',
    kicker: 'Dealer Meet',
    cat: 'launch',
    client: 'Tiger Palace Resort, Kathmandu',
    logo: '',
    title: 'Tiger Palace Resort Dealer Meet',
    strap: 'A Night With The Tiger.',
    summary: 'An 800+ guest dealer meet for HNI dealers from Hyderabad, with Bollywood actress Elnaaz Norouzi, at Marriott Convention Centre.',
    hero: 'tiger-palace-dealer-meet',
    facts: [
      ['Venue', 'Marriott Convention Centre, Hyderabad'],
      ['Celebrity', 'Elnaaz Norouzi'],
      ['Guests', '800+ HNI dealers'],
      ['Scope', 'End-to-end event coordination']
    ],
    objective: 'Tiger Palace Resort, Kathmandu, hosted 800+ HNI dealers from Hyderabad. The evening had to carry the resort&rsquo;s brand into a city ballroom and give a high-value audience a reason to stay for the whole night.',
    approach: [
      'A themed stage and LED content built around &ldquo;A Night With The Tiger&rdquo;.',
      'Artist management for Bollywood actress Elnaaz Norouzi.',
      'Venue management, production and hospitality at Marriott Convention Centre, Hyderabad.',
      'Logistics and entertainment coordinated end to end for 800+ guests.'
    ],
    delivered: ['End-to-end event coordination', 'Venue management &amp; production', 'Hospitality &amp; logistics', 'Entertainment &amp; artist management'],
    result: 'A branded dealer evening for 800+ HNI dealers, delivered end to end from venue to entertainment.',
    quote: null,
    images: ['tiger-palace-dealer-meet']
  },
  {
    slug: 'porsche-911-drive-launch',
    kicker: 'Product Launch',
    cat: 'launch',
    client: 'Porsche',
    logo: 'porsche',
    title: 'Porsche 911 Drive Launch',
    strap: 'A Bold Debut on a Grand Scale.',
    summary: 'An end-to-end launch experience creating high impact, brand visibility and audience engagement.',
    hero: 'g20',
    facts: [
      ['Category', 'Automobile'],
      ['Guests', '500+'],
      ['Format', 'Drive experience &amp; reveal'],
      ['Scope', 'End-to-end launch']
    ],
    objective: 'A product launch has one moment that matters. Everything before it exists to build anticipation, and everything after it exists to hold attention.',
    approach: [
      'A reveal sequence choreographed against lighting, sound and content rather than announced over a microphone.',
      'A drive experience that let guests engage with the product instead of only viewing it.',
      'Stage design and technical production built around sightlines from every seat in the room.',
      'Guest hospitality and flow management so the room filled and cleared without friction.'
    ],
    delivered: ['Event production', 'Stage design &amp; technical production', 'Entertainment &amp; artist coordination', 'F&amp;B and guest experience'],
    result: 'A launch that landed the reveal cleanly and gave the brand a high-visibility moment with the audience that mattered most.',
    quote: null,
    images: ['g20', 'g13']
  },
  {
    slug: 'leadership-retreat-rishikesh',
    kicker: 'Team Engagement',
    cat: 'team',
    client: 'Global Consulting Firm',
    logo: '',
    title: 'Leadership Retreat &ndash; Rishikesh',
    strap: 'Perspective Beyond the Office.',
    summary: 'A two-day leadership offsite designed to refresh perspectives, strengthen relationships and build a stronger, more connected team.',
    hero: 'g39',
    facts: [
      ['Location', 'Rishikesh, Uttarakhand'],
      ['Guests', '100+'],
      ['Duration', '2 days'],
      ['Scope', 'Destination management']
    ],
    objective: 'A leadership team that spends its year in meeting rooms needed two days that did not feel like another meeting room.',
    approach: [
      'A location chosen for what it does to a conversation, not for its conference facilities.',
      'Sessions structured around the outdoors, with content designed for smaller circles.',
      'Travel, stay and hospitality handled end to end so no delegate managed their own logistics.',
      'Local partnerships on the ground to keep the experience seamless.'
    ],
    delivered: ['Two-day leadership offsite', 'Venue &amp; destination management', 'Travel, stay &amp; hospitality', 'Experience design &amp; facilitation support'],
    result: 'A retreat that leadership asked to repeat, with conversations that continued well after the group returned.',
    quote: null,
    images: ['g39', 'g40', 'g11']
  }
];

/* --- Destinations: tier-one cities --------------------------------------- */
const cities = [
  { photo: 'hyderabad', venues: 'hyderabad', name: 'Hyderabad', note: 'Head office &amp; home base', hue: 'hyderabad' },
  { photo: 'mumbai', venues: 'mumbai', name: 'Mumbai', note: 'Client meetings &amp; production', hue: 'mumbai' },
  { photo: 'delhi', venues: 'delhi', name: 'Delhi NCR', note: 'Conferences &amp; launches', hue: 'delhi' },
  { photo: 'bengaluru', venues: 'bengaluru', name: 'Bangalore', note: 'GCC &amp; technology events', hue: 'bangalore' },
  { photo: 'pune', venues: 'pune', name: 'Pune', note: 'Office &amp; on-ground team', hue: 'pune' },
  { photo: 'kolkata', name: 'Kolkata', note: 'Conferences &amp; celebrations', hue: 'kolkata' },
  { photo: 'chennai', venues: 'chennai', name: 'Chennai', note: 'Dealer meets &amp; conferences', hue: 'chennai' },
  { photo: 'jaipur', venues: 'jaipur', name: 'Jaipur', note: 'Heritage &amp; destination events', hue: 'jaipur' },
  { photo: 'indore', name: 'Indore', note: 'Regional conferences', hue: 'indore' },
  { photo: 'ahmedabad', name: 'Others', note: 'Ahmedabad, Chandigarh, Ludhiana &amp; more', hue: 'chandigarh' }
];

/* --- Destinations: signature and offbeat --------------------------------- */
const destinations = [
  { photo: 'goa', venues: 'goa', name: 'Goa', tag: 'Sun. Sand. Celebrations.', hue: 'goa', kind: 'Signature', text: 'Beach resorts and villa properties built for offsites, partner connects and celebrations that run into the evening.' },
  { photo: 'udaipur', venues: 'udaipur', name: 'Rajasthan', tag: 'Royal &amp; Timeless', hue: 'udaipur', kind: 'Signature', text: 'Palace venues and heritage havelis in Udaipur and Jaipur for leadership offsites and milestone celebrations.' },
  { photo: 'rishikesh', venues: 'rishikesh', name: 'Uttarakhand', tag: 'Nature &amp; Wellness', hue: 'rishikesh', kind: 'Signature', text: 'Riverside camps and wellness retreats around Rishikesh and Dehradun for programmes that need a change of altitude.' },
  { photo: 'lonavala', name: 'Maharashtra', tag: 'Hills &amp; Getaways', hue: 'pune', kind: 'Signature', text: 'Lonavala, Mahabaleshwar and Alibaug properties within easy reach of Mumbai and Pune for short offsites.' },
  { photo: 'kochi', venues: 'kochi', name: 'South India', tag: 'Heritage &amp; Serenity', hue: 'kerala', kind: 'Signature', text: 'Backwaters, plantations and heritage venues across Kerala, Karnataka and Tamil Nadu for incentive and reward travel.' },
  { photo: 'coorg', name: 'Coorg', tag: 'Coffee Country', hue: 'coorg', kind: 'Offbeat', text: 'Plantation stays and estate venues in Karnataka for small, high-trust leadership groups.' },
  { photo: 'dehradun', name: 'Dehradun', tag: 'Foothills &amp; Focus', hue: 'dehradun', kind: 'Offbeat', text: 'Doon Valley properties within easy reach of Delhi NCR, well suited to two-day offsites.' },
  { photo: 'corbett', name: 'Jim Corbett', tag: 'Wild &amp; Unplugged', hue: 'corbett', kind: 'Offbeat', text: 'Forest lodges and riverside resorts for engagement programmes that trade screens for the outdoors.' },
  { photo: 'kabini', name: 'Kabini', tag: 'River &amp; Wilderness', hue: 'kabini', kind: 'Offbeat', text: 'Backwater and wildlife properties in South India for intimate leadership retreats.' },
  { photo: 'kathmandu', name: 'Kathmandu', tag: 'Across The Border', hue: 'kathmandu', kind: 'Offbeat', text: 'International dealer meets and incentive programmes, including dealer programmes for Tiger Palace Resort.' }
];

/* --- Destinations: place photography -------------------------------- */
/* Client-supplied royalty-free photographs, resized into
   assets/img/places/<key>.webp (1600w) and <key>-sm.webp (640w). No
   attribution required - own/licensed images, not Wikimedia Commons. */
const placePhotos = {
  hyderabad: { w: 1600, h: 1676, alt: 'The Charminar, Hyderabad' },
  bengaluru: { w: 1600, h: 1280, alt: 'The domes of Vidhana Soudha, Bengaluru' },
  mumbai: { w: 1600, h: 1067, alt: 'The Taj Mahal Palace hotel, Mumbai' },
  delhi: { w: 1600, h: 1795, alt: 'Safdarjung&rsquo;s Tomb, Delhi' },
  chennai: { w: 1600, h: 1687, alt: 'The Ripon Building, Greater Chennai Corporation, Chennai' },
  pune: { w: 1600, h: 1147, alt: 'A modern business park in Pune' },
  goa: { w: 1600, h: 1200, alt: 'A palm-lined coastline in Goa' },
  jaipur: { w: 1600, h: 1067, alt: 'Hawa Mahal, Jaipur' },
  udaipur: { w: 1600, h: 1204, alt: 'The City Palace gate, Udaipur' },
  kochi: { w: 1600, h: 901, alt: 'Chinese fishing nets at Kochi' },
  visakhapatnam: { w: 1600, h: 1200, alt: 'The Visakhapatnam coastline from Kailasagiri' },
  rishikesh: { w: 1600, h: 1067, alt: 'Temples along the Ganges at Rishikesh' },
  kolkata: { w: 1600, h: 1067, alt: 'Victoria Memorial, Kolkata' },
  indore: { w: 1600, h: 1200, alt: 'A heritage clock tower in Indore' },
  ahmedabad: { w: 1600, h: 1806, alt: 'Atal Pedestrian Bridge over the Sabarmati, Ahmedabad' },
  lonavala: { w: 1600, h: 1067, alt: 'The Mumbai&ndash;Pune Expressway through the Western Ghats near Lonavala' },
  coorg: { w: 1600, h: 1067, alt: 'A plantation homestay in the forests of Coorg' },
  dehradun: { w: 1600, h: 1067, alt: 'A misty river valley in the hills near Dehradun' },
  corbett: { w: 1600, h: 1067, alt: 'A safari jeep on a forest trail in Jim Corbett National Park' },
  kabini: { w: 1600, h: 1067, alt: 'A safari boat on the Kabini backwaters' },
  kathmandu: { w: 1600, h: 1067, alt: 'Kathmandu Durbar Square, Nepal' }
};

/* --- Destinations: venue partners by city ------------------------------ */
/* From the Shaahi hotels spreadsheet, checked against each venue's official
   website in September 2026: links point to the property page, facts come from
   that site, and venues that are not operating or were listed twice are left
   out. Instagram is kept only where the account belongs to the property. */
const venueCities = [
  {
    key: 'hyderabad', name: 'Hyderabad', photo: 'hyderabad',
    tag: 'Palaces, lakeside convention hotels and HITEC City',
    venues: [
      { rank: 1, name: 'Taj Falaknuma Palace', type: 'Ultra-Luxury Heritage Palace', area: 'Falaknuma, Hyderabad',
        desc: 'Royal palace venue ideal for destination weddings, gala dinners and VIP celebrations.',
        facts: 'The Nizam&rsquo;s palace, built in 1894 &middot; 60 rooms and suites &middot; 32-acre hilltop estate',
        events: ['Wedding', 'Gala', 'VIP'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-falaknuma-palace-hyderabad',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Falaknuma+Palace%2C+Falaknuma%2C+Hyderabad',
        insta: 'https://www.instagram.com/tajfalaknuma/' },
      { rank: 2, name: 'ITC Kohenur', type: 'Luxury Business Hotel', area: 'Madhapur, Hyderabad',
        desc: 'Waterfront luxury hotel in HITEC City with premium ballroom and MICE infrastructure.',
        facts: '274 rooms &middot; Deccan Stateroom, one of the city&rsquo;s largest pillarless halls &middot; LEED Platinum',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/itckohenur-hyderabad',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Kohenur%2C+Madhapur%2C+Hyderabad',
        insta: 'https://www.instagram.com/itckohenur/' },
      { rank: 3, name: 'Hyderabad Marriott Hotel &amp; Convention Centre', type: 'Luxury Convention Hotel', area: 'Tank Bund, Hyderabad',
        desc: 'Large-scale convention hotel overlooking Hussain Sagar with extensive indoor and outdoor event spaces.',
        facts: '46,736 sq ft of indoor and outdoor event space &middot; banquets for up to 1,400 guests',
        events: ['Conference', 'Corporate', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/hydmc-hyderabad-marriott-hotel-and-convention-centre/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hyderabad+Marriott+Hotel+%26+Convention+Centre%2C+Tank+Bund%2C+Hyderabad',
        insta: '' },
      { rank: 4, name: 'The Westin Hyderabad Mindspace', type: 'Premium Business Hotel', area: 'HITEC City, Hyderabad',
        desc: 'Large premium property in HITEC City suited to corporate conferences, launches and social events.',
        facts: '427 rooms &middot; 14 meeting rooms &middot; rooftop and lawn venues',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/hydwi-the-westin-hyderabad-mindspace/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Hyderabad+Mindspace%2C+HITEC+City%2C+Hyderabad',
        insta: '' },
      { rank: 5, name: 'Park Hyatt Hyderabad', type: 'Luxury Hotel', area: 'Banjara Hills, Hyderabad',
        desc: 'Sophisticated Banjara Hills property with premium ballroom and elegant event spaces.',
        facts: '9 event spaces across 1,595 sq m &middot; 600 sq m pillarless ballroom',
        events: ['Corporate', 'Wedding', 'Social'],
        web: 'https://www.hyatt.com/park-hyatt/en-US/hydph-park-hyatt-hyderabad',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Park+Hyatt+Hyderabad%2C+Banjara+Hills%2C+Hyderabad',
        insta: '' },
      { rank: 6, name: 'Novotel Hyderabad Convention Centre', type: 'Convention Hotel', area: 'HITEC City, Hyderabad',
        desc: 'Major MICE destination adjacent to HICC with convention facilities and landscaped event spaces.',
        facts: '287 rooms on 15 acres &middot; adjoins HICC, whose pillarless hall seats up to 6,000',
        events: ['Conference', 'MICE', 'Corporate'],
        web: 'https://www.novotelhyderabad.com/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Novotel+Hyderabad+Convention+Centre%2C+HITEC+City%2C+Hyderabad',
        insta: '' },
      { rank: 7, name: 'Taj Krishna', type: 'Luxury Heritage Hotel', area: 'Banjara Hills, Hyderabad',
        desc: 'Iconic Hyderabad luxury hotel with elegant ballrooms and landscaped settings.',
        facts: '261 rooms and suites &middot; landscaped grounds in the heart of Banjara Hills',
        events: ['Corporate', 'Wedding', 'Gala'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-krishna-hyderabad',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Krishna%2C+Banjara+Hills%2C+Hyderabad',
        insta: '' },
      { rank: 8, name: 'ITC Kakatiya', type: 'Luxury Heritage Hotel', area: 'Begumpet, Hyderabad',
        desc: 'Landmark luxury hotel with sophisticated banquet and conference spaces.',
        facts: '188 rooms and suites &middot; banquet halls &middot; 11 km from HITEC City',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/itckakatiya-hyderabad',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Kakatiya%2C+Begumpet%2C+Hyderabad',
        insta: '' }
    ]
  },
  {
    key: 'bengaluru', name: 'Bengaluru', photo: 'bengaluru',
    tag: 'Heritage gardens, ballrooms and the tech corridor',
    venues: [
      { rank: 1, name: 'The Leela Palace Bengaluru', type: 'Ultra-Luxury Palace', area: 'Bengaluru',
        desc: 'Grand palace-inspired luxury hotel with premium ballrooms and sophisticated event infrastructure.',
        facts: '357 rooms &middot; 7.5-acre palace estate with gardens and a lagoon',
        events: ['Wedding', 'Corporate', 'Gala'],
        web: 'https://www.theleela.com/the-leela-palace-bengaluru',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Palace+Bengaluru',
        insta: '' },
      { rank: 2, name: 'ITC Windsor Bengaluru', type: 'Heritage Luxury Hotel', area: 'Central Bengaluru',
        desc: 'Heritage luxury property in central Bengaluru suited to prestigious corporate and social events.',
        facts: 'English manor architecture &middot; first hotel in the world with LEED Zero Carbon certification',
        events: ['Corporate', 'Conference', 'Gala'],
        web: 'https://www.itchotels.com/in/en/itcwindsor-bengaluru',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Windsor+Bengaluru%2C+Central+Bengaluru',
        insta: '' },
      { rank: 3, name: 'Taj West End', type: 'Heritage Garden Hotel', area: 'Central Bengaluru',
        desc: 'Historic garden property spread across lush grounds with distinctive indoor and outdoor event settings.',
        facts: 'Dates back to 1887 &middot; 117 rooms and suites &middot; 20 acres of heritage gardens',
        events: ['Wedding', 'Corporate', 'Social'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-west-end-bengaluru',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+West+End%2C+Central+Bengaluru',
        insta: '' },
      { rank: 4, name: 'JW Marriott Hotel Bengaluru', type: 'Luxury Business Hotel', area: 'Central Bengaluru',
        desc: 'Premium city hotel with extensive ballroom and meeting facilities for large corporate events.',
        facts: '10 event rooms &middot; JW Lawn for up to 1,500 guests &middot; next to Cubbon Park',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/blrjw-jw-marriott-hotel-bengaluru/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=JW+Marriott+Hotel+Bengaluru%2C+Central+Bengaluru',
        insta: '' },
      { rank: 5, name: 'Bengaluru Marriott Hotel Whitefield', type: 'Business &amp; MICE Hotel', area: 'Whitefield, Bengaluru',
        desc: 'Large corporate hotel near Bengaluru&rsquo;s technology corridor with strong convention facilities.',
        facts: '12 meeting rooms &middot; Grand Ballroom for up to 800 guests',
        events: ['Conference', 'Corporate', 'Product Launch'],
        web: 'https://www.marriott.com/en-us/hotels/blrwf-bengaluru-marriott-hotel-whitefield/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Bengaluru+Marriott+Hotel+Whitefield%2C+Whitefield%2C+Bengaluru',
        insta: '' },
      { rank: 6, name: 'The Ritz-Carlton, Bangalore', type: 'Ultra-Luxury Hotel', area: 'Central Bengaluru',
        desc: 'Premium luxury property offering elegant event spaces and high-touch service.',
        facts: '21,000+ sq ft of event space &middot; pillarless ballroom and garden',
        events: ['VIP Corporate', 'Gala', 'Wedding'],
        web: 'https://www.ritzcarlton.com/en/hotels/blrrz-the-ritz-carlton-bangalore/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Ritz-Carlton%2C+Bangalore%2C+Central+Bengaluru',
        insta: '' },
      { rank: 7, name: 'Four Seasons Hotel Bengaluru', type: 'Ultra-Luxury Hotel', area: 'Embassy ONE, Bengaluru',
        desc: 'Contemporary luxury hotel with sophisticated event and meeting spaces.',
        facts: '13 venues on a single floor &middot; Grand Ballroom for up to 1,000 guests',
        events: ['Corporate', 'Conference', 'Gala'],
        web: 'https://www.fourseasons.com/bengaluru/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Four+Seasons+Hotel+Bengaluru%2C+Embassy+ONE%2C+Bengaluru',
        insta: '' }
    ]
  },
  {
    key: 'mumbai', name: 'Mumbai', photo: 'mumbai',
    tag: 'Harbour icons and BKC convention halls',
    venues: [
      { rank: 1, name: 'The Taj Mahal Palace, Mumbai', type: 'Iconic Heritage Hotel', area: 'Colaba, Mumbai',
        desc: 'India&rsquo;s iconic heritage hotel with grand event spaces and Arabian Sea views.',
        facts: 'Opened in 1903 &middot; 285 rooms and suites &middot; facing the Gateway of India',
        events: ['Gala', 'Corporate', 'Wedding'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Taj+Mahal+Palace%2C+Mumbai%2C+Colaba%2C+Mumbai',
        insta: '' },
      { rank: 2, name: 'Jio World Convention Centre', type: 'World-Class Convention Centre', area: 'BKC, Mumbai',
        desc: 'Large-scale convention and exhibition venue in BKC with advanced event infrastructure.',
        facts: 'India&rsquo;s largest convention centre &middot; 15,000 sq m of pillarless exhibition halls',
        events: ['Conference', 'Exhibition', 'Product Launch'],
        web: 'https://www.jioworldcentre.com/jio-world-convention-centre/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Jio+World+Convention+Centre%2C+BKC%2C+Mumbai',
        insta: 'https://www.instagram.com/jioworldcentre/' },
      { rank: 3, name: 'Grand Hyatt Mumbai', type: 'Luxury Business Hotel', area: 'Santacruz East, Mumbai',
        desc: 'Large luxury property with extensive meeting, banquet and MICE facilities.',
        facts: '30,000+ sq ft of event space &middot; 12 acres of gardens and lawns',
        events: ['Conference', 'Corporate', 'Wedding'],
        web: 'https://www.hyatt.com/grand-hyatt/en-US/mumgh-grand-hyatt-mumbai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Grand+Hyatt+Mumbai%2C+Santacruz+East%2C+Mumbai',
        insta: '' },
      { rank: 4, name: 'JW Marriott Mumbai Juhu', type: 'Beachfront Luxury Hotel', area: 'Juhu, Mumbai',
        desc: 'Premium beachfront hotel popular for launches, galas, weddings and entertainment events.',
        facts: 'On Juhu Beach &middot; ballrooms, lawns and private dining rooms',
        events: ['Corporate', 'Gala', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/bomjw-jw-marriott-mumbai-juhu/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=JW+Marriott+Mumbai+Juhu%2C+Juhu%2C+Mumbai',
        insta: '' },
      { rank: 5, name: 'ITC Maratha Mumbai', type: 'Heritage Luxury Hotel', area: 'Andheri East, Mumbai',
        desc: 'Mughal-inspired luxury hotel near the airport with strong MICE and banquet facilities.',
        facts: '685 sq m ballroom for up to 600 guests &middot; 3,057 sq m Royal Gardens',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/itcmaratha-mumbai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Maratha+Mumbai%2C+Andheri+East%2C+Mumbai',
        insta: '' },
      { rank: 6, name: 'The St. Regis Mumbai', type: 'Ultra-Luxury Hotel', area: 'Lower Parel, Mumbai',
        desc: 'Luxury high-rise property in Lower Parel with premium event and ballroom facilities.',
        facts: '22 venues over 60,000 sq ft &middot; receptions for up to 1,000 guests',
        events: ['VIP Corporate', 'Gala', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/bomxr-the-st-regis-mumbai/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+St.+Regis+Mumbai%2C+Lower+Parel%2C+Mumbai',
        insta: '' },
      { rank: 7, name: 'Sofitel Mumbai BKC', type: 'Premium Business Hotel', area: 'BKC, Mumbai',
        desc: 'Contemporary luxury hotel in BKC with strong corporate and conference positioning.',
        facts: '9 indoor and outdoor venues &middot; minutes from Jio World Convention Centre',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://sofitel.accor.com/en/hotels/6451.html',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Sofitel+Mumbai+BKC%2C+BKC%2C+Mumbai',
        insta: '' },
      { rank: 8, name: 'Four Seasons Hotel Mumbai', type: 'Luxury Business Hotel', area: 'Worli, Mumbai',
        desc: 'Upscale Worli hotel with premium meeting and social-event spaces.',
        facts: '202 rooms and suites &middot; two ballrooms, seven intimate venues and lawns',
        events: ['Corporate', 'Gala', 'Social'],
        web: 'https://www.fourseasons.com/mumbai/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Four+Seasons+Hotel+Mumbai%2C+Worli%2C+Mumbai',
        insta: '' }
    ]
  },
  {
    key: 'delhi', name: 'Delhi NCR', photo: 'delhi',
    tag: 'The Diplomatic Enclave, Aerocity and Gurugram',
    venues: [
      { rank: 1, name: 'Taj Palace New Delhi', type: 'Luxury Heritage Hotel', area: 'Diplomatic Enclave, New Delhi',
        desc: 'Prestige hotel with grand halls and a long-standing reputation for diplomatic, government and corporate events.',
        facts: '3,700 sq m convention centre &middot; pillarless Durbar hall &middot; six acres of gardens',
        events: ['Conference', 'Gala', 'Corporate'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-palace-new-delhi',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Palace+New+Delhi%2C+Diplomatic+Enclave%2C+New+Delhi',
        insta: '' },
      { rank: 2, name: 'The Leela Palace New Delhi', type: 'Ultra-Luxury Palace', area: 'Diplomatic Enclave, New Delhi',
        desc: 'Palace-inspired luxury hotel with grand ballrooms and premium event facilities.',
        facts: 'Modern palace hotel on Africa Avenue, Chanakyapuri &middot; rooms from 550 sq ft',
        events: ['Wedding', 'Corporate', 'Gala'],
        web: 'https://www.theleela.com/the-leela-palace-new-delhi',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Palace+New+Delhi%2C+Diplomatic+Enclave%2C+New+Delhi',
        insta: '' },
      { rank: 3, name: 'JW Marriott Hotel New Delhi Aerocity', type: 'Luxury MICE Hotel', area: 'Aerocity, New Delhi',
        desc: 'Large Aerocity property with extensive convention facilities and airport connectivity.',
        facts: '30,000+ sq ft of event space &middot; one of the city&rsquo;s largest pillarless banquet halls',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/delap-jw-marriott-hotel-new-delhi-aerocity/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=JW+Marriott+Hotel+New+Delhi+Aerocity%2C+Aerocity%2C+New+Delhi',
        insta: '' },
      { rank: 4, name: 'The Leela Ambience Gurugram', type: 'Luxury Convention Hotel', area: 'Gurugram, NCR',
        desc: 'Major NCR convention hotel with large event spaces and strong MICE capability.',
        facts: '35,000 sq ft of banqueting space &middot; 15 minutes from Delhi airport',
        events: ['Conference', 'Corporate', 'Gala'],
        web: 'https://www.theleela.com/the-leela-ambience-gurugram-hotel-residences',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Ambience+Gurugram%2C+Gurugram%2C+NCR',
        insta: '' },
      { rank: 5, name: 'ITC Maurya New Delhi', type: 'Luxury Heritage Hotel', area: 'Diplomatic Enclave, New Delhi',
        desc: 'Prestigious hotel known for grand ballrooms, diplomatic events and corporate gatherings.',
        facts: 'Kamal Mahal, a venue for state banquets &middot; divisible into three halls',
        events: ['Corporate', 'Conference', 'Gala'],
        web: 'https://www.itchotels.com/in/en/itcmaurya-new-delhi',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Maurya+New+Delhi%2C+Diplomatic+Enclave%2C+New+Delhi',
        insta: '' },
      { rank: 6, name: 'The Oberoi New Delhi', type: 'Ultra-Luxury Hotel', area: 'Central New Delhi',
        desc: 'Luxury city hotel with elegant event spaces and premium hospitality.',
        facts: 'Seven meeting rooms and two private offices &middot; on Dr Zakir Hussain Marg',
        events: ['VIP Corporate', 'Gala', 'Wedding'],
        web: 'https://www.oberoihotels.com/hotels-in-delhi/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Oberoi+New+Delhi%2C+Central+New+Delhi',
        insta: '' },
      { rank: 7, name: 'Hyatt Regency Delhi', type: 'Landmark Business Hotel', area: 'Bhikaji Cama Place, New Delhi',
        desc: 'Established luxury business hotel with large ballroom and conference infrastructure.',
        facts: '32,050 sq ft of event space &middot; pillarless Regency Ballroom',
        events: ['Corporate', 'Conference', 'Gala'],
        web: 'https://www.hyatt.com/hyatt-regency/en-US/delrd-hyatt-regency-delhi',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hyatt+Regency+Delhi%2C+Bhikaji+Cama+Place%2C+New+Delhi',
        insta: '' },
      { rank: 8, name: 'Pullman New Delhi Aerocity', type: 'Premium Business Hotel', area: 'Aerocity, New Delhi',
        desc: 'Modern Aerocity hotel with large convention centre and extensive meeting facilities.',
        facts: '40,000+ sq ft of convention space &middot; Peacock Ballroom &middot; 3 km from IGI Airport',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://pullman.accor.com/en/hotels/new-delhi/7559.html',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Pullman+New+Delhi+Aerocity%2C+Aerocity%2C+New+Delhi',
        insta: '' }
    ]
  },
  {
    key: 'chennai', name: 'Chennai', photo: 'chennai',
    tag: 'Convention hotels from Guindy to the seafront',
    venues: [
      { rank: 1, name: 'ITC Grand Chola', type: 'Luxury Convention Hotel', area: 'Guindy, Chennai',
        desc: 'Landmark luxury hotel with extensive convention space and major event infrastructure.',
        facts: 'Rajendra, Chennai&rsquo;s largest banquet hall, seats up to 3,000 &middot; 4,200 sq m of event space',
        events: ['Conference', 'Corporate', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/itcgrandchola-chennai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Grand+Chola%2C+Guindy%2C+Chennai',
        insta: '' },
      { rank: 2, name: 'Taj Coromandel', type: 'Heritage Luxury Hotel', area: 'Nungambakkam, Chennai',
        desc: 'Iconic Chennai luxury hotel with premium banquet and business-event facilities.',
        facts: 'One of Chennai&rsquo;s first luxury hotels &middot; central Nungambakkam',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-coromandel-chennai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Coromandel%2C+Nungambakkam%2C+Chennai',
        insta: '' },
      { rank: 3, name: 'The Leela Palace Chennai', type: 'Palace Luxury Hotel', area: 'MRC Nagar, Chennai',
        desc: 'Palace-inspired waterfront luxury property with premium event spaces.',
        facts: 'Sea-facing, on 4.8 acres &middot; Grand Ballroom for up to 1,000 guests',
        events: ['Wedding', 'Corporate', 'Gala'],
        web: 'https://www.theleela.com/the-leela-palace-chennai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Palace+Chennai%2C+MRC+Nagar%2C+Chennai',
        insta: '' },
      { rank: 4, name: 'The Westin Chennai Velachery', type: 'Premium Business Hotel', area: 'Velachery, Chennai',
        desc: 'Modern IT-corridor hotel with full MICE facilities and corporate-event positioning.',
        facts: '13 event rooms across 12,991 sq ft &middot; up to 500 attendees',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/maavw-the-westin-chennai-velachery/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Chennai+Velachery%2C+Velachery%2C+Chennai',
        insta: '' },
      { rank: 5, name: 'Park Hyatt Chennai', type: 'Luxury Hotel', area: 'Guindy, Chennai',
        desc: 'Sophisticated property near Guindy with premium meeting and social-event facilities.',
        facts: '954 sq m of event space &middot; residential-style Apartment venue &middot; beside Guindy National Park',
        events: ['Corporate', 'Conference', 'Social'],
        web: 'https://www.hyatt.com/park-hyatt/en-US/cheph-park-hyatt-chennai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Park+Hyatt+Chennai%2C+Guindy%2C+Chennai',
        insta: '' },
      { rank: 6, name: 'Taj Club House', type: 'Premium Business Hotel', area: 'Chennai',
        desc: 'Centrally located luxury business hotel suited to meetings, conferences and social functions.',
        facts: '220 rooms including 16 suites &middot; 1 km from LIC Metro on Mount Road',
        events: ['Corporate', 'Conference', 'Social'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-club-house-chennai',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Club+House%2C+Chennai',
        insta: '' },
      { rank: 7, name: 'Radisson Blu Hotel Chennai City Centre', type: 'Business Hotel', area: 'Egmore, Chennai',
        desc: 'Central business hotel with banquet and conference facilities.',
        facts: '1,000+ sq m of meeting and banquet space &middot; central Egmore',
        events: ['Corporate', 'Conference'],
        web: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-chennai-city-centre',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Radisson+Blu+Hotel+Chennai+City+Centre%2C+Egmore%2C+Chennai',
        insta: '' },
      { rank: 8, name: 'Hilton Chennai', type: 'Luxury Business Hotel', area: 'Guindy, Chennai',
        desc: 'Premium business hotel with modern meeting spaces and strong corporate connectivity.',
        facts: '202 rooms &middot; 7 meeting rooms &middot; on J.N. Salai, Guindy',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://www.hilton.com/en/hotels/maahihi-hilton-chennai/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hilton+Chennai%2C+Guindy%2C+Chennai',
        insta: '' }
    ]
  },
  {
    key: 'pune', name: 'Pune', photo: 'pune',
    tag: 'Pillarless ballrooms and lawns around Koregaon Park',
    venues: [
      { rank: 1, name: 'JW Marriott Hotel Pune', type: 'Luxury Convention Hotel', area: 'Koregaon Park, Pune',
        desc: 'Premier luxury hotel with major ballroom and convention facilities.',
        facts: '40,000 sq ft of event space &middot; 13,000 sq ft pillarless ballroom, the city&rsquo;s largest',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/pnqmc-jw-marriott-hotel-pune/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=JW+Marriott+Hotel+Pune%2C+Koregaon+Park%2C+Pune',
        insta: '' },
      { rank: 2, name: 'Conrad Pune', type: 'Luxury Business Hotel', area: 'Sangamvadi, Pune',
        desc: 'Contemporary luxury property with central location and premium event spaces.',
        facts: 'Grand Ballroom, banquet halls and wedding lawns &middot; on Mangaldas Road',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.hilton.com/en/hotels/pnqcici-conrad-pune/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Conrad+Pune%2C+Sangamvadi%2C+Pune',
        insta: '' },
      { rank: 3, name: 'The Westin Pune Koregaon Park', type: 'Luxury Lifestyle Hotel', area: 'Koregaon Park, Pune',
        desc: 'Upscale property with modern event spaces and strong corporate positioning.',
        facts: '45,000 sq ft of event space &middot; lawns for up to 3,000 guests',
        events: ['Corporate', 'Conference', 'Social'],
        web: 'https://www.marriott.com/en-us/hotels/pnqwi-the-westin-pune-koregaon-park/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Pune+Koregaon+Park%2C+Koregaon+Park%2C+Pune',
        insta: '' },
      { rank: 4, name: 'Hyatt Regency Pune', type: 'Premium Business Hotel', area: 'Viman Nagar, Pune',
        desc: 'Airport-adjacent luxury hotel with versatile meeting facilities.',
        facts: '40,000+ sq ft of meeting space &middot; two ballrooms and 14 breakout rooms',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://www.hyatt.com/hyatt-regency/en-US/punhr-hyatt-regency-pune',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hyatt+Regency+Pune%2C+Viman+Nagar%2C+Pune',
        insta: '' },
      { rank: 5, name: 'The Ritz-Carlton, Pune', type: 'Ultra-Luxury Hotel', area: 'Pune',
        desc: 'Luxury city hotel with sophisticated event spaces for premium corporate and social occasions.',
        facts: '35,000 sq ft of meeting space &middot; 7,200 sq ft ballroom &middot; outdoor Crown Deck',
        events: ['VIP Corporate', 'Gala', 'Wedding'],
        web: 'https://www.ritzcarlton.com/en/hotels/pnqrz-the-ritz-carlton-pune/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Ritz-Carlton%2C+Pune',
        insta: '' },
      { rank: 6, name: 'Sheraton Grand Pune Bund Garden Hotel', type: 'Luxury Business Hotel', area: 'Pune',
        desc: 'Established city hotel with banquet and conference facilities.',
        facts: '6 event rooms &middot; The Majestic hosts up to 1,000 guests',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/pnqmd-sheraton-grand-pune-bund-garden-hotel/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Sheraton+Grand+Pune+Bund+Garden+Hotel',
        insta: '' },
      { rank: 7, name: 'Marriott Suites Pune', type: 'All-Suite Business Hotel', area: 'Pune',
        desc: 'Premium all-suite property with meeting facilities suitable for corporate stays and events.',
        facts: 'All-suite hotel with full kitchens &middot; Koregaon Park Annex, Mundhwa',
        events: ['Corporate', 'Conference', 'Offsite'],
        web: 'https://www.marriott.com/en-us/hotels/pnqms-marriott-suites-pune/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Marriott+Suites+Pune',
        insta: '' }
    ]
  },
  {
    key: 'goa', name: 'Goa', photo: 'goa',
    tag: 'Beach resorts from Vagator to Benaulim',
    venues: [
      { rank: 1, name: 'Grand Hyatt Goa', type: 'Luxury Beach Resort', area: 'Bambolim, Goa',
        desc: 'Major luxury resort with beach access, large ballroom and destination-event infrastructure.',
        facts: '3,500+ sq m of banquet space &middot; 1,150 sq m pillarless ballroom &middot; lawns on Bambolim Bay',
        events: ['MICE', 'Conference', 'Wedding'],
        web: 'https://www.hyatt.com/grand-hyatt/en-US/goagh-grand-hyatt-goa',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Grand+Hyatt+Goa%2C+Bambolim%2C+Goa',
        insta: '' },
      { rank: 2, name: 'ITC Grand Goa Resort &amp; Spa', type: 'Luxury Beach Resort', area: 'Arossim, Goa',
        desc: 'Luxury South Goa resort with lagoons, beach access and strong MICE facilities.',
        facts: '252 keys on 45 acres at Arossim Beach &middot; Seaside Lawns for up to 750 guests',
        events: ['Conference', 'MICE', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/itcgrandgoa-goa',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Grand+Goa+Resort+%26+Spa%2C+Arossim%2C+Goa',
        insta: '' },
      { rank: 3, name: 'Taj Exotica Resort &amp; Spa', type: 'Luxury Beach Resort', area: 'Benaulim, Goa',
        desc: 'Secluded luxury resort with beach setting, villas and bespoke event experiences.',
        facts: 'Mediterranean-style resort on 56 acres at Benaulim Beach &middot; villas with plunge pools',
        events: ['Wedding', 'MICE', 'Gala'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-exotica-goa',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Exotica+Resort+%26+Spa%2C+Benaulim%2C+Goa',
        insta: '' },
      { rank: 4, name: 'JW Marriott Goa', type: 'Luxury Resort', area: 'Vagator, Goa',
        desc: 'Premium resort in Vagator with contemporary event spaces for corporate retreats and destination celebrations.',
        facts: 'Nearly 19,000 sq ft of venues &middot; 4,500 sq ft ballroom &middot; 10,200 sq ft outdoor terrace',
        events: ['MICE', 'Corporate', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/goivm-jw-marriott-goa/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=JW+Marriott+Goa%2C+Vagator%2C+Goa',
        insta: '' },
      { rank: 5, name: 'The Westin Goa', type: 'Premium Resort', area: 'Anjuna, Goa',
        desc: 'Upscale resort with outdoor lawns, meeting rooms and poolside event options.',
        facts: '4,700 sq ft ballroom with its own entrance &middot; Kashti hosts up to 400 guests',
        events: ['Corporate', 'MICE', 'Team Building'],
        web: 'https://www.marriott.com/en-us/hotels/goiwi-the-westin-goa/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Goa%2C+Anjuna%2C+Goa',
        insta: '' },
      { rank: 6, name: 'Taj Fort Aguada Resort &amp; Spa', type: 'Heritage Beach Resort', area: 'Sinquerim, Goa',
        desc: 'Historic fort-side luxury resort with sea views and destination-event appeal.',
        facts: 'Goa&rsquo;s first resort, beside the 16th-century fort &middot; 143 rooms, villas and suites',
        events: ['Wedding', 'Gala', 'Retreat'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-fort-aguada-goa',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Fort+Aguada+Resort+%26+Spa%2C+Sinquerim%2C+Goa',
        insta: '' },
      { rank: 7, name: 'W Goa', type: 'Luxury Lifestyle Resort', area: 'Vagator, Goa',
        desc: 'Design-led luxury resort in Vagator with distinctive event and celebration spaces.',
        facts: '25 acres on Vagator Beach &middot; weddings for up to 300 guests &middot; Rockpool and Backyard venues',
        events: ['Corporate', 'Gala', 'Social'],
        web: 'https://www.marriott.com/en-us/hotels/goiwh-w-goa/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=W+Goa%2C+Vagator%2C+Goa',
        insta: '' }
    ]
  },
  {
    key: 'jaipur', name: 'Jaipur', photo: 'jaipur',
    tag: 'Royal palaces and grand Rajasthani ballrooms',
    venues: [
      { rank: 1, name: 'Rambagh Palace', type: 'Ultra-Luxury Heritage Palace', area: 'Jaipur',
        desc: 'Former royal residence with palace gardens and royal event settings.',
        facts: 'Former royal residence &middot; Maharaja Mahal, Sabha Niwas and Panghat Lawn venues',
        events: ['Wedding', 'Gala', 'VIP Corporate'],
        web: 'https://www.tajhotels.com/en-in/hotels/rambagh-palace-jaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Rambagh+Palace%2C+Jaipur',
        insta: '' },
      { rank: 2, name: 'Fairmont Jaipur', type: 'Contemporary Luxury Hotel', area: 'Kukas, Jaipur',
        desc: 'Grand Rajasthan-inspired hotel with ballroom and modern MICE infrastructure.',
        facts: 'Up to 90,000 sq ft of event space &middot; Grand Ballroom for up to 650 guests',
        events: ['Conference', 'Gala', 'MICE'],
        web: 'https://www.fairmont.com/en/hotels/jaipur/fairmont-jaipur.html',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Fairmont+Jaipur%2C+Kukas%2C+Jaipur',
        insta: '' },
      { rank: 3, name: 'The Leela Palace Jaipur', type: 'Luxury Palace Hotel', area: 'Jaipur',
        desc: 'Palace-inspired luxury property with premium ballrooms and destination-wedding facilities.',
        facts: '50,000+ sq ft of indoor and outdoor event space &middot; pillarless Grand Ballroom',
        events: ['Wedding', 'Corporate', 'Gala'],
        web: 'https://www.theleela.com/the-leela-palace-jaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Palace+Jaipur',
        insta: '' },
      { rank: 4, name: 'ITC Rajputana', type: 'Heritage Business Hotel', area: 'Jaipur',
        desc: 'Luxury hotel combining Rajasthani design with strong corporate and event facilities.',
        facts: 'Pillarless Suryavanshi Mahal for 450 &middot; open-air Hawa Mahal for 500',
        events: ['Corporate', 'Conference', 'Gala'],
        web: 'https://www.itchotels.com/in/en/itcrajputana-jaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Rajputana%2C+Jaipur',
        insta: '' },
      { rank: 5, name: 'The Oberoi Rajvilas', type: 'Ultra-Luxury Heritage Resort', area: 'Jaipur',
        desc: 'Exclusive heritage resort with private event settings and personalised luxury.',
        facts: 'Fort-style resort on 32 acres &middot; villas with private pools &middot; 30 minutes from the airport',
        events: ['VIP Retreat', 'MICE', 'Gala'],
        web: 'https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Oberoi+Rajvilas%2C+Jaipur',
        insta: '' },
      { rank: 6, name: 'Jai Mahal Palace', type: 'Heritage Palace Hotel', area: 'Jaipur',
        desc: 'Taj heritage palace with magnificent gardens and an authentic royal ambience.',
        facts: 'Palace dating to 1745 &middot; 18 acres of Mughal gardens &middot; Palace and Celebration Lawns',
        events: ['Wedding', 'Gala', 'Corporate'],
        web: 'https://www.tajhotels.com/en-in/hotels/jai-mahal-palace-jaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Jai+Mahal+Palace%2C+Jaipur',
        insta: '' },
      { rank: 7, name: 'Hilton Jaipur', type: 'Luxury Business Hotel', area: 'Jaipur',
        desc: 'Large luxury hotel with banquet halls and outdoor event spaces.',
        facts: '5 meeting rooms across 821 sq m &middot; pillarless ballroom and poolside venue',
        events: ['Conference', 'Corporate', 'Wedding'],
        web: 'https://www.hilton.com/en/hotels/jaighhi-hilton-jaipur/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hilton+Jaipur',
        insta: '' },
      { rank: 8, name: 'Hyatt Regency Jaipur Mansarovar', type: 'Luxury Business Hotel', area: 'Jaipur',
        desc: 'Modern luxury hotel with substantial banquet and conference facilities.',
        facts: '53,000+ sq ft of function space &middot; Regency Ballroom and two garden venues',
        events: ['Corporate', 'Conference', 'MICE'],
        web: 'https://www.hyatt.com/hyatt-regency/en-US/jairj-hyatt-regency-jaipur-mansarovar',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Hyatt+Regency+Jaipur+Mansarovar',
        insta: '' }
    ]
  },
  {
    key: 'udaipur', name: 'Udaipur', photo: 'udaipur',
    tag: 'Lake palaces and Aravalli hideaways',
    venues: [
      { rank: 1, name: 'The Leela Palace Udaipur', type: 'Ultra-Luxury Palace Resort', area: 'Lake Pichola, Udaipur',
        desc: 'Royal lakeside palace resort with panoramic Lake Pichola views and premium event venues.',
        facts: 'Palace on the shore of Lake Pichola &middot; lakefront terraces for evening events',
        events: ['Wedding', 'Gala', 'MICE'],
        web: 'https://www.theleela.com/the-leela-palace-udaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Leela+Palace+Udaipur%2C+Lake+Pichola%2C+Udaipur',
        insta: '' },
      { rank: 2, name: 'Taj Lake Palace', type: 'Heritage Palace Hotel', area: 'Lake Pichola, Udaipur',
        desc: 'Iconic island palace on Lake Pichola, ideal for exclusive destination celebrations.',
        facts: 'Island palace in Lake Pichola, built 1743&ndash;46 &middot; 65 rooms and 18 suites',
        events: ['Wedding', 'VIP Gala', 'Incentive'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-lake-palace-udaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Lake+Palace%2C+Lake+Pichola%2C+Udaipur',
        insta: '' },
      { rank: 3, name: 'The Oberoi Udaivilas', type: 'Ultra-Luxury Heritage Resort', area: 'Udaipur',
        desc: 'Exclusive heritage resort with lake views, courtyards and premium destination-event appeal.',
        facts: '30 acres of gardens on Lake Pichola, on the Maharana of Mewar&rsquo;s former hunting grounds',
        events: ['VIP Retreat', 'Wedding', 'Gala'],
        web: 'https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Oberoi+Udaivilas%2C+Udaipur',
        insta: '' },
      { rank: 4, name: 'Raffles Udaipur', type: 'Ultra-Luxury Resort', area: 'Udaipur',
        desc: 'Luxury lakeside resort offering highly exclusive destination experiences.',
        facts: 'Private island on Udai Sagar Lake &middot; 137 rooms and suites &middot; the city&rsquo;s largest hotel ballroom',
        events: ['VIP Retreat', 'Wedding', 'Gala'],
        web: 'https://www.raffles.com/udaipur/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Raffles+Udaipur',
        insta: '' },
      { rank: 5, name: 'Trident Udaipur', type: 'Luxury Heritage Hotel', area: 'Udaipur',
        desc: 'Lakeside heritage property offering strong value for destination events and MICE programs.',
        facts: '6,900 sq m of lawns for 300&ndash;800 guests &middot; banquet halls for up to 300',
        events: ['Corporate', 'MICE', 'Wedding'],
        web: 'https://www.tridenthotels.com/hotels-in-udaipur/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Trident+Udaipur',
        insta: '' },
      { rank: 6, name: 'Raas Devigarh', type: 'Boutique Palace', area: 'Delwara, Udaipur',
        desc: 'Exclusive boutique palace in the Aravalli Hills suited to intimate luxury events and buyouts.',
        facts: '18th-century hilltop palace, completed in 1760 &middot; 39 suites &middot; 45 minutes from the airport',
        events: ['VIP Retreat', 'Wedding', 'Buyout'],
        web: 'https://www.raashotels.com/devigarh/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Raas+Devigarh%2C+Delwara%2C+Udaipur',
        insta: '' },
      { rank: 7, name: 'Taj Aravali Resort &amp; Spa', type: 'Luxury Resort', area: 'Udaipur',
        desc: 'Luxury resort surrounded by Aravalli landscapes with flexible spaces for destination events.',
        facts: 'Lawns and banquet halls set against the Aravali range',
        events: ['Wedding', 'MICE', 'Retreat'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-aravali-udaipur',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Aravali+Resort+%26+Spa%2C+Udaipur',
        insta: '' },
      { rank: 8, name: 'Fateh Garh', type: 'Heritage Boutique Hotel', area: 'Udaipur',
        desc: 'Heritage property with panoramic views and intimate event possibilities.',
        facts: 'Hilltop heritage hotel with 360-degree views over the Aravalli hills and lakes',
        events: ['Intimate Gala', 'Wedding', 'Retreat'],
        web: 'https://www.fatehcollection.com/fateh-garh-udaipur-resort/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Fateh+Garh%2C+Udaipur',
        insta: '' }
    ]
  },
  {
    key: 'kochi', name: 'Kochi &amp; Kerala', photo: 'kochi',
    tag: 'Backwaters, harbour heritage and the Kovalam coast',
    venues: [
      { rank: 1, name: 'Grand Hyatt Kochi Bolgatty', type: 'Luxury Island Hotel', area: 'Bolgatty Island, Kochi',
        desc: 'Private-island luxury hotel with waterfront venues and major convention facilities.',
        facts: '264 rooms on 26 acres &middot; runs the adjoining 100,000 sq ft Lulu Bolgatty International Convention Centre',
        events: ['Conference', 'Wedding', 'MICE'],
        web: 'https://www.hyatt.com/grand-hyatt/en-US/cokgh-grand-hyatt-kochi-bolgatty',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Grand+Hyatt+Kochi+Bolgatty%2C+Bolgatty+Island%2C+Kochi',
        insta: '' },
      { rank: 2, name: 'Le Meridien Kochi', type: 'Luxury Convention Hotel', area: 'Kundannoor, Kochi',
        desc: 'Large luxury hotel with ballroom, meeting rooms and strong MICE facilities.',
        facts: '18 acres on the backwaters &middot; 12 event rooms',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://www.marriott.com/en-us/hotels/cokmd-le-meridien-kochi/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Le+Meridien+Kochi%2C+Kundannoor%2C+Kochi',
        insta: '' },
      { rank: 3, name: 'Taj Malabar Resort &amp; Spa', type: 'Heritage Colonial Hotel', area: 'Willingdon Island, Kochi',
        desc: 'Iconic harbour-facing heritage property combining classic ambience with premium hospitality.',
        facts: '82 rooms and 11 suites &middot; harbour and sea views on Willingdon Island',
        events: ['Corporate', 'Wedding', 'Gala'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-malabar-cochin',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Malabar+Resort+%26+Spa%2C+Willingdon+Island%2C+Kochi',
        insta: '' },
      { rank: 4, name: 'Kochi Marriott Hotel', type: 'Luxury Business Hotel', area: 'Edappally, Kochi',
        desc: 'Premium hotel at Lulu Mall with large banquet and meeting facilities.',
        facts: '25,000+ sq ft of venues &middot; inside Lulu Mall, Edappally',
        events: ['Conference', 'Corporate', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/cokmc-kochi-marriott-hotel/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Kochi+Marriott+Hotel%2C+Edappally%2C+Kochi',
        insta: '' },
      { rank: 5, name: 'Crowne Plaza Kochi', type: 'Premium Business Hotel', area: 'Kundannoor, Kochi',
        desc: 'Upscale waterfront business hotel with multiple event venues and MICE facilities.',
        facts: '269 rooms on the banks of Vembanad Lake &middot; Cinnamon hall and three smaller halls',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.ihg.com/crowneplaza/hotels/us/en/kochi/cokch/hoteldetail',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Crowne+Plaza+Kochi%2C+Kundannoor%2C+Kochi',
        insta: '' },
      { rank: 6, name: 'Taj Green Cove Resort &amp; Spa', type: 'Luxury Resort', area: 'Kovalam, near Thiruvananthapuram',
        desc: 'Tropical resort setting suited to retreats, celebrations and incentive programs.',
        facts: 'Hillside resort above Kovalam beach &middot; 20 minutes from Thiruvananthapuram airport',
        events: ['Retreat', 'Wedding', 'MICE'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-green-cove',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Green+Cove+Resort+%26+Spa%2C+Kovalam%2C+near+Thiruvananthapuram',
        insta: '' },
      { rank: 7, name: 'CGH Earth Brunton Boatyard', type: 'Heritage Boutique Hotel', area: 'Fort Kochi, Kochi',
        desc: 'Distinctive Dutch-era heritage property in Fort Kochi with boutique event ambience.',
        facts: 'Built on the site of a colonial shipyard &middot; sea-facing rooms on Cochin Harbour',
        events: ['Intimate Gala', 'Retreat', 'Social'],
        web: 'https://www.cghearth.com/brunton-boatyard',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=CGH+Earth+Brunton+Boatyard%2C+Fort+Kochi%2C+Kochi',
        insta: '' }
    ]
  },
  {
    key: 'visakhapatnam', name: 'Visakhapatnam', photo: 'visakhapatnam',
    tag: 'Beach Road and Rushikonda seafront hotels',
    venues: [
      { rank: 1, name: 'Novotel Visakhapatnam Varun Beach', type: 'Beachfront Luxury Hotel', area: 'Beach Road, Visakhapatnam',
        desc: 'Premier beachfront hotel with convention facilities and strong corporate-event positioning.',
        facts: 'Runs the east coast&rsquo;s largest all-sea-facing convention centre &middot; 7 meeting rooms',
        events: ['Conference', 'Corporate', 'Gala'],
        web: 'https://all.accor.com/hotel/7535/index.en.shtml',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Novotel+Visakhapatnam+Varun+Beach%2C+Beach+Road%2C+Visakhapatnam',
        insta: '' },
      { rank: 2, name: 'Gateway Visakhapatnam', type: 'Luxury Hotel', area: 'Visakhapatnam',
        desc: 'Luxury hotel with Bay of Bengal views and premium banquet facilities.',
        facts: 'Beachfront on Beach Road &middot; banquet venues, pool and spa',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.tajhotels.com/en-in/gateway/beach-road-visakhapatnam/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Gateway+Visakhapatnam',
        insta: '' },
      { rank: 3, name: 'The Park Visakhapatnam', type: 'Design Beach Hotel', area: 'Beach Road, Visakhapatnam',
        desc: 'Beachfront design hotel with distinctive ambience for corporate and social events.',
        facts: 'Boutique beach hotel &middot; landscaped lawns leading down to the sea',
        events: ['Corporate', 'Social', 'Gala'],
        web: 'https://www.theparkhotels.com/visakhapatnam/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Park+Visakhapatnam%2C+Beach+Road%2C+Visakhapatnam',
        insta: '' },
      { rank: 4, name: 'Radisson Blu Resort Visakhapatnam', type: 'Luxury Resort', area: 'Visakhapatnam',
        desc: 'Premium resort-style property suited to conferences, retreats and social functions.',
        facts: '99 rooms, suites and villas on Rushikonda Beach Road &middot; infinity pool',
        events: ['Conference', 'Corporate', 'MICE'],
        web: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-visakhapatnam',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Radisson+Blu+Resort+Visakhapatnam',
        insta: '' },
      { rank: 5, name: 'Four Points by Sheraton Visakhapatnam', type: 'Business Hotel', area: 'Visakhapatnam',
        desc: 'Modern business hotel with meeting and banquet facilities.',
        facts: 'Central location &middot; naturally lit event venues and a wedding specialist',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.marriott.com/en-us/hotels/vtzfp-four-points-visakhapatnam/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Four+Points+by+Sheraton+Visakhapatnam',
        insta: '' },
      { rank: 6, name: 'Welcomhotel by ITC Hotels, Devee Grand Bay', type: 'Luxury Business Hotel', area: 'Visakhapatnam',
        desc: 'Premium ITC hotel with city access and event facilities for corporate and social functions.',
        facts: 'Hilltop atrium hotel 100 m from the sea &middot; 16 km from the airport',
        events: ['Corporate', 'Conference', 'Wedding'],
        web: 'https://www.itchotels.com/in/en/welcomhoteldeveegrandbay-visakhapatnam',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Welcomhotel+by+ITC+Hotels%2C+Devee+Grand+Bay%2C+Visakhapatnam',
        insta: '' },
      { rank: 7, name: 'Dolphin Hotel', type: 'Business Hotel', area: 'Visakhapatnam',
        desc: 'Established city hotel with banquet and conference spaces.',
        facts: 'Indoor banquet halls and a poolside venue &middot; large halls for weddings and conferences',
        events: ['Corporate', 'Conference', 'Social'],
        web: 'https://www.dolphinhotelsvizag.com/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Dolphin+Hotel%2C+Visakhapatnam',
        insta: '' },
      { rank: 8, name: 'Fortune Inn Sree Kanya', type: 'Business Hotel', area: 'Visakhapatnam',
        desc: 'Business-focused hotel offering practical meeting and event facilities.',
        facts: '68 rooms &middot; four banquet halls and a boardroom &middot; 2.5 km from the railway station',
        events: ['Corporate', 'Conference'],
        web: 'https://www.itchotels.com/in/en/fortuneinnsreekanya-visakhapatnam',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Fortune+Inn+Sree+Kanya%2C+Visakhapatnam',
        insta: '' }
    ]
  },
  {
    key: 'rishikesh', name: 'Rishikesh', photo: 'rishikesh',
    tag: 'Riverside and Himalayan retreats',
    venues: [
      { rank: 1, name: 'The Westin Resort &amp; Spa, Himalayas', type: 'Luxury Mountain Resort', area: 'Narendranagar / Rishikesh',
        desc: 'Premium Himalayan resort designed for wellness, leadership retreats and destination events.',
        facts: '12 acres in the foothills &middot; Grand Ballroom for up to 500 &middot; two-acre lawn',
        events: ['Wellness', 'Corporate Retreat', 'Gala'],
        web: 'https://www.marriott.com/en-us/hotels/dedwi-the-westin-resort-and-spa-himalayas/overview/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Resort+%26+Spa%2C+Himalayas%2C+Narendranagar+%2F+Rishikesh',
        insta: '' },
      { rank: 2, name: 'Ananda in the Himalayas', type: 'Ultra-Luxury Wellness Resort', area: 'Narendranagar, near Rishikesh',
        desc: 'Renowned luxury wellness retreat suited to executive and leadership programs.',
        facts: 'Destination spa on a hill above Rishikesh &middot; 75 rooms &middot; personalised Ayurveda and yoga programmes',
        events: ['C-Suite Retreat', 'Wellness', 'Leadership'],
        web: 'https://www.anandaspa.com/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Ananda+in+the+Himalayas%2C+Narendranagar%2C+near+Rishikesh',
        insta: 'https://www.instagram.com/anandainthehimalayas/' },
      { rank: 3, name: 'Taj Rishikesh Resort &amp; Spa', type: 'Luxury Riverside Resort', area: 'Singthali, near Rishikesh',
        desc: 'Luxury resort overlooking the Ganges and Himalayan landscape with premium event potential.',
        facts: 'In Singthali, 30 km from Rishikesh &middot; every room faces the Ganges &middot; riverside beach for the evening aarti',
        events: ['Wedding', 'Retreat', 'MICE'],
        web: 'https://www.tajhotels.com/en-in/hotels/taj-rishikesh',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Rishikesh+Resort+%26+Spa%2C+Singthali%2C+near+Rishikesh',
        insta: '' },
      { rank: 4, name: 'Vana Wellness Retreat', type: 'Premium Wellness Retreat', area: 'Dehradun, near Rishikesh',
        desc: 'Exclusive wellness destination suited to mindful leadership and executive programs.',
        facts: '',
        events: ['Wellness', 'Leadership Retreat', 'Offsite'],
        web: 'https://www.vanaretreats.com/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Vana+Wellness+Retreat%2C+Dehradun%2C+near+Rishikesh',
        insta: '' },
      { rank: 5, name: 'Aloha on the Ganges', type: 'Riverside Resort', area: 'Rishikesh',
        desc: 'Riverside resort with Ganga views suited to corporate retreats and social events.',
        facts: 'On the Ganges at Tapovan, close to Lakshman Jhula &middot; banquet hall and two lawns',
        events: ['Corporate Retreat', 'Wedding', 'Social'],
        web: 'https://www.alohaontheganges.com/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Aloha+on+the+Ganges%2C+Rishikesh',
        insta: '' },
      { rank: 6, name: 'The Roseate Ganges', type: 'Luxury Riverside Retreat', area: 'Rishikesh',
        desc: 'Exclusive river-front retreat surrounded by mountains, suited to wellness and leadership programs.',
        facts: '17 villas overlooking the Ganges and forest &middot; Aheli Spa',
        events: ['Wellness', 'Corporate Retreat', 'Gala'],
        web: 'https://www.roseatehotels.com/rishikesh/theroseateganges/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Roseate+Ganges%2C+Rishikesh',
        insta: '' },
      { rank: 7, name: 'Camp Aquaterra', type: 'Adventure Luxury Camp', area: 'Devprayag Road, near Rishikesh',
        desc: 'Premium riverside adventure camp ideal for team building, rafting and outdoor corporate programs.',
        facts: 'Forest tented camp 30 km upstream of Rishikesh &middot; rafting on the Ganga',
        events: ['Team Building', 'Offsite', 'Adventure'],
        web: 'https://aquaterra.in/camp-aquaterra/',
        map: 'https://www.google.com/maps/search/?api=1&amp;query=Camp+Aquaterra%2C+Devprayag+Road%2C+near+Rishikesh',
        insta: '' }
    ]
  }
];

/* --- Blog posts (Our Work, tab 3) ---------------------------------------- */
const posts = [
  {
    slug: 'brief-that-makes-a-better-event',
    title: 'The Brief That Makes a Better Event',
    excerpt: 'Most event briefs describe a format. The good ones describe an outcome. Here is the difference, and the six questions worth answering before you send one.',
    date: '2026-08-18',
    readTime: '6 min read',
    cat: 'Planning',
    img: 'g09',
    body: [
      ['p', 'Most event briefs we receive start with a format: an annual day for 800 people, a two-day conference, a product launch in March. That is useful information, but it is a specification, not a brief. It tells us what to build without telling us what it is for.'],
      ['h2', 'A format is not an objective'],
      ['p', 'A brief that opens with "annual day, 800 pax, February" gives an event partner nowhere to add value. Every response you get back will look the same, because the only variable left is price. A brief that opens with "our teams merged last year and still behave like two companies" changes everything downstream: the room layout, the seating plan, the programme, even who speaks and for how long.'],
      ['h2', 'Six questions worth answering first'],
      ['list', [
        'What do you want people to do differently the week after the event?',
        'Who is in the room, and what do they already believe about this topic?',
        'What went wrong last time, and what did people actually complain about?',
        'What is genuinely fixed: the date, the budget, the venue, the guest list?',
        'Who signs off, and what will they be judged on?',
        'What would make this a failure even if everything ran on time?'
      ]],
      ['p', 'That last question is the most useful one on the list. An event can run perfectly to schedule and still miss, and the people commissioning it usually know exactly how. Writing it down early is the cheapest risk management available.'],
      ['h2', 'Budget belongs in the brief'],
      ['p', 'Leaving the budget out does not get you better pricing. It gets you proposals designed for a number someone guessed. Sharing a range, even a wide one, lets a partner spend it where it will be noticed and save it where it will not. Production, food and travel are the three lines where the difference between adequate and memorable is most visible.'],
      ['h2', 'Say what you have already decided'],
      ['p', 'If the venue is booked, say so. If leadership has already agreed on a theme, say so. Briefs that present settled decisions as open questions waste a round of proposals and often produce a worse result, because the partner optimises for the wrong variables.'],
      ['p', 'The best briefs we work from are usually a page long. They describe a problem, name the audience, state the constraints honestly and leave the format open. That page tends to produce a better event than a ten-page specification.']
    ]
  },
  {
    slug: 'annual-day-that-people-remember',
    title: 'What Makes an Annual Day People Actually Remember',
    excerpt: 'Scale is the easy part. The events that stay with people usually get four smaller things right, and none of them are on the stage.',
    date: '2026-07-29',
    readTime: '7 min read',
    cat: 'Annual Days',
    img: 'g33',
    body: [
      ['p', 'We have delivered annual days for audiences from 300 to 4000. The size of the room is rarely what people talk about afterwards. What they remember is whether they felt part of it.'],
      ['h2', 'The first fifteen minutes decide the night'],
      ['p', 'Registration queues, unclear seating and a slow start set a tone that is very hard to recover from. If the first fifteen minutes feel disorganised, the audience spends the rest of the evening waiting for the next thing to go wrong. Invest disproportionately here: more registration counters than you think you need, clear wayfinding, and something to look at or do while people arrive.'],
      ['h2', 'Put employees on the stage'],
      ['p', 'A professionally produced act is entertainment. Colleagues performing is an event. The room reacts differently to someone they sit near every day. The practical implication is that rehearsal time and technical support for internal performers is not a nice-to-have, it is where the emotional peak of the evening comes from.'],
      ['h2', 'Recognition needs to be specific'],
      ['p', 'Awards segments lose the room when they run long and say little. Naming what someone actually did, in one sentence, holds attention far better than a list of categories. Keep the citations short, keep the walk-ups tight, and put the recognition segment before the audience gets hungry rather than after.'],
      ['h2', 'Food and exits are part of the experience'],
      ['p', 'Two things reliably undo a good evening: a dinner service that cannot handle the room, and a car park that cannot clear it. Both are logistics problems that get planned last and remembered first. Count service points against headcount properly, and plan the exit as carefully as the entry.'],
      ['h2', 'What we plan around'],
      ['list', [
        'Arrival experience sized for the peak, not the average',
        'Internal performers given real rehearsal and technical time',
        'A recognition segment that is specific and tightly run',
        'Food service points calculated against actual headcount',
        'A managed exit, including transport and car park flow'
      ]],
      ['p', 'None of these are creative decisions. They are the ones that determine whether the creative work is experienced at all.']
    ]
  },
  {
    slug: 'planning-a-destination-offsite-in-india',
    title: 'Planning a Destination Offsite in India: A Practical Checklist',
    excerpt: 'Destination offsites fail on logistics far more often than on location. Here is what to lock before you fall in love with a property.',
    date: '2026-07-11',
    readTime: '8 min read',
    cat: 'Destinations',
    img: 'g40',
    body: [
      ['p', 'A destination offsite is two projects running at once: an event, and a travel operation. Teams that treat it as one project usually discover the second one late.'],
      ['h2', 'Start with travel time, not the property'],
      ['p', 'The right question is not which resort is best, but how long your group will be in transit. A property four hours from the nearest airport takes a full day out of a two-day offsite on each side. For groups arriving from multiple cities, the constraint is usually the last flight in and the first flight out, not the venue itself.'],
      ['h2', 'Check the connectivity honestly'],
      ['p', 'Many of the most attractive offbeat properties in India have inconsistent bandwidth. If any part of your programme involves a live call, a shared document or a demo, test it during a site visit at the time of day you will actually need it, not at 6am when nobody is online.'],
      ['h2', 'Rooming lists are a political document'],
      ['p', 'Room categories, view allocations and proximity to the main block are noticed. On leadership offsites in particular, allocation is worth planning deliberately rather than letting a spreadsheet sort alphabetically.'],
      ['h2', 'Plan for weather that will happen'],
      ['p', 'Outdoor sessions and dinners are the reason to go to a destination in the first place. Every one of them needs a covered alternative confirmed in writing, with a call time for the decision. A monsoon plan agreed at 4pm on the day is not a plan.'],
      ['h2', 'What we lock before contracting'],
      ['list', [
        'Total door-to-door travel time from each origin city',
        'Airport transfer capacity for the full group at peak arrival',
        'Connectivity tested at the hours the programme needs it',
        'Confirmed wet-weather alternatives for every outdoor element',
        'Medical access and the nearest hospital, in writing',
        'Local licences for music, alcohol and any outdoor setup'
      ]],
      ['p', 'Every property looks good in a proposal deck. The difference between a good destination event and a difficult one is almost always decided by these six lines.']
    ]
  },
  {
    slug: 'hybrid-events-that-are-not-an-afterthought',
    title: 'Hybrid Events Where the Remote Audience Is Not an Afterthought',
    excerpt: 'Most hybrid events are an in-person event with a camera pointed at it. Designing for two audiences takes different decisions.',
    date: '2026-06-24',
    readTime: '6 min read',
    cat: 'Technology',
    img: 'g38',
    body: [
      ['p', 'Hybrid became standard for corporate India during the pandemic and never went away. Most organisations still run it as a broadcast of a physical event, which is why remote attendance drops off after the first session.'],
      ['h2', 'Two audiences, two experiences'],
      ['p', 'People in the room get the coffee break, the corridor conversation and the energy of a full auditorium. People at home get a video window. Treating them as one audience means the remote group receives a worse version of the same thing, and behaves accordingly.'],
      ['h2', 'Design decisions that change the outcome'],
      ['list', [
        'A dedicated remote host who is on camera and speaks to the online audience directly',
        'Shorter segments for the stream, with a different break structure to the room',
        'Questions taken from remote participants first, not last',
        'Camera positions that show the audience, not only the stage',
        'Content built for a 16:9 screen, not for a stage-width LED wall'
      ]],
      ['h2', 'The audio budget matters more than the video budget'],
      ['p', 'Remote audiences forgive an imperfect picture and leave over bad sound. A dedicated audio feed from the desk, wired microphones for panellists, and someone monitoring the stream audio in isolation are the three investments that hold a remote room.'],
      ['h2', 'Measure both rooms'],
      ['p', 'Attendance in the hall is easy to count. Remote engagement needs to be planned for: watch time by segment, question volume, poll participation. Without it, the next hybrid event gets designed on the assumption that the remote audience did not care.'],
      ['p', 'We have run virtual conferences for a thousand-plus international delegates across locations. The events that worked were the ones where somebody owned the remote experience as a job, not as an extra line on the production schedule.']
    ]
  },
  {
    slug: 'measuring-corporate-event-roi',
    title: 'Measuring Corporate Event ROI Without Pretending',
    excerpt: 'Attendance and satisfaction scores are not outcomes. Four measures that survive a conversation with a finance team.',
    date: '2026-06-05',
    readTime: '7 min read',
    cat: 'Measurement',
    img: 'g23',
    body: [
      ['p', 'Corporate events get measured with two numbers: how many people came, and how they rated it. Both are easy to collect and neither tells you whether the event was worth doing.'],
      ['h2', 'Why satisfaction scores mislead'],
      ['p', 'Post-event surveys are answered by people who enjoyed themselves, on the day, while still in a good mood. A high score tells you the evening went well. It does not tell you whether the strategy landed, whether the dealer network will order differently, or whether the merged teams now behave as one.'],
      ['h2', 'Four measures that hold up'],
      ['list', [
        'Behaviour change: something specific people should do differently, measured four to six weeks later',
        'Pipeline or channel movement: for launches and dealer meets, orders or qualified conversations attributable to the event window',
        'Retention and participation: for internal events, voluntary participation rates in the programmes the event was meant to seed',
        'Cost per meaningful interaction: total cost divided by conversations that had a business purpose, not by headcount'
      ]],
      ['h2', 'Decide the measure before the brief'],
      ['p', 'The measure has to be agreed before anything is designed, because it changes the design. An event optimised for reach looks nothing like an event optimised for depth of conversation. Choosing after the fact means measuring whatever happens to be available.'],
      ['h2', 'Report the uncomfortable numbers too'],
      ['p', 'Drop-off by session, the segments people left during, the questions nobody asked. These are more useful for the next event than the headline satisfaction figure, and they are the numbers a finance team finds credible.'],
      ['p', 'We build measurement and reporting into the scope rather than adding it at the end, because the data that matters has to be collected while the event is running.']
    ]
  },
  {
    slug: 'choosing-a-venue-in-hyderabad',
    title: 'Choosing a Corporate Event Venue in Hyderabad',
    excerpt: 'HITEC City, Banjara Hills or the convention belt. What actually differs between them, and the questions to ask on a site visit.',
    date: '2026-05-20',
    readTime: '7 min read',
    cat: 'Venues',
    img: 'g36',
    body: [
      ['p', 'Hyderabad has one of the deepest venue markets in India for corporate events, which makes shortlisting harder rather than easier. The properties differ less on quality than on what they are actually built for.'],
      ['h2', 'The three clusters'],
      ['p', 'HITEC City and Madhapur properties sit closest to the technology and GCC workforce, which matters when attendance depends on people walking over after work. Banjara Hills offers the established luxury properties, better suited to leadership events and client hosting than to large internal celebrations. The convention belt near HICC handles genuine scale, and is usually the only realistic answer above about 1500 guests.'],
      ['h2', 'Questions worth asking on a site visit'],
      ['list', [
        'What is the ceiling height at the stage end, and where are the rigging points?',
        'What is the power availability and the backup arrangement for production load?',
        'How does the loading dock reach the ballroom, and at what hours is access allowed?',
        'What is the realistic banquet service capacity, not the seating capacity?',
        'How many cars can the site actually park at peak arrival?',
        'What else is running in the property that day, and who shares the pre-function area?'
      ]],
      ['h2', 'Capacity numbers are optimistic'],
      ['p', 'Published capacity assumes a layout you probably will not use. Add a stage, LED walls, camera positions and a dance floor and a listed 1000-guest ballroom often seats 650 comfortably. Always plan against a drawn layout, not a brochure number.'],
      ['h2', 'The overlooked constraint'],
      ['p', 'Load-in access decides your production budget more often than the ballroom does. A venue that only allows setup after 10pm the previous night, or that has a single service lift, changes the crew size and the cost before any creative decision is made.'],
      ['p', 'We maintain working relationships across the Hyderabad venue market, which means the shortlist we bring is filtered on these constraints rather than on availability alone.']
    ]
  }
];

/* --- FAQs (also emitted as FAQPage structured data) ---------------------- */
const faqs = {
  home: [
    { q: 'What does Shaahi Creations do?', a: 'Shaahi Creations is a corporate event management company founded in 2018, headquartered in Hyderabad with offices in Pune and Mumbai. We design and deliver conferences, leadership summits, annual days, family days, product launches, dealer meets, brand activations, team offsites and destination corporate events across India.' },
    { q: 'Where does Shaahi Creations operate?', a: 'We operate PAN India and have executed more than 1500 events across 25+ cities, including Hyderabad, Mumbai, Delhi NCR, Bangalore, Pune, Kolkata, Chennai, Ahmedabad, Jaipur and Indore, as well as destination locations such as Goa, Udaipur, Rishikesh, Coorg, Jim Corbett and Kabini.' },
    { q: 'What size of events can Shaahi Creations manage?', a: 'We have delivered events from intimate leadership retreats of 100 guests to large-format celebrations for audiences of 4000. Our largest single event managed to date hosted 4000 attendees.' },
    { q: 'Which industries does Shaahi Creations work with?', a: 'We work across IT and technology, GCCs, healthcare, pharma, retail, hospitality, government, manufacturing, automobile, education, telecom and BFSI. Clients include Microsoft, NVIDIA, Amazon, Marriott, Porsche, Capgemini, Dr. Reddy’s Laboratories, Welspun and the World Health Organization.' },
    { q: 'How do I request a proposal?', a: 'Share your event objective, approximate audience size, preferred dates and city through the contact form, or write to events@shaahicreations.com. We typically respond within 24 hours during business hours, Monday to Saturday.' }
  ],
  about: [
    { q: 'When was Shaahi Creations founded?', a: 'Shaahi Creations was founded in 2018 and has delivered more than 1500 events across 25+ cities in India since then.' },
    { q: 'Who leads Shaahi Creations?', a: 'The company was founded by Snehal Deshpande, who leads business development, together with co-founder Rupesh Patil, who leads client servicing and operations. The leadership team also includes heads of client servicing, operations and creative direction.' },
    { q: 'What services does Shaahi Creations provide?', a: 'Event consulting, creative concept and design, planning and project management, venue sourcing and management, production and technology, décor and experience design, travel and hospitality management, talent and entertainment management, and measurement and reporting.' },
    { q: 'Does Shaahi Creations handle event technology?', a: 'Yes. We deliver attendee registration, custom event apps, RFID for cashless and contactless access, AI-driven personalisation, AR and VR activations, and LED production with live streaming.' }
  ],
  destinations: [
    { q: 'Which cities does Shaahi Creations cover in India?', a: 'We work across 25+ cities including Hyderabad, Mumbai, Delhi NCR, Bangalore, Pune, Kolkata, Chennai, Ahmedabad, Jaipur, Indore, Chandigarh and Ludhiana, with local vendor networks and on-ground teams in each.' },
    { q: 'What destination locations do you recommend for corporate offsites?', a: 'Signature destinations include Goa, Udaipur, Jaipur and Rishikesh. For smaller, more private leadership programmes we also work in Coorg, Dehradun, Jim Corbett, Kabini and Kerala, and we have delivered international dealer meets in Kathmandu.' },
    { q: 'Do you handle travel and accommodation for destination events?', a: 'Yes. Destination events are delivered end to end, including travel, stay, airport transfers, rooming lists, on-ground hospitality and local licensing.' },
    { q: 'Which venues do you work with in Hyderabad?', a: 'We work across the Hyderabad venue market including Taj Falaknuma Palace, ITC Kohenur, Hyderabad Marriott Hotel and Convention Centre, The Westin Hyderabad Mindspace, Park Hyatt Hyderabad, Novotel Hyderabad Convention Centre, Taj Krishna and ITC Kakatiya.' }
  ],
  contact: [
    { q: 'How quickly does Shaahi Creations respond to enquiries?', a: 'We typically respond to enquiries within 24 hours during business hours, Monday to Saturday, 10:00 AM to 6:30 PM IST.' },
    { q: 'Where are Shaahi Creations offices located?', a: 'Our head office is in Hyderabad, Telangana. We also hold client meetings in Pune and Mumbai, and work PAN India across 25+ cities.' },
    { q: 'How far in advance should I plan a corporate event?', a: 'For large annual days and conferences we recommend starting three to four months ahead. Destination events benefit from four to six months because of travel and room-block lead times. Smaller meetings and launches can be delivered in shorter timelines.' },
    { q: 'Do you work with organisations outside Hyderabad?', a: 'Yes. We deliver events across India from our Hyderabad, Pune and Mumbai bases, with local execution networks in every major city we operate in.' }
  ],
  work: [
    { q: 'What kinds of corporate events has Shaahi Creations delivered?', a: 'Leadership summits and conferences, annual days, family days, employee engagement programmes, product launches, dealer meets, rewards and recognition nights, brand activations and expos, team offsites and destination corporate events.' },
    { q: 'Can I see examples of your work?', a: 'Our gallery covers more than 35 events across annual days, conferences, product launches, team engagement, family days, brand activations and destination events. Detailed case studies cover work for Microsoft, Marriott Bonvoy, NVIDIA, the World Health Organization, Porsche, Welspun, GM Switches and ZEST.' },
    { q: 'Do you work with the same clients repeatedly?', a: 'Yes. We have a four-plus year continuing partnership with Microsoft, six-plus years with Marriott International, four-plus years with Welspun Industries and four-plus years with ZEST, delivering two large-scale events every year.' }
  ]
};

module.exports = {
  services, clients, clientsTextOnly, testimonials, featured, destHighlights,
  beliefs, process, expertise, techStack, team, industries,
  CAT, gallery, csPhotos, caseStudies, cities, destinations, placePhotos, venueCities, posts, faqs
};
