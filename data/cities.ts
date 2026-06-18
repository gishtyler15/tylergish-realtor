export interface CityData {
  slug: string;
  name: string;
  county: string;
  heroLine: string;
  overview: string;
  marketSummary: string;
  medianPriceNote: string;
  whyPeopleMove: string[];
  attractions: { name: string; note: string }[];
  schools: string[];
  lifestyle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  lat: number;
  lng: number;
}

export const cities: CityData[] = [
  {
    slug: "clyde-ohio-realtor",
    name: "Clyde",
    county: "Sandusky County",
    heroLine: "Tyler's hometown market — and the one he knows best.",
    overview:
      "Clyde is a tight-knit Sandusky County community built around its school district, its industrial base, and a downtown that still feels like a small town. It's where Tyler is from, and he works this market with a level of local knowledge that's hard to fake.",
    marketSummary:
      "Clyde's housing stock leans toward established single-family homes on traditional lots, with steady demand from buyers who grew up in the area or work nearby and want to stay close to family.",
    medianPriceNote:
      "Home prices in Clyde tend to run below the regional average for Northwest Ohio, making it a strong entry point for first-time buyers and a place where sellers can still see competitive offers in the right condition and price range.",
    whyPeopleMove: [
      "Affordable entry point compared to nearby Sandusky and the Lake Erie shoreline",
      "Short commute to Fremont, Sandusky, and the Route 20/Route 6 corridor",
      "Family ties — many buyers are returning to be near parents or grandparents",
      "Small-town pace without being far from regional amenities",
    ],
    attractions: [
      { name: "Whirlpool Corporation campus", note: "one of the area's largest employers" },
      { name: "Downtown Clyde", note: "local shops, restaurants, and community events" },
      { name: "Green Springs and area parks", note: "quick access to outdoor space" },
    ],
    schools: ["Clyde-Green Springs Exempted Village Schools"],
    lifestyle:
      "Clyde moves at small-town speed. Neighbors know each other, the school district anchors community life, and most errands happen within a few minutes of home.",
    metaTitle: "Clyde Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Tyler Gish is a Clyde, Ohio REALTOR® with eXp Realty and an Army veteran who grew up in the area. Get local market knowledge for buying or selling in Clyde, OH.",
    keywords: ["Realtor Clyde Ohio", "Homes For Sale Clyde Ohio", "Clyde Ohio real estate agent"],
    lat: 41.3025,
    lng: -82.9763,
  },
  {
    slug: "fremont-ohio-realtor",
    name: "Fremont",
    county: "Sandusky County",
    heroLine: "Sandusky County's hub city, with a market to match.",
    overview:
      "Fremont is the largest city in Sandusky County and the regional hub for shopping, healthcare, and employment in the area. It offers more housing variety than the surrounding smaller towns, from historic homes near downtown to newer construction on the outskirts.",
    marketSummary:
      "Fremont's market spans a wide range, from affordable starter homes to larger updated properties, with consistent buyer interest thanks to the city's job base and central location.",
    medianPriceNote:
      "Because Fremont covers such a range of neighborhoods and home ages, pricing strategy matters more here than almost anywhere else in the region — a well-positioned listing in Fremont can move quickly.",
    whyPeopleMove: [
      "Central location with easy access to Route 6, Route 20, and the Ohio Turnpike",
      "Larger job base, including ProMedica Memorial Hospital and Sandusky County's county seat functions",
      "Wider housing inventory than smaller surrounding towns",
      "Established neighborhoods with mature trees and larger lots",
    ],
    attractions: [
      { name: "Spiegel Grove and the Rutherford B. Hayes Presidential Library", note: "a nationally recognized historic site" },
      { name: "Downtown Fremont", note: "restaurants, shops, and the Sandusky River walking paths" },
      { name: "Fremont Speedway", note: "weekend motorsports entertainment" },
    ],
    schools: ["Fremont City Schools", "Sandusky County area private school options"],
    lifestyle:
      "Fremont gives you small-city conveniences — hospitals, shopping, dining — without the price tag or traffic of a bigger metro, while staying close to the lake.",
    metaTitle: "Fremont Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Looking for a Fremont, Ohio REALTOR®? Tyler Gish, Army veteran and local agent with eXp Realty, helps buyers and sellers navigate the Fremont market with confidence.",
    keywords: ["Realtor Fremont Ohio", "Homes For Sale Fremont Ohio", "Fremont Ohio real estate agent"],
    lat: 41.3501,
    lng: -83.1219,
  },
  {
    slug: "sandusky-ohio-realtor",
    name: "Sandusky",
    county: "Erie County",
    heroLine: "Lake Erie living, Cedar Point energy, year-round demand.",
    overview:
      "Sandusky is the gateway to Lake Erie's Marblehead Peninsula and home to Cedar Point, giving the local market a unique mix of year-round residential demand and vacation/investment property interest.",
    marketSummary:
      "Sandusky's market includes everything from classic in-town neighborhoods to waterfront and near-water properties that attract second-home buyers and short-term rental investors.",
    medianPriceNote:
      "Proximity to the lake and to Cedar Point pushes pricing higher than inland towns like Clyde or Bellevue, especially for anything within walking distance of the water or downtown.",
    whyPeopleMove: [
      "Lake Erie access and waterfront lifestyle",
      "Cedar Point and tourism-driven local economy",
      "Year-round and seasonal/vacation home options",
      "Strong rental and investment property demand",
    ],
    attractions: [
      { name: "Cedar Point", note: "one of the most visited amusement parks in the country" },
      { name: "Downtown Sandusky and the waterfront", note: "marinas, dining, and lake views" },
      { name: "Lake Erie Islands ferry access", note: "Kelleys Island and Put-in-Bay" },
    ],
    schools: ["Sandusky City Schools", "Perkins Local Schools"],
    lifestyle:
      "Sandusky has real lake-town energy — busy summers, a strong sense of place, and a year-round community underneath the tourist season.",
    metaTitle: "Sandusky Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Buying or selling near Lake Erie? Tyler Gish is a Sandusky, Ohio REALTOR® with eXp Realty specializing in waterfront, vacation, and year-round homes.",
    keywords: ["Realtor Sandusky Ohio", "Homes For Sale Sandusky Ohio", "Lake Erie real estate agent"],
    lat: 41.4489,
    lng: -82.7079,
  },
  {
    slug: "port-clinton-ohio-realtor",
    name: "Port Clinton",
    county: "Ottawa County",
    heroLine: "The Walleye Capital of the World — and a top vacation home market.",
    overview:
      "Port Clinton sits on the Lake Erie shoreline in Ottawa County and is one of the region's top destinations for vacation homes, fishing properties, and waterfront living.",
    marketSummary:
      "Port Clinton's market skews heavily toward second homes, condos, and waterfront properties, with strong seasonal demand and a tight inventory of true lakefront listings.",
    medianPriceNote:
      "Waterfront and water-view properties in Port Clinton command a real premium, while inland homes a few minutes from the lake remain more accessible for year-round buyers.",
    whyPeopleMove: [
      "Direct Lake Erie access and a working marina community",
      "World-class walleye and perch fishing",
      "Ferry access to South Bass Island and Put-in-Bay",
      "Strong vacation rental and investment potential",
    ],
    attractions: [
      { name: "Jet Express and Miller Ferry", note: "routes to Put-in-Bay and South Bass Island" },
      { name: "Port Clinton waterfront and Waterworks Park", note: "marinas, fishing, and lake views" },
      { name: "African Safari Wildlife Park", note: "a regional family attraction" },
    ],
    schools: ["Port Clinton City Schools"],
    lifestyle:
      "Port Clinton runs on the lake's schedule — busy and social in summer, quieter and close-knit the rest of the year, with fishing as a year-round constant.",
    metaTitle: "Port Clinton Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Tyler Gish helps buyers and sellers in Port Clinton, Ohio find waterfront homes, vacation properties, and year-round residences. eXp Realty agent and Army veteran.",
    keywords: ["Realtor Port Clinton Ohio", "Port Clinton waterfront homes", "Port Clinton Ohio real estate agent"],
    lat: 41.5104,
    lng: -82.9377,
  },
  {
    slug: "bellevue-ohio-realtor",
    name: "Bellevue",
    county: "Huron/Sandusky County line",
    heroLine: "A quiet, affordable crossroads town between Sandusky and Norwalk.",
    overview:
      "Bellevue sits on the line between Huron and Sandusky counties and offers some of the most affordable, stable housing in the region, with a railroad heritage and a strong sense of community identity.",
    marketSummary:
      "Bellevue's market is dominated by well-kept single-family homes at accessible price points, attracting first-time buyers and those looking to downsize without leaving the area.",
    medianPriceNote:
      "Bellevue typically offers some of the lowest entry prices in Tyler's service area, which makes it a frequent recommendation for first-time buyers working with VA or conventional financing.",
    whyPeopleMove: [
      "Some of the most affordable housing in Northwest Ohio",
      "Central location between Sandusky, Norwalk, and Fremont",
      "Quiet, low-traffic residential streets",
      "Strong community identity tied to its railroad history",
    ],
    attractions: [
      { name: "Mad River and NKP Railroad Museum", note: "a nod to Bellevue's rail history" },
      { name: "Bellevue City Park", note: "local recreation and events" },
    ],
    schools: ["Bellevue City Schools"],
    lifestyle:
      "Bellevue is the kind of town where a starter home stays affordable and a quiet street stays quiet — a practical choice for buyers prioritizing value.",
    metaTitle: "Bellevue Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Tyler Gish is a Bellevue, Ohio REALTOR® with eXp Realty helping first-time buyers and sellers in one of Northwest Ohio's most affordable markets.",
    keywords: ["Realtor Bellevue Ohio", "Homes For Sale Bellevue Ohio", "Bellevue Ohio real estate agent"],
    lat: 41.2739,
    lng: -82.8418,
  },
  {
    slug: "marblehead-ohio-realtor",
    name: "Marblehead",
    county: "Ottawa County",
    heroLine: "Peninsula living, lighthouse views, premium waterfront.",
    overview:
      "Marblehead sits at the tip of the Marblehead Peninsula, home to the iconic Marblehead Lighthouse and some of the most sought-after waterfront real estate on Ohio's Lake Erie shoreline.",
    marketSummary:
      "Marblehead's market is almost entirely shaped by lake proximity — waterfront and water-view homes command premium pricing, and inventory is limited relative to demand.",
    medianPriceNote:
      "This is one of the higher-priced markets Tyler serves, driven by limited lakefront inventory and consistent demand from both year-round residents and second-home buyers.",
    whyPeopleMove: [
      "Direct Lake Erie waterfront and lighthouse views",
      "Quiet peninsula lifestyle close to Port Clinton and the islands",
      "Strong long-term property value appreciation",
      "Boating, marina, and ferry access in one location",
    ],
    attractions: [
      { name: "Marblehead Lighthouse State Park", note: "the oldest operating lighthouse on the Great Lakes" },
      { name: "East Harbor State Park", note: "nearby beaches and camping" },
      { name: "Lakeside Chautauqua", note: "a historic gated lakefront community next door" },
    ],
    schools: ["Danbury Local Schools"],
    lifestyle:
      "Marblehead is for buyers who want the lake to be the point — quiet, scenic, and built around the water rather than just near it.",
    metaTitle: "Marblehead Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Tyler Gish specializes in Marblehead, Ohio waterfront and lighthouse-area real estate. eXp Realty agent and Army veteran serving the Lake Erie peninsula.",
    keywords: ["Realtor Marblehead Ohio", "Marblehead waterfront homes", "Lakeside Marblehead real estate"],
    lat: 41.5392,
    lng: -82.7307,
  },
  {
    slug: "norwalk-ohio-realtor",
    name: "Norwalk",
    county: "Huron County",
    heroLine: "Huron County's county seat — a steady, family-oriented market.",
    overview:
      "Norwalk is the county seat of Huron County and serves as a regional center for shopping, schools, and employment, with a stable market driven by long-term residents and local families.",
    marketSummary:
      "Norwalk offers a broad mix of housing — from historic homes near the downtown square to newer subdivisions — with steady, less seasonal demand than the lakefront communities.",
    medianPriceNote:
      "Norwalk's pricing sits in the middle of Tyler's service area: more variety than Bellevue or Clyde, without the lake-driven premium seen in Marblehead or Port Clinton.",
    whyPeopleMove: [
      "County seat amenities — courts, services, and shopping in one place",
      "Mix of historic and newer housing stock",
      "Good access to Route 250 and Route 20",
      "Stable, family-oriented community",
    ],
    attractions: [
      { name: "Norwalk's historic downtown square", note: "shops, dining, and community events" },
      { name: "Lake Erie within a short drive", note: "easy access north toward Sandusky and the peninsula" },
    ],
    schools: ["Norwalk City Schools"],
    lifestyle:
      "Norwalk is steady and centered around family life — a good fit for buyers who want county-seat conveniences without lakefront pricing.",
    metaTitle: "Norwalk Ohio Realtor | Tyler Gish, eXp Realty",
    metaDescription:
      "Tyler Gish is a Norwalk, Ohio REALTOR® with eXp Realty, helping buyers and sellers across Huron County. Army veteran and dedicated local agent.",
    keywords: ["Realtor Norwalk Ohio", "Homes For Sale Norwalk Ohio", "Norwalk Ohio real estate agent"],
    lat: 41.2429,
    lng: -82.6157,
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export const siteConfig = {
  name: "Tyler Gish",
  title: "Tyler Gish, REALTOR® | eXp Realty",
  brokerage: "eXp Realty",
  phone: "419-217-3707",
  phoneRaw: "+14192173707",
  email: "gishtyler17@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.tylergishrealtor.com",
  serviceAreaLabel: "Northwest Ohio",
  tagline: "Helping Northwest Ohio Families Buy and Sell With Confidence",
};
