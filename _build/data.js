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
const clients = [
  { name: 'Microsoft', file: 'microsoft' },
  { name: 'NVIDIA', file: 'nvidia' },
  { name: 'Amazon', file: 'amazone' },
  { name: 'Marriott', file: 'marriott' },
  { name: 'Porsche', file: 'porsche' },
  { name: 'Capgemini', file: 'capgimini' },
  { name: "Dr. Reddy's Laboratories", file: 'dr-reddys' },
  { name: 'Welspun Industries', file: 'welspun' },
  { name: 'ITC Limited', file: 'itc-limited' },
  { name: 'JSW', file: 'jsw' },
  { name: 'DBS', file: 'dbs' },
  { name: 'GMR', file: 'gmr' },
  { name: 'Tanla Tech', file: 'tanla' },
  { name: 'GEP', file: 'gep' },
  { name: 'GM Switches', file: 'gm' },
  { name: 'KCP Cement', file: 'kcp' },
  { name: 'Hitachi Digital Services', file: 'hitachi-digital-services' },
  { name: 'Celon Labs', file: 'celonlabs' },
  { name: 'Yashoda Hospitals', file: 'yashoda-hospital' }
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
const featured = [
  { title: 'Microsoft Leadership Summit', meta: 'Conference &amp; Meeting', img: 'g04', overlay: 'Lead. Collaborate. Innovate.', href: 'case-studies/microsoft-leadership-summit.html' },
  { title: 'Marriott Bonvoy Partner Connect &ndash; Goa', meta: 'Destination Event', img: 'g40', overlay: 'Stronger Partnerships.', href: 'case-studies/marriott-bonvoy-partner-connect-goa.html' },
  { title: 'Porsche 911 Drive Launch', meta: 'Product Launch', img: 'g20', overlay: 'Driven By A Brighter Tomorrow', href: 'case-studies/porsche-911-drive-launch.html' },
  { title: "Dr. Reddy's Laboratories Annual Day", meta: 'Annual Day', img: 'g02', overlay: 'A Day To Belong', href: 'case-studies/pharma-annual-day.html' },
  { title: 'NVIDIA Annual Employee Event', meta: 'Annual Day', img: 'g14', overlay: 'People. Ideas. Together.', href: 'case-studies/nvidia-annual-employee-event.html' },
  { title: 'WHO Global Virtual Conference', meta: 'Conference &amp; Meeting', img: 'g38', overlay: 'Knowledge Without Borders', href: 'case-studies/who-virtual-conference.html' },
  { title: 'Shaadi by Marriott Expo', meta: 'Brand Activation', img: 'g34', overlay: 'Moments That Matter', href: 'case-studies/shaadi-by-marriott.html' },
  { title: 'ZEST Annual Day &amp; Family Day', meta: 'Annual Day', img: 'g37', overlay: 'Four Years And Counting', href: 'case-studies/zest-annual-family-day.html' }
];

/* --- Destination highlights (home) --------------------------------------- */
const destHighlights = [
  { name: 'Goa', tag: 'Beaches &amp; Beyond', hue: 'goa' },
  { name: 'Udaipur', tag: 'Royal &amp; Timeless', hue: 'udaipur' },
  { name: 'Rishikesh', tag: 'Nature &amp; Wellness', hue: 'rishikesh' },
  { name: 'Jaipur', tag: 'Heritage &amp; Grandeur', hue: 'jaipur' }
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
    linkedin: ''
  },
  {
    name: 'Rupesh Patil',
    role: 'Co-Founder<br>Client Servicing &amp; Operations',
    photo: 'rupesh',
    bio: 'Leads client servicing and operations, ensuring ideas translate into seamless experiences. His hospitality background brings a strong focus on relationships, strategy and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/rupesh-patil-97712a1b/'
  },
  {
    name: 'Neetu Elluri',
    role: 'Lead &ndash; BDM &amp; Client Servicing',
    photo: 'neetu',
    bio: 'Builds new opportunities, nurtures client relationships and ensures every engagement is thoughtful, responsive and aligned to client objectives.',
    linkedin: ''
  },
  {
    name: 'Mrunalinli Bhurle',
    role: 'Lead &ndash; Operations',
    photo: 'mrunalinli',
    bio: 'Leads planning, coordination and on-ground execution, bringing structure, precision and consistency to every event.',
    linkedin: ''
  },
  {
    name: 'Mukesh Deshmukh',
    role: 'Lead &ndash; Creative Director &amp; Design',
    photo: 'mukesh',
    bio: 'Translates ideas into visual experiences through creative direction, design and experiential thinking &ndash; shaping environments that engage and leave an impression.',
    linkedin: 'https://www.linkedin.com/in/mukesh-deshmukh-11828b17/'
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
  { img: 'g15', title: 'Holiday Party Red Carpet', meta: 'Healthcare Tech | 1000+ Guests', cats: ['other', 'family'], overlay: 'Holiday Party' }
];

/* --- Case studies (Our Work, tab 2) -------------------------------------- */
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
    hero: 'g04',
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
    images: ['g04', 'g38', 'g09']
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
    hero: 'g37',
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
    images: ['g37', 'g28', 'g02', 'g08']
  },
  {
    slug: 'marriott-bonvoy-partner-connect-goa',
    kicker: 'Destination Event',
    cat: 'dest',
    client: 'Marriott Bonvoy',
    logo: 'marriott',
    title: 'Marriott Bonvoy Partner Connect &ndash; Goa',
    strap: 'Stronger Partnerships. Bigger Possibilities.',
    summary: 'An immersive partner engagement experience combining meaningful conversations with memorable Goan hospitality.',
    hero: 'g40',
    facts: [
      ['Partnership', '6+ years with Marriott'],
      ['Events', '50+ hospitality events'],
      ['Reach', 'PAN India'],
      ['Scope', 'End-to-end event management']
    ],
    objective: 'Marriott Bonvoy needed a partner connect that felt less like a conference and more like an invitation, giving partners real conversation time while showcasing the destination itself.',
    approach: [
      'Programme design that alternated business content with unstructured connection time.',
      'Venue and d&eacute;cor built around the outdoors rather than fighting it.',
      'Travel, stay and hospitality management for partners arriving from across the country.',
      'Production sized for intimacy, not scale, so the room stayed conversational.'
    ],
    delivered: ['Partner engagement programme', 'D&eacute;cor &amp; experience design', 'Travel &amp; hospitality management', 'Production &amp; on-ground coordination'],
    result: 'A partner event that has become a fixture of the Marriott Bonvoy calendar, alongside PAN India leadership conferences and the PEAK Leadership Summit.',
    quote: { text: 'Another successful event. Thank you for the seamless planning and beautiful execution.', by: 'Marriott Bonvoy Events Team' },
    images: ['g40', 'g39', 'g05']
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
    images: ['g20', 'g13', 'g01']
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
    hero: 'g14',
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
    images: ['g14', 'g03', 'g33']
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
    hero: 'g38',
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
    images: ['g38', 'g36', 'g09']
  },
  {
    slug: 'pharma-annual-day',
    kicker: 'Annual Day',
    cat: 'annual',
    client: "Dr. Reddy's Laboratories",
    logo: 'dr-reddys',
    title: 'Pharma Annual Day Celebration',
    strap: 'A Day To Belong.',
    summary: 'A vibrant annual celebration bringing together employees and families for a day of connection, fun and shared memories.',
    hero: 'g02',
    facts: [
      ['Category', 'Pharma'],
      ['Guests', '900+'],
      ['Format', 'Annual day &amp; cultural night'],
      ['Scope', 'Concept to execution']
    ],
    objective: 'An annual day that had to work for two audiences at once: employees who wanted a celebration, and families who needed a reason to stay past the first hour.',
    approach: [
      'A programme built in blocks so families could join, participate and leave without missing the point.',
      'Cultural performances curated from within the organisation as well as professionally produced acts.',
      'Stage and d&eacute;cor design that photographed as well as it presented.',
      'Hospitality planning sized for a crowd that arrives together and eats together.'
    ],
    delivered: ['Concept &amp; theme design', 'Stage, d&eacute;cor &amp; production', 'Entertainment &amp; cultural programming', 'Hospitality &amp; logistics'],
    result: 'A celebration that filled the room from the first act to the last, with participation from across the organisation.',
    quote: null,
    images: ['g02', 'g12', 'g27', 'g30']
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
    hero: 'g34',
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
    images: ['g34', 'g35', 'g10']
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
    hero: 'g01',
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
    images: ['g01', 'g13', 'g23']
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
    hero: 'g13',
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
    images: ['g13', 'g20', 'g01']
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
    hero: 'g31',
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
    images: ['g31', 'g26', 'g25']
  }
];

/* --- Destinations: tier-one cities --------------------------------------- */
const cities = [
  { name: 'Hyderabad', note: 'Head office &amp; home base', hue: 'hyderabad' },
  { name: 'Mumbai', note: 'Client meetings &amp; production', hue: 'mumbai' },
  { name: 'Delhi NCR', note: 'Conferences &amp; launches', hue: 'delhi' },
  { name: 'Bangalore', note: 'GCC &amp; technology events', hue: 'bangalore' },
  { name: 'Pune', note: 'Office &amp; on-ground team', hue: 'pune' },
  { name: 'Kolkata', note: 'Conferences &amp; celebrations', hue: 'kolkata' },
  { name: 'Chennai', note: 'Dealer meets &amp; conferences', hue: 'chennai' },
  { name: 'Jaipur', note: 'Heritage &amp; destination events', hue: 'jaipur' },
  { name: 'Indore', note: 'Regional conferences', hue: 'indore' },
  { name: 'Others', note: 'Ahmedabad, Chandigarh, Ludhiana &amp; more', hue: 'chandigarh' }
];

/* --- Destinations: signature and offbeat --------------------------------- */
const destinations = [
  { name: 'Goa', tag: 'Sun. Sand. Celebrations.', hue: 'goa', kind: 'Signature', text: 'Beach resorts and villa properties built for offsites, partner connects and celebrations that run into the evening.' },
  { name: 'Rajasthan', tag: 'Royal &amp; Timeless', hue: 'udaipur', kind: 'Signature', text: 'Palace venues and heritage havelis in Udaipur and Jaipur for leadership offsites and milestone celebrations.' },
  { name: 'Uttarakhand', tag: 'Nature &amp; Wellness', hue: 'rishikesh', kind: 'Signature', text: 'Riverside camps and wellness retreats around Rishikesh and Dehradun for programmes that need a change of altitude.' },
  { name: 'Maharashtra', tag: 'Hills &amp; Getaways', hue: 'pune', kind: 'Signature', text: 'Lonavala, Mahabaleshwar and Alibaug properties within easy reach of Mumbai and Pune for short offsites.' },
  { name: 'South India', tag: 'Heritage &amp; Serenity', hue: 'kerala', kind: 'Signature', text: 'Backwaters, plantations and heritage venues across Kerala, Karnataka and Tamil Nadu for incentive and reward travel.' },
  { name: 'Coorg', tag: 'Coffee Country', hue: 'coorg', kind: 'Offbeat', text: 'Plantation stays and estate venues in Karnataka for small, high-trust leadership groups.' },
  { name: 'Dehradun', tag: 'Foothills &amp; Focus', hue: 'dehradun', kind: 'Offbeat', text: 'Doon Valley properties within easy reach of Delhi NCR, well suited to two-day offsites.' },
  { name: 'Jim Corbett', tag: 'Wild &amp; Unplugged', hue: 'corbett', kind: 'Offbeat', text: 'Forest lodges and riverside resorts for engagement programmes that trade screens for the outdoors.' },
  { name: 'Kabini', tag: 'River &amp; Wilderness', hue: 'kabini', kind: 'Offbeat', text: 'Backwater and wildlife properties in South India for intimate leadership retreats.' },
  { name: 'Kathmandu', tag: 'Across The Border', hue: 'kathmandu', kind: 'Offbeat', text: 'International dealer meets and incentive programmes, including work delivered at Tiger Palace Resort.' }
];

/* --- Destinations: Hyderabad venue partners ------------------------------ */
const venues = [
  { rank: 1, name: 'Taj Falaknuma Palace', area: 'Falaknuma, Hyderabad', desc: 'Royal palace venue ideal for destination weddings, gala dinners and VIP celebrations.', map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Falaknuma+Palace+Hyderabad', web: 'https://www.tajhotels.com/', insta: 'https://www.instagram.com/tajfalaknuma/' },
  { rank: 2, name: 'ITC Kohenur', area: 'Madhapur, Hyderabad', desc: 'Waterfront luxury hotel in HITEC City with a premium ballroom and MICE infrastructure.', map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Kohenur+Hyderabad', web: 'https://www.itchotels.com/', insta: 'https://www.instagram.com/itckohenur/' },
  { rank: 3, name: 'Hyderabad Marriott Hotel &amp; Convention Centre', area: 'Tank Bund, Hyderabad', desc: 'Large-scale convention hotel overlooking Hussain Sagar with extensive indoor and outdoor event spaces.', map: 'https://www.google.com/maps/search/?api=1&amp;query=Hyderabad+Marriott+Hotel+and+Convention+Centre', web: 'https://www.marriott.com/', insta: 'https://www.instagram.com/marriott/' },
  { rank: 4, name: 'The Westin Hyderabad Mindspace', area: 'HITEC City, Hyderabad', desc: 'Large premium property in HITEC City suited to corporate conferences, launches and social events.', map: 'https://www.google.com/maps/search/?api=1&amp;query=The+Westin+Hyderabad+Mindspace', web: 'https://www.marriott.com/', insta: 'https://www.instagram.com/westin/' },
  { rank: 5, name: 'Park Hyatt Hyderabad', area: 'Banjara Hills, Hyderabad', desc: 'Sophisticated Banjara Hills property with a premium ballroom and elegant event spaces.', map: 'https://www.google.com/maps/search/?api=1&amp;query=Park+Hyatt+Hyderabad', web: 'https://www.hyatt.com/', insta: 'https://www.instagram.com/hyatt/' },
  { rank: 6, name: 'Novotel Hyderabad Convention Centre', area: 'HITEC City, Hyderabad', desc: 'Major MICE destination adjacent to HICC with convention facilities and landscaped event spaces.', map: 'https://www.google.com/maps/search/?api=1&amp;query=Novotel+Hyderabad+Convention+Centre', web: 'https://all.accor.com/', insta: 'https://www.instagram.com/novotel/' },
  { rank: 7, name: 'Taj Krishna', area: 'Banjara Hills, Hyderabad', desc: 'Iconic Hyderabad luxury hotel with elegant ballrooms and landscaped settings.', map: 'https://www.google.com/maps/search/?api=1&amp;query=Taj+Krishna+Hyderabad', web: 'https://www.tajhotels.com/', insta: 'https://www.instagram.com/tajhotels/' },
  { rank: 8, name: 'ITC Kakatiya', area: 'Begumpet, Hyderabad', desc: 'Landmark luxury hotel with sophisticated banquet and conference spaces.', map: 'https://www.google.com/maps/search/?api=1&amp;query=ITC+Kakatiya+Hyderabad', web: 'https://www.itchotels.com/', insta: 'https://www.instagram.com/itchotels/' }
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
  CAT, gallery, caseStudies, cities, destinations, venues, posts, faqs
};
