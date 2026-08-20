import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { serviceSchemas } from "@/lib/structuredData";

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
  intro: string[];
  callout: string;
  features: string[];
  serviceDetails: { title: string; body: string[] }[];
  suitableFor: { heading: string; intro: string; items: string[] };
  whyChoose: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  closingHeading: string;
  closing: string[];
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
      "Looking for reliable fencing services in Worcester, Worcestershire? PRP Services provides professional fencing installation, replacement, repair and gate solutions for homes, gardens, farms and commercial properties. If you're searching for a reliable fence contractor, our experienced team can help you choose and install a practical, secure and attractive boundary for your property.",
      "From closeboard and panel fencing to post and rail, ornamental, decorative, security and agricultural fencing, we can help you choose the right solution. We also provide gate installation and repair to complete your property's boundary.",
    ],
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
    suitableFor: {
      heading: "Garden Fencing Services for Local Properties",
      intro:
        "Our fencing services are suitable for a wide range of properties and requirements, including:",
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
        body: "We provide professional fencing services throughout Worcester and Worcestershire, so our local team can discuss your requirements and recommend a suitable fencing solution.",
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
        a: "Yes. PRP Services provides fencing services throughout Worcester and surrounding areas of Worcestershire. Contact our team to discuss your requirements.",
      },
      {
        q: "How can I get a quote for fencing?",
        a: "Contact PRP Services with details of your fencing requirements. We can discuss your project and provide information about the next steps for arranging your fencing installation.",
      },
    ],
    closingHeading: "Get Your Free Fencing Quote",
    closing: [
      "Ready to improve your property's boundary with professional fencing? Whether you need garden fencing, closeboard fencing, panel fencing, security fencing, agricultural fencing, decorative fencing or gate installation, PRP Services is here to help.",
      "Contact PRP Services today for a free, no-obligation quote for fencing in Worcester and the surrounding Worcestershire areas.",
    ],
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
      "Whether you have a damaged tile, leaking roof, worn-out flat roof or need a complete replacement, our experienced team can assess your requirements and recommend a suitable roofing solution across Worcester and surrounding Worcestershire areas.",
    ],
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
          "Our tile and slate roof repairs are designed to address common roofing issues while helping protect your property from further weather damage. We can inspect the affected area and recommend the appropriate repair, whether you have loose tiles, damaged slates or signs of water ingress.",
        ],
      },
      {
        title: "Complete Reroofing",
        body: [
          "If your roof is extensively damaged, worn or approaching the end of its service life, complete reroofing may be a more suitable option than repeated repairs.",
          "PRP Services provides professional reroofing solutions designed around your property's requirements. We can assess the existing roof and discuss suitable options before work begins.",
        ],
      },
      {
        title: "Flat Roof Installation and Repair",
        body: [
          "Flat roofs require suitable materials, installation and maintenance to help prevent leaks and weather-related damage.",
          "Our flat roof installation and repair service can help with damaged, ageing or leaking flat roofs on homes, extensions, garages, commercial buildings and other properties. We can assess your flat roof and recommend whether repair or replacement is the most appropriate option.",
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
        ],
      },
      {
        title: "Emergency Roof Repairs",
        body: [
          "Roof damage can happen unexpectedly, particularly following severe weather, high winds or heavy rainfall.",
          "Our emergency roof repairs service is designed to address urgent roofing problems and help minimise further damage to your property. If you have an active roof leak, damaged tiles or other urgent roofing issues, contact PRP Services to discuss your situation and the next steps.",
        ],
      },
    ],
    suitableFor: {
      heading: "Roofing for Residential and Commercial Properties",
      intro:
        "Our roofing services can be suitable for a range of property types, including:",
      items: [
        "Residential homes",
        "Extensions and garages",
        "Commercial properties",
        "Rental properties",
        "Flat roof buildings",
        "Outbuildings",
        "Agricultural and rural properties",
      ],
    },
    whyChoose: [
      {
        title: "Local Roofing Expertise",
        body: "We provide roofing and repair services throughout Worcester and Worcestershire. Our local service can help you address roofing problems and discuss suitable solutions.",
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
        q: "How can I get a roofing quote?",
        a: "Contact PRP Services with details of your roofing requirements. Our team can discuss your project and advise you on the next steps for arranging your roofing service.",
      },
    ],
    closingHeading: "Get Your Free Roofing Quote",
    closing: [
      "Need a reliable roofing solution for your property? Whether you need tile and slate roof repairs, complete reroofing, flat roof installation and repair, chimney repairs, guttering replacement or emergency roof repairs, PRP Services is here to help.",
      "Contact PRP Services today for a free, no-obligation quote for roofing in Worcester and the surrounding Worcestershire areas.",
    ],
  },
  "driveways-patios-worcester": {
    name: "Patios & Driveways",
    metaTitle:
      "Patios & Driveways Installation in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services delivers quality patios & driveways across Worcestershire. Durable finishes & expert installation book your free consultation today, it's easy!",
    gradient: "linear-gradient(160deg, #3d2a1a 0%, #5e4a2d 100%)",
    intro: [
      "Looking for reliable patio and driveway installation in Worcester, Worcestershire? PRP Services provides professional patio and driveway installation, paving, surfacing, edging and drainage solutions for residential and commercial properties.",
      "From block paving and natural stone patios to concrete driveways and tarmac surfacing, we provide practical and attractive outdoor solutions designed around your property's requirements. Our experienced team can help you choose a suitable material and finish for your garden, driveway or outdoor area.",
    ],
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
          "PRP Services provides block paving driveways and patios for homeowners and other property owners across Worcester. We can help you select a suitable layout and finish based on the available space and intended use, whether you're replacing an existing driveway or creating a new patio area.",
        ],
      },
      {
        title: "Natural Stone Installation",
        body: [
          "Natural stone can add a distinctive and attractive appearance to patios, paths and other outdoor areas. With a range of textures and finishes available, it can complement both traditional and modern properties.",
          "Our natural stone installation service is suitable for customers looking to create an attractive outdoor space with a high-quality finish. We can discuss your requirements and help determine a suitable natural stone solution for your property.",
        ],
      },
      {
        title: "Concrete Driveways",
        body: [
          "Concrete driveways provide a practical and durable surface for residential properties and other suitable applications.",
          "PRP Services can install concrete driveways based on the requirements of your property, including the available space, access and intended use. A professionally prepared and installed driveway can improve accessibility while creating a clean and practical entrance to your property.",
        ],
      },
      {
        title: "Tarmac Surfacing",
        body: [
          "Tarmac is a popular surfacing option for driveways and other areas where a durable and practical surface is required.",
          "Our tarmac surfacing service can provide a smooth and functional finish for suitable residential and commercial applications. We can assess the area and discuss the most appropriate surfacing option for your requirements.",
        ],
      },
      {
        title: "Edging and Border Work",
        body: [
          "Edging and borders can provide an important finishing detail for patios, driveways, paths and landscaped areas.",
          "Our edging and border work helps define different areas, create a neat finish and complement the overall design of your outdoor space. From simple borders to more defined edging solutions, we can help create a finish that works with your chosen paving or surfacing material.",
        ],
      },
      {
        title: "Drainage Solutions",
        body: [
          "Effective drainage is an important consideration when installing a new patio or driveway. Poor water management can result in standing water, surface damage and other issues.",
          "PRP Services provides drainage solutions as part of suitable patio and driveway projects, helping manage surface water and direct it away from areas where it could cause problems.",
        ],
      },
    ],
    suitableFor: {
      heading: "Patios and Driveways for Local Properties",
      intro:
        "Our patio and driveway services can be suitable for a range of residential and commercial requirements, including:",
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
    },
    whyChoose: [
      {
        title: "Local Expertise",
        body: "We provide patio and driveway services in Worcester and surrounding Worcestershire areas, so our local team can discuss your project and available options.",
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
        q: "How can I get a quote for a new patio or driveway?",
        a: "Contact PRP Services with details of your project. We can discuss your requirements and provide information about the next steps for arranging your patio or driveway installation.",
      },
    ],
    closingHeading: "Get Your Free Patio & Driveway Quote",
    closing: [
      "Ready to transform your outdoor space? Whether you need block paving, natural stone installation, concrete driveways, tarmac surfacing, edging and border work or drainage solutions, PRP Services can help create a practical and attractive outdoor surface.",
      "Contact PRP Services today for a free, no-obligation quote for patios and driveways in Worcester and the surrounding Worcestershire areas.",
    ],
  },
  "landscaping-services": {
    name: "Landscaping & Tree Surgery",
    metaTitle:
      "Landscaping & Tree Surgery in Worcestershire | PRP Services",
    metaDescription:
      "PRP Services provides professional landscaping & tree surgery across Worcestershire. Skilled team, tidy results & safe practices speak to us today!",
    gradient: "linear-gradient(160deg, #1a3d1a 0%, #2a5e2a 100%)",
    intro: [
      "Looking for professional landscaping services in Worcester, Worcestershire? PRP Services provides a complete range of landscaping and tree surgery solutions for homeowners, landlords and commercial properties.",
      "From garden design and landscaping to tree felling, pruning, stump removal, lawn turfing, planting and garden clearance, our team can help improve the appearance, usability and condition of your outdoor space.",
    ],
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
          "We can work with your requirements to create a garden layout that considers the available space, existing features, planting areas and intended use, whether you want to improve your garden's appearance or create a more functional outdoor space.",
        ],
      },
      {
        title: "Tree Felling and Pruning",
        body: [
          "Trees can become overgrown, damaged or unsuitable for their current location, making professional maintenance important for the surrounding garden and property.",
          "Our tree felling and pruning services can help manage trees and maintain a more suitable outdoor environment. We can discuss the condition and requirements of your trees before recommending the appropriate work.",
        ],
      },
      {
        title: "Stump Removal and Grinding",
        body: [
          "After a tree has been removed, the remaining stump can take up valuable space and make future landscaping or planting more difficult.",
          "PRP Services provides stump removal and grinding to help clear unwanted tree stumps and prepare the area for future use, making it easier to redesign your garden, create new planting areas or improve the overall appearance of your outdoor space.",
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
          "Our garden clearance service helps clear unwanted growth, debris and other garden materials so the space can be prepared for maintenance, landscaping or redesign, whether you need a small garden cleared or a larger outdoor area prepared for a project.",
        ],
      },
    ],
    suitableFor: {
      heading: "Landscaping for Different Outdoor Spaces",
      intro:
        "Our landscaping and tree surgery services can be suitable for a range of outdoor areas, including:",
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
    },
    whyChoose: [
      {
        title: "Local Landscaping Expertise",
        body: "We provide landscaping and tree surgery services throughout Worcester and surrounding Worcestershire areas, so our local team can discuss your requirements and available options.",
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
        q: "How can I get a landscaping quote?",
        a: "Contact PRP Services with details of your garden or landscaping requirements. Our team can discuss your project and advise you on the next steps for arranging your service.",
      },
    ],
    closingHeading: "Get Your Free Landscaping Quote",
    closing: [
      "Ready to improve your garden or outdoor space? Whether you need garden design and landscaping, tree felling and pruning, stump removal and grinding, lawn turfing and seeding, planting and borders or garden clearance, PRP Services can help.",
      "Contact PRP Services today for a free, no-obligation quote for landscaping in Worcester and the surrounding Worcestershire areas.",
    ],
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
            {service.intro.map((p) => (
              <p key={p} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div
              className="rounded-sm p-5 my-6"
              style={{ backgroundColor: "#f0f5fb", borderLeft: "4px solid #2d5486" }}>
              <p className="text-sm text-gray-700 leading-relaxed">{service.callout}</p>
            </div>

            <h3 className="font-bold mb-4 text-base" style={{ color: "#1e3560" }}>
              What&apos;s included:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
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

            <Link href="/contact" className="btn-navy">
              Get a Free Quote
            </Link>
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
                {d.body.map((p) => (
                  <p key={p} className="text-sm text-gray-600 leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable for */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-4">{service.suitableFor.heading}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            {service.suitableFor.intro}
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {service.suitableFor.items.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: "#f0f5fb", color: "#1e3560" }}>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#2d5486" }}
                />
                {item}
              </li>
            ))}
          </ul>
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

      {/* FAQ */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f9fc" }}>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading mb-5">{service.closingHeading}</h2>
          {service.closing.map((p) => (
            <p key={p} className="text-gray-600 text-sm leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
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
