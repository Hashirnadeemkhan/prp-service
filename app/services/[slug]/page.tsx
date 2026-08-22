import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { serviceSchemas } from "@/lib/structuredData";

/* Inline link helpers — keep the docx cross-linking flow intact. */
const LINK_CLASS = "text-[#2d5486] font-semibold underline underline-offset-2 hover:text-[#1e3560]";
const IntLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className={LINK_CLASS}>
    {children}
  </Link>
);
const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
    {children}
  </a>
);

/* Internal + external destinations taken directly from the source documents. */
const CONTACT = "/contact";
const HOME = "/"; /* "property maintenance services" */
const FENCING = "/services/fencing-services";
const LANDSCAPING = "/services/landscaping-services";
const PATIOS = "/services/driveways-patios-worcester";
const GOV_FARMING = "https://www.gov.uk/topic/farming-food-grants-payments";
const GOV_WOODLAND = "https://www.gov.uk/topic/environmental-management/woodland-forestry";
const PLANNING_PORTAL = "https://www.planningportal.co.uk/";

/* Hero background image per service */
const HERO_IMAGE: Record<string, string> = {
  "fencing-services": "/001.jpg",
  "roofing-services": "/005.jpg",
  "driveways-patios-worcester": "/004.jpg",
  "landscaping-services": "/007.jpg",
};

/* Curated real project photos per service. Shown uncropped (natural aspect)
   so the brand watermark on each photo stays fully visible. */
const SERVICE_SHOWCASE: Record<string, string[]> = {
  "fencing-services": [
    "/gallery/fencing/002.jpg",
    "/gallery/fencing/005.jpg",
    "/gallery/fencing/008.jpg",
    "/gallery/fencing/012.jpg",
  ],
  "roofing-services": [
    "/gallery/roofing/001.jpg",
    "/gallery/roofing/003.jpg",
    "/gallery/roofing/005.jpg",
    "/gallery/roofing/007.jpg",
  ],
  "driveways-patios-worcester": [
    "/gallery/driveways-patios/001.jpg",
    "/gallery/driveways-patios/003.jpg",
    "/gallery/driveways-patios/006.jpg",
    "/gallery/driveways-patios/008.jpg",
  ],
  "landscaping-services": ["/007.jpg"],
};

type Service = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  gradient: string;
  intro: ReactNode[];
  quoteCta: { href: string; label: string };
  callout: string;
  features: string[];
  serviceDetails: { title: string; body: ReactNode[] }[];
  afterDetails?: ReactNode;
  professional: { heading: string; body: ReactNode[] };
  suitableFor: { heading: string; intro: ReactNode[]; items: string[]; note?: ReactNode[] };
  whyChoose: { title: string; body: string }[];
  coverage: { heading: string; body: ReactNode[] };
  faqs: { q: string; a: string }[];
  closingHeading: string;
  closing: ReactNode[];
  closingCta: ReactNode;
};

const SERVICES: Record<string, Service> = {
  "fencing-services": {
    name: "Fencing",
    metaTitle:
      "Fencing Installation & Repair in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services provides durable fencing installation & repair across Worcestershire. Quality materials, expert fitting get your free quote today!",
    gradient: "linear-gradient(160deg, #1e3d1e 0%, #2d5e2d 100%)",
    intro: [
      "Looking for reliable fencing services in Worcester, Worcestershire? PRP Services provides professional fencing installation, replacement, repair and gate solutions for homes, gardens, farms and commercial properties. If you're searching for a reliable fence contractor near me, our experienced team can help you choose and install a practical, secure and attractive boundary for your property.",
      "From closeboard and panel fencing to post and rail, ornamental, decorative, security and agricultural fencing, we can help you choose the right solution. We also provide gate installation and repair to complete your property's boundary.",
      "If you need professional fencing services near me, contact PRP Services for a free, no-obligation quote in Worcester and surrounding Worcestershire areas.",
    ],
    quoteCta: { href: CONTACT, label: "Get a Free Fencing Quote" },
    callout:
      "All our fencing is installed to the highest standard using quality materials, ensuring your fence looks great and lasts for years.",
    features: [
      "Closeboard and panel fencing",
      "Post and rail fencing",
      "Ornamental and decorative fencing",
      "Security fencing",
      "Agricultural and farm fencing",
      "Gate installation and repair",
    ],
    serviceDetails: [
      {
        title: "Closeboard and Panel Fencing",
        body: [
          "Closeboard and panel fencing are popular choices for residential gardens, boundaries and commercial properties. They provide privacy, a clear property boundary and a practical solution for replacing old or damaged fencing.",
          "As an experienced wood fence contractor, PRP Services can install new wooden closeboard and panel fencing to suit the layout, access and requirements of your property, helping create a strong and professional-looking boundary.",
        ],
      },
      {
        title: "Post and Rail Fencing",
        body: [
          "Post and rail fencing is a practical option for larger gardens, rural properties, fields and open areas. Its simple construction provides an effective boundary while maintaining an open appearance.",
          "PRP Services can install post and rail fencing for properties across Worcester and Worcestershire, with solutions selected according to the land and intended use.",
        ],
      },
      {
        title: "Ornamental and Decorative Fencing",
        body: [
          "If appearance is just as important as security, ornamental and decorative fencing can add an attractive finishing touch to your property. Decorative fencing can help define boundaries while complementing the existing style of your garden, home or commercial premises.",
          "We can help you choose a fencing solution that balances appearance, functionality and durability.",
        ],
      },
      {
        title: "Security Fencing",
        body: [
          "For properties that require increased protection, security fencing provides a stronger boundary and can help control access to specific areas.",
          "Our fencing solutions can be suitable for commercial premises, private properties, storage areas and other locations where security and clear perimeter control are important.",
        ],
      },
      {
        title: "Agricultural and Farm Fencing",
        body: [
          "PRP Services also provides agricultural and farm fencing for rural properties, fields, paddocks and other agricultural environments.",
          "We understand that agricultural fencing needs to be practical, durable and appropriate for the land and its intended use. Our team can help identify a suitable fencing solution for your requirements.",
          <>
            {"For further information about agricultural land management and farming guidance in England, you can also refer to the official "}
            <ExtLink href={GOV_FARMING}>GOV.UK farming and land management guidance</ExtLink>
            {"."}
          </>,
        ],
      },
      {
        title: "Gate Installation and Repair",
        body: [
          "A gate is an important part of any property's boundary. We provide gate installation and repair to help ensure your entrance is secure, functional and properly integrated with your existing or new fencing.",
          "Whether you need a new gate installed or an existing gate repaired, we can assess the work and recommend a suitable solution.",
        ],
      },
    ],
    afterDetails: (
      <>
        {"If your property requires additional exterior maintenance alongside fencing or gates, our "}
        <IntLink href={HOME}>property maintenance services</IntLink>
        {" can help with other maintenance requirements."}
      </>
    ),
    professional: {
      heading: "Professional Fencing Installation in Worcester",
      body: [
        "Choosing the right fence involves more than selecting a style. The ground conditions, property layout, required privacy, security, access and intended use all need to be considered.",
        "Our fencing team provides professional fence installation near me for residential, commercial and rural properties across Worcester and surrounding areas. We focus on proper preparation, secure installation and a quality finish designed around your property's individual requirements.",
        "If you are replacing an old fence, improving privacy or creating a new boundary, PRP Services can help from the initial requirements through to installation.",
        <>
          {"For advice relating to planning and property development requirements, homeowners can also check the official "}
          <ExtLink href={PLANNING_PORTAL}>Planning Portal</ExtLink>
          {" for current planning information."}
        </>,
      ],
    },
    suitableFor: {
      heading: "Garden Fencing Services for Local Properties",
      intro: [
        "Our garden fencing services are suitable for homeowners looking to improve privacy, define their property boundary or replace old and damaged fencing.",
        "Whether you need a traditional wooden fence, decorative boundary or a practical panel fence, we can recommend an option based on your garden layout, property style and requirements.",
        "Our fencing services are also suitable for a wide range of other properties and requirements, including:",
      ],
      items: [
        "Residential garden fencing",
        "Property boundary fencing",
        "Replacement and new fencing",
        "Commercial fencing",
        "Security and perimeter fencing",
        "Agricultural and farm fencing",
        "Rural and field boundaries",
        "Decorative and ornamental fencing",
        "Gate installation and repairs",
      ],
    },
    whyChoose: [
      {
        title: "Local Fencing Expertise",
        body: "We provide professional fencing services throughout Worcester and Worcestershire. So, if you're searching for a fence near me, our local team can discuss your requirements and recommend a suitable fencing solution.",
      },
      {
        title: "Range of Fencing Options",
        body: "From traditional closeboard and panel fencing to decorative, security and agricultural solutions, we offer a range of options to suit different properties and project requirements.",
      },
      {
        title: "Professional Installation",
        body: "Our team takes care with preparation, positioning and installation to create a secure and properly finished boundary.",
      },
      {
        title: "Solutions Built Around Your Property",
        body: "Every property is different. We consider your requirements, existing boundary, access and intended use before recommending a suitable fencing solution.",
      },
    ],
    coverage: {
      heading: "Fencing Services Across Worcester and Worcestershire",
      body: [
        "PRP Services provides professional fencing solutions throughout Worcester, Worcestershire and surrounding areas. Whether you need a small garden fence, a complete property boundary, agricultural fencing or a security solution, our team can discuss your project.",
        "If you're searching online for fencing services near me, a fence contractor near me or fence installation near me, PRP Services can help with professional fencing solutions tailored to your property.",
        "From residential gardens to commercial and agricultural properties, our team provides a range of fencing options to meet different requirements.",
        <>
          {"You can also explore our "}
          <IntLink href={LANDSCAPING}>landscaping services</IntLink>
          {" or "}
          <IntLink href={HOME}>property maintenance services</IntLink>
          {" if you require additional work around your home, garden or commercial property."}
        </>,
      ],
    },
    faqs: [
      {
        q: "What fencing services do you provide in Worcester?",
        a: "We provide closeboard and panel fencing, post and rail fencing, ornamental and decorative fencing, security fencing, agricultural and farm fencing, plus gate installation and repair.",
      },
      {
        q: "Do you install garden fencing?",
        a: "Yes. Our garden fencing services include closeboard, panel and decorative fencing suitable for gardens and residential boundaries. We can assess your garden and recommend a fencing option based on your requirements.",
      },
      {
        q: "Do you provide agricultural and farm fencing?",
        a: "Yes. We provide agricultural and farm fencing for rural properties, fields, paddocks and other agricultural applications.",
      },
      {
        q: "Can you repair an existing gate?",
        a: "Yes. We provide gate repair as well as new gate installation. We can assess the existing gate and determine the appropriate repair or replacement solution.",
      },
      {
        q: "Do you install security fencing?",
        a: "Yes. We provide security fencing solutions for properties that require stronger boundaries and improved perimeter control.",
      },
      {
        q: "Do you provide fencing services in Worcester?",
        a: "Yes. PRP Services provides fencing services throughout Worcester and surrounding areas of Worcestershire. If you're looking for a fence in Worcester, contact our team to discuss your requirements.",
      },
      {
        q: "How can I get a quote for fencing?",
        a: "Contact PRP Services with details of your fencing requirements. We can discuss your project and provide information about the next steps for arranging your fencing installation.",
      },
    ],
    closingHeading: "Get Your Free Fencing Quote",
    closing: [
      "Ready to improve your property's boundary with professional fencing?",
      "Whether you need garden fencing, closeboard fencing, panel fencing, security fencing, agricultural fencing, decorative fencing or gate installation, PRP Services is here to help.",
      "If you're looking for a fence contractor near me in Worcester or need fence installation near me, contact PRP Services today for a free, no-obligation quote.",
    ],
    closingCta: <IntLink href={CONTACT}>Contact PRP Services for a Free Fencing Quote</IntLink>,
  },
  "roofing-services": {
    name: "Roofing & Repairs",
    metaTitle:
      "Roofing Installation & Repairs in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services offers expert roofing installation & repairs across Worcestershire. Reliable, high-quality workmanship get your free quote today!",
    gradient: "linear-gradient(160deg, #1e1e3d 0%, #2d2d5e 100%)",
    intro: [
      "Looking for reliable roofing services in Worcester, Worcestershire? PRP Services provides professional roof repairs, reroofing, flat roof installation and repair, chimney repairs, guttering replacement and emergency roofing services for residential and commercial properties.",
      "Whether you have a damaged tile, leaking roof, worn-out flat roof or need a complete replacement, our experienced team can assess your requirements and recommend a suitable roofing solution.",
      "If you're searching for a reliable roofer near me, PRP Services provides professional roofing solutions across Worcester and surrounding Worcestershire areas.",
    ],
    quoteCta: { href: CONTACT, label: "Get a Free Roofing Quote" },
    callout:
      "We pride ourselves on honest assessments and quality repairs — we'll only recommend work that's genuinely needed.",
    features: [
      "Tile and slate roof repairs",
      "Complete reroofing",
      "Flat roof installation and repair",
      "Chimney pointing and repairs",
      "Guttering replacement",
      "Emergency roof repairs",
    ],
    serviceDetails: [
      {
        title: "Tile and Slate Roof Repairs",
        body: [
          "Damaged, missing or cracked roof tiles and slates can allow water to enter your property and may lead to more serious problems if left untreated.",
          "Our tile and slate roof repairs are designed to address common roofing issues while helping protect your property from further weather damage. We can inspect the affected area and recommend the appropriate repair.",
          "Whether you have loose tiles, damaged slates or signs of water ingress, PRP Services can help restore the condition of your roof.",
        ],
      },
      {
        title: "Complete Reroofing",
        body: [
          "If your roof is extensively damaged, worn or approaching the end of its service life, complete reroofing may be a more suitable option than repeated repairs.",
          "PRP Services provides professional reroofing solutions designed around your property's requirements. We can assess the existing roof and discuss suitable options before work begins.",
          "If you're planning a new roofing installation, our team can help you understand the available options and choose a suitable roofing solution for your property.",
        ],
      },
      {
        title: "Flat Roof Installation and Repair",
        body: [
          "Flat roofs require suitable materials, installation and maintenance to help prevent leaks and weather-related damage.",
          "Our flat roof installation and repair service can help with damaged, ageing or leaking flat roofs on homes, extensions, garages, commercial buildings and other properties.",
          "If you're looking for a flat roofer near me, PRP Services can assess your flat roof and recommend whether repair or replacement is the most appropriate option.",
        ],
      },
      {
        title: "Chimney Pointing and Repairs",
        body: [
          "Damaged or deteriorating chimney pointing can allow moisture to penetrate the structure and may eventually affect the surrounding brickwork.",
          "We provide chimney pointing and repairs to help maintain the condition and weather resistance of your chimney. Our team can assess visible damage and identify areas that may require attention.",
        ],
      },
      {
        title: "Guttering Replacement",
        body: [
          "Effective guttering plays an important role in directing rainwater away from your roof, walls and foundations.",
          "PRP Services provides guttering replacement for damaged, worn or ineffective guttering systems. Replacing old guttering can help improve rainwater management and protect your property from unnecessary water damage.",
          <>
            {"If you also require wider exterior property work, explore our "}
            <IntLink href={HOME}>property maintenance services</IntLink>
            {"."}
          </>,
        ],
      },
      {
        title: "Emergency Roof Repairs",
        body: [
          "Roof damage can happen unexpectedly, particularly following severe weather, high winds or heavy rainfall.",
          "Our emergency roof repairs service is designed to address urgent roofing problems and help minimise further damage to your property.",
          "If you have an active roof leak, damaged tiles or other urgent roofing issues, contact PRP Services to discuss your situation and the next steps.",
        ],
      },
    ],
    professional: {
      heading: "Professional Roofing Services in Worcester",
      body: [
        "Your roof is one of the most important protective elements of your property. Even a relatively small roofing problem can become more serious if it is not addressed promptly.",
        "PRP Services provides professional roofing and repair solutions for homeowners, landlords, businesses and other property owners across Worcester and Worcestershire.",
        "From individual tile repairs to complete reroofing and new roofing installation, we focus on identifying the underlying issue and providing a practical solution based on your property's requirements.",
        <>
          {"For general guidance relating to home improvements and building work in England, you can refer to the official "}
          <ExtLink href={PLANNING_PORTAL}>Planning Portal</ExtLink>
          {" for relevant planning information."}
        </>,
      ],
    },
    suitableFor: {
      heading: "Roofing for Residential and Commercial Properties",
      intro: ["Our roofing services can be suitable for a range of property types, including:"],
      items: [
        "Residential homes",
        "Extensions and garages",
        "Commercial properties",
        "Rental properties",
        "Flat roof buildings",
        "Outbuildings",
        "Agricultural and rural properties",
      ],
      note: [
        "Whether you require a minor repair or a complete roofing project, we can discuss your requirements and recommend a suitable approach.",
        "If you're searching for roofing services near me, our local team can provide information about the roofing options available for your property.",
      ],
    },
    whyChoose: [
      {
        title: "Local Roofing Expertise",
        body: "We provide roofing and repair services throughout Worcester and Worcestershire. If you're searching for a roofer near me, our local service can help you address roofing problems and discuss suitable solutions.",
      },
      {
        title: "Complete Range of Roofing Services",
        body: "From tile and slate repairs to flat roof installation, complete reroofing, chimney repairs, guttering replacement and emergency roofing, we offer a range of services to meet different requirements.",
      },
      {
        title: "Professional Approach",
        body: "Every roofing project is different. We assess the condition and requirements of your roof before recommending an appropriate repair, maintenance or replacement solution.",
      },
      {
        title: "Solutions for Different Roofing Problems",
        body: "Whether your roof has missing tiles, damaged slates, leaks, deteriorating pointing or an ageing flat roof, we can discuss the problem and help determine the most suitable next step.",
      },
    ],
    coverage: {
      heading: "Roofing Services Across Worcester and Worcestershire",
      body: [
        "PRP Services provides professional roofing services in Worcester and surrounding Worcestershire areas.",
        "If you're searching for roofing services near me, a roofer near me or a flat roofer near me, our team can discuss your requirements and help identify a suitable roofing solution.",
        "From emergency repairs and guttering replacement to complete reroofing and new roofing installation, we provide roofing services for a range of residential and commercial properties.",
        <>
          {"You can also explore our "}
          <IntLink href={HOME}>property maintenance services</IntLink>
          {" or "}
          <IntLink href={LANDSCAPING}>landscaping services</IntLink>
          {" if you require additional work around your property."}
        </>,
      ],
    },
    faqs: [
      {
        q: "What roofing services do you provide in Worcester?",
        a: "We provide tile and slate roof repairs, complete reroofing, flat roof installation and repair, chimney pointing and repairs, guttering replacement and emergency roof repairs.",
      },
      {
        q: "Do you repair damaged roof tiles and slates?",
        a: "Yes. We provide tile and slate roof repairs for damaged, cracked, loose or missing roofing materials. The appropriate repair will depend on the condition and extent of the damage.",
      },
      {
        q: "Do you provide new roofing installation?",
        a: "Yes. PRP Services provides complete reroofing and new roofing installation solutions based on the property's requirements.",
      },
      {
        q: "Do you repair flat roofs?",
        a: "Yes. We provide flat roof repair as well as flat roof installation for suitable residential and commercial properties.",
      },
      {
        q: "Can you help with an emergency roof leak?",
        a: "Yes. Our emergency roof repair service can help address urgent roofing problems such as leaks and weather-related damage. Contact us as soon as possible to discuss the issue.",
      },
      {
        q: "Do you replace guttering?",
        a: "Yes. We provide guttering replacement for damaged, worn or ineffective guttering systems.",
      },
      {
        q: "Do you provide roofing services in Worcestershire?",
        a: "Yes. PRP Services provides roofing and repair services in Worcester and surrounding areas of Worcestershire.",
      },
      {
        q: "How can I get a roofing quote?",
        a: "Contact PRP Services with details of your roofing requirements. Our team can discuss your project and advise you on the next steps for arranging your roofing service.",
      },
    ],
    closingHeading: "Get Your Free Roofing Quote",
    closing: [
      "Need a reliable roofing solution for your property?",
      "Whether you need tile and slate roof repairs, complete reroofing, flat roof installation and repair, chimney repairs, guttering replacement or emergency roof repairs, PRP Services is here to help.",
      "If you're looking for a roofer near me, need roofing services near me, or are planning a new roofing installation, contact PRP Services today for a free, no-obligation quote.",
    ],
    closingCta: <IntLink href={CONTACT}>Contact PRP Services for a Free Roofing Quote</IntLink>,
  },
  "driveways-patios-worcester": {
    name: "Patios & Driveways",
    metaTitle:
      "Patios & Driveways Installation in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services delivers quality patios & driveways across Worcestershire. Durable finishes & expert installation book your free consultation today, it's easy!",
    gradient: "linear-gradient(160deg, #3d2a1a 0%, #5e4a2d 100%)",
    intro: [
      "Looking for reliable patio and driveway installation near me in Worcester, Worcestershire? PRP Services provides professional patio and driveway installation, paving, surfacing, edging and drainage solutions for residential and commercial properties.",
      "From block paving and natural stone patios to concrete driveways and tarmac surfacing, we provide practical and attractive outdoor solutions designed around your property's requirements.",
      "If you're searching for patio services near me, our experienced team can help you choose a suitable material and finish for your garden, driveway or outdoor area.",
    ],
    quoteCta: { href: CONTACT, label: "Get a Free Quote" },
    callout:
      "Every driveway and patio is installed with proper foundations and drainage to ensure it stands the test of time.",
    features: [
      "Block paving driveways and patios",
      "Natural stone installation",
      "Concrete driveways",
      "Tarmac surfacing",
      "Edging and border work",
      "Drainage solutions",
    ],
    serviceDetails: [
      {
        title: "Block Paving Driveways and Patios",
        body: [
          "Block paving is a versatile option for both driveways and patios. It can create an attractive, durable surface while allowing different patterns, layouts and edging styles to suit your property.",
          "PRP Services provides block paving driveways and patios for homeowners and other property owners across Worcester. We can help you select a suitable layout and finish based on the available space and intended use.",
          "Whether you're replacing an existing driveway or creating a new patio area, professional preparation and installation can help achieve a long-lasting finish.",
        ],
      },
      {
        title: "Natural Stone Installation",
        body: [
          "Natural stone can add a distinctive and attractive appearance to patios, paths and other outdoor areas. With a range of textures and finishes available, it can complement both traditional and modern properties.",
          "Our natural stone installation service is suitable for customers looking to create an attractive outdoor space with a high-quality finish.",
          "We can discuss your requirements and help determine a suitable natural stone solution for your property.",
        ],
      },
      {
        title: "Concrete Driveways",
        body: [
          "Concrete driveways provide a practical and durable surface for residential properties and other suitable applications.",
          "PRP Services can install concrete driveways based on the requirements of your property, including the available space, access and intended use.",
          "A professionally prepared and installed driveway can improve accessibility while creating a clean and practical entrance to your property.",
        ],
      },
      {
        title: "Tarmac Surfacing",
        body: [
          "Tarmac is a popular surfacing option for driveways and other areas where a durable and practical surface is required.",
          "Our tarmac surfacing service can provide a smooth and functional finish for suitable residential and commercial applications.",
          "We can assess the area and discuss the most appropriate surfacing option for your requirements.",
        ],
      },
      {
        title: "Edging and Border Work",
        body: [
          "Edging and borders can provide an important finishing detail for patios, driveways, paths and landscaped areas.",
          "Our edging and border work helps define different areas, create a neat finish and complement the overall design of your outdoor space.",
          "From simple borders to more defined edging solutions, we can help create a finish that works with your chosen paving or surfacing material.",
        ],
      },
      {
        title: "Drainage Solutions",
        body: [
          "Effective drainage is an important consideration when installing a new patio or driveway. Poor water management can result in standing water, surface damage and other issues.",
          "PRP Services provides drainage solutions as part of suitable patio and driveway projects, helping manage surface water and direct it away from areas where it could cause problems.",
          "Where required, we can consider the existing layout and drainage requirements when planning your outdoor surface installation.",
        ],
      },
    ],
    professional: {
      heading: "Professional Patio and Driveway Installation in Worcester",
      body: [
        "A new patio or driveway needs more than an attractive surface. Proper preparation, ground conditions, drainage, materials and installation all contribute to the performance and appearance of the finished area.",
        "PRP Services provides professional patio and driveway installation across Worcester and Worcestershire. We work with different materials and finishes to create outdoor surfaces suited to individual properties.",
        "Whether you are replacing an old driveway, creating a new patio or improving your property's outdoor space, we can discuss your requirements and recommend a suitable approach.",
        <>
          {"For general planning and home improvement information in England, you can refer to the official "}
          <ExtLink href={PLANNING_PORTAL}>Planning Portal</ExtLink>
          {"."}
        </>,
      ],
    },
    suitableFor: {
      heading: "Patios and Driveways for Local Properties",
      intro: [
        "Our patio and driveway services can be suitable for a range of residential and commercial requirements, including:",
      ],
      items: [
        "Block paving driveways",
        "Block paving patios",
        "Natural stone patios",
        "Concrete driveways",
        "Tarmac driveways and surfacing",
        "Patio areas",
        "Driveway replacement",
        "Edging and border work",
        "Surface drainage solutions",
      ],
      note: [
        "If you're searching for patio services near me, we can discuss your available options and help you choose a suitable solution for your property.",
        <>
          {"For customers looking to improve their wider outdoor space, you can also explore our "}
          <IntLink href={LANDSCAPING}>landscaping services</IntLink>
          {"."}
        </>,
      ],
    },
    whyChoose: [
      {
        title: "Local Expertise",
        body: "We provide patio and driveway services in Worcester and surrounding Worcestershire areas. If you're searching for patio and driveways installation near me, our local team can discuss your project and available options.",
      },
      {
        title: "Range of Materials",
        body: "From block paving and natural stone to concrete and tarmac, we provide a range of surfacing options to suit different properties, styles and requirements.",
      },
      {
        title: "Complete Outdoor Surface Solutions",
        body: "Our services cover more than the main surface. We can also provide edging, border work and drainage solutions to help create a complete and properly finished outdoor area.",
      },
      {
        title: "Solutions Tailored to Your Property",
        body: "Every driveway and patio project is different. We consider the available space, access, existing surface, intended use and overall appearance when discussing your requirements.",
      },
    ],
    coverage: {
      heading: "Patios & Driveways Across Worcester and Worcestershire",
      body: [
        "PRP Services provides professional patio and driveway solutions throughout Worcester, Worcestershire and surrounding areas.",
        "If you're searching for patio and driveways installation near me or patio services near me, our team can help with a range of paving and surfacing requirements.",
        "Whether you need a new block paving driveway, natural stone patio, concrete driveway, tarmac surface, edging or drainage solution, we can discuss your project and recommend a suitable approach.",
        <>
          {"You can also explore our "}
          <IntLink href={LANDSCAPING}>landscaping services</IntLink>
          {" or "}
          <IntLink href={HOME}>property maintenance services</IntLink>
          {" for additional work around your property."}
        </>,
      ],
    },
    faqs: [
      {
        q: "What patio and driveway services do you provide?",
        a: "We provide block paving driveways and patios, natural stone installation, concrete driveways, tarmac surfacing, edging and border work, and drainage solutions.",
      },
      {
        q: "Do you install block paving patios and driveways?",
        a: "Yes. We provide block paving installation for both patios and driveways, with the layout and finish selected according to your property's requirements.",
      },
      {
        q: "Do you install natural stone patios?",
        a: "Yes. Our natural stone installation service can be used for suitable patios and outdoor areas where a natural and attractive finish is required.",
      },
      {
        q: "Do you install concrete driveways?",
        a: "Yes. We provide concrete driveway installation for suitable residential and commercial properties.",
      },
      {
        q: "Do you provide tarmac surfacing?",
        a: "Yes. Tarmac surfacing is available for suitable driveway and outdoor surface projects.",
      },
      {
        q: "Can you improve drainage around a driveway or patio?",
        a: "Yes. We provide drainage solutions as part of suitable patio and driveway projects to help manage surface water effectively.",
      },
      {
        q: "Do you provide patio services in Worcester?",
        a: "Yes. PRP Services provides patio services for customers across Worcester and surrounding Worcestershire areas. Contact us to discuss your requirements.",
      },
      {
        q: "How can I get a quote for a new patio or driveway?",
        a: "Contact PRP Services with details of your project. We can discuss your requirements and provide information about the next steps for arranging your patio or driveway installation.",
      },
    ],
    closingHeading: "Get Your Free Patio & Driveway Quote",
    closing: [
      "Ready to transform your outdoor space?",
      "Whether you need block paving, natural stone installation, concrete driveways, tarmac surfacing, edging and border work or drainage solutions, PRP Services can help create a practical and attractive outdoor surface.",
      "If you're searching for patio and driveways installation near me or patio services near me in Worcester, contact PRP Services today for a free, no-obligation quote.",
    ],
    closingCta: <IntLink href={CONTACT}>Contact PRP Services for a Free Quote</IntLink>,
  },
  "landscaping-services": {
    name: "Landscaping & Tree Surgery",
    metaTitle:
      "Landscaping & Tree Surgery in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services provides professional landscaping & tree surgery across Worcestershire. Skilled team, tidy results & safe practices speak to us today!",
    gradient: "linear-gradient(160deg, #1a3d1a 0%, #2a5e2a 100%)",
    intro: [
      "Looking for professional landscaping services near me in Worcester, Worcestershire? PRP Services provides a complete range of landscaping and tree surgery solutions for homeowners, landlords and commercial properties.",
      "From garden design and landscaping to tree felling, pruning, stump removal, lawn turfing, planting and garden clearance, our team can help improve the appearance, usability and condition of your outdoor space.",
      "If you're searching for reliable landscaping near me, PRP Services can discuss your requirements and recommend a practical solution for your garden or property in Worcester and surrounding Worcestershire areas.",
    ],
    quoteCta: { href: CONTACT, label: "Get a Free Landscaping Quote" },
    callout:
      "All tree surgery work is carried out by trained professionals with the proper equipment and insurance.",
    features: [
      "Garden design and landscaping",
      "Tree felling and pruning",
      "Stump removal and grinding",
      "Lawn turfing and seeding",
      "Planting and borders",
      "Garden clearance",
    ],
    serviceDetails: [
      {
        title: "Garden Design and Landscaping",
        body: [
          "A well-designed garden can make your outdoor space more attractive, practical and enjoyable. Our garden design and landscaping services can help transform tired, unused or poorly organised outdoor areas.",
          "We can work with your requirements to create a garden layout that considers the available space, existing features, planting areas and intended use.",
          "Whether you want to improve your garden's appearance or create a more functional outdoor space, PRP Services can help with your landscaping project.",
        ],
      },
      {
        title: "Tree Felling and Pruning",
        body: [
          "Trees can become overgrown, damaged or unsuitable for their current location, making professional maintenance important for the surrounding garden and property.",
          "Our tree felling and pruning services can help manage trees and maintain a more suitable outdoor environment. We can discuss the condition and requirements of your trees before recommending the appropriate work.",
          <>
            {"For general information about trees, woodland and tree management in England, you can also refer to relevant "}
            <ExtLink href={GOV_WOODLAND}>GOV.UK guidance on trees and woodland</ExtLink>
            {"."}
          </>,
        ],
      },
      {
        title: "Stump Removal and Grinding",
        body: [
          "After a tree has been removed, the remaining stump can take up valuable space and make future landscaping or planting more difficult.",
          "PRP Services provides stump removal and grinding to help clear unwanted tree stumps and prepare the area for future use.",
          "Removing an old stump can make it easier to redesign your garden, create new planting areas or improve the overall appearance of your outdoor space.",
        ],
      },
      {
        title: "Lawn Turfing and Seeding",
        body: [
          "A healthy lawn can make a significant difference to the appearance and usability of a garden. We provide lawn turfing and seeding solutions for customers looking to establish or improve their lawn.",
          "Whether you're creating a new lawn or replacing an existing area, we can discuss suitable options based on your garden and requirements.",
        ],
      },
      {
        title: "Planting and Borders",
        body: [
          "Planting and borders can add colour, structure and character to an outdoor space. Our planting and borders service can help create defined areas that complement the overall garden design.",
          "We can incorporate planting areas and borders into wider landscaping projects or improve existing garden spaces.",
        ],
      },
      {
        title: "Garden Clearance",
        body: [
          "Overgrown gardens, unwanted vegetation, old plants and accumulated garden waste can make an outdoor area difficult to use and maintain.",
          "Our garden clearance service helps clear unwanted growth, debris and other garden materials so the space can be prepared for maintenance, landscaping or redesign.",
          "Whether you need a small garden cleared or a larger outdoor area prepared for a landscaping project, PRP Services can discuss your requirements.",
        ],
      },
    ],
    professional: {
      heading: "Professional Landscaping in Worcester",
      body: [
        "A successful landscaping project starts with understanding how the outdoor space will be used. Garden layout, ground conditions, planting requirements, access and maintenance should all be considered when planning improvements.",
        "PRP Services provides professional landscaping services in Worcester and Worcestershire, helping customers improve gardens and outdoor areas with practical, well-planned solutions.",
        "From lawn installation and planting to garden clearance and tree work, we can provide services based on your property's individual requirements.",
        <>
          {"If you're planning additional exterior improvements, you can also explore our "}
          <IntLink href={FENCING}>fencing services</IntLink>
          {" for garden boundaries, privacy and property fencing."}
        </>,
      ],
    },
    suitableFor: {
      heading: "Landscaping for Different Outdoor Spaces",
      intro: [
        "Our landscaping and tree surgery services can be suitable for a range of outdoor areas, including:",
      ],
      items: [
        "Residential gardens",
        "Front and rear gardens",
        "Large outdoor spaces",
        "Rental properties",
        "Commercial gardens",
        "Overgrown gardens",
        "Lawn areas",
        "Planting and border areas",
        "Areas requiring tree maintenance",
      ],
      note: [
        "If you're searching for landscaping near me, PRP Services can discuss your garden requirements and help identify suitable services for your property.",
        <>
          {"For wider property improvement requirements, our "}
          <IntLink href={HOME}>property maintenance services</IntLink>
          {" can provide additional support."}
        </>,
      ],
    },
    whyChoose: [
      {
        title: "Local Landscaping Expertise",
        body: "We provide landscaping and tree surgery services throughout Worcester and surrounding Worcestershire areas. If you're searching for landscaping services near me, our local team can discuss your requirements and available options.",
      },
      {
        title: "Complete Landscaping Services",
        body: "From garden design and lawn work to planting, borders, clearance and tree surgery, we offer a range of services to help improve different aspects of your outdoor space.",
      },
      {
        title: "Practical Garden Solutions",
        body: "Every garden is different. We consider the available space, existing features, intended use and your requirements when discussing the most suitable approach.",
      },
      {
        title: "Services for Different Property Types",
        body: "Our landscaping services can be suitable for homeowners, landlords and commercial property owners looking to improve or maintain their outdoor spaces.",
      },
    ],
    coverage: {
      heading: "Landscaping & Tree Surgery Across Worcester and Worcestershire",
      body: [
        "PRP Services provides professional landscaping and tree surgery in Worcester, Worcestershire and surrounding areas.",
        "If you're searching for landscaping near me or landscaping services near me, our team can help with garden design, tree work, lawn installation, planting, borders and garden clearance.",
        "Whether you need to transform an entire garden, remove an unwanted tree stump, improve your lawn or clear an overgrown outdoor area, we can discuss your project and recommend a suitable solution.",
        <>
          {"You can also explore our "}
          <IntLink href={FENCING}>fencing services</IntLink>
          {" or "}
          <IntLink href={PATIOS}>patios and driveways services</IntLink>
          {" if you are planning a wider garden or exterior improvement project."}
        </>,
      ],
    },
    faqs: [
      {
        q: "What landscaping services do you provide in Worcester?",
        a: "We provide garden design and landscaping, tree felling and pruning, stump removal and grinding, lawn turfing and seeding, planting and borders, and garden clearance.",
      },
      {
        q: "Do you provide garden design and landscaping?",
        a: "Yes. Our garden design and landscaping service can help transform outdoor spaces based on the property's layout, intended use and your requirements.",
      },
      {
        q: "Do you provide tree pruning and tree felling?",
        a: "Yes. We provide tree felling and pruning services for suitable properties. The appropriate work will depend on the condition, location and requirements of the tree.",
      },
      {
        q: "Can you remove tree stumps?",
        a: "Yes. We provide stump removal and grinding to help clear unwanted stumps and prepare the area for future landscaping or planting.",
      },
      {
        q: "Do you install new lawns?",
        a: "Yes. Our lawn turfing and seeding service can help establish new lawns or improve existing lawn areas.",
      },
      {
        q: "Do you provide garden clearance?",
        a: "Yes. We provide garden clearance to remove unwanted vegetation, debris and other garden materials from outdoor spaces.",
      },
      {
        q: "Do you provide landscaping services in Worcestershire?",
        a: "Yes. PRP Services provides landscaping and tree surgery services in Worcester and surrounding Worcestershire areas.",
      },
      {
        q: "How can I get a landscaping quote?",
        a: "Contact PRP Services with details of your garden or landscaping requirements. Our team can discuss your project and advise you on the next steps for arranging your service.",
      },
    ],
    closingHeading: "Get Your Free Landscaping Quote",
    closing: [
      "Ready to improve your garden or outdoor space?",
      "Whether you need garden design and landscaping, tree felling and pruning, stump removal and grinding, lawn turfing and seeding, planting and borders or garden clearance, PRP Services can help.",
      "If you're searching for landscaping near me or landscaping services near me in Worcester, contact PRP Services today for a free, no-obligation quote.",
    ],
    closingCta: <IntLink href={CONTACT}>Contact PRP Services for a Free Landscaping Quote</IntLink>,
  },
};

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES[params.slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES[params.slug];
  if (!service) notFound();

  const otherServices = Object.entries(SERVICES).filter(([slug]) => slug !== params.slug);
  const schema = serviceSchemas[params.slug];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <JsonLd data={faqSchema} />
      {/* Banner */}
      <section
        className="py-24 px-4 text-center"
        style={{
          background: `linear-gradient(rgba(8,18,38,0.45) 0%, rgba(8,18,38,0.68) 100%), url('${
            HERO_IMAGE[params.slug] ?? "/home-hero-1.jpg"
          }') center/cover no-repeat, ${service.gradient}`,
        }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{service.name}</h1>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>›</span>
            <span className="text-white">{service.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e3560" }}>
              {service.name} in Worcester, Worcestershire
            </h2>
            {service.intro.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <Link href={service.quoteCta.href} className="btn-navy inline-block mb-2">
              {service.quoteCta.label}
            </Link>

            <div
              className="rounded-sm p-5 my-6"
              style={{ backgroundColor: "#f0f5fb", borderLeft: "4px solid #2d5486" }}>
              <p className="text-sm text-gray-700 leading-relaxed">{service.callout}</p>
            </div>

            <h3 className="font-bold mb-4 text-base" style={{ color: "#1e3560" }}>
              What&apos;s included:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#2d5486" }}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-sm p-6 mb-5" style={{ backgroundColor: "#1e3560" }}>
              <h3 className="text-white font-bold mb-3">Get in touch</h3>
              <p className="text-sm mb-5" style={{ color: "#b0c4d8" }}>
                Ready to get started? Call us or send a message and we&apos;ll get back to you
                quickly.
              </p>
              <a
                href="tel:+447360270797"
                className="block text-center text-white font-bold py-3 rounded-sm mb-3 hover:opacity-90 transition-opacity text-sm tracking-wide"
                style={{ backgroundColor: "#2d5486" }}>
                +44 7360 270797
              </a>
              <Link
                href="/contact"
                className="block text-center text-white font-bold py-3 rounded-sm hover:opacity-90 transition-opacity text-sm tracking-wide"
                style={{ backgroundColor: "#1a3a6e" }}>
                Send a Message
              </Link>
            </div>

            <div className="border border-gray-100 rounded-sm p-5">
              <h4 className="font-bold mb-3 text-sm" style={{ color: "#1e3560" }}>
                Other Services
              </h4>
              <ul className="space-y-2">
                {otherServices.map(([slug, s]) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="text-sm font-medium hover:underline"
                      style={{ color: "#2d5486" }}>
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed service breakdown */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">WHAT WE OFFER</span>
            <h2 className="section-heading">Our {service.name} Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.serviceDetails.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-sm p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-3 text-lg" style={{ color: "#1e3560" }}>
                  {d.title}
                </h3>
                {d.body.map((p, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
          {service.afterDetails && (
            <p className="text-sm text-gray-600 leading-relaxed mt-8 text-center max-w-3xl mx-auto">
              {service.afterDetails}
            </p>
          )}
        </div>
      </section>

      {/* Professional installation / approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading mb-6 text-center">{service.professional.heading}</h2>
          {service.professional.body.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Suitable for */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-4">{service.suitableFor.heading}</h2>
          {service.suitableFor.intro.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl mx-auto">
              {p}
            </p>
          ))}
          <ul className="flex flex-wrap justify-center gap-3 mt-6">
            {service.suitableFor.items.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white border border-gray-100"
                style={{ color: "#1e3560" }}>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#2d5486" }}
                />
                {item}
              </li>
            ))}
          </ul>
          {service.suitableFor.note?.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mt-6 max-w-2xl mx-auto">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Why choose PRP Services */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1e3560" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "#7a9abd" }}>
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Why Choose PRP Services for {service.name}?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyChoose.map((w) => (
              <div
                key={w.title}
                className="rounded-sm p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="text-white font-bold mb-3 text-base">{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#b0c4d8" }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase — curated photos on one side, content on the other */}
      {SERVICE_SHOWCASE[params.slug] && (
        <section className="py-20 px-4 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side — natural aspect ratios, never cropped */}
            <div className="relative">
              {/* soft layered backdrop for depth */}
              <div
                className="absolute -inset-3 sm:-inset-5 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, rgba(30,53,96,0.07), rgba(45,84,134,0.04))" }}
              />
              {SERVICE_SHOWCASE[params.slug].length === 1 ? (
                /* Single feature image */
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SERVICE_SHOWCASE[params.slug][0]}
                    alt={`${service.name} project in Worcestershire`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              ) : (
                /* Masonry collage — keeps each photo's full, uncropped shape */
                <div className="columns-2 gap-3 sm:gap-4">
                  {SERVICE_SHOWCASE[params.slug].map((src) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={src}
                      src={src}
                      alt={`${service.name} project in Worcestershire`}
                      loading="lazy"
                      className="w-full h-auto block rounded-xl shadow-md mb-3 sm:mb-4 break-inside-avoid"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <span className="section-label">OUR RECENT WORK</span>
              <h2 className="section-heading mb-5">Craftsmanship that speaks for itself</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Take a look at a few of our recent {service.name.toLowerCase()} projects from across
                Worcestershire. Every job is completed with the same care, quality materials, and
                attention to detail &mdash; whatever the size.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                We&apos;d love to do the same for your property. Browse the full gallery or get in
                touch for a free, no-obligation quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-navy">View Full Gallery</Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-[13px] font-bold uppercase tracking-wide border-2 transition-all hover:bg-[#1e3560] hover:text-white hover:-translate-y-0.5"
                  style={{ borderColor: "#1e3560", color: "#1e3560" }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Coverage / areas served */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-6">{service.coverage.heading}</h2>
          {service.coverage.body.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">FAQS</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-sm border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-semibold text-sm" style={{ color: "#1e3560" }}>
                  {f.q}
                  <svg
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#2d5486" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 -mt-1 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-5">{service.closingHeading}</h2>
          {service.closing.map((p, i) => (
            <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <p className="text-sm mb-6">{service.closingCta}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-navy">Get a Free Quote</Link>
            <a
              href="tel:+447360270797"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-[13px] font-bold uppercase tracking-wide border-2 transition-all hover:bg-[#1e3560] hover:text-white hover:-translate-y-0.5"
              style={{ borderColor: "#1e3560", color: "#1e3560" }}>
              Call +44 7360 270797
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
