import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    sku: 'AUR-M-001',
    brand: 'AURELIA ATELIER',
    name: 'Cashmere-Wool Double Breasted Overcoat',
    slug: 'cashmere-wool-double-breasted-overcoat',
    description: 'Masterfully tailored from ultra-fine Mongolian cashmere and virgin wool blend. Features a structured double-breasted closure, notched lapels, horn buttons, and cupro silk lining.',
    category: 'men',
    subcategory: 'Outerwear',
    price: 34999,
    mrp: 48999,
    discount: 28,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#b59265' },
      { name: 'Midnight Charcoal', hex: '#23272d' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    variants: [
      { id: 'v-1', size: '38R', color: 'Camel Tan', colorCode: '#b59265', stock: 5, sku: 'AUR-M-001-38R-CAM' },
      { id: 'v-2', size: '40R', color: 'Camel Tan', colorCode: '#b59265', stock: 12, sku: 'AUR-M-001-40R-CAM' },
      { id: 'v-3', size: '42R', color: 'Camel Tan', colorCode: '#b59265', stock: 8, sku: 'AUR-M-001-42R-CAM' },
      { id: 'v-4', size: '40R', color: 'Midnight Charcoal', colorCode: '#23272d', stock: 6, sku: 'AUR-M-001-40R-CHR' }
    ],
    rating: 4.9,
    reviewCount: 42,
    stock: 31,
    tags: ['luxury', 'coat', 'cashmere', 'winter', 'men', 'tailored'],
    badges: ['BESTSELLER', 'EXCLUSIVE'],
    specifications: {
      'Material': '85% Virgin Wool, 15% Mongolian Cashmere',
      'Lining': '100% Cupro Twill',
      'Origin': 'Made in Florence, Italy',
      'Care': 'Dry Clean Only',
      'Fit': 'Contemporary Tailored Fit'
    },
    deliveryInfo: {
      estimatedDays: 2,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Complimentary Monogramming at our Flagship Store',
      '10% Instant Off on HDFC / ICICI Luxury Cards (Code: LUXURY10)',
      'Complimentary Wood Hanger & Silk Garment Bag Included'
    ],
    reviews: [
      {
        id: 'rev-1',
        userName: 'Vikramaditya S.',
        rating: 5,
        date: '14 Jan 2026',
        comment: 'The drape and hand-feel of this cashmere blend are transcendent. Compares favorably with bespoke Savile Row tailoring.',
        verified: true,
        helpfulCount: 28
      }
    ]
  },
  {
    id: 'prod-2',
    sku: 'AUR-W-002',
    brand: 'MAISON AURELIA',
    name: 'Silk Georgette Pleated Tiered Midi Dress',
    slug: 'silk-georgette-pleated-tiered-midi-dress',
    description: 'Airy pure mulberry silk georgette adorned with delicate accordion pleats and a flattering defined waistline. Includes concealed back zip and hand-stitched hem.',
    category: 'women',
    subcategory: 'Dresses',
    price: 24500,
    mrp: 32000,
    discount: 23,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Champagne Ivory', hex: '#eee7de' },
      { name: 'Noir Onyx', hex: '#111215' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    variants: [
      { id: 'v-5', size: 'S', color: 'Champagne Ivory', colorCode: '#eee7de', stock: 7, sku: 'AUR-W-002-S-IVR' },
      { id: 'v-6', size: 'M', color: 'Champagne Ivory', colorCode: '#eee7de', stock: 11, sku: 'AUR-W-002-M-IVR' },
      { id: 'v-7', size: 'L', color: 'Champagne Ivory', colorCode: '#eee7de', stock: 4, sku: 'AUR-W-002-L-IVR' }
    ],
    rating: 4.8,
    reviewCount: 38,
    stock: 22,
    tags: ['dress', 'silk', 'women', 'evening', 'party', 'luxury'],
    badges: ['NEW', 'BESTSELLER'],
    specifications: {
      'Material': '100% Mulberry Silk',
      'Lining': '100% Silk Crepe de Chine',
      'Origin': 'Made in Lyon, France',
      'Care': 'Specialist Dry Clean Only',
      'Length': '124 cm (Size M)'
    },
    deliveryInfo: {
      estimatedDays: 3,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Free Express Delivery Nationwide',
      'Flat ₹2,000 Off on First Purchase with code FIRST2000'
    ],
    reviews: [
      {
        id: 'rev-2',
        userName: 'Aanya K.',
        rating: 5,
        date: '02 Feb 2026',
        comment: 'Wore this to an art gala in Mumbai and received endless compliments. The flow of the silk is ethereal.',
        verified: true,
        helpfulCount: 19
      }
    ]
  },
  {
    id: 'prod-3',
    sku: 'AUR-A-003',
    brand: 'AURELIA TIMEPIECES',
    name: 'Chronographe Automatique Calibre 1888',
    slug: 'chronographe-automatique-calibre-1888',
    description: 'Precision mechanical chronograph with 58-hour power reserve, sunray obsidian dial, domed sapphire crystal with anti-reflective coating, and hand-stitched alligator strap.',
    category: 'accessories',
    subcategory: 'Watches',
    price: 88999,
    mrp: 115000,
    discount: 22,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Rose Gold / Obsidian', hex: '#b76e79' },
      { name: 'Brushed Steel / Silver', hex: '#c0c0c0' }
    ],
    sizes: ['41mm'],
    variants: [
      { id: 'v-8', size: '41mm', color: 'Rose Gold / Obsidian', colorCode: '#b76e79', stock: 3, sku: 'AUR-A-003-RG' },
      { id: 'v-9', size: '41mm', color: 'Brushed Steel / Silver', colorCode: '#c0c0c0', stock: 5, sku: 'AUR-A-003-ST' }
    ],
    rating: 5.0,
    reviewCount: 16,
    stock: 8,
    tags: ['watch', 'luxury', 'chronograph', 'horology', 'accessories'],
    badges: ['EXCLUSIVE'],
    specifications: {
      'Movement': 'Automatic Calibre 1888 (28,800 vph)',
      'Power Reserve': '58 Hours',
      'Water Resistance': '100m (10 ATM)',
      'Case Diameter': '41mm',
      'Glass': 'Domed Sapphire Crystal with AR Coating'
    },
    deliveryInfo: {
      estimatedDays: 1,
      freeDelivery: true,
      codAvailable: false
    },
    offers: [
      '5-Year Global Haute Horlogerie Guarantee Included',
      'Personal White-Glove Hand Delivery in Metro Cities'
    ],
    reviews: [
      {
        id: 'rev-3',
        userName: 'Rohan D.',
        rating: 5,
        date: '28 Dec 2025',
        comment: 'Exceptional craftsmanship. The finishing on the movement bridges and rotor easily matches high-tier Swiss manufacture.',
        verified: true,
        helpfulCount: 31
      }
    ]
  },
  {
    id: 'prod-4',
    sku: 'AUR-E-004',
    brand: 'AURELIA ACOUSTICS',
    name: 'Atelier Wireless ANC Titanium Headphones',
    slug: 'atelier-wireless-anc-titanium-headphones',
    description: 'Audiophile-grade 45mm custom beryllium drivers, active hybrid noise cancellation with spatial transparency, magnetic lambskin ear cushions, and 40-hour playback.',
    category: 'electronics',
    subcategory: 'Audio',
    price: 38990,
    mrp: 49990,
    discount: 22,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Matte Titanium', hex: '#878681' },
      { name: 'Shadow Black', hex: '#1c1c1e' }
    ],
    sizes: ['One Size'],
    variants: [
      { id: 'v-10', size: 'One Size', color: 'Matte Titanium', colorCode: '#878681', stock: 14, sku: 'AUR-E-004-TIT' },
      { id: 'v-11', size: 'One Size', color: 'Shadow Black', colorCode: '#1c1c1e', stock: 19, sku: 'AUR-E-004-BLK' }
    ],
    rating: 4.9,
    reviewCount: 64,
    stock: 33,
    tags: ['electronics', 'headphones', 'audio', 'anc', 'wireless', 'music'],
    badges: ['BESTSELLER'],
    specifications: {
      'Drivers': '45mm Electro-Acoustic Beryllium',
      'Battery Life': 'Up to 40 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.3 aptX HD & USB-C DAC',
      'Weight': '290 grams',
      'Warranty': '2 Years Replacement'
    },
    deliveryInfo: {
      estimatedDays: 2,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Free Lossless Hi-Res Cable & Hard-Shell Leather Travel Case',
      '3-Month Qobuz Hi-Res Streaming Subscription Included'
    ],
    reviews: [
      {
        id: 'rev-4',
        userName: 'Priya N.',
        rating: 5,
        date: '08 Jan 2026',
        comment: 'The soundstage clarity and vocal presence are staggering. Beats every mainstream flagship on build quality alone.',
        verified: true,
        helpfulCount: 45
      }
    ]
  },
  {
    id: 'prod-5',
    sku: 'AUR-W-005',
    brand: 'MAISON AURELIA',
    name: 'Hand-Crafted Italian Calfskin Crossbody Bag',
    slug: 'hand-crafted-italian-calfskin-crossbody-bag',
    description: 'Sculptural silhouette formed from vegetable-tanned Italian calfskin. Hand-burnished edges, custom brushed champagne gold hardware, and expandable interior compartment.',
    category: 'accessories',
    subcategory: 'Bags',
    price: 28900,
    mrp: 38000,
    discount: 24,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Cognac Saddle', hex: '#964b00' },
      { name: 'Ebony Black', hex: '#161616' },
      { name: 'Olive Drab', hex: '#556b2f' }
    ],
    sizes: ['Medium'],
    variants: [
      { id: 'v-12', size: 'Medium', color: 'Cognac Saddle', colorCode: '#964b00', stock: 8, sku: 'AUR-W-005-COG' },
      { id: 'v-13', size: 'Medium', color: 'Ebony Black', colorCode: '#161616', stock: 12, sku: 'AUR-W-005-BLK' }
    ],
    rating: 4.8,
    reviewCount: 29,
    stock: 20,
    tags: ['bag', 'handbag', 'leather', 'accessories', 'women', 'luxury'],
    badges: ['NEW'],
    specifications: {
      'Leather': 'Full-Grain Italian Calfskin Leather',
      'Hardware': 'Brushed Champagne Gold Palladium-Plated',
      'Dimensions': '24cm x 17cm x 8cm',
      'Strap Drop': '48cm - 56cm Adjustable'
    },
    deliveryInfo: {
      estimatedDays: 2,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Complimentary Custom Leather Embossed Tag with Your Initials'
    ],
    reviews: [
      {
        id: 'rev-5',
        userName: 'Meera T.',
        rating: 5,
        date: '20 Feb 2026',
        comment: 'Leather aroma and grain texture are exquisite. Fits my phone, cardholder, cosmetics and keys effortlessly.',
        verified: true,
        helpfulCount: 15
      }
    ]
  },
  {
    id: 'prod-6',
    sku: 'AUR-M-006',
    brand: 'AURELIA FOOTWEAR',
    name: 'Goodyear Welted Suede Chelsea Boots',
    slug: 'goodyear-welted-suede-chelsea-boots',
    description: 'Built on a sleek almond-toe last with water-resistant Repello calf suede from Leeds, England. Fully Goodyear welted with Dainite studded rubber soles for all-weather grip.',
    category: 'men',
    subcategory: 'Footwear',
    price: 19999,
    mrp: 26999,
    discount: 25,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Snuff Suede', hex: '#8a5a36' },
      { name: 'Espresso Brown', hex: '#3e2723' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    variants: [
      { id: 'v-14', size: 'UK 8', color: 'Snuff Suede', colorCode: '#8a5a36', stock: 5, sku: 'AUR-M-006-UK8-SNF' },
      { id: 'v-15', size: 'UK 9', color: 'Snuff Suede', colorCode: '#8a5a36', stock: 9, sku: 'AUR-M-006-UK9-SNF' },
      { id: 'v-16', size: 'UK 10', color: 'Snuff Suede', colorCode: '#8a5a36', stock: 4, sku: 'AUR-M-006-UK10-SNF' }
    ],
    rating: 4.7,
    reviewCount: 33,
    stock: 18,
    tags: ['shoes', 'boots', 'chelsea', 'suede', 'men', 'footwear'],
    badges: ['BESTSELLER'],
    specifications: {
      'Construction': 'Traditional Goodyear Welted',
      'Upper': 'Charles F. Stead Repello Suede',
      'Sole': 'British Dainite Studded Rubber',
      'Insole': 'Full Vegetable Leather Footbed'
    },
    deliveryInfo: {
      estimatedDays: 3,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Free Cedar Wood Shoe Trees with Every Boot Order',
      'Complimentary Suede Care Kit Included'
    ],
    reviews: [
      {
        id: 'rev-6',
        userName: 'Kabir V.',
        rating: 5,
        date: '10 Feb 2026',
        comment: 'No break-in period required. The Dainite sole gives amazing traction and the silhouette is sharp without feeling stiff.',
        verified: true,
        helpfulCount: 22
      }
    ]
  },
  {
    id: 'prod-7',
    sku: 'AUR-H-007',
    brand: 'AURELIA MAISON LIVING',
    name: 'Hand-Poured Soy Wax Botanical Diffuser & Candle Set',
    slug: 'hand-poured-soy-wax-botanical-diffuser-candle-set',
    description: 'Immersive home fragrance ritual featuring notes of Florentine iris, cedarwood smoke, cardamom pod, and black amber. Housed in mouth-blown tinted glass vessels.',
    category: 'home',
    subcategory: 'Fragrance',
    price: 8499,
    mrp: 11999,
    discount: 29,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Smoked Amber Glass', hex: '#664c28' }
    ],
    sizes: ['300g Candle + 200ml Diffuser'],
    variants: [
      { id: 'v-17', size: '300g Candle + 200ml Diffuser', color: 'Smoked Amber Glass', colorCode: '#664c28', stock: 25, sku: 'AUR-H-007-SET' }
    ],
    rating: 4.9,
    reviewCount: 51,
    stock: 40,
    tags: ['home', 'candle', 'fragrance', 'diffuser', 'luxury living'],
    badges: ['SALE'],
    specifications: {
      'Wax': '100% Pure Organic Soy & Coconut Wax',
      'Burn Time': 'Approx. 65 Hours',
      'Diffuser Lifespan': 'Up to 4 Months',
      'Vessel': 'Handcrafted Mouth-Blown Glass'
    },
    deliveryInfo: {
      estimatedDays: 2,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Buy 2 Home Sets and get 15% Additional Off'
    ],
    reviews: [
      {
        id: 'rev-7',
        userName: 'Sanya M.',
        rating: 5,
        date: '04 Mar 2026',
        comment: 'Transformative aroma. Subtle, nuanced, and lingers gently without ever causing a headache.',
        verified: true,
        helpfulCount: 14
      }
    ]
  },
  {
    id: 'prod-8',
    sku: 'AUR-B-008',
    brand: 'AURELIA BOTANICALS',
    name: 'Rose Damascena Regenerative Nectar Serum',
    slug: 'rose-damascena-regenerative-nectar-serum',
    description: 'Potent cellular elixir formulated with cold-pressed organic Bulgarian Damask Rose, squalane, bakuchiol, and bioactive peptide complex to deeply firm and illuminate.',
    category: 'beauty',
    subcategory: 'Skincare',
    price: 6999,
    mrp: 9500,
    discount: 26,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-28c04907936a?auto=format&fit=crop&w=1000&q=80'
    ],
    colors: [
      { name: 'Golden Nectar', hex: '#d4af37' }
    ],
    sizes: ['50ml'],
    variants: [
      { id: 'v-18', size: '50ml', color: 'Golden Nectar', colorCode: '#d4af37', stock: 30, sku: 'AUR-B-008-50ML' }
    ],
    rating: 4.9,
    reviewCount: 78,
    stock: 45,
    tags: ['beauty', 'skincare', 'serum', 'botanical', 'organic'],
    badges: ['NEW', 'BESTSELLER'],
    specifications: {
      'Volume': '50ml (1.7 fl oz)',
      'Formulation': '100% Vegan & Cruelty-Free',
      'Skin Type': 'Suitable for All Skin Types including Sensitive',
      'Origin': 'Formulated in Grasse, France'
    },
    deliveryInfo: {
      estimatedDays: 2,
      freeDelivery: true,
      codAvailable: true
    },
    offers: [
      'Complimentary Deluxe Travel Miniature on Orders Above ₹5,000'
    ],
    reviews: [
      {
        id: 'rev-8',
        userName: 'Natasha P.',
        rating: 5,
        date: '18 Feb 2026',
        comment: 'My skin woke up plumper, hydrated, and radiant after just two nights of use. An indispensable holy grail.',
        verified: true,
        helpfulCount: 52
      }
    ]
  }
];

export const CATEGORIES_CONFIG = [
  {
    slug: 'new-arrivals',
    name: 'NEW ARRIVALS',
    description: 'Spring / Summer 2026 Collection',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'men',
    name: 'MEN',
    description: 'Sartorial tailoring & modern essentials',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'women',
    name: 'WOMEN',
    description: 'Prêt-à-porter, dresses & iconic knitwear',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'electronics',
    name: 'ELECTRONICS',
    description: 'Acoustics & intelligent personal technology',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'accessories',
    name: 'ACCESSORIES',
    description: 'Timepieces, leathercraft & fine jewellery',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'home',
    name: 'HOME & LIVING',
    description: 'Atmospheric scents, ceramic & textiles',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'beauty',
    name: 'BEAUTY',
    description: 'Botanical formulations & rare elixirs',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
  }
];

export const AVAILABLE_COUPONS = [
  {
    code: 'AURELIA10',
    discountPercent: 10,
    maxDiscount: 5000,
    minOrderValue: 2000,
    description: '10% off on your entire luxury order'
  },
  {
    code: 'LUXURY20',
    discountPercent: 20,
    maxDiscount: 10000,
    minOrderValue: 25000,
    description: 'Special 20% privilege off on purchases above ₹25,000'
  },
  {
    code: 'FREESHIP',
    discountPercent: 0,
    freeShipping: true,
    minOrderValue: 0,
    description: 'Complimentary Express Air Courier across India'
  }
];

