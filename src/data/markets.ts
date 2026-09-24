import type { Market } from "@/types/content";

/** Dummy content. Replace with the Spring Boot `/api/markets` response. */
export const markets: Market[] = [
  {
    slug: "transport",
    name: "Transport",
    tagline: "Moving people and goods with less carbon and less friction",
    description:
      "From metro systems and high-speed rail to ports, airports and active travel networks, we plan and engineer the connections that let cities grow without grinding to a halt. Our teams combine operational modelling, structural design and passenger experience work so that new capacity actually gets used.",
    image: { alt: "A busy underground metro concourse", seed: "market-transport" },
    capabilities: [
      "Rail and metro systems engineering",
      "Aviation masterplanning and terminal design",
      "Ports, harbours and marine structures",
      "Highways, bridges and tunnels",
      "Transport demand and operations modelling",
    ],
    stats: [
      { value: "70", unit: "+", label: "Metro systems advised on worldwide" },
      { value: "1.4", unit: "bn", label: "Annual passenger journeys supported" },
    ],
    featuredProjectSlugs: ["elizabeth-line", "thomson-east-coast-line-3", "us-181-harbor-bridge"],
  },
  {
    slug: "energy",
    name: "Energy",
    tagline: "Engineering the grid and generation a net zero economy needs",
    description:
      "We work across offshore and onshore wind, solar, nuclear, hydrogen and the transmission networks that tie them together. The hard part is rarely the turbine — it is consenting, grid connection and making the economics stand up, which is where our advisory and engineering teams work side by side.",
    image: { alt: "Offshore wind turbines at dawn", seed: "market-energy" },
    capabilities: [
      "Offshore and onshore wind development",
      "Grid connection and transmission planning",
      "Solar and battery storage design",
      "Hydrogen and low-carbon fuels",
      "Energy transition strategy and due diligence",
    ],
    stats: [
      { value: "714", unit: "MW", label: "Offshore wind enabled at East Anglia One" },
      { value: "40", unit: "+", label: "Countries with energy commissions delivered" },
    ],
    featuredProjectSlugs: ["east-anglia-one", "cayanga-hillside-solar-farm"],
  },
  {
    slug: "water",
    name: "Water",
    tagline: "Securing supply, managing flood risk, restoring rivers",
    description:
      "Utilities face rising demand, ageing assets and a climate that no longer matches their design assumptions. We help them prioritise investment, design treatment and network upgrades, and build catchment-scale resilience that works with natural systems rather than against them.",
    image: { alt: "Water treatment works seen from above", seed: "market-water" },
    capabilities: [
      "Water and wastewater treatment design",
      "Flood risk and coastal resilience",
      "Catchment and river restoration",
      "Asset management and investment planning",
      "Digital twins for utility networks",
    ],
    stats: [
      { value: "8", unit: "m", label: "People served by networks we have upgraded" },
      { value: "30", unit: "%", label: "Typical leakage reduction after intervention" },
    ],
    featuredProjectSlugs: ["porthcawl-sandy-bay", "hunters-point-south", "nyc-impervious-area-study"],
  },
  {
    slug: "property",
    name: "Property",
    tagline: "Buildings that earn their carbon and hold their value",
    description:
      "Offices, homes, mixed-use districts and the retrofit of everything already standing. We design structures and building services together, so that embodied carbon, operational energy and commercial floor area are traded off deliberately instead of by accident.",
    image: { alt: "A glazed office tower against a clear sky", seed: "market-property" },
    capabilities: [
      "Structural and façade engineering",
      "Building services and MEP design",
      "Retrofit and reuse strategy",
      "Whole-life carbon assessment",
      "Fire and life safety engineering",
    ],
    stats: [
      { value: "45", unit: "%", label: "Average embodied carbon saving on reuse schemes" },
      { value: "900", unit: "+", label: "Certified sustainable buildings delivered" },
    ],
    featuredProjectSlugs: ["ws2-building-design", "kai-tak-development"],
  },
  {
    slug: "data-centres",
    name: "Data centres",
    tagline: "Compute capacity without runaway water and power demand",
    description:
      "AI workloads have changed the brief. Rack densities, liquid cooling and grid constraints now drive site selection as much as land price. We advise hyperscalers, colocation providers and enterprises on where to build, how to cool it and how to stand up capacity on a credible schedule.",
    image: { alt: "Rows of server racks in a cold aisle", seed: "market-data-centres" },
    capabilities: [
      "Site selection and feasibility",
      "Liquid and hybrid cooling design",
      "Power resilience and grid strategy",
      "Commissioning and reliability assurance",
      "Water stewardship and heat reuse",
    ],
    stats: [
      { value: "3.2", unit: "GW", label: "Data centre capacity advised on since 2020" },
      { value: "1.15", label: "Design PUE achieved on recent campuses" },
    ],
    featuredProjectSlugs: ["ntt-hong-kong-fdc2"],
  },
  {
    slug: "cities",
    name: "Cities",
    tagline: "Planning growth that people actually want to live in",
    description:
      "We bring together planners, economists, transport modellers and climate specialists to help cities decide what to build and in what order. Much of the work is unglamorous: governance, funding routes and delivery sequencing are what turn a masterplan into something real.",
    image: { alt: "Dense city skyline at dusk", seed: "market-cities" },
    capabilities: [
      "Masterplanning and urban design",
      "Climate adaptation and heat resilience",
      "Transport-oriented development",
      "Economics and business case development",
      "Net zero city roadmaps",
    ],
    stats: [
      { value: "120", unit: "+", label: "City-scale climate strategies delivered" },
      { value: "2050", label: "Net zero target year we plan against" },
    ],
    featuredProjectSlugs: ["nusantara-capital", "kai-tak-development", "peru-reconstruction"],
  },
  {
    slug: "science",
    name: "Science",
    tagline: "Laboratories and research facilities built for changing science",
    description:
      "Research programmes outlive the buildings that house them. We design laboratories, cleanrooms and large research facilities with the servicing flexibility to be repurposed, and with the vibration, containment and air-quality performance that sensitive work demands.",
    image: { alt: "A modern research laboratory interior", seed: "market-science" },
    capabilities: [
      "Laboratory and cleanroom design",
      "Vibration and acoustics engineering",
      "Containment and biosafety facilities",
      "Research campus masterplanning",
      "Specialist research infrastructure",
    ],
    stats: [
      { value: "250", unit: "+", label: "Research facilities delivered globally" },
      { value: "VC-A", label: "Vibration criteria routinely achieved" },
    ],
    featuredProjectSlugs: ["pepsico-plant-poland"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Clinical estates that flex with demand",
    description:
      "Hospitals are among the most complex buildings there are, and the most consequential to get wrong. We plan and engineer clinical estates around patient flow, infection control and staff wellbeing, while cutting the energy intensity of round-the-clock operation.",
    image: { alt: "A light-filled hospital atrium", seed: "market-healthcare" },
    capabilities: [
      "Hospital planning and clinical flow",
      "Ventilation and infection control",
      "Decarbonising clinical estates",
      "Digital health infrastructure",
      "Phased delivery on live sites",
    ],
    stats: [
      { value: "60", unit: "%", label: "Energy reduction on recent hospital retrofits" },
      { value: "18", label: "Countries with healthcare work delivered" },
    ],
    featuredProjectSlugs: [],
  },
  {
    slug: "industry-and-manufacturing",
    name: "Industry and manufacturing",
    tagline: "Decarbonising production without losing throughput",
    description:
      "Manufacturers are electrifying process heat, rethinking supply chains and building new capacity at speed. We design the facilities and the utilities behind them, and advise on the sequencing that keeps existing lines running through the transition.",
    image: { alt: "A production line inside a large factory", seed: "market-industry" },
    capabilities: [
      "Advanced manufacturing facility design",
      "Process utilities and electrification",
      "Industrial decarbonisation roadmaps",
      "Logistics and supply chain resilience",
      "Automation-ready building systems",
    ],
    stats: [
      { value: "70", unit: "%", label: "Process emissions cut on flagship plants" },
      { value: "24", label: "Months from brief to operational handover" },
    ],
    featuredProjectSlugs: ["pepsico-plant-poland"],
  },
  {
    slug: "resources",
    name: "Resources",
    tagline: "Mining and materials with a smaller footprint",
    description:
      "Demand for critical minerals is rising just as social licence gets harder to earn. We support operators on tailings safety, water and energy use, closure planning and the infrastructure that connects remote operations to market.",
    image: { alt: "An open-cast mine terrace at sunrise", seed: "market-resources" },
    capabilities: [
      "Tailings and dam safety review",
      "Mine water and energy strategy",
      "Closure and rehabilitation planning",
      "Bulk materials handling",
      "Community and social impact assessment",
    ],
    stats: [
      { value: "300", unit: "+", label: "Tailings facilities assessed" },
      { value: "6", label: "Continents with active commissions" },
    ],
    featuredProjectSlugs: [],
  },
  {
    slug: "sport",
    name: "Sport",
    tagline: "Venues that work on match day and every other day",
    description:
      "Stadiums and arenas are only full a few dozen times a year, so the business case depends on everything else they do. We engineer venues and the districts around them, planning crowd movement, overlay and legacy use from the first sketch.",
    image: { alt: "A floodlit stadium roof structure", seed: "market-sport" },
    capabilities: [
      "Stadium and arena engineering",
      "Crowd movement and safety modelling",
      "Major event overlay planning",
      "Legacy and precinct masterplanning",
      "Long-span roof structures",
    ],
    stats: [
      { value: "12", label: "Olympic and World Cup programmes supported" },
      { value: "80", unit: "k", label: "Peak seated capacity engineered" },
    ],
    featuredProjectSlugs: ["fifa-world-cup-2026-host-cities", "arena-milano"],
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Campuses designed for how teaching actually changes",
    description:
      "Universities and schools need estates that adapt faster than a 50-year funding cycle allows. We plan campuses and design individual buildings for flexible occupation, low running costs and the kind of informal space where learning genuinely happens.",
    image: { alt: "Students crossing a university courtyard", seed: "market-education" },
    capabilities: [
      "Campus masterplanning",
      "Teaching and learning space design",
      "Estate decarbonisation",
      "Student accommodation",
      "Acoustics for learning environments",
    ],
    stats: [
      { value: "400", unit: "+", label: "Education buildings delivered" },
      { value: "50", unit: "%", label: "Typical operational carbon reduction" },
    ],
    featuredProjectSlugs: [],
  },
  {
    slug: "arts-and-culture",
    name: "Arts and culture",
    tagline: "Acoustics, structure and atmosphere in one brief",
    description:
      "Concert halls, museums, theatres and heritage restoration. These projects are judged by how a room sounds and feels, which means acoustics, lighting, structure and conservation have to be resolved together rather than in sequence.",
    image: { alt: "A concert hall auditorium from the stage", seed: "market-arts" },
    capabilities: [
      "Room and building acoustics",
      "Theatre and performance engineering",
      "Heritage and conservation engineering",
      "Museum environmental control",
      "Lighting and experience design",
    ],
    stats: [
      { value: "1.1", unit: "s", label: "Reverberation time tuned at Concert Hall renewal" },
      { value: "140", unit: "+", label: "Performance venues delivered" },
    ],
    featuredProjectSlugs: ["sydney-opera-house-concert-hall", "sagrada-familia"],
  },
  {
    slug: "international-development",
    name: "International development",
    tagline: "Infrastructure that holds up when the next shock arrives",
    description:
      "We work with governments, development banks and NGOs on programmes where resilience and local capability matter more than headline cost. Reconstruction, water access, and climate adaptation work delivered alongside the institutions that will run it afterwards.",
    image: { alt: "A newly built community bridge in a rural area", seed: "market-development" },
    capabilities: [
      "Post-disaster reconstruction programmes",
      "Resilient rural and urban infrastructure",
      "Development bank technical advisory",
      "Local capability building",
      "Climate adaptation finance support",
    ],
    stats: [
      { value: "74", label: "Reconstruction projects delivered in Peru" },
      { value: "35", unit: "+", label: "Countries with development commissions" },
    ],
    featuredProjectSlugs: ["peru-reconstruction"],
  },
];
