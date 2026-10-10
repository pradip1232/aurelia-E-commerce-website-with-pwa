import { Product, CategorySlug } from '../types';

export interface CategoryConfig {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  itemCount?: string;
}

export const CATEGORIES_CONFIG: CategoryConfig[] = [
  {
    "slug": "men",
    "name": "MEN'S COUTURE",
    "description": "Sartorial tailoring, cashmere overcoats & fine woolens",
    "image": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "18 Creations"
  },
  {
    "slug": "women",
    "name": "WOMEN'S ATELIER",
    "description": "Mulberry silk dresses, architectural tailoring & evening wear",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "24 Creations"
  },
  {
    "slug": "leathergoods",
    "name": "LEATHERGOODS",
    "description": "Hand-burnished calfskin totes, satchels & travel trunks",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "16 Creations"
  },
  {
    "slug": "footwear",
    "name": "FOOTWEAR",
    "description": "Hand-lasted Italian Goodyear-welted oxfords, boots & mules",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "14 Creations"
  },
  {
    "slug": "timepieces",
    "name": "HAUTE HORLOGERIE",
    "description": "Bespoke mechanical chronographs, tourbillons & moonphases",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "12 Creations"
  },
  {
    "slug": "jewelry",
    "name": "FINE JEWELLERY",
    "description": "18K sovereign gold, pavé diamonds & untreated emeralds",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "12 Creations"
  },
  {
    "slug": "accessories",
    "name": "SILK & ACCESSORIES",
    "description": "Jacquard silk scarves, cashmere stoles & reversible belts",
    "image": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "15 Creations"
  },
  {
    "slug": "eyewear",
    "name": "OPTICAL & SUNWEAR",
    "description": "Japanese titanium aviators & hand-carved acetate frames",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "10 Creations"
  },
  {
    "slug": "fragrance",
    "name": "HAUTE PARFUMERIE",
    "description": "Rare aged Cambodian oud, Grasse rose & ambergris extraits",
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "10 Creations"
  },
  {
    "slug": "home",
    "name": "MAISON & LIVING",
    "description": "Cashmere throws, marble vessels & artisanal ceramic objects",
    "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "12 Creations"
  },
  {
    "slug": "electronics",
    "name": "ACOUSTICS",
    "description": "Beryllium driver headphones & audiophile titanium tech",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "8 Creations"
  },
  {
    "slug": "beauty",
    "name": "BOTANICAL BEAUTY",
    "description": "Rare regenerative botanical serums & 24K gold facial oils",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "8 Creations"
  },
  {
    "slug": "kids",
    "name": "JUNIOR ATELIER",
    "description": "Pure cashmere cardigans & heirloom organic cotton sets",
    "image": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
    "itemCount": "8 Creations"
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "sku": "AUR-MEN-001",
    "brand": "AURELIA ATELIER",
    "name": "Cashmere-Wool Double Breasted Overcoat",
    "slug": "cashmere-wool-double-breasted-overcoat",
    "description": "Masterfully tailored from ultra-fine Mongolian cashmere and virgin wool blend. Features a structured double-breasted closure, notched lapels, horn buttons, and cupro silk lining.",
    "category": "men",
    "subcategory": "Outerwear",
    "price": 34999,
    "mrp": 48999,
    "discount": 29,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Camel Tan",
        "hex": "#b59265"
      },
      {
        "name": "Midnight Charcoal",
        "hex": "#23272d"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "variants": [
      {
        "id": "v-1-Ca-38R",
        "size": "38R",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 4,
        "sku": "AUR-MEN-001-CAM-38R",
        "price": 34999
      },
      {
        "id": "v-1-Ca-40R",
        "size": "40R",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 9,
        "sku": "AUR-MEN-001-CAM-40R",
        "price": 34999
      },
      {
        "id": "v-1-Ca-42R",
        "size": "42R",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 14,
        "sku": "AUR-MEN-001-CAM-42R",
        "price": 34999
      },
      {
        "id": "v-1-Mi-38R",
        "size": "38R",
        "color": "Midnight Charcoal",
        "colorCode": "#23272d",
        "stock": 4,
        "sku": "AUR-MEN-001-MID-38R",
        "price": 34999
      },
      {
        "id": "v-1-Mi-40R",
        "size": "40R",
        "color": "Midnight Charcoal",
        "colorCode": "#23272d",
        "stock": 9,
        "sku": "AUR-MEN-001-MID-40R",
        "price": 34999
      },
      {
        "id": "v-1-Mi-42R",
        "size": "42R",
        "color": "Midnight Charcoal",
        "colorCode": "#23272d",
        "stock": 14,
        "sku": "AUR-MEN-001-MID-42R",
        "price": 34999
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 54,
    "tags": [
      "luxury",
      "coat",
      "cashmere",
      "winter",
      "men",
      "tailored"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-1-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 18
      }
    ]
  },
  {
    "id": "prod-2",
    "sku": "AUR-MEN-002",
    "brand": "AURELIA ATELIER",
    "name": "Super 160s Merino Peak Lapel Tuxedo",
    "slug": "super-160s-merino-peak-lapel-tuxedo",
    "description": "Exquisitely crafted from pure Italian Super 160s worsted wool with silk grosgrain peak lapels. Tailored for state gala evenings and black-tie salons.",
    "category": "men",
    "subcategory": "Tailoring",
    "price": 48500,
    "mrp": 65000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#111215"
      },
      {
        "name": "Midnight Navy",
        "hex": "#161c28"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "variants": [
      {
        "id": "v-2-Ob-38R",
        "size": "38R",
        "color": "Obsidian Black",
        "colorCode": "#111215",
        "stock": 7,
        "sku": "AUR-MEN-002-OBS-38R",
        "price": 48500
      },
      {
        "id": "v-2-Ob-40R",
        "size": "40R",
        "color": "Obsidian Black",
        "colorCode": "#111215",
        "stock": 12,
        "sku": "AUR-MEN-002-OBS-40R",
        "price": 48500
      },
      {
        "id": "v-2-Ob-42R",
        "size": "42R",
        "color": "Obsidian Black",
        "colorCode": "#111215",
        "stock": 17,
        "sku": "AUR-MEN-002-OBS-42R",
        "price": 48500
      },
      {
        "id": "v-2-Mi-38R",
        "size": "38R",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 7,
        "sku": "AUR-MEN-002-MID-38R",
        "price": 48500
      },
      {
        "id": "v-2-Mi-40R",
        "size": "40R",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 12,
        "sku": "AUR-MEN-002-MID-40R",
        "price": 48500
      },
      {
        "id": "v-2-Mi-42R",
        "size": "42R",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 17,
        "sku": "AUR-MEN-002-MID-42R",
        "price": 48500
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 72,
    "tags": [
      "tuxedo",
      "suiting",
      "black-tie",
      "merino",
      "formal"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-2-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 19
      }
    ]
  },
  {
    "id": "prod-3",
    "sku": "AUR-MEN-003",
    "brand": "AURELIA ATELIER",
    "name": "Pure Mongolian Cable-Knit Cashmere Turtleneck",
    "slug": "pure-mongolian-cable-knit-cashmere-turtleneck",
    "description": "Spun from 4-ply Grade-A Mongolian cashmere fiber. Substantial weight, cloud-soft warmth, and hand-finished ribbed trims.",
    "category": "men",
    "subcategory": "Knitwear",
    "price": 19800,
    "mrp": 26000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Ivory Cream",
        "hex": "#f4ede4"
      },
      {
        "name": "Oatmeal Taupe",
        "hex": "#ab9b8a"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v-3-Iv-S",
        "size": "S",
        "color": "Ivory Cream",
        "colorCode": "#f4ede4",
        "stock": 10,
        "sku": "AUR-MEN-003-IVO-S",
        "price": 19800
      },
      {
        "id": "v-3-Iv-M",
        "size": "M",
        "color": "Ivory Cream",
        "colorCode": "#f4ede4",
        "stock": 15,
        "sku": "AUR-MEN-003-IVO-M",
        "price": 19800
      },
      {
        "id": "v-3-Iv-L",
        "size": "L",
        "color": "Ivory Cream",
        "colorCode": "#f4ede4",
        "stock": 20,
        "sku": "AUR-MEN-003-IVO-L",
        "price": 19800
      },
      {
        "id": "v-3-Oa-S",
        "size": "S",
        "color": "Oatmeal Taupe",
        "colorCode": "#ab9b8a",
        "stock": 10,
        "sku": "AUR-MEN-003-OAT-S",
        "price": 19800
      },
      {
        "id": "v-3-Oa-M",
        "size": "M",
        "color": "Oatmeal Taupe",
        "colorCode": "#ab9b8a",
        "stock": 15,
        "sku": "AUR-MEN-003-OAT-M",
        "price": 19800
      },
      {
        "id": "v-3-Oa-L",
        "size": "L",
        "color": "Oatmeal Taupe",
        "colorCode": "#ab9b8a",
        "stock": 20,
        "sku": "AUR-MEN-003-OAT-L",
        "price": 19800
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 90,
    "tags": [
      "cashmere",
      "turtleneck",
      "knitwear",
      "autumn",
      "winter"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-3-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-4",
    "sku": "AUR-MEN-004",
    "brand": "AURELIA ATELIER",
    "name": "Giza Cotton Egyptian Poplin Formal Shirt",
    "slug": "giza-cotton-egyptian-poplin-formal-shirt",
    "description": "Woven with 200/2 double-twist Giza 87 Egyptian cotton yarns. Mother-of-pearl australian buttons with precision French seams.",
    "category": "men",
    "subcategory": "Shirting",
    "price": 9900,
    "mrp": 14000,
    "discount": 29,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Crisp White",
        "hex": "#ffffff"
      },
      {
        "name": "Powder Sky Blue",
        "hex": "#c5d8ea"
      }
    ],
    "sizes": [
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "variants": [
      {
        "id": "v-4-Cr-39",
        "size": "39",
        "color": "Crisp White",
        "colorCode": "#ffffff",
        "stock": 13,
        "sku": "AUR-MEN-004-CRI-39",
        "price": 9900
      },
      {
        "id": "v-4-Cr-40",
        "size": "40",
        "color": "Crisp White",
        "colorCode": "#ffffff",
        "stock": 18,
        "sku": "AUR-MEN-004-CRI-40",
        "price": 9900
      },
      {
        "id": "v-4-Cr-41",
        "size": "41",
        "color": "Crisp White",
        "colorCode": "#ffffff",
        "stock": 23,
        "sku": "AUR-MEN-004-CRI-41",
        "price": 9900
      },
      {
        "id": "v-4-Po-39",
        "size": "39",
        "color": "Powder Sky Blue",
        "colorCode": "#c5d8ea",
        "stock": 13,
        "sku": "AUR-MEN-004-POW-39",
        "price": 9900
      },
      {
        "id": "v-4-Po-40",
        "size": "40",
        "color": "Powder Sky Blue",
        "colorCode": "#c5d8ea",
        "stock": 18,
        "sku": "AUR-MEN-004-POW-40",
        "price": 9900
      },
      {
        "id": "v-4-Po-41",
        "size": "41",
        "color": "Powder Sky Blue",
        "colorCode": "#c5d8ea",
        "stock": 23,
        "sku": "AUR-MEN-004-POW-41",
        "price": 9900
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 108,
    "tags": [
      "shirt",
      "formal",
      "egyptian-cotton",
      "poplin"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-4-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 21
      }
    ]
  },
  {
    "id": "prod-5",
    "sku": "AUR-MEN-005",
    "brand": "AURELIA ATELIER",
    "name": "Pleated High-Rise Flannel Wool Trousers",
    "slug": "pleated-high-rise-flannel-wool-trousers",
    "description": "Double reverse pleats, extended tab waistband with side adjusters, and a relaxed taper in heavy 340g Vitale Barberis flannel.",
    "category": "men",
    "subcategory": "Trousers",
    "price": 16500,
    "mrp": 22000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#373a40"
      },
      {
        "name": "Olive Drab",
        "hex": "#484b3d"
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "variants": [
      {
        "id": "v-5-Ch-30",
        "size": "30",
        "color": "Charcoal Grey",
        "colorCode": "#373a40",
        "stock": 16,
        "sku": "AUR-MEN-005-CHA-30",
        "price": 16500
      },
      {
        "id": "v-5-Ch-32",
        "size": "32",
        "color": "Charcoal Grey",
        "colorCode": "#373a40",
        "stock": 21,
        "sku": "AUR-MEN-005-CHA-32",
        "price": 16500
      },
      {
        "id": "v-5-Ch-34",
        "size": "34",
        "color": "Charcoal Grey",
        "colorCode": "#373a40",
        "stock": 26,
        "sku": "AUR-MEN-005-CHA-34",
        "price": 16500
      },
      {
        "id": "v-5-Ol-30",
        "size": "30",
        "color": "Olive Drab",
        "colorCode": "#484b3d",
        "stock": 16,
        "sku": "AUR-MEN-005-OLI-30",
        "price": 16500
      },
      {
        "id": "v-5-Ol-32",
        "size": "32",
        "color": "Olive Drab",
        "colorCode": "#484b3d",
        "stock": 21,
        "sku": "AUR-MEN-005-OLI-32",
        "price": 16500
      },
      {
        "id": "v-5-Ol-34",
        "size": "34",
        "color": "Olive Drab",
        "colorCode": "#484b3d",
        "stock": 26,
        "sku": "AUR-MEN-005-OLI-34",
        "price": 16500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 126,
    "tags": [
      "trousers",
      "wool",
      "flannel",
      "pleated",
      "tailored"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-5-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 22
      }
    ]
  },
  {
    "id": "prod-6",
    "sku": "AUR-MEN-006",
    "brand": "AURELIA ATELIER",
    "name": "Water-Repellent Silk-Cotton Storm Trench",
    "slug": "water-repellent-silk-cotton-storm-trench",
    "description": "Dense Japanese silk-cotton gabardine treated with invisible storm membrane. Buffalo horn belt buckle, raglan sleeve construction.",
    "category": "men",
    "subcategory": "Outerwear",
    "price": 42000,
    "mrp": 58000,
    "discount": 28,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Dark Khaki",
        "hex": "#776b54"
      },
      {
        "name": "Deep Black",
        "hex": "#121212"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "variants": [
      {
        "id": "v-6-Da-38R",
        "size": "38R",
        "color": "Dark Khaki",
        "colorCode": "#776b54",
        "stock": 19,
        "sku": "AUR-MEN-006-DAR-38R",
        "price": 42000
      },
      {
        "id": "v-6-Da-40R",
        "size": "40R",
        "color": "Dark Khaki",
        "colorCode": "#776b54",
        "stock": 24,
        "sku": "AUR-MEN-006-DAR-40R",
        "price": 42000
      },
      {
        "id": "v-6-Da-42R",
        "size": "42R",
        "color": "Dark Khaki",
        "colorCode": "#776b54",
        "stock": 4,
        "sku": "AUR-MEN-006-DAR-42R",
        "price": 42000
      },
      {
        "id": "v-6-De-38R",
        "size": "38R",
        "color": "Deep Black",
        "colorCode": "#121212",
        "stock": 19,
        "sku": "AUR-MEN-006-DEE-38R",
        "price": 42000
      },
      {
        "id": "v-6-De-40R",
        "size": "40R",
        "color": "Deep Black",
        "colorCode": "#121212",
        "stock": 24,
        "sku": "AUR-MEN-006-DEE-40R",
        "price": 42000
      },
      {
        "id": "v-6-De-42R",
        "size": "42R",
        "color": "Deep Black",
        "colorCode": "#121212",
        "stock": 4,
        "sku": "AUR-MEN-006-DEE-42R",
        "price": 42000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 94,
    "tags": [
      "trench",
      "raincoat",
      "gabardine",
      "outerwear"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-6-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-7",
    "sku": "AUR-MEN-007",
    "brand": "AURELIA ATELIER",
    "name": "Linen-Silk Unstructured Havana Blazer",
    "slug": "linen-silk-unstructured-havana-blazer",
    "description": "Unlined tropical tailoring from a 60% Irish linen, 40% mulberry silk open weave. Patch pockets with soft spalla camicia shoulder.",
    "category": "men",
    "subcategory": "Tailoring",
    "price": 29500,
    "mrp": 38000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Sand Ecru",
        "hex": "#d9cdb8"
      },
      {
        "name": "French Navy",
        "hex": "#1c2841"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "variants": [
      {
        "id": "v-7-Sa-38R",
        "size": "38R",
        "color": "Sand Ecru",
        "colorCode": "#d9cdb8",
        "stock": 22,
        "sku": "AUR-MEN-007-SAN-38R",
        "price": 29500
      },
      {
        "id": "v-7-Sa-40R",
        "size": "40R",
        "color": "Sand Ecru",
        "colorCode": "#d9cdb8",
        "stock": 27,
        "sku": "AUR-MEN-007-SAN-40R",
        "price": 29500
      },
      {
        "id": "v-7-Sa-42R",
        "size": "42R",
        "color": "Sand Ecru",
        "colorCode": "#d9cdb8",
        "stock": 7,
        "sku": "AUR-MEN-007-SAN-42R",
        "price": 29500
      },
      {
        "id": "v-7-Fr-38R",
        "size": "38R",
        "color": "French Navy",
        "colorCode": "#1c2841",
        "stock": 22,
        "sku": "AUR-MEN-007-FRE-38R",
        "price": 29500
      },
      {
        "id": "v-7-Fr-40R",
        "size": "40R",
        "color": "French Navy",
        "colorCode": "#1c2841",
        "stock": 27,
        "sku": "AUR-MEN-007-FRE-40R",
        "price": 29500
      },
      {
        "id": "v-7-Fr-42R",
        "size": "42R",
        "color": "French Navy",
        "colorCode": "#1c2841",
        "stock": 7,
        "sku": "AUR-MEN-007-FRE-42R",
        "price": 29500
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 112,
    "tags": [
      "blazer",
      "linen",
      "summer",
      "unstructured"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-7-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 24
      }
    ]
  },
  {
    "id": "prod-8",
    "sku": "AUR-MEN-008",
    "brand": "AURELIA ATELIER",
    "name": "Sea Island Cotton Fine Polo Sweater",
    "slug": "sea-island-cotton-fine-polo-sweater",
    "description": "Silky West Indian Sea Island cotton spun on 18-gauge Japanese machines. Mother-of-pearl buttons with seamless knit collar.",
    "category": "men",
    "subcategory": "Knitwear",
    "price": 13500,
    "mrp": 18000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1625910513413-56221c54bc1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Espresso",
        "hex": "#31231e"
      },
      {
        "name": "Sage Green",
        "hex": "#717d6b"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "variants": [
      {
        "id": "v-8-Es-S",
        "size": "S",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 25,
        "sku": "AUR-MEN-008-ESP-S",
        "price": 13500
      },
      {
        "id": "v-8-Es-M",
        "size": "M",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 5,
        "sku": "AUR-MEN-008-ESP-M",
        "price": 13500
      },
      {
        "id": "v-8-Es-L",
        "size": "L",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 10,
        "sku": "AUR-MEN-008-ESP-L",
        "price": 13500
      },
      {
        "id": "v-8-Sa-S",
        "size": "S",
        "color": "Sage Green",
        "colorCode": "#717d6b",
        "stock": 25,
        "sku": "AUR-MEN-008-SAG-S",
        "price": 13500
      },
      {
        "id": "v-8-Sa-M",
        "size": "M",
        "color": "Sage Green",
        "colorCode": "#717d6b",
        "stock": 5,
        "sku": "AUR-MEN-008-SAG-M",
        "price": 13500
      },
      {
        "id": "v-8-Sa-L",
        "size": "L",
        "color": "Sage Green",
        "colorCode": "#717d6b",
        "stock": 10,
        "sku": "AUR-MEN-008-SAG-L",
        "price": 13500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 80,
    "tags": [
      "polo",
      "knitwear",
      "sea-island",
      "cotton"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-8-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 25
      }
    ]
  },
  {
    "id": "prod-9",
    "sku": "AUR-MEN-009",
    "brand": "AURELIA ATELIER",
    "name": "Suede Calfskin Minimalist Harrington Jacket",
    "slug": "suede-calfskin-minimalist-harrington-jacket",
    "description": "Velvety Italian split calf suede with cupro lining, two-way RiRi Swiss zippers, and tailored ribbed hem and cuffs.",
    "category": "men",
    "subcategory": "Outerwear",
    "price": 52000,
    "mrp": 72000,
    "discount": 28,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Cognac Brown",
        "hex": "#6d4223"
      },
      {
        "name": "Muted Olive",
        "hex": "#525441"
      }
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "variants": [
      {
        "id": "v-9-Co-38",
        "size": "38",
        "color": "Cognac Brown",
        "colorCode": "#6d4223",
        "stock": 28,
        "sku": "AUR-MEN-009-COG-38",
        "price": 52000
      },
      {
        "id": "v-9-Co-40",
        "size": "40",
        "color": "Cognac Brown",
        "colorCode": "#6d4223",
        "stock": 8,
        "sku": "AUR-MEN-009-COG-40",
        "price": 52000
      },
      {
        "id": "v-9-Co-42",
        "size": "42",
        "color": "Cognac Brown",
        "colorCode": "#6d4223",
        "stock": 13,
        "sku": "AUR-MEN-009-COG-42",
        "price": 52000
      },
      {
        "id": "v-9-Mu-38",
        "size": "38",
        "color": "Muted Olive",
        "colorCode": "#525441",
        "stock": 28,
        "sku": "AUR-MEN-009-MUT-38",
        "price": 52000
      },
      {
        "id": "v-9-Mu-40",
        "size": "40",
        "color": "Muted Olive",
        "colorCode": "#525441",
        "stock": 8,
        "sku": "AUR-MEN-009-MUT-40",
        "price": 52000
      },
      {
        "id": "v-9-Mu-42",
        "size": "42",
        "color": "Muted Olive",
        "colorCode": "#525441",
        "stock": 13,
        "sku": "AUR-MEN-009-MUT-42",
        "price": 52000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 98,
    "tags": [
      "suede",
      "leather",
      "harrington",
      "jacket"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-9-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-10",
    "sku": "AUR-MEN-010",
    "brand": "AURELIA ATELIER",
    "name": "Donegal Tweed Windowpane Sports Coat",
    "slug": "donegal-tweed-windowpane-sports-coat",
    "description": "Authentic Irish handwoven Donegal tweed with multi-colored flecks. Leather-wrapped buttons and half-canvas chest piece.",
    "category": "men",
    "subcategory": "Tailoring",
    "price": 36000,
    "mrp": 46000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Rust Brown Fleck",
        "hex": "#7a3e26"
      },
      {
        "name": "Forest Green",
        "hex": "#263b2f"
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "variants": [
      {
        "id": "v-10-Ru-38R",
        "size": "38R",
        "color": "Rust Brown Fleck",
        "colorCode": "#7a3e26",
        "stock": 6,
        "sku": "AUR-MEN-010-RUS-38R",
        "price": 36000
      },
      {
        "id": "v-10-Ru-40R",
        "size": "40R",
        "color": "Rust Brown Fleck",
        "colorCode": "#7a3e26",
        "stock": 11,
        "sku": "AUR-MEN-010-RUS-40R",
        "price": 36000
      },
      {
        "id": "v-10-Ru-42R",
        "size": "42R",
        "color": "Rust Brown Fleck",
        "colorCode": "#7a3e26",
        "stock": 16,
        "sku": "AUR-MEN-010-RUS-42R",
        "price": 36000
      },
      {
        "id": "v-10-Fo-38R",
        "size": "38R",
        "color": "Forest Green",
        "colorCode": "#263b2f",
        "stock": 6,
        "sku": "AUR-MEN-010-FOR-38R",
        "price": 36000
      },
      {
        "id": "v-10-Fo-40R",
        "size": "40R",
        "color": "Forest Green",
        "colorCode": "#263b2f",
        "stock": 11,
        "sku": "AUR-MEN-010-FOR-40R",
        "price": 36000
      },
      {
        "id": "v-10-Fo-42R",
        "size": "42R",
        "color": "Forest Green",
        "colorCode": "#263b2f",
        "stock": 16,
        "sku": "AUR-MEN-010-FOR-42R",
        "price": 36000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 66,
    "tags": [
      "tweed",
      "donegal",
      "blazer",
      "winter"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-10-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 27
      }
    ]
  },
  {
    "id": "prod-11",
    "sku": "AUR-WOM-011",
    "brand": "MAISON AURELIA",
    "name": "Silk Georgette Pleated Tiered Midi Dress",
    "slug": "silk-georgette-pleated-tiered-midi-dress",
    "description": "Airy pure mulberry silk georgette adorned with delicate accordion pleats and a flattering defined waistline. Hand-rolled hem with invisible zip.",
    "category": "women",
    "subcategory": "Dresses",
    "price": 24500,
    "mrp": 32000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Dusty Rose",
        "hex": "#c59292"
      },
      {
        "name": "Midnight Navy",
        "hex": "#161c28"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-11-Du-XS",
        "size": "XS",
        "color": "Dusty Rose",
        "colorCode": "#c59292",
        "stock": 9,
        "sku": "AUR-WOM-011-DUS-XS",
        "price": 24500
      },
      {
        "id": "v-11-Du-S",
        "size": "S",
        "color": "Dusty Rose",
        "colorCode": "#c59292",
        "stock": 14,
        "sku": "AUR-WOM-011-DUS-S",
        "price": 24500
      },
      {
        "id": "v-11-Du-M",
        "size": "M",
        "color": "Dusty Rose",
        "colorCode": "#c59292",
        "stock": 19,
        "sku": "AUR-WOM-011-DUS-M",
        "price": 24500
      },
      {
        "id": "v-11-Mi-XS",
        "size": "XS",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 9,
        "sku": "AUR-WOM-011-MID-XS",
        "price": 24500
      },
      {
        "id": "v-11-Mi-S",
        "size": "S",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 14,
        "sku": "AUR-WOM-011-MID-S",
        "price": 24500
      },
      {
        "id": "v-11-Mi-M",
        "size": "M",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 19,
        "sku": "AUR-WOM-011-MID-M",
        "price": 24500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 84,
    "tags": [
      "silk",
      "dress",
      "pleated",
      "evening",
      "women"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-11-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 28
      }
    ]
  },
  {
    "id": "prod-12",
    "sku": "AUR-WOM-012",
    "brand": "MAISON AURELIA",
    "name": "Silk Crepe Backless Column Gala Gown",
    "slug": "silk-crepe-backless-column-gala-gown",
    "description": "Heavyweight silk crepe de chine sculpted into a dramatic column silhouette. Low drape cowl back with delicate hand-knotted pearl ties.",
    "category": "women",
    "subcategory": "Eveningwear",
    "price": 58000,
    "mrp": 75000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Jewel",
        "hex": "#0a422e"
      },
      {
        "name": "Noir Eclipse",
        "hex": "#0d0d0f"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-12-Em-XS",
        "size": "XS",
        "color": "Emerald Jewel",
        "colorCode": "#0a422e",
        "stock": 12,
        "sku": "AUR-WOM-012-EME-XS",
        "price": 58000
      },
      {
        "id": "v-12-Em-S",
        "size": "S",
        "color": "Emerald Jewel",
        "colorCode": "#0a422e",
        "stock": 17,
        "sku": "AUR-WOM-012-EME-S",
        "price": 58000
      },
      {
        "id": "v-12-Em-M",
        "size": "M",
        "color": "Emerald Jewel",
        "colorCode": "#0a422e",
        "stock": 22,
        "sku": "AUR-WOM-012-EME-M",
        "price": 58000
      },
      {
        "id": "v-12-No-XS",
        "size": "XS",
        "color": "Noir Eclipse",
        "colorCode": "#0d0d0f",
        "stock": 12,
        "sku": "AUR-WOM-012-NOI-XS",
        "price": 58000
      },
      {
        "id": "v-12-No-S",
        "size": "S",
        "color": "Noir Eclipse",
        "colorCode": "#0d0d0f",
        "stock": 17,
        "sku": "AUR-WOM-012-NOI-S",
        "price": 58000
      },
      {
        "id": "v-12-No-M",
        "size": "M",
        "color": "Noir Eclipse",
        "colorCode": "#0d0d0f",
        "stock": 22,
        "sku": "AUR-WOM-012-NOI-M",
        "price": 58000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 102,
    "tags": [
      "gown",
      "eveningwear",
      "gala",
      "silk",
      "backless"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-12-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-13",
    "sku": "AUR-WOM-013",
    "brand": "MAISON AURELIA",
    "name": "Double-Faced Cashmere Wrap Belted Coat",
    "slug": "double-faced-cashmere-wrap-belted-coat",
    "description": "Hand-sewn double-faced cashmere offering unlined luxury and featherweight warmth. Waterfall shawl lapels with matching tie belt.",
    "category": "women",
    "subcategory": "Outerwear",
    "price": 46000,
    "mrp": 62000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Champagne Taupe",
        "hex": "#d4c7b8"
      },
      {
        "name": "Rich Charcoal",
        "hex": "#2c2e33"
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-13-Ch-S",
        "size": "S",
        "color": "Champagne Taupe",
        "colorCode": "#d4c7b8",
        "stock": 15,
        "sku": "AUR-WOM-013-CHA-S",
        "price": 46000
      },
      {
        "id": "v-13-Ch-M",
        "size": "M",
        "color": "Champagne Taupe",
        "colorCode": "#d4c7b8",
        "stock": 20,
        "sku": "AUR-WOM-013-CHA-M",
        "price": 46000
      },
      {
        "id": "v-13-Ch-L",
        "size": "L",
        "color": "Champagne Taupe",
        "colorCode": "#d4c7b8",
        "stock": 25,
        "sku": "AUR-WOM-013-CHA-L",
        "price": 46000
      },
      {
        "id": "v-13-Ri-S",
        "size": "S",
        "color": "Rich Charcoal",
        "colorCode": "#2c2e33",
        "stock": 15,
        "sku": "AUR-WOM-013-RIC-S",
        "price": 46000
      },
      {
        "id": "v-13-Ri-M",
        "size": "M",
        "color": "Rich Charcoal",
        "colorCode": "#2c2e33",
        "stock": 20,
        "sku": "AUR-WOM-013-RIC-M",
        "price": 46000
      },
      {
        "id": "v-13-Ri-L",
        "size": "L",
        "color": "Rich Charcoal",
        "colorCode": "#2c2e33",
        "stock": 25,
        "sku": "AUR-WOM-013-RIC-L",
        "price": 46000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 120,
    "tags": [
      "coat",
      "cashmere",
      "wrap",
      "outerwear"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-13-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 30
      }
    ]
  },
  {
    "id": "prod-14",
    "sku": "AUR-WOM-014",
    "brand": "MAISON AURELIA",
    "name": "Silk-Satin Tuxedo Blazer with Structured Shoulders",
    "slug": "silk-satin-tuxedo-blazer-with-structured-shoulders",
    "description": "Sharp architectural tailoring in duchess satin. Contrast duchess lapels with concealed magnetic closure and tailored pagoda shoulders.",
    "category": "women",
    "subcategory": "Tailoring",
    "price": 32000,
    "mrp": 42000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Ivory Pearl",
        "hex": "#fdfbf7"
      },
      {
        "name": "Onyx Black",
        "hex": "#111113"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-14-Iv-XS",
        "size": "XS",
        "color": "Ivory Pearl",
        "colorCode": "#fdfbf7",
        "stock": 18,
        "sku": "AUR-WOM-014-IVO-XS",
        "price": 32000
      },
      {
        "id": "v-14-Iv-S",
        "size": "S",
        "color": "Ivory Pearl",
        "colorCode": "#fdfbf7",
        "stock": 23,
        "sku": "AUR-WOM-014-IVO-S",
        "price": 32000
      },
      {
        "id": "v-14-Iv-M",
        "size": "M",
        "color": "Ivory Pearl",
        "colorCode": "#fdfbf7",
        "stock": 28,
        "sku": "AUR-WOM-014-IVO-M",
        "price": 32000
      },
      {
        "id": "v-14-On-XS",
        "size": "XS",
        "color": "Onyx Black",
        "colorCode": "#111113",
        "stock": 18,
        "sku": "AUR-WOM-014-ONY-XS",
        "price": 32000
      },
      {
        "id": "v-14-On-S",
        "size": "S",
        "color": "Onyx Black",
        "colorCode": "#111113",
        "stock": 23,
        "sku": "AUR-WOM-014-ONY-S",
        "price": 32000
      },
      {
        "id": "v-14-On-M",
        "size": "M",
        "color": "Onyx Black",
        "colorCode": "#111113",
        "stock": 28,
        "sku": "AUR-WOM-014-ONY-M",
        "price": 32000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 138,
    "tags": [
      "blazer",
      "tuxedo",
      "tailoring",
      "satin"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-14-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 31
      }
    ]
  },
  {
    "id": "prod-15",
    "sku": "AUR-WOM-015",
    "brand": "MAISON AURELIA",
    "name": "Asymmetric Sunburst Pleated Silk Maxi Skirt",
    "slug": "asymmetric-sunburst-pleated-silk-maxi-skirt",
    "description": "Sunburst heat-set accordion pleats that cascade into a fluid asymmetrical hemline. High-rise silk satin waistband.",
    "category": "women",
    "subcategory": "Skirts",
    "price": 18900,
    "mrp": 24000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Amber Gold",
        "hex": "#d19b45"
      },
      {
        "name": "Plum Noir",
        "hex": "#441d3b"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-15-Am-XS",
        "size": "XS",
        "color": "Amber Gold",
        "colorCode": "#d19b45",
        "stock": 21,
        "sku": "AUR-WOM-015-AMB-XS",
        "price": 18900
      },
      {
        "id": "v-15-Am-S",
        "size": "S",
        "color": "Amber Gold",
        "colorCode": "#d19b45",
        "stock": 26,
        "sku": "AUR-WOM-015-AMB-S",
        "price": 18900
      },
      {
        "id": "v-15-Am-M",
        "size": "M",
        "color": "Amber Gold",
        "colorCode": "#d19b45",
        "stock": 6,
        "sku": "AUR-WOM-015-AMB-M",
        "price": 18900
      },
      {
        "id": "v-15-Pl-XS",
        "size": "XS",
        "color": "Plum Noir",
        "colorCode": "#441d3b",
        "stock": 21,
        "sku": "AUR-WOM-015-PLU-XS",
        "price": 18900
      },
      {
        "id": "v-15-Pl-S",
        "size": "S",
        "color": "Plum Noir",
        "colorCode": "#441d3b",
        "stock": 26,
        "sku": "AUR-WOM-015-PLU-S",
        "price": 18900
      },
      {
        "id": "v-15-Pl-M",
        "size": "M",
        "color": "Plum Noir",
        "colorCode": "#441d3b",
        "stock": 6,
        "sku": "AUR-WOM-015-PLU-M",
        "price": 18900
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 106,
    "tags": [
      "skirt",
      "maxi",
      "silk",
      "pleated"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-15-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-16",
    "sku": "AUR-WOM-016",
    "brand": "MAISON AURELIA",
    "name": "Featherweight Cashmere Boatneck Sweater",
    "slug": "featherweight-cashmere-boatneck-sweater",
    "description": "Spun from single-ply gossamer cashmere. Seamless boat neckline with relaxed dolman sleeves and ribbed micro-cuffs.",
    "category": "women",
    "subcategory": "Knitwear",
    "price": 14500,
    "mrp": 19500,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Powder Blush",
        "hex": "#f2dede"
      },
      {
        "name": "Cloud Grey",
        "hex": "#d4d8db"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-16-Po-XS",
        "size": "XS",
        "color": "Powder Blush",
        "colorCode": "#f2dede",
        "stock": 24,
        "sku": "AUR-WOM-016-POW-XS",
        "price": 14500
      },
      {
        "id": "v-16-Po-S",
        "size": "S",
        "color": "Powder Blush",
        "colorCode": "#f2dede",
        "stock": 4,
        "sku": "AUR-WOM-016-POW-S",
        "price": 14500
      },
      {
        "id": "v-16-Po-M",
        "size": "M",
        "color": "Powder Blush",
        "colorCode": "#f2dede",
        "stock": 9,
        "sku": "AUR-WOM-016-POW-M",
        "price": 14500
      },
      {
        "id": "v-16-Cl-XS",
        "size": "XS",
        "color": "Cloud Grey",
        "colorCode": "#d4d8db",
        "stock": 24,
        "sku": "AUR-WOM-016-CLO-XS",
        "price": 14500
      },
      {
        "id": "v-16-Cl-S",
        "size": "S",
        "color": "Cloud Grey",
        "colorCode": "#d4d8db",
        "stock": 4,
        "sku": "AUR-WOM-016-CLO-S",
        "price": 14500
      },
      {
        "id": "v-16-Cl-M",
        "size": "M",
        "color": "Cloud Grey",
        "colorCode": "#d4d8db",
        "stock": 9,
        "sku": "AUR-WOM-016-CLO-M",
        "price": 14500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 74,
    "tags": [
      "cashmere",
      "knitwear",
      "boatneck",
      "minimalist"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-16-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 33
      }
    ]
  },
  {
    "id": "prod-17",
    "sku": "AUR-WOM-017",
    "brand": "MAISON AURELIA",
    "name": "Devoré Silk Velvet Cape-Sleeve Cocktail Dress",
    "slug": "devor-silk-velvet-cape-sleeve-cocktail-dress",
    "description": "Burnout floral devoré silk velvet over delicate nude chiffon backing. Features dramatic capelet sleeves and jewel neckline.",
    "category": "women",
    "subcategory": "Eveningwear",
    "price": 36000,
    "mrp": 48000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Garnet Red",
        "hex": "#681c24"
      },
      {
        "name": "Midnight Obsidian",
        "hex": "#0f1118"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-17-Ga-XS",
        "size": "XS",
        "color": "Garnet Red",
        "colorCode": "#681c24",
        "stock": 27,
        "sku": "AUR-WOM-017-GAR-XS",
        "price": 36000
      },
      {
        "id": "v-17-Ga-S",
        "size": "S",
        "color": "Garnet Red",
        "colorCode": "#681c24",
        "stock": 7,
        "sku": "AUR-WOM-017-GAR-S",
        "price": 36000
      },
      {
        "id": "v-17-Ga-M",
        "size": "M",
        "color": "Garnet Red",
        "colorCode": "#681c24",
        "stock": 12,
        "sku": "AUR-WOM-017-GAR-M",
        "price": 36000
      },
      {
        "id": "v-17-Mi-XS",
        "size": "XS",
        "color": "Midnight Obsidian",
        "colorCode": "#0f1118",
        "stock": 27,
        "sku": "AUR-WOM-017-MID-XS",
        "price": 36000
      },
      {
        "id": "v-17-Mi-S",
        "size": "S",
        "color": "Midnight Obsidian",
        "colorCode": "#0f1118",
        "stock": 7,
        "sku": "AUR-WOM-017-MID-S",
        "price": 36000
      },
      {
        "id": "v-17-Mi-M",
        "size": "M",
        "color": "Midnight Obsidian",
        "colorCode": "#0f1118",
        "stock": 12,
        "sku": "AUR-WOM-017-MID-M",
        "price": 36000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 92,
    "tags": [
      "velvet",
      "cocktail",
      "dress",
      "cape",
      "evening"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-17-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 34
      }
    ]
  },
  {
    "id": "prod-18",
    "sku": "AUR-WOM-018",
    "brand": "MAISON AURELIA",
    "name": "Mulberry Silk Charmeuse Lavallière Blouse",
    "slug": "mulberry-silk-charmeuse-lavalli-re-blouse",
    "description": "Sumptuous 22-momme heavy silk charmeuse with integrated pussy-bow necktie and covered button cuffs.",
    "category": "women",
    "subcategory": "Shirting",
    "price": 16800,
    "mrp": 22000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Champagne Ivory",
        "hex": "#f7f1e5"
      },
      {
        "name": "Emerald Forest",
        "hex": "#16382b"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-18-Ch-XS",
        "size": "XS",
        "color": "Champagne Ivory",
        "colorCode": "#f7f1e5",
        "stock": 5,
        "sku": "AUR-WOM-018-CHA-XS",
        "price": 16800
      },
      {
        "id": "v-18-Ch-S",
        "size": "S",
        "color": "Champagne Ivory",
        "colorCode": "#f7f1e5",
        "stock": 10,
        "sku": "AUR-WOM-018-CHA-S",
        "price": 16800
      },
      {
        "id": "v-18-Ch-M",
        "size": "M",
        "color": "Champagne Ivory",
        "colorCode": "#f7f1e5",
        "stock": 15,
        "sku": "AUR-WOM-018-CHA-M",
        "price": 16800
      },
      {
        "id": "v-18-Em-XS",
        "size": "XS",
        "color": "Emerald Forest",
        "colorCode": "#16382b",
        "stock": 5,
        "sku": "AUR-WOM-018-EME-XS",
        "price": 16800
      },
      {
        "id": "v-18-Em-S",
        "size": "S",
        "color": "Emerald Forest",
        "colorCode": "#16382b",
        "stock": 10,
        "sku": "AUR-WOM-018-EME-S",
        "price": 16800
      },
      {
        "id": "v-18-Em-M",
        "size": "M",
        "color": "Emerald Forest",
        "colorCode": "#16382b",
        "stock": 15,
        "sku": "AUR-WOM-018-EME-M",
        "price": 16800
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 60,
    "tags": [
      "blouse",
      "silk",
      "lavalliere",
      "charmeuse"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-18-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-19",
    "sku": "AUR-WOM-019",
    "brand": "MAISON AURELIA",
    "name": "High-Waisted Silk-Wool Wide Leg Palazzos",
    "slug": "high-waisted-silk-wool-wide-leg-palazzos",
    "description": "Architectural silhouette engineered with structured high waist and fluid floor-skimming wide legs in a silk-wool barathea.",
    "category": "women",
    "subcategory": "Trousers",
    "price": 21000,
    "mrp": 28000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Deep Ivory",
        "hex": "#f4ede2"
      },
      {
        "name": "Classic Black",
        "hex": "#141414"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "variants": [
      {
        "id": "v-19-De-XS",
        "size": "XS",
        "color": "Deep Ivory",
        "colorCode": "#f4ede2",
        "stock": 8,
        "sku": "AUR-WOM-019-DEE-XS",
        "price": 21000
      },
      {
        "id": "v-19-De-S",
        "size": "S",
        "color": "Deep Ivory",
        "colorCode": "#f4ede2",
        "stock": 13,
        "sku": "AUR-WOM-019-DEE-S",
        "price": 21000
      },
      {
        "id": "v-19-De-M",
        "size": "M",
        "color": "Deep Ivory",
        "colorCode": "#f4ede2",
        "stock": 18,
        "sku": "AUR-WOM-019-DEE-M",
        "price": 21000
      },
      {
        "id": "v-19-Cl-XS",
        "size": "XS",
        "color": "Classic Black",
        "colorCode": "#141414",
        "stock": 8,
        "sku": "AUR-WOM-019-CLA-XS",
        "price": 21000
      },
      {
        "id": "v-19-Cl-S",
        "size": "S",
        "color": "Classic Black",
        "colorCode": "#141414",
        "stock": 13,
        "sku": "AUR-WOM-019-CLA-S",
        "price": 21000
      },
      {
        "id": "v-19-Cl-M",
        "size": "M",
        "color": "Classic Black",
        "colorCode": "#141414",
        "stock": 18,
        "sku": "AUR-WOM-019-CLA-M",
        "price": 21000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 78,
    "tags": [
      "palazzo",
      "trousers",
      "silk-wool",
      "wide-leg"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-19-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 36
      }
    ]
  },
  {
    "id": "prod-20",
    "sku": "AUR-WOM-020",
    "brand": "MAISON AURELIA",
    "name": "Virgin Wool Sculptural Cape Coat",
    "slug": "virgin-wool-sculptural-cape-coat",
    "description": "Dramatic architectural cape tailored from brushed virgin wool melton with leather trim arm slits and signature horn clasp.",
    "category": "women",
    "subcategory": "Outerwear",
    "price": 39500,
    "mrp": 52000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Caramel Camel",
        "hex": "#a67b4f"
      },
      {
        "name": "Charcoal Slate",
        "hex": "#32353b"
      }
    ],
    "sizes": [
      "S/M",
      "M/L"
    ],
    "variants": [
      {
        "id": "v-20-Ca-S/M",
        "size": "S/M",
        "color": "Caramel Camel",
        "colorCode": "#a67b4f",
        "stock": 11,
        "sku": "AUR-WOM-020-CAR-S/M",
        "price": 39500
      },
      {
        "id": "v-20-Ca-M/L",
        "size": "M/L",
        "color": "Caramel Camel",
        "colorCode": "#a67b4f",
        "stock": 16,
        "sku": "AUR-WOM-020-CAR-M/L",
        "price": 39500
      },
      {
        "id": "v-20-Ch-S/M",
        "size": "S/M",
        "color": "Charcoal Slate",
        "colorCode": "#32353b",
        "stock": 11,
        "sku": "AUR-WOM-020-CHA-S/M",
        "price": 39500
      },
      {
        "id": "v-20-Ch-M/L",
        "size": "M/L",
        "color": "Charcoal Slate",
        "colorCode": "#32353b",
        "stock": 16,
        "sku": "AUR-WOM-020-CHA-M/L",
        "price": 39500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 54,
    "tags": [
      "cape",
      "coat",
      "wool",
      "outerwear"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-20-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 37
      }
    ]
  },
  {
    "id": "prod-21",
    "sku": "AUR-LEA-021",
    "brand": "AURELIA ATELIER",
    "name": "The Sovereign Flap Bag in Box Calfskin",
    "slug": "the-sovereign-flap-bag-in-box-calfskin",
    "description": "Sculpted by hand from structured French box calfskin. 24K gold-plated lock clasp with nappa leather lining and dual compartments.",
    "category": "leathergoods",
    "subcategory": "Handbags",
    "price": 49500,
    "mrp": 68000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Noir Gold",
        "hex": "#111215"
      },
      {
        "name": "Burgundy Rouge",
        "hex": "#4d1921"
      }
    ],
    "sizes": [
      "Medium",
      "Small"
    ],
    "variants": [
      {
        "id": "v-21-No-Medium",
        "size": "Medium",
        "color": "Noir Gold",
        "colorCode": "#111215",
        "stock": 14,
        "sku": "AUR-LEA-021-NOI-Medium",
        "price": 49500
      },
      {
        "id": "v-21-No-Small",
        "size": "Small",
        "color": "Noir Gold",
        "colorCode": "#111215",
        "stock": 19,
        "sku": "AUR-LEA-021-NOI-Small",
        "price": 49500
      },
      {
        "id": "v-21-Bu-Medium",
        "size": "Medium",
        "color": "Burgundy Rouge",
        "colorCode": "#4d1921",
        "stock": 14,
        "sku": "AUR-LEA-021-BUR-Medium",
        "price": 49500
      },
      {
        "id": "v-21-Bu-Small",
        "size": "Small",
        "color": "Burgundy Rouge",
        "colorCode": "#4d1921",
        "stock": 19,
        "sku": "AUR-LEA-021-BUR-Small",
        "price": 49500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 66,
    "tags": [
      "handbag",
      "leather",
      "calfskin",
      "gold-hardware"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-21-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-22",
    "sku": "AUR-LEA-022",
    "brand": "AURELIA ATELIER",
    "name": "Palazzo Grand Structured Leather Tote",
    "slug": "palazzo-grand-structured-leather-tote",
    "description": "Generously proportioned luxury carryall in vegetable-tanned Italian bridle leather. Includes detachable zip clutch and key leashes.",
    "category": "leathergoods",
    "subcategory": "Totes",
    "price": 42000,
    "mrp": 56000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Cognac Saddle",
        "hex": "#7a4823"
      },
      {
        "name": "Deep Espresso",
        "hex": "#261b16"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-22-Co-One Size",
        "size": "One Size",
        "color": "Cognac Saddle",
        "colorCode": "#7a4823",
        "stock": 17,
        "sku": "AUR-LEA-022-COG-One Size",
        "price": 42000
      },
      {
        "id": "v-22-De-One Size",
        "size": "One Size",
        "color": "Deep Espresso",
        "colorCode": "#261b16",
        "stock": 17,
        "sku": "AUR-LEA-022-DEE-One Size",
        "price": 42000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 34,
    "tags": [
      "tote",
      "workbag",
      "leather",
      "carryall"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-22-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 39
      }
    ]
  },
  {
    "id": "prod-23",
    "sku": "AUR-LEA-023",
    "brand": "AURELIA ATELIER",
    "name": "Veneto Weekender 48H Duffle Trunk",
    "slug": "veneto-weekender-48h-duffle-trunk",
    "description": "Mastercrafted for grand tour voyages. Hand-rubbed pull-up leather, reinforced brass corner protectors, and padlock keys.",
    "category": "leathergoods",
    "subcategory": "Luggage",
    "price": 64000,
    "mrp": 85000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Havana Whiskey",
        "hex": "#875129"
      },
      {
        "name": "Carbon Black",
        "hex": "#161719"
      }
    ],
    "sizes": [
      "48-Hour"
    ],
    "variants": [
      {
        "id": "v-23-Ha-48-Hour",
        "size": "48-Hour",
        "color": "Havana Whiskey",
        "colorCode": "#875129",
        "stock": 20,
        "sku": "AUR-LEA-023-HAV-48-Hour",
        "price": 64000
      },
      {
        "id": "v-23-Ca-48-Hour",
        "size": "48-Hour",
        "color": "Carbon Black",
        "colorCode": "#161719",
        "stock": 20,
        "sku": "AUR-LEA-023-CAR-48-Hour",
        "price": 64000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 40,
    "tags": [
      "duffle",
      "luggage",
      "travel",
      "weekender"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-23-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 40
      }
    ]
  },
  {
    "id": "prod-24",
    "sku": "AUR-LEA-024",
    "brand": "AURELIA ATELIER",
    "name": "Audley Accordion Camera Bag in Saffiano",
    "slug": "audley-accordion-camera-bag-in-saffiano",
    "description": "Scratch-resistant cross-grain Saffiano leather featuring three accordion compartments, gold foiled logo, and adjustable strap.",
    "category": "leathergoods",
    "subcategory": "Crossbody",
    "price": 28500,
    "mrp": 36000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Emerald Pine",
        "hex": "#133527"
      },
      {
        "name": "Taupe Greige",
        "hex": "#a1998f"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-24-Em-One Size",
        "size": "One Size",
        "color": "Emerald Pine",
        "colorCode": "#133527",
        "stock": 23,
        "sku": "AUR-LEA-024-EME-One Size",
        "price": 28500
      },
      {
        "id": "v-24-Ta-One Size",
        "size": "One Size",
        "color": "Taupe Greige",
        "colorCode": "#a1998f",
        "stock": 23,
        "sku": "AUR-LEA-024-TAU-One Size",
        "price": 28500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 46,
    "tags": [
      "crossbody",
      "saffiano",
      "camera-bag"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-24-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-25",
    "sku": "AUR-LEA-025",
    "brand": "AURELIA ATELIER",
    "name": "Sculptural Minodiere in Brushed Brass & Nappa",
    "slug": "sculptural-minodiere-in-brushed-brass-nappa",
    "description": "An architectural evening jewel box cast in solid brushed brass and lined in butter-soft lambskin nappa. Detachable snake chain.",
    "category": "leathergoods",
    "subcategory": "Clutches",
    "price": 36000,
    "mrp": 46000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gilded Brass",
        "hex": "#d4af37"
      },
      {
        "name": "Silver Platinum",
        "hex": "#cccccc"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-25-Gi-One Size",
        "size": "One Size",
        "color": "Gilded Brass",
        "colorCode": "#d4af37",
        "stock": 26,
        "sku": "AUR-LEA-025-GIL-One Size",
        "price": 36000
      },
      {
        "id": "v-25-Si-One Size",
        "size": "One Size",
        "color": "Silver Platinum",
        "colorCode": "#cccccc",
        "stock": 26,
        "sku": "AUR-LEA-025-SIL-One Size",
        "price": 36000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 52,
    "tags": [
      "clutch",
      "evening",
      "brass",
      "minaudiere"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-25-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 42
      }
    ]
  },
  {
    "id": "prod-26",
    "sku": "AUR-LEA-026",
    "brand": "AURELIA ATELIER",
    "name": "Executive Single-Gusset Attache Portfolio",
    "slug": "executive-single-gusset-attache-portfolio",
    "description": "Slimline luxury attache designed to house a 15-inch laptop, legal briefs, and writing implements. Solid brass push-lock closure.",
    "category": "leathergoods",
    "subcategory": "Briefcases",
    "price": 38900,
    "mrp": 52000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "London Tan",
        "hex": "#93582e"
      },
      {
        "name": "Black Box",
        "hex": "#121213"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-26-Lo-One Size",
        "size": "One Size",
        "color": "London Tan",
        "colorCode": "#93582e",
        "stock": 4,
        "sku": "AUR-LEA-026-LON-One Size",
        "price": 38900
      },
      {
        "id": "v-26-Bl-One Size",
        "size": "One Size",
        "color": "Black Box",
        "colorCode": "#121213",
        "stock": 4,
        "sku": "AUR-LEA-026-BLA-One Size",
        "price": 38900
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 8,
    "tags": [
      "briefcase",
      "attache",
      "executive",
      "work"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-26-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 43
      }
    ]
  },
  {
    "id": "prod-27",
    "sku": "AUR-LEA-027",
    "brand": "AURELIA ATELIER",
    "name": "St. Germain Streamline City Leather Backpack",
    "slug": "st-germain-streamline-city-leather-backpack",
    "description": "Modern architectural backpack crafted in supple full-grain pebbled calfskin. Breathable padded mesh rear panel and luggage sleeve.",
    "category": "leathergoods",
    "subcategory": "Backpacks",
    "price": 34500,
    "mrp": 45000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Onyx Black",
        "hex": "#161616"
      },
      {
        "name": "Graphite Grey",
        "hex": "#3a3d42"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-27-On-One Size",
        "size": "One Size",
        "color": "Onyx Black",
        "colorCode": "#161616",
        "stock": 7,
        "sku": "AUR-LEA-027-ONY-One Size",
        "price": 34500
      },
      {
        "id": "v-27-Gr-One Size",
        "size": "One Size",
        "color": "Graphite Grey",
        "colorCode": "#3a3d42",
        "stock": 7,
        "sku": "AUR-LEA-027-GRA-One Size",
        "price": 34500
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 14,
    "tags": [
      "backpack",
      "leather",
      "city",
      "commute"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-27-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-28",
    "sku": "AUR-LEA-028",
    "brand": "AURELIA ATELIER",
    "name": "Continental Long Zip-Around Wallet",
    "slug": "continental-long-zip-around-wallet",
    "description": "12 card slots, dual banknote gussets, and central zippered coin purse in pristine Epsom grain calfskin.",
    "category": "leathergoods",
    "subcategory": "Wallets",
    "price": 15500,
    "mrp": 20000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Scarlet Rouge",
        "hex": "#911a24"
      },
      {
        "name": "Black Caviar",
        "hex": "#111214"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-28-Sc-One Size",
        "size": "One Size",
        "color": "Scarlet Rouge",
        "colorCode": "#911a24",
        "stock": 10,
        "sku": "AUR-LEA-028-SCA-One Size",
        "price": 15500
      },
      {
        "id": "v-28-Bl-One Size",
        "size": "One Size",
        "color": "Black Caviar",
        "colorCode": "#111214",
        "stock": 10,
        "sku": "AUR-LEA-028-BLA-One Size",
        "price": 15500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 20,
    "tags": [
      "wallet",
      "continental",
      "leather",
      "accessories"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-28-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 45
      }
    ]
  },
  {
    "id": "prod-29",
    "sku": "AUR-LEA-029",
    "brand": "AURELIA ATELIER",
    "name": "Bespoke Passport Cover & Luggage Tag Set",
    "slug": "bespoke-passport-cover-luggage-tag-set",
    "description": "Hand-burnished vegetable-tanned calfskin travel set with gold foil embossing. Includes RFID-blocking internal shield.",
    "category": "leathergoods",
    "subcategory": "Small Goods",
    "price": 8900,
    "mrp": 12000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "British Racing Green",
        "hex": "#0e382b"
      },
      {
        "name": "Cognac",
        "hex": "#774020"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-29-Br-One Size",
        "size": "One Size",
        "color": "British Racing Green",
        "colorCode": "#0e382b",
        "stock": 13,
        "sku": "AUR-LEA-029-BRI-One Size",
        "price": 8900
      },
      {
        "id": "v-29-Co-One Size",
        "size": "One Size",
        "color": "Cognac",
        "colorCode": "#774020",
        "stock": 13,
        "sku": "AUR-LEA-029-COG-One Size",
        "price": 8900
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 26,
    "tags": [
      "passport",
      "travel",
      "gift",
      "leather"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-29-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 46
      }
    ]
  },
  {
    "id": "prod-30",
    "sku": "AUR-LEA-030",
    "brand": "AURELIA ATELIER",
    "name": "The Crescent Hobo Bag in Slouchy Nappa",
    "slug": "the-crescent-hobo-bag-in-slouchy-nappa",
    "description": "Effortlessly drapey ergonomic crescent silhouette crafted from butter-soft washed lambskin. Magnetic top closure.",
    "category": "leathergoods",
    "subcategory": "Handbags",
    "price": 37500,
    "mrp": 49000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Butter Cream",
        "hex": "#ede6d8"
      },
      {
        "name": "Espresso Bean",
        "hex": "#2d221e"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-30-Bu-One Size",
        "size": "One Size",
        "color": "Butter Cream",
        "colorCode": "#ede6d8",
        "stock": 16,
        "sku": "AUR-LEA-030-BUT-One Size",
        "price": 37500
      },
      {
        "id": "v-30-Es-One Size",
        "size": "One Size",
        "color": "Espresso Bean",
        "colorCode": "#2d221e",
        "stock": 16,
        "sku": "AUR-LEA-030-ESP-One Size",
        "price": 37500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 32,
    "tags": [
      "hobo",
      "crescent",
      "nappa",
      "shoulder-bag"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-30-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-31",
    "sku": "AUR-FOO-031",
    "brand": "AURELIA ATELIER",
    "name": "Goodyear-Welted Oxford Brogues in Box Calf",
    "slug": "goodyear-welted-oxford-brogues-in-box-calf",
    "description": "Hand-lasted in Northamptonshire on our classic almond last. Full grain French calfskin with hand-punched medallion broguing.",
    "category": "footwear",
    "subcategory": "Men Footwear",
    "price": 28500,
    "mrp": 38000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Chestnut Patina",
        "hex": "#5c321d"
      },
      {
        "name": "Jet Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "7 UK",
      "8 UK",
      "9 UK",
      "10 UK",
      "11 UK"
    ],
    "variants": [
      {
        "id": "v-31-Ch-7 UK",
        "size": "7 UK",
        "color": "Chestnut Patina",
        "colorCode": "#5c321d",
        "stock": 19,
        "sku": "AUR-FOO-031-CHE-7 UK",
        "price": 28500
      },
      {
        "id": "v-31-Ch-8 UK",
        "size": "8 UK",
        "color": "Chestnut Patina",
        "colorCode": "#5c321d",
        "stock": 24,
        "sku": "AUR-FOO-031-CHE-8 UK",
        "price": 28500
      },
      {
        "id": "v-31-Ch-9 UK",
        "size": "9 UK",
        "color": "Chestnut Patina",
        "colorCode": "#5c321d",
        "stock": 4,
        "sku": "AUR-FOO-031-CHE-9 UK",
        "price": 28500
      },
      {
        "id": "v-31-Je-7 UK",
        "size": "7 UK",
        "color": "Jet Black",
        "colorCode": "#111111",
        "stock": 19,
        "sku": "AUR-FOO-031-JET-7 UK",
        "price": 28500
      },
      {
        "id": "v-31-Je-8 UK",
        "size": "8 UK",
        "color": "Jet Black",
        "colorCode": "#111111",
        "stock": 24,
        "sku": "AUR-FOO-031-JET-8 UK",
        "price": 28500
      },
      {
        "id": "v-31-Je-9 UK",
        "size": "9 UK",
        "color": "Jet Black",
        "colorCode": "#111111",
        "stock": 4,
        "sku": "AUR-FOO-031-JET-9 UK",
        "price": 28500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 94,
    "tags": [
      "oxford",
      "brogue",
      "goodyear-welted",
      "formal",
      "shoes"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-31-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 48
      }
    ]
  },
  {
    "id": "prod-32",
    "sku": "AUR-FOO-032",
    "brand": "MAISON AURELIA",
    "name": "Sculptural 90mm Silk-Satin Stilettos",
    "slug": "sculptural-90mm-silk-satin-stilettos",
    "description": "Pointed pump wrapped in Italian silk duchess satin. Features a signature flared architectural stiletto heel and padded leather insole.",
    "category": "footwear",
    "subcategory": "Women Footwear",
    "price": 26000,
    "mrp": 34000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#dfc79b"
      },
      {
        "name": "Vampire Red",
        "hex": "#77161b"
      }
    ],
    "sizes": [
      "36 EU",
      "37 EU",
      "38 EU",
      "39 EU",
      "40 EU"
    ],
    "variants": [
      {
        "id": "v-32-Ch-36 EU",
        "size": "36 EU",
        "color": "Champagne Gold",
        "colorCode": "#dfc79b",
        "stock": 22,
        "sku": "AUR-FOO-032-CHA-36 EU",
        "price": 26000
      },
      {
        "id": "v-32-Ch-37 EU",
        "size": "37 EU",
        "color": "Champagne Gold",
        "colorCode": "#dfc79b",
        "stock": 27,
        "sku": "AUR-FOO-032-CHA-37 EU",
        "price": 26000
      },
      {
        "id": "v-32-Ch-38 EU",
        "size": "38 EU",
        "color": "Champagne Gold",
        "colorCode": "#dfc79b",
        "stock": 7,
        "sku": "AUR-FOO-032-CHA-38 EU",
        "price": 26000
      },
      {
        "id": "v-32-Va-36 EU",
        "size": "36 EU",
        "color": "Vampire Red",
        "colorCode": "#77161b",
        "stock": 22,
        "sku": "AUR-FOO-032-VAM-36 EU",
        "price": 26000
      },
      {
        "id": "v-32-Va-37 EU",
        "size": "37 EU",
        "color": "Vampire Red",
        "colorCode": "#77161b",
        "stock": 27,
        "sku": "AUR-FOO-032-VAM-37 EU",
        "price": 26000
      },
      {
        "id": "v-32-Va-38 EU",
        "size": "38 EU",
        "color": "Vampire Red",
        "colorCode": "#77161b",
        "stock": 7,
        "sku": "AUR-FOO-032-VAM-38 EU",
        "price": 26000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 112,
    "tags": [
      "stiletto",
      "pumps",
      "evening",
      "heels"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-32-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 49
      }
    ]
  },
  {
    "id": "prod-33",
    "sku": "AUR-FOO-033",
    "brand": "AURELIA ATELIER",
    "name": "Castello Belgian Loafers in Suede",
    "slug": "castello-belgian-loafers-in-suede",
    "description": "Unlined glove suede with hand-stitched apron and small leather bow piping. Soft single leather sole with Blake stitching.",
    "category": "footwear",
    "subcategory": "Men Footwear",
    "price": 22500,
    "mrp": 29000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Snuff Suede",
        "hex": "#7a5a3a"
      },
      {
        "name": "Midnight Navy",
        "hex": "#161c28"
      }
    ],
    "sizes": [
      "7 UK",
      "8 UK",
      "9 UK",
      "10 UK"
    ],
    "variants": [
      {
        "id": "v-33-Sn-7 UK",
        "size": "7 UK",
        "color": "Snuff Suede",
        "colorCode": "#7a5a3a",
        "stock": 25,
        "sku": "AUR-FOO-033-SNU-7 UK",
        "price": 22500
      },
      {
        "id": "v-33-Sn-8 UK",
        "size": "8 UK",
        "color": "Snuff Suede",
        "colorCode": "#7a5a3a",
        "stock": 5,
        "sku": "AUR-FOO-033-SNU-8 UK",
        "price": 22500
      },
      {
        "id": "v-33-Sn-9 UK",
        "size": "9 UK",
        "color": "Snuff Suede",
        "colorCode": "#7a5a3a",
        "stock": 10,
        "sku": "AUR-FOO-033-SNU-9 UK",
        "price": 22500
      },
      {
        "id": "v-33-Mi-7 UK",
        "size": "7 UK",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 25,
        "sku": "AUR-FOO-033-MID-7 UK",
        "price": 22500
      },
      {
        "id": "v-33-Mi-8 UK",
        "size": "8 UK",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 5,
        "sku": "AUR-FOO-033-MID-8 UK",
        "price": 22500
      },
      {
        "id": "v-33-Mi-9 UK",
        "size": "9 UK",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 10,
        "sku": "AUR-FOO-033-MID-9 UK",
        "price": 22500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 80,
    "tags": [
      "loafers",
      "suede",
      "belgian",
      "casual-luxury"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-33-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 50
      }
    ]
  },
  {
    "id": "prod-34",
    "sku": "AUR-FOO-034",
    "brand": "AURELIA ATELIER",
    "name": "Montmartre Wholecut Chelsea Boots",
    "slug": "montmartre-wholecut-chelsea-boots",
    "description": "Cut from a single flawless piece of French calfskin. Concealed gusset pulls and Dainite studded rubber sole for all-weather grip.",
    "category": "footwear",
    "subcategory": "Men Footwear",
    "price": 34000,
    "mrp": 45000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Burnished Tan",
        "hex": "#633c1d"
      },
      {
        "name": "Raven Black",
        "hex": "#141414"
      }
    ],
    "sizes": [
      "7 UK",
      "8 UK",
      "9 UK",
      "10 UK",
      "11 UK"
    ],
    "variants": [
      {
        "id": "v-34-Bu-7 UK",
        "size": "7 UK",
        "color": "Burnished Tan",
        "colorCode": "#633c1d",
        "stock": 28,
        "sku": "AUR-FOO-034-BUR-7 UK",
        "price": 34000
      },
      {
        "id": "v-34-Bu-8 UK",
        "size": "8 UK",
        "color": "Burnished Tan",
        "colorCode": "#633c1d",
        "stock": 8,
        "sku": "AUR-FOO-034-BUR-8 UK",
        "price": 34000
      },
      {
        "id": "v-34-Bu-9 UK",
        "size": "9 UK",
        "color": "Burnished Tan",
        "colorCode": "#633c1d",
        "stock": 13,
        "sku": "AUR-FOO-034-BUR-9 UK",
        "price": 34000
      },
      {
        "id": "v-34-Ra-7 UK",
        "size": "7 UK",
        "color": "Raven Black",
        "colorCode": "#141414",
        "stock": 28,
        "sku": "AUR-FOO-034-RAV-7 UK",
        "price": 34000
      },
      {
        "id": "v-34-Ra-8 UK",
        "size": "8 UK",
        "color": "Raven Black",
        "colorCode": "#141414",
        "stock": 8,
        "sku": "AUR-FOO-034-RAV-8 UK",
        "price": 34000
      },
      {
        "id": "v-34-Ra-9 UK",
        "size": "9 UK",
        "color": "Raven Black",
        "colorCode": "#141414",
        "stock": 13,
        "sku": "AUR-FOO-034-RAV-9 UK",
        "price": 34000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 98,
    "tags": [
      "chelsea-boots",
      "boots",
      "wholecut",
      "calfskin"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-34-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 51
      }
    ]
  },
  {
    "id": "prod-35",
    "sku": "AUR-FOO-035",
    "brand": "MAISON AURELIA",
    "name": "Palma Crystal-Embellished Mule Sandals",
    "slug": "palma-crystal-embellished-mule-sandals",
    "description": "Satin straps encrusted with brilliant-cut crystals. Set on a wearable 65mm flared kitten heel with cushioned footbed.",
    "category": "footwear",
    "subcategory": "Women Footwear",
    "price": 29500,
    "mrp": 38000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Crystal Silver",
        "hex": "#e8e8e8"
      },
      {
        "name": "Rose Gold",
        "hex": "#b76e79"
      }
    ],
    "sizes": [
      "36 EU",
      "37 EU",
      "38 EU",
      "39 EU"
    ],
    "variants": [
      {
        "id": "v-35-Cr-36 EU",
        "size": "36 EU",
        "color": "Crystal Silver",
        "colorCode": "#e8e8e8",
        "stock": 6,
        "sku": "AUR-FOO-035-CRY-36 EU",
        "price": 29500
      },
      {
        "id": "v-35-Cr-37 EU",
        "size": "37 EU",
        "color": "Crystal Silver",
        "colorCode": "#e8e8e8",
        "stock": 11,
        "sku": "AUR-FOO-035-CRY-37 EU",
        "price": 29500
      },
      {
        "id": "v-35-Cr-38 EU",
        "size": "38 EU",
        "color": "Crystal Silver",
        "colorCode": "#e8e8e8",
        "stock": 16,
        "sku": "AUR-FOO-035-CRY-38 EU",
        "price": 29500
      },
      {
        "id": "v-35-Ro-36 EU",
        "size": "36 EU",
        "color": "Rose Gold",
        "colorCode": "#b76e79",
        "stock": 6,
        "sku": "AUR-FOO-035-ROS-36 EU",
        "price": 29500
      },
      {
        "id": "v-35-Ro-37 EU",
        "size": "37 EU",
        "color": "Rose Gold",
        "colorCode": "#b76e79",
        "stock": 11,
        "sku": "AUR-FOO-035-ROS-37 EU",
        "price": 29500
      },
      {
        "id": "v-35-Ro-38 EU",
        "size": "38 EU",
        "color": "Rose Gold",
        "colorCode": "#b76e79",
        "stock": 16,
        "sku": "AUR-FOO-035-ROS-38 EU",
        "price": 29500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 66,
    "tags": [
      "mules",
      "crystal",
      "sandals",
      "heels"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-35-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 52
      }
    ]
  },
  {
    "id": "prod-36",
    "sku": "AUR-FOO-036",
    "brand": "AURELIA ATELIER",
    "name": "Atelier Court Minimalist Leather Sneakers",
    "slug": "atelier-court-minimalist-leather-sneakers",
    "description": "Clean-lined low-top crafted from supple Italian nappa leather. Margom Italian rubber cupsole with waxed cotton laces.",
    "category": "footwear",
    "subcategory": "Sneakers",
    "price": 19500,
    "mrp": 26000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Optic White",
        "hex": "#ffffff"
      },
      {
        "name": "Triple Black",
        "hex": "#121212"
      }
    ],
    "sizes": [
      "40 EU",
      "41 EU",
      "42 EU",
      "43 EU",
      "44 EU"
    ],
    "variants": [
      {
        "id": "v-36-Op-40 EU",
        "size": "40 EU",
        "color": "Optic White",
        "colorCode": "#ffffff",
        "stock": 9,
        "sku": "AUR-FOO-036-OPT-40 EU",
        "price": 19500
      },
      {
        "id": "v-36-Op-41 EU",
        "size": "41 EU",
        "color": "Optic White",
        "colorCode": "#ffffff",
        "stock": 14,
        "sku": "AUR-FOO-036-OPT-41 EU",
        "price": 19500
      },
      {
        "id": "v-36-Op-42 EU",
        "size": "42 EU",
        "color": "Optic White",
        "colorCode": "#ffffff",
        "stock": 19,
        "sku": "AUR-FOO-036-OPT-42 EU",
        "price": 19500
      },
      {
        "id": "v-36-Tr-40 EU",
        "size": "40 EU",
        "color": "Triple Black",
        "colorCode": "#121212",
        "stock": 9,
        "sku": "AUR-FOO-036-TRI-40 EU",
        "price": 19500
      },
      {
        "id": "v-36-Tr-41 EU",
        "size": "41 EU",
        "color": "Triple Black",
        "colorCode": "#121212",
        "stock": 14,
        "sku": "AUR-FOO-036-TRI-41 EU",
        "price": 19500
      },
      {
        "id": "v-36-Tr-42 EU",
        "size": "42 EU",
        "color": "Triple Black",
        "colorCode": "#121212",
        "stock": 19,
        "sku": "AUR-FOO-036-TRI-42 EU",
        "price": 19500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 84,
    "tags": [
      "sneakers",
      "minimalist",
      "leather",
      "court"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-36-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 53
      }
    ]
  },
  {
    "id": "prod-37",
    "sku": "AUR-FOO-037",
    "brand": "MAISON AURELIA",
    "name": "Knee-High Slouchy Suede Riding Boots",
    "slug": "knee-high-slouchy-suede-riding-boots",
    "description": "Generously shafted equestrian boot in Italian split suede. Low 35mm stacked leather heel with almond toe.",
    "category": "footwear",
    "subcategory": "Women Footwear",
    "price": 42000,
    "mrp": 55000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Tobacco Brown",
        "hex": "#684524"
      },
      {
        "name": "Slate Grey",
        "hex": "#484b50"
      }
    ],
    "sizes": [
      "36 EU",
      "37 EU",
      "38 EU",
      "39 EU",
      "40 EU"
    ],
    "variants": [
      {
        "id": "v-37-To-36 EU",
        "size": "36 EU",
        "color": "Tobacco Brown",
        "colorCode": "#684524",
        "stock": 12,
        "sku": "AUR-FOO-037-TOB-36 EU",
        "price": 42000
      },
      {
        "id": "v-37-To-37 EU",
        "size": "37 EU",
        "color": "Tobacco Brown",
        "colorCode": "#684524",
        "stock": 17,
        "sku": "AUR-FOO-037-TOB-37 EU",
        "price": 42000
      },
      {
        "id": "v-37-To-38 EU",
        "size": "38 EU",
        "color": "Tobacco Brown",
        "colorCode": "#684524",
        "stock": 22,
        "sku": "AUR-FOO-037-TOB-38 EU",
        "price": 42000
      },
      {
        "id": "v-37-Sl-36 EU",
        "size": "36 EU",
        "color": "Slate Grey",
        "colorCode": "#484b50",
        "stock": 12,
        "sku": "AUR-FOO-037-SLA-36 EU",
        "price": 42000
      },
      {
        "id": "v-37-Sl-37 EU",
        "size": "37 EU",
        "color": "Slate Grey",
        "colorCode": "#484b50",
        "stock": 17,
        "sku": "AUR-FOO-037-SLA-37 EU",
        "price": 42000
      },
      {
        "id": "v-37-Sl-38 EU",
        "size": "38 EU",
        "color": "Slate Grey",
        "colorCode": "#484b50",
        "stock": 22,
        "sku": "AUR-FOO-037-SLA-38 EU",
        "price": 42000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 102,
    "tags": [
      "boots",
      "knee-high",
      "suede",
      "equestrian"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-37-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 54
      }
    ]
  },
  {
    "id": "prod-38",
    "sku": "AUR-FOO-038",
    "brand": "AURELIA ATELIER",
    "name": "Double Monkstrap Cap-Toe in Museum Calf",
    "slug": "double-monkstrap-cap-toe-in-museum-calf",
    "description": "Hand-sponged museum calfskin exhibiting rich marbling. Solid brass buckles and channeled oak-bark tanned leather soles.",
    "category": "footwear",
    "subcategory": "Men Footwear",
    "price": 31000,
    "mrp": 41000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Plum Museum",
        "hex": "#44222a"
      },
      {
        "name": "Dark Oak",
        "hex": "#3c2415"
      }
    ],
    "sizes": [
      "7 UK",
      "8 UK",
      "9 UK",
      "10 UK"
    ],
    "variants": [
      {
        "id": "v-38-Pl-7 UK",
        "size": "7 UK",
        "color": "Plum Museum",
        "colorCode": "#44222a",
        "stock": 15,
        "sku": "AUR-FOO-038-PLU-7 UK",
        "price": 31000
      },
      {
        "id": "v-38-Pl-8 UK",
        "size": "8 UK",
        "color": "Plum Museum",
        "colorCode": "#44222a",
        "stock": 20,
        "sku": "AUR-FOO-038-PLU-8 UK",
        "price": 31000
      },
      {
        "id": "v-38-Pl-9 UK",
        "size": "9 UK",
        "color": "Plum Museum",
        "colorCode": "#44222a",
        "stock": 25,
        "sku": "AUR-FOO-038-PLU-9 UK",
        "price": 31000
      },
      {
        "id": "v-38-Da-7 UK",
        "size": "7 UK",
        "color": "Dark Oak",
        "colorCode": "#3c2415",
        "stock": 15,
        "sku": "AUR-FOO-038-DAR-7 UK",
        "price": 31000
      },
      {
        "id": "v-38-Da-8 UK",
        "size": "8 UK",
        "color": "Dark Oak",
        "colorCode": "#3c2415",
        "stock": 20,
        "sku": "AUR-FOO-038-DAR-8 UK",
        "price": 31000
      },
      {
        "id": "v-38-Da-9 UK",
        "size": "9 UK",
        "color": "Dark Oak",
        "colorCode": "#3c2415",
        "stock": 25,
        "sku": "AUR-FOO-038-DAR-9 UK",
        "price": 31000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 120,
    "tags": [
      "monkstrap",
      "dress-shoes",
      "leather",
      "formal"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-38-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 55
      }
    ]
  },
  {
    "id": "prod-39",
    "sku": "AUR-TIM-039",
    "brand": "ATELIER HORLOGERIE",
    "name": "Calibre 1888 Monopusher Chronographe",
    "slug": "calibre-1888-monopusher-chronographe",
    "description": "Hand-wound column-wheel movement with 58-hour power reserve. Sunray anthracite dial, blued Breguet hands, and alligator strap.",
    "category": "timepieces",
    "subcategory": "Mechanical",
    "price": 145000,
    "mrp": 185000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Anthracite Rose",
        "hex": "#b76e79"
      },
      {
        "name": "Silver Steel",
        "hex": "#d4d8db"
      }
    ],
    "sizes": [
      "40mm"
    ],
    "variants": [
      {
        "id": "v-39-An-40mm",
        "size": "40mm",
        "color": "Anthracite Rose",
        "colorCode": "#b76e79",
        "stock": 18,
        "sku": "AUR-TIM-039-ANT-40mm",
        "price": 145000
      },
      {
        "id": "v-39-Si-40mm",
        "size": "40mm",
        "color": "Silver Steel",
        "colorCode": "#d4d8db",
        "stock": 18,
        "sku": "AUR-TIM-039-SIL-40mm",
        "price": 145000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 36,
    "tags": [
      "watch",
      "chronograph",
      "mechanical",
      "horology",
      "swiss"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-39-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 56
      }
    ]
  },
  {
    "id": "prod-40",
    "sku": "AUR-TIM-040",
    "brand": "ATELIER HORLOGERIE",
    "name": "Sovereign Flying Tourbillon Obsidian",
    "slug": "sovereign-flying-tourbillon-obsidian",
    "description": "Hypnotic 60-second flying tourbillon cage visible at 6 oclock. Natural black obsidian meteorite dial with 18K rose gold indices.",
    "category": "timepieces",
    "subcategory": "Tourbillon",
    "price": 245000,
    "mrp": 320000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Rose Gold",
        "hex": "#b76e79"
      },
      {
        "name": "Platinum 950",
        "hex": "#e5e4e2"
      }
    ],
    "sizes": [
      "41mm"
    ],
    "variants": [
      {
        "id": "v-40-18-41mm",
        "size": "41mm",
        "color": "18K Rose Gold",
        "colorCode": "#b76e79",
        "stock": 21,
        "sku": "AUR-TIM-040-18K-41mm",
        "price": 245000
      },
      {
        "id": "v-40-Pl-41mm",
        "size": "41mm",
        "color": "Platinum 950",
        "colorCode": "#e5e4e2",
        "stock": 21,
        "sku": "AUR-TIM-040-PLA-41mm",
        "price": 245000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 42,
    "tags": [
      "tourbillon",
      "masterpiece",
      "haute-horlogerie",
      "limited"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-40-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 57
      }
    ]
  },
  {
    "id": "prod-41",
    "sku": "AUR-TIM-041",
    "brand": "ATELIER HORLOGERIE",
    "name": "Astronomia Perpetual Moonphase Automatic",
    "slug": "astronomia-perpetual-moonphase-automatic",
    "description": "Hand-carved gold moon disk accurate for 122 years. Enamel grand feu blue dial with guilloché waves and sapphire exhibition back.",
    "category": "timepieces",
    "subcategory": "Complications",
    "price": 115000,
    "mrp": 148000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Grand Feu Blue",
        "hex": "#112244"
      },
      {
        "name": "Opaline White",
        "hex": "#f7f6f2"
      }
    ],
    "sizes": [
      "39mm"
    ],
    "variants": [
      {
        "id": "v-41-Gr-39mm",
        "size": "39mm",
        "color": "Grand Feu Blue",
        "colorCode": "#112244",
        "stock": 24,
        "sku": "AUR-TIM-041-GRA-39mm",
        "price": 115000
      },
      {
        "id": "v-41-Op-39mm",
        "size": "39mm",
        "color": "Opaline White",
        "colorCode": "#f7f6f2",
        "stock": 24,
        "sku": "AUR-TIM-041-OPA-39mm",
        "price": 115000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 48,
    "tags": [
      "moonphase",
      "automatic",
      "enamel",
      "dress-watch"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-41-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 58
      }
    ]
  },
  {
    "id": "prod-42",
    "sku": "AUR-TIM-042",
    "brand": "ATELIER HORLOGERIE",
    "name": "Nautique Grade-5 Titanium 300M Diver",
    "slug": "nautique-grade-5-titanium-300m-diver",
    "description": "Ultra-lightweight aerospace Grade-5 titanium case. Ceramic unidirectional bezel with Super-LumiNova BGW9 and integrated FKM rubber strap.",
    "category": "timepieces",
    "subcategory": "Sport",
    "price": 78000,
    "mrp": 98000,
    "discount": 20,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Matte Titanium Grey",
        "hex": "#777b84"
      },
      {
        "name": "Deep Sea Blue",
        "hex": "#0f2942"
      }
    ],
    "sizes": [
      "42mm"
    ],
    "variants": [
      {
        "id": "v-42-Ma-42mm",
        "size": "42mm",
        "color": "Matte Titanium Grey",
        "colorCode": "#777b84",
        "stock": 27,
        "sku": "AUR-TIM-042-MAT-42mm",
        "price": 78000
      },
      {
        "id": "v-42-De-42mm",
        "size": "42mm",
        "color": "Deep Sea Blue",
        "colorCode": "#0f2942",
        "stock": 27,
        "sku": "AUR-TIM-042-DEE-42mm",
        "price": 78000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 54,
    "tags": [
      "diver",
      "titanium",
      "sport-watch",
      "water-resistant"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-42-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 59
      }
    ]
  },
  {
    "id": "prod-43",
    "sku": "AUR-TIM-043",
    "brand": "ATELIER HORLOGERIE",
    "name": "Aero Skeleton Openworked Automatic",
    "slug": "aero-skeleton-openworked-automatic",
    "description": "Hand-beveled bridges with anthracite NAC coating. Twin barrels providing 72 hours of autonomy, framed by dual sapphire crystals.",
    "category": "timepieces",
    "subcategory": "Skeleton",
    "price": 98000,
    "mrp": 125000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gunmetal Ruthenium",
        "hex": "#373a40"
      }
    ],
    "sizes": [
      "41mm"
    ],
    "variants": [
      {
        "id": "v-43-Gu-41mm",
        "size": "41mm",
        "color": "Gunmetal Ruthenium",
        "colorCode": "#373a40",
        "stock": 5,
        "sku": "AUR-TIM-043-GUN-41mm",
        "price": 98000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 5,
    "tags": [
      "skeleton",
      "openworked",
      "automatic",
      "mechanical"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-43-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 60
      }
    ]
  },
  {
    "id": "prod-44",
    "sku": "AUR-TIM-044",
    "brand": "ATELIER HORLOGERIE",
    "name": "Elegance Ultra-Thin 5.8mm Two-Hander",
    "slug": "elegance-ultra-thin-5-8mm-two-hander",
    "description": "A masterclass in restraint. 5.8mm thin case with sunburst silver dial, baton indices, and quick-release Milanese mesh bracelet.",
    "category": "timepieces",
    "subcategory": "Dress",
    "price": 68000,
    "mrp": 88000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Silver Sunburst",
        "hex": "#e8eaec"
      },
      {
        "name": "Yellow Gold Plated",
        "hex": "#e5c158"
      }
    ],
    "sizes": [
      "38mm"
    ],
    "variants": [
      {
        "id": "v-44-Si-38mm",
        "size": "38mm",
        "color": "Silver Sunburst",
        "colorCode": "#e8eaec",
        "stock": 8,
        "sku": "AUR-TIM-044-SIL-38mm",
        "price": 68000
      },
      {
        "id": "v-44-Ye-38mm",
        "size": "38mm",
        "color": "Yellow Gold Plated",
        "colorCode": "#e5c158",
        "stock": 8,
        "sku": "AUR-TIM-044-YEL-38mm",
        "price": 68000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 16,
    "tags": [
      "ultra-thin",
      "dress-watch",
      "minimalist"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-44-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 61
      }
    ]
  },
  {
    "id": "prod-45",
    "sku": "AUR-TIM-045",
    "brand": "ATELIER HORLOGERIE",
    "name": "Constellation Diamond Bezel Pavé Watch",
    "slug": "constellation-diamond-bezel-pav-watch",
    "description": "Mother-of-pearl dial encircled by 48 VVS brilliant-cut diamonds. 18K yellow gold case on satin strap.",
    "category": "timepieces",
    "subcategory": "Jewelry Watch",
    "price": 135000,
    "mrp": 175000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Yellow Gold / Diamonds",
        "hex": "#ffd700"
      }
    ],
    "sizes": [
      "33mm"
    ],
    "variants": [
      {
        "id": "v-45-Ye-33mm",
        "size": "33mm",
        "color": "Yellow Gold / Diamonds",
        "colorCode": "#ffd700",
        "stock": 11,
        "sku": "AUR-TIM-045-YEL-33mm",
        "price": 135000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 11,
    "tags": [
      "diamonds",
      "jewelry-watch",
      "women-watch",
      "gold"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-45-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 62
      }
    ]
  },
  {
    "id": "prod-46",
    "sku": "AUR-TIM-046",
    "brand": "ATELIER HORLOGERIE",
    "name": "Globe-Trotter Dual-Time GMT 24H",
    "slug": "globe-trotter-dual-time-gmt-24h",
    "description": "Independent 24-hour second timezone hand with ceramic bi-color day/night bezel ring and oyster-style solid link bracelet.",
    "category": "timepieces",
    "subcategory": "Complications",
    "price": 89000,
    "mrp": 112000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Pepsi Blue/Red",
        "hex": "#162b4d"
      },
      {
        "name": "Batman Black/Blue",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "40mm"
    ],
    "variants": [
      {
        "id": "v-46-Pe-40mm",
        "size": "40mm",
        "color": "Pepsi Blue/Red",
        "colorCode": "#162b4d",
        "stock": 14,
        "sku": "AUR-TIM-046-PEP-40mm",
        "price": 89000
      },
      {
        "id": "v-46-Ba-40mm",
        "size": "40mm",
        "color": "Batman Black/Blue",
        "colorCode": "#111111",
        "stock": 14,
        "sku": "AUR-TIM-046-BAT-40mm",
        "price": 89000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 28,
    "tags": [
      "gmt",
      "dual-time",
      "travel-watch",
      "automatic"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-46-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 63
      }
    ]
  },
  {
    "id": "prod-47",
    "sku": "AUR-JEW-047",
    "brand": "MAISON AURELIA",
    "name": "Eternity Pavé Diamond Band in 18K Yellow Gold",
    "slug": "eternity-pav-diamond-band-in-18k-yellow-gold",
    "description": "Continuous ribbon of conflict-free round brilliant diamonds totaling 1.45 carats. Set in recycled 18K solid yellow gold.",
    "category": "jewelry",
    "subcategory": "Rings",
    "price": 68000,
    "mrp": 88000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Yellow Gold",
        "hex": "#dfc79b"
      },
      {
        "name": "18K White Gold",
        "hex": "#e8eaec"
      }
    ],
    "sizes": [
      "5 US",
      "6 US",
      "7 US",
      "8 US"
    ],
    "variants": [
      {
        "id": "v-47-18-5 US",
        "size": "5 US",
        "color": "18K Yellow Gold",
        "colorCode": "#dfc79b",
        "stock": 17,
        "sku": "AUR-JEW-047-18K-5 US",
        "price": 68000
      },
      {
        "id": "v-47-18-6 US",
        "size": "6 US",
        "color": "18K Yellow Gold",
        "colorCode": "#dfc79b",
        "stock": 22,
        "sku": "AUR-JEW-047-18K-6 US",
        "price": 68000
      },
      {
        "id": "v-47-18-7 US",
        "size": "7 US",
        "color": "18K Yellow Gold",
        "colorCode": "#dfc79b",
        "stock": 27,
        "sku": "AUR-JEW-047-18K-7 US",
        "price": 68000
      },
      {
        "id": "v-47-18-5 US",
        "size": "5 US",
        "color": "18K White Gold",
        "colorCode": "#e8eaec",
        "stock": 17,
        "sku": "AUR-JEW-047-18K-5 US",
        "price": 68000
      },
      {
        "id": "v-47-18-6 US",
        "size": "6 US",
        "color": "18K White Gold",
        "colorCode": "#e8eaec",
        "stock": 22,
        "sku": "AUR-JEW-047-18K-6 US",
        "price": 68000
      },
      {
        "id": "v-47-18-7 US",
        "size": "7 US",
        "color": "18K White Gold",
        "colorCode": "#e8eaec",
        "stock": 27,
        "sku": "AUR-JEW-047-18K-7 US",
        "price": 68000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 132,
    "tags": [
      "diamonds",
      "ring",
      "eternity-band",
      "gold",
      "jewelry"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-47-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 64
      }
    ]
  },
  {
    "id": "prod-48",
    "sku": "AUR-JEW-048",
    "brand": "MAISON AURELIA",
    "name": "Zambian Emerald & Diamond Drop Pendant",
    "slug": "zambian-emerald-diamond-drop-pendant",
    "description": "A 2.20-carat untreated octagonal Zambian emerald suspended within a halo of micro-pavé diamonds on a delicate platinum trace chain.",
    "category": "jewelry",
    "subcategory": "Necklaces",
    "price": 84000,
    "mrp": 110000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Platinum & Emerald",
        "hex": "#0e4a36"
      }
    ],
    "sizes": [
      "45cm Chain"
    ],
    "variants": [
      {
        "id": "v-48-Pl-45cm Chain",
        "size": "45cm Chain",
        "color": "Platinum & Emerald",
        "colorCode": "#0e4a36",
        "stock": 20,
        "sku": "AUR-JEW-048-PLA-45cm Chain",
        "price": 84000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 20,
    "tags": [
      "emerald",
      "necklace",
      "pendant",
      "platinum",
      "diamonds"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-48-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 65
      }
    ]
  },
  {
    "id": "prod-49",
    "sku": "AUR-JEW-049",
    "brand": "MAISON AURELIA",
    "name": "Tahitian Black Pearl & Diamond Cascade Earrings",
    "slug": "tahitian-black-pearl-diamond-cascade-earrings",
    "description": "Paired 11mm peacock overtone Tahitian cultured pearls suspended beneath articulate diamond baguettes in 18K white gold.",
    "category": "jewelry",
    "subcategory": "Earrings",
    "price": 52000,
    "mrp": 68000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K White Gold / Pearl",
        "hex": "#242a30"
      }
    ],
    "sizes": [
      "Drop 35mm"
    ],
    "variants": [
      {
        "id": "v-49-18-Drop 35mm",
        "size": "Drop 35mm",
        "color": "18K White Gold / Pearl",
        "colorCode": "#242a30",
        "stock": 23,
        "sku": "AUR-JEW-049-18K-Drop 35mm",
        "price": 52000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 23,
    "tags": [
      "pearls",
      "earrings",
      "tahitian",
      "diamonds"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-49-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 66
      }
    ]
  },
  {
    "id": "prod-50",
    "sku": "AUR-JEW-050",
    "brand": "MAISON AURELIA",
    "name": "Sovereign Twisted Cable Bangle with Ruby Tips",
    "slug": "sovereign-twisted-cable-bangle-with-ruby-tips",
    "description": "Flexible twisted torque bangle in 18K yellow gold capped with cabochon Burmese rubies and diamond bezels.",
    "category": "jewelry",
    "subcategory": "Bracelets",
    "price": 76000,
    "mrp": 98000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Yellow Gold / Ruby",
        "hex": "#77161b"
      }
    ],
    "sizes": [
      "Small (16cm)",
      "Medium (18cm)"
    ],
    "variants": [
      {
        "id": "v-50-18-Small (16cm)",
        "size": "Small (16cm)",
        "color": "18K Yellow Gold / Ruby",
        "colorCode": "#77161b",
        "stock": 26,
        "sku": "AUR-JEW-050-18K-Small (16cm)",
        "price": 76000
      },
      {
        "id": "v-50-18-Medium (18cm)",
        "size": "Medium (18cm)",
        "color": "18K Yellow Gold / Ruby",
        "colorCode": "#77161b",
        "stock": 6,
        "sku": "AUR-JEW-050-18K-Medium (18cm)",
        "price": 76000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 32,
    "tags": [
      "bangle",
      "bracelet",
      "ruby",
      "gold"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-50-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 67
      }
    ]
  },
  {
    "id": "prod-51",
    "sku": "AUR-JEW-051",
    "brand": "MAISON AURELIA",
    "name": "Solitaire Cushion-Cut Diamond Signet Ring",
    "slug": "solitaire-cushion-cut-diamond-signet-ring",
    "description": "Substantial unisex signet cast in weighty 18K yellow gold centering a 1.00-carat cushion-cut bezel-set diamond.",
    "category": "jewelry",
    "subcategory": "Rings",
    "price": 95000,
    "mrp": 125000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Gold",
        "hex": "#d4af37"
      }
    ],
    "sizes": [
      "7 US",
      "8 US",
      "9 US",
      "10 US"
    ],
    "variants": [
      {
        "id": "v-51-18-7 US",
        "size": "7 US",
        "color": "18K Gold",
        "colorCode": "#d4af37",
        "stock": 4,
        "sku": "AUR-JEW-051-18K-7 US",
        "price": 95000
      },
      {
        "id": "v-51-18-8 US",
        "size": "8 US",
        "color": "18K Gold",
        "colorCode": "#d4af37",
        "stock": 9,
        "sku": "AUR-JEW-051-18K-8 US",
        "price": 95000
      },
      {
        "id": "v-51-18-9 US",
        "size": "9 US",
        "color": "18K Gold",
        "colorCode": "#d4af37",
        "stock": 14,
        "sku": "AUR-JEW-051-18K-9 US",
        "price": 95000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 27,
    "tags": [
      "signet-ring",
      "diamonds",
      "gold",
      "unisex"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-51-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 68
      }
    ]
  },
  {
    "id": "prod-52",
    "sku": "AUR-JEW-052",
    "brand": "MAISON AURELIA",
    "name": "Classic 3.50ct Diamond Tennis Bracelet",
    "slug": "classic-3-50ct-diamond-tennis-bracelet",
    "description": "Continuous line of four-prong set brilliant round diamonds in platinum with double-safety box clasp.",
    "category": "jewelry",
    "subcategory": "Bracelets",
    "price": 135000,
    "mrp": 175000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Platinum 950",
        "hex": "#e5e4e2"
      }
    ],
    "sizes": [
      "7 Inch",
      "7.5 Inch"
    ],
    "variants": [
      {
        "id": "v-52-Pl-7 Inch",
        "size": "7 Inch",
        "color": "Platinum 950",
        "colorCode": "#e5e4e2",
        "stock": 7,
        "sku": "AUR-JEW-052-PLA-7 Inch",
        "price": 135000
      },
      {
        "id": "v-52-Pl-7.5 Inch",
        "size": "7.5 Inch",
        "color": "Platinum 950",
        "colorCode": "#e5e4e2",
        "stock": 12,
        "sku": "AUR-JEW-052-PLA-7.5 Inch",
        "price": 135000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 19,
    "tags": [
      "tennis-bracelet",
      "diamonds",
      "platinum"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-52-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 69
      }
    ]
  },
  {
    "id": "prod-53",
    "sku": "AUR-JEW-053",
    "brand": "MAISON AURELIA",
    "name": "Chunky Fluted Oval Huggie Hoops",
    "slug": "chunky-fluted-oval-huggie-hoops",
    "description": "Vintage-inspired fluted architectural hoops hand-polished in solid 18K yellow gold with secure click-in posts.",
    "category": "jewelry",
    "subcategory": "Earrings",
    "price": 32000,
    "mrp": 42000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Yellow Gold",
        "hex": "#d4af37"
      }
    ],
    "sizes": [
      "One Size (22mm)"
    ],
    "variants": [
      {
        "id": "v-53-18-One Size (22mm)",
        "size": "One Size (22mm)",
        "color": "18K Yellow Gold",
        "colorCode": "#d4af37",
        "stock": 10,
        "sku": "AUR-JEW-053-18K-One Size (22mm)",
        "price": 32000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 10,
    "tags": [
      "hoops",
      "earrings",
      "gold",
      "fluted"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-53-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 70
      }
    ]
  },
  {
    "id": "prod-54",
    "sku": "AUR-JEW-054",
    "brand": "MAISON AURELIA",
    "name": "Herringbone Liquid Gold Collar Necklace",
    "slug": "herringbone-liquid-gold-collar-necklace",
    "description": "Dense Italian-made 6mm liquid gold herringbone weave that contours smoothly along the collarbone.",
    "category": "jewelry",
    "subcategory": "Necklaces",
    "price": 62000,
    "mrp": 82000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "18K Yellow Gold",
        "hex": "#dfc79b"
      }
    ],
    "sizes": [
      "42cm Length"
    ],
    "variants": [
      {
        "id": "v-54-18-42cm Length",
        "size": "42cm Length",
        "color": "18K Yellow Gold",
        "colorCode": "#dfc79b",
        "stock": 13,
        "sku": "AUR-JEW-054-18K-42cm Length",
        "price": 62000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 13,
    "tags": [
      "herringbone",
      "gold-chain",
      "collar-necklace"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-54-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 71
      }
    ]
  },
  {
    "id": "prod-55",
    "sku": "AUR-ACC-055",
    "brand": "AURELIA ATELIER",
    "name": "Mulberry Silk Twill 90cm Carré Scarf",
    "slug": "mulberry-silk-twill-90cm-carr-scarf",
    "description": "Screen-printed by hand in Como, Italy with historic architectural motif. Hand-rolled and sewn edges.",
    "category": "accessories",
    "subcategory": "Scarves",
    "price": 12500,
    "mrp": 16000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Cobalt & Gold",
        "hex": "#163866"
      },
      {
        "name": "Emerald & Ochre",
        "hex": "#0e4a36"
      }
    ],
    "sizes": [
      "90cm x 90cm"
    ],
    "variants": [
      {
        "id": "v-55-Co-90cm x 90cm",
        "size": "90cm x 90cm",
        "color": "Cobalt & Gold",
        "colorCode": "#163866",
        "stock": 16,
        "sku": "AUR-ACC-055-COB-90cm x 90cm",
        "price": 12500
      },
      {
        "id": "v-55-Em-90cm x 90cm",
        "size": "90cm x 90cm",
        "color": "Emerald & Ochre",
        "colorCode": "#0e4a36",
        "stock": 16,
        "sku": "AUR-ACC-055-EME-90cm x 90cm",
        "price": 12500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 32,
    "tags": [
      "scarf",
      "silk",
      "carre",
      "printed"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-55-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 72
      }
    ]
  },
  {
    "id": "prod-56",
    "sku": "AUR-ACC-056",
    "brand": "AURELIA ATELIER",
    "name": "Himalayan Pashmina Water Weave Stole",
    "slug": "himalayan-pashmina-water-weave-stole",
    "description": "Hand-spun Changthangi goat pashmina fiber woven on traditional wooden looms in Kashmir with gossamer water finish.",
    "category": "accessories",
    "subcategory": "Stoles",
    "price": 18500,
    "mrp": 24000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Natural Sand",
        "hex": "#d9cdb8"
      },
      {
        "name": "Muted Rose",
        "hex": "#c59292"
      }
    ],
    "sizes": [
      "200cm x 70cm"
    ],
    "variants": [
      {
        "id": "v-56-Na-200cm x 70cm",
        "size": "200cm x 70cm",
        "color": "Natural Sand",
        "colorCode": "#d9cdb8",
        "stock": 19,
        "sku": "AUR-ACC-056-NAT-200cm x 70cm",
        "price": 18500
      },
      {
        "id": "v-56-Mu-200cm x 70cm",
        "size": "200cm x 70cm",
        "color": "Muted Rose",
        "colorCode": "#c59292",
        "stock": 19,
        "sku": "AUR-ACC-056-MUT-200cm x 70cm",
        "price": 18500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 38,
    "tags": [
      "pashmina",
      "cashmere",
      "stole",
      "handwoven"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-56-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 73
      }
    ]
  },
  {
    "id": "prod-57",
    "sku": "AUR-ACC-057",
    "brand": "AURELIA ATELIER",
    "name": "Reversible Calfskin Belt with Monogram Buckle",
    "slug": "reversible-calfskin-belt-with-monogram-buckle",
    "description": "Dual-sided luxury belt featuring smooth box black calf on one side and warm saddle brown on reverse with swivel gold buckle.",
    "category": "accessories",
    "subcategory": "Belts",
    "price": 14000,
    "mrp": 18000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Black / Saddle Brown",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "85cm",
      "90cm",
      "95cm",
      "100cm"
    ],
    "variants": [
      {
        "id": "v-57-Bl-85cm",
        "size": "85cm",
        "color": "Black / Saddle Brown",
        "colorCode": "#111111",
        "stock": 22,
        "sku": "AUR-ACC-057-BLA-85cm",
        "price": 14000
      },
      {
        "id": "v-57-Bl-90cm",
        "size": "90cm",
        "color": "Black / Saddle Brown",
        "colorCode": "#111111",
        "stock": 27,
        "sku": "AUR-ACC-057-BLA-90cm",
        "price": 14000
      },
      {
        "id": "v-57-Bl-95cm",
        "size": "95cm",
        "color": "Black / Saddle Brown",
        "colorCode": "#111111",
        "stock": 7,
        "sku": "AUR-ACC-057-BLA-95cm",
        "price": 14000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 56,
    "tags": [
      "belt",
      "leather",
      "reversible",
      "accessories"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-57-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 74
      }
    ]
  },
  {
    "id": "prod-58",
    "sku": "AUR-ACC-058",
    "brand": "AURELIA ATELIER",
    "name": "Seven-Fold Grenadine Silk Necktie",
    "slug": "seven-fold-grenadine-silk-necktie",
    "description": "Constructed from a single piece of pure Italian garza grossa silk folded seven times without interlining. Hand-tacked bar.",
    "category": "accessories",
    "subcategory": "Ties",
    "price": 9500,
    "mrp": 13000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Burgundy Wine",
        "hex": "#581b24"
      },
      {
        "name": "Midnight Navy",
        "hex": "#161c28"
      }
    ],
    "sizes": [
      "8cm Width"
    ],
    "variants": [
      {
        "id": "v-58-Bu-8cm Width",
        "size": "8cm Width",
        "color": "Burgundy Wine",
        "colorCode": "#581b24",
        "stock": 25,
        "sku": "AUR-ACC-058-BUR-8cm Width",
        "price": 9500
      },
      {
        "id": "v-58-Mi-8cm Width",
        "size": "8cm Width",
        "color": "Midnight Navy",
        "colorCode": "#161c28",
        "stock": 25,
        "sku": "AUR-ACC-058-MID-8cm Width",
        "price": 9500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 50,
    "tags": [
      "tie",
      "seven-fold",
      "grenadine",
      "silk"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-58-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 75
      }
    ]
  },
  {
    "id": "prod-59",
    "sku": "AUR-ACC-059",
    "brand": "AURELIA ATELIER",
    "name": "Lapis Lazuli & Gold Double-Sided Cufflinks",
    "slug": "lapis-lazuli-gold-double-sided-cufflinks",
    "description": "Natural deep blue Afghan lapis lazuli cabochons set in hand-engraved 18K gold-plated sterling silver with chain link.",
    "category": "accessories",
    "subcategory": "Cufflinks",
    "price": 16500,
    "mrp": 22000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Lapis Blue / Gold",
        "hex": "#1f386b"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-59-La-One Size",
        "size": "One Size",
        "color": "Lapis Blue / Gold",
        "colorCode": "#1f386b",
        "stock": 28,
        "sku": "AUR-ACC-059-LAP-One Size",
        "price": 16500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 28,
    "tags": [
      "cufflinks",
      "lapis-lazuli",
      "formal",
      "menswear"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-59-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 76
      }
    ]
  },
  {
    "id": "prod-60",
    "sku": "AUR-ACC-060",
    "brand": "AURELIA ATELIER",
    "name": "Peccary Leather Cashmere-Lined Driving Gloves",
    "slug": "peccary-leather-cashmere-lined-driving-gloves",
    "description": "Unrivaled wild peccary leather from Peru, hand-stitched in Naples and lined with pure Scottish cashmere.",
    "category": "accessories",
    "subcategory": "Gloves",
    "price": 15000,
    "mrp": 20000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Cork Yellow",
        "hex": "#c59f5b"
      },
      {
        "name": "Espresso",
        "hex": "#31231e"
      }
    ],
    "sizes": [
      "8",
      "8.5",
      "9"
    ],
    "variants": [
      {
        "id": "v-60-Co-8",
        "size": "8",
        "color": "Cork Yellow",
        "colorCode": "#c59f5b",
        "stock": 6,
        "sku": "AUR-ACC-060-COR-8",
        "price": 15000
      },
      {
        "id": "v-60-Co-8.5",
        "size": "8.5",
        "color": "Cork Yellow",
        "colorCode": "#c59f5b",
        "stock": 11,
        "sku": "AUR-ACC-060-COR-8.5",
        "price": 15000
      },
      {
        "id": "v-60-Co-9",
        "size": "9",
        "color": "Cork Yellow",
        "colorCode": "#c59f5b",
        "stock": 16,
        "sku": "AUR-ACC-060-COR-9",
        "price": 15000
      },
      {
        "id": "v-60-Es-8",
        "size": "8",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 6,
        "sku": "AUR-ACC-060-ESP-8",
        "price": 15000
      },
      {
        "id": "v-60-Es-8.5",
        "size": "8.5",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 11,
        "sku": "AUR-ACC-060-ESP-8.5",
        "price": 15000
      },
      {
        "id": "v-60-Es-9",
        "size": "9",
        "color": "Espresso",
        "colorCode": "#31231e",
        "stock": 16,
        "sku": "AUR-ACC-060-ESP-9",
        "price": 15000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 66,
    "tags": [
      "gloves",
      "peccary",
      "cashmere-lined",
      "driving"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-60-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 77
      }
    ]
  },
  {
    "id": "prod-61",
    "sku": "AUR-ACC-061",
    "brand": "AURELIA ATELIER",
    "name": "Whangee Bamboo Handle Solid Stick Umbrella",
    "slug": "whangee-bamboo-handle-solid-stick-umbrella",
    "description": "Handmade single-stick beechwood frame fitted with natural scorched Japanese whangee bamboo handle and woven jacquard canopy.",
    "category": "accessories",
    "subcategory": "Umbrellas",
    "price": 18000,
    "mrp": 24000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Dark Navy",
        "hex": "#161c28"
      },
      {
        "name": "Black Watch Tartan",
        "hex": "#11221b"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-61-Da-One Size",
        "size": "One Size",
        "color": "Dark Navy",
        "colorCode": "#161c28",
        "stock": 9,
        "sku": "AUR-ACC-061-DAR-One Size",
        "price": 18000
      },
      {
        "id": "v-61-Bl-One Size",
        "size": "One Size",
        "color": "Black Watch Tartan",
        "colorCode": "#11221b",
        "stock": 9,
        "sku": "AUR-ACC-061-BLA-One Size",
        "price": 18000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 18,
    "tags": [
      "umbrella",
      "bamboo",
      "handcrafted"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-61-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 78
      }
    ]
  },
  {
    "id": "prod-62",
    "sku": "AUR-ACC-062",
    "brand": "AURELIA ATELIER",
    "name": "Montecristi Extra Fino Panama Fedora",
    "slug": "montecristi-extra-fino-panama-fedora",
    "description": "Handwoven in Ecuador over 4 months using microscopic toquilla straw fibers. Finished with grosgrain ribbon and sweatband.",
    "category": "accessories",
    "subcategory": "Hats",
    "price": 24000,
    "mrp": 32000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Bleached Cream",
        "hex": "#fbf9f3"
      }
    ],
    "sizes": [
      "57cm",
      "59cm",
      "61cm"
    ],
    "variants": [
      {
        "id": "v-62-Bl-57cm",
        "size": "57cm",
        "color": "Bleached Cream",
        "colorCode": "#fbf9f3",
        "stock": 12,
        "sku": "AUR-ACC-062-BLE-57cm",
        "price": 24000
      },
      {
        "id": "v-62-Bl-59cm",
        "size": "59cm",
        "color": "Bleached Cream",
        "colorCode": "#fbf9f3",
        "stock": 17,
        "sku": "AUR-ACC-062-BLE-59cm",
        "price": 24000
      },
      {
        "id": "v-62-Bl-61cm",
        "size": "61cm",
        "color": "Bleached Cream",
        "colorCode": "#fbf9f3",
        "stock": 22,
        "sku": "AUR-ACC-062-BLE-61cm",
        "price": 24000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 51,
    "tags": [
      "hat",
      "panama",
      "fedora",
      "summer"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-62-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 79
      }
    ]
  },
  {
    "id": "prod-63",
    "sku": "AUR-EYE-063",
    "brand": "AURELIA ATELIER",
    "name": "Titanium Aviator sunglasses with Polarized Zeiss Lenses",
    "slug": "titanium-aviator-sunglasses-with-polarized-zeiss-lenses",
    "description": "Featherlight beta-titanium frame precision-crafted in Sabae, Japan. Fitted with custom Zeiss polarized mineral glass lenses.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 22000,
    "mrp": 29000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gold / Bottle Green",
        "hex": "#d4af37"
      },
      {
        "name": "Gunmetal / Smoke",
        "hex": "#444850"
      }
    ],
    "sizes": [
      "54-18-145"
    ],
    "variants": [
      {
        "id": "v-63-Go-54-18-145",
        "size": "54-18-145",
        "color": "Gold / Bottle Green",
        "colorCode": "#d4af37",
        "stock": 15,
        "sku": "AUR-EYE-063-GOL-54-18-145",
        "price": 22000
      },
      {
        "id": "v-63-Gu-54-18-145",
        "size": "54-18-145",
        "color": "Gunmetal / Smoke",
        "colorCode": "#444850",
        "stock": 15,
        "sku": "AUR-EYE-063-GUN-54-18-145",
        "price": 22000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 30,
    "tags": [
      "sunglasses",
      "titanium",
      "aviators",
      "zeiss"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-63-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 80
      }
    ]
  },
  {
    "id": "prod-64",
    "sku": "AUR-EYE-064",
    "brand": "AURELIA ATELIER",
    "name": "Bold Beveled Square Acetate Sunglasses",
    "slug": "bold-beveled-square-acetate-sunglasses",
    "description": "Substantial 10mm Japanese Takiron acetate hand-beveled along the browline. Seven-barrel pinned hinges with wire core.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 19500,
    "mrp": 26000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Havana Tortoise",
        "hex": "#5c381d"
      },
      {
        "name": "Piano Black",
        "hex": "#121212"
      }
    ],
    "sizes": [
      "50-21-145"
    ],
    "variants": [
      {
        "id": "v-64-Ha-50-21-145",
        "size": "50-21-145",
        "color": "Havana Tortoise",
        "colorCode": "#5c381d",
        "stock": 18,
        "sku": "AUR-EYE-064-HAV-50-21-145",
        "price": 19500
      },
      {
        "id": "v-64-Pi-50-21-145",
        "size": "50-21-145",
        "color": "Piano Black",
        "colorCode": "#121212",
        "stock": 18,
        "sku": "AUR-EYE-064-PIA-50-21-145",
        "price": 19500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 36,
    "tags": [
      "acetate",
      "sunglasses",
      "square",
      "bold"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-64-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 81
      }
    ]
  },
  {
    "id": "prod-65",
    "sku": "AUR-EYE-065",
    "brand": "AURELIA ATELIER",
    "name": "Round Panto Titanium Optical Frames",
    "slug": "round-panto-titanium-optical-frames",
    "description": "Timeless mid-century round silhouette in lightweight brushed titanium with filigree engraving along bridge and temples.",
    "category": "eyewear",
    "subcategory": "Optical",
    "price": 18500,
    "mrp": 24000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Antique Gold",
        "hex": "#b59265"
      },
      {
        "name": "Silver Ruthenium",
        "hex": "#6e737c"
      }
    ],
    "sizes": [
      "47-21-145"
    ],
    "variants": [
      {
        "id": "v-65-An-47-21-145",
        "size": "47-21-145",
        "color": "Antique Gold",
        "colorCode": "#b59265",
        "stock": 21,
        "sku": "AUR-EYE-065-ANT-47-21-145",
        "price": 18500
      },
      {
        "id": "v-65-Si-47-21-145",
        "size": "47-21-145",
        "color": "Silver Ruthenium",
        "colorCode": "#6e737c",
        "stock": 21,
        "sku": "AUR-EYE-065-SIL-47-21-145",
        "price": 18500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 42,
    "tags": [
      "optical",
      "glasses",
      "titanium",
      "panto"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-65-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 82
      }
    ]
  },
  {
    "id": "prod-66",
    "sku": "AUR-EYE-066",
    "brand": "AURELIA ATELIER",
    "name": "Architectural Geometric Cat-Eye Shades",
    "slug": "architectural-geometric-cat-eye-shades",
    "description": "Striking upturned cat-eye sculpted with sharp geometric angles. 100% UVA/UVB gradient charcoal lenses.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 21000,
    "mrp": 28000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gloss Onyx",
        "hex": "#161616"
      },
      {
        "name": "Amber Horn",
        "hex": "#a6723b"
      }
    ],
    "sizes": [
      "52-19-142"
    ],
    "variants": [
      {
        "id": "v-66-Gl-52-19-142",
        "size": "52-19-142",
        "color": "Gloss Onyx",
        "colorCode": "#161616",
        "stock": 24,
        "sku": "AUR-EYE-066-GLO-52-19-142",
        "price": 21000
      },
      {
        "id": "v-66-Am-52-19-142",
        "size": "52-19-142",
        "color": "Amber Horn",
        "colorCode": "#a6723b",
        "stock": 24,
        "sku": "AUR-EYE-066-AMB-52-19-142",
        "price": 21000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 48,
    "tags": [
      "cat-eye",
      "sunglasses",
      "womenswear",
      "statement"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-66-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 83
      }
    ]
  },
  {
    "id": "prod-67",
    "sku": "AUR-EYE-067",
    "brand": "AURELIA ATELIER",
    "name": "Rimless Hexagonal Gradient Lens Sunglasses",
    "slug": "rimless-hexagonal-gradient-lens-sunglasses",
    "description": "Modern rimless construction featuring faceted diamond-cut lenses anchored by delicate 18K gold-plated titanium bridges.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 24000,
    "mrp": 32000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gold / Sunset Gradient",
        "hex": "#df9b77"
      }
    ],
    "sizes": [
      "56-17-140"
    ],
    "variants": [
      {
        "id": "v-67-Go-56-17-140",
        "size": "56-17-140",
        "color": "Gold / Sunset Gradient",
        "colorCode": "#df9b77",
        "stock": 27,
        "sku": "AUR-EYE-067-GOL-56-17-140",
        "price": 24000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 27,
    "tags": [
      "rimless",
      "hexagonal",
      "sunglasses",
      "titanium"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-67-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 84
      }
    ]
  },
  {
    "id": "prod-68",
    "sku": "AUR-EYE-068",
    "brand": "AURELIA ATELIER",
    "name": "Crown Panto Acetate Combination Frames",
    "slug": "crown-panto-acetate-combination-frames",
    "description": "Flat-top crown panto front in crystal champagne acetate paired with filigreed titanium temples and silicone nose pads.",
    "category": "eyewear",
    "subcategory": "Optical",
    "price": 19000,
    "mrp": 25000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Crystal Champagne",
        "hex": "#eee5d0"
      },
      {
        "name": "Smoky Grey",
        "hex": "#48494f"
      }
    ],
    "sizes": [
      "48-22-145"
    ],
    "variants": [
      {
        "id": "v-68-Cr-48-22-145",
        "size": "48-22-145",
        "color": "Crystal Champagne",
        "colorCode": "#eee5d0",
        "stock": 5,
        "sku": "AUR-EYE-068-CRY-48-22-145",
        "price": 19000
      },
      {
        "id": "v-68-Sm-48-22-145",
        "size": "48-22-145",
        "color": "Smoky Grey",
        "colorCode": "#48494f",
        "stock": 5,
        "sku": "AUR-EYE-068-SMO-48-22-145",
        "price": 19000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 10,
    "tags": [
      "optical",
      "acetate",
      "panto",
      "frames"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-68-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 85
      }
    ]
  },
  {
    "id": "prod-69",
    "sku": "AUR-EYE-069",
    "brand": "AURELIA ATELIER",
    "name": "Navigator Double-Bridge Squared Sunglasses",
    "slug": "navigator-double-bridge-squared-sunglasses",
    "description": "Masculine angular double-bridge navigator with custom knurled temple cores and scratch-resistant photochromic lenses.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 23500,
    "mrp": 31000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#18191c"
      },
      {
        "name": "Polished Silver",
        "hex": "#e2e2e4"
      }
    ],
    "sizes": [
      "55-18-145"
    ],
    "variants": [
      {
        "id": "v-69-Ma-55-18-145",
        "size": "55-18-145",
        "color": "Matte Black",
        "colorCode": "#18191c",
        "stock": 8,
        "sku": "AUR-EYE-069-MAT-55-18-145",
        "price": 23500
      },
      {
        "id": "v-69-Po-55-18-145",
        "size": "55-18-145",
        "color": "Polished Silver",
        "colorCode": "#e2e2e4",
        "stock": 8,
        "sku": "AUR-EYE-069-POL-55-18-145",
        "price": 23500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 16,
    "tags": [
      "navigator",
      "sunglasses",
      "menswear",
      "photochromic"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-69-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 86
      }
    ]
  },
  {
    "id": "prod-70",
    "sku": "AUR-EYE-070",
    "brand": "AURELIA ATELIER",
    "name": "Oversized 70s Butterfly Sunglasses",
    "slug": "oversized-70s-butterfly-sunglasses",
    "description": "Glamorous oversized butterfly front crafted from high-luster Italian bio-acetate with warm tea-tinted lenses.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 20500,
    "mrp": 27000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Amber Blonde Tortoise",
        "hex": "#aa7a44"
      },
      {
        "name": "Gloss Black",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "57-19-140"
    ],
    "variants": [
      {
        "id": "v-70-Am-57-19-140",
        "size": "57-19-140",
        "color": "Amber Blonde Tortoise",
        "colorCode": "#aa7a44",
        "stock": 11,
        "sku": "AUR-EYE-070-AMB-57-19-140",
        "price": 20500
      },
      {
        "id": "v-70-Gl-57-19-140",
        "size": "57-19-140",
        "color": "Gloss Black",
        "colorCode": "#111111",
        "stock": 11,
        "sku": "AUR-EYE-070-GLO-57-19-140",
        "price": 20500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 22,
    "tags": [
      "oversized",
      "butterfly",
      "70s",
      "glamour"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-70-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 87
      }
    ]
  },
  {
    "id": "prod-71",
    "sku": "AUR-FRA-071",
    "brand": "AURELIA ATELIER",
    "name": "Oud Impérial Millésime Extrait 100ml",
    "slug": "oud-imp-rial-mill-sime-extrait-100ml",
    "description": "35% perfume oil concentration. 25-year aged wild Cambodian agarwood enriched with Taif rose, saffron, and smoky birch tar.",
    "category": "fragrance",
    "subcategory": "Extrait de Parfum",
    "price": 26500,
    "mrp": 35000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Smoky Amber",
        "hex": "#774020"
      }
    ],
    "sizes": [
      "100ml",
      "50ml"
    ],
    "variants": [
      {
        "id": "v-71-Sm-100ml",
        "size": "100ml",
        "color": "Smoky Amber",
        "colorCode": "#774020",
        "stock": 14,
        "sku": "AUR-FRA-071-SMO-100ml",
        "price": 26500
      },
      {
        "id": "v-71-Sm-50ml",
        "size": "50ml",
        "color": "Smoky Amber",
        "colorCode": "#774020",
        "stock": 19,
        "sku": "AUR-FRA-071-SMO-50ml",
        "price": 26500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 33,
    "tags": [
      "perfume",
      "oud",
      "extrait",
      "fragrance",
      "luxury"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-71-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 88
      }
    ]
  },
  {
    "id": "prod-72",
    "sku": "AUR-FRA-072",
    "brand": "AURELIA ATELIER",
    "name": "Rose Noire de Grasse Eau de Parfum 100ml",
    "slug": "rose-noire-de-grasse-eau-de-parfum-100ml",
    "description": "Hand-picked Centifolia roses harvested at dawn in Grasse, France. Paired with black patchouli, pink pepper, and ambergris.",
    "category": "fragrance",
    "subcategory": "Parfum",
    "price": 19500,
    "mrp": 26000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Deep Crimson Glass",
        "hex": "#44141d"
      }
    ],
    "sizes": [
      "100ml"
    ],
    "variants": [
      {
        "id": "v-72-De-100ml",
        "size": "100ml",
        "color": "Deep Crimson Glass",
        "colorCode": "#44141d",
        "stock": 17,
        "sku": "AUR-FRA-072-DEE-100ml",
        "price": 19500
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 17,
    "tags": [
      "rose",
      "grasse",
      "floral",
      "parfum"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-72-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 89
      }
    ]
  },
  {
    "id": "prod-73",
    "sku": "AUR-FRA-073",
    "brand": "AURELIA ATELIER",
    "name": "Santal Précieux Extrait 100ml",
    "slug": "santal-pr-cieux-extrait-100ml",
    "description": "Authentic sustainable Mysore sandalwood aged in French oak casks. Accented by cardamome, cedarwood, and velvety iris root.",
    "category": "fragrance",
    "subcategory": "Extrait de Parfum",
    "price": 24000,
    "mrp": 32000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Honeyed Sandalwood",
        "hex": "#c59f5b"
      }
    ],
    "sizes": [
      "100ml"
    ],
    "variants": [
      {
        "id": "v-73-Ho-100ml",
        "size": "100ml",
        "color": "Honeyed Sandalwood",
        "colorCode": "#c59f5b",
        "stock": 20,
        "sku": "AUR-FRA-073-HON-100ml",
        "price": 24000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 20,
    "tags": [
      "sandalwood",
      "mysore",
      "extrait",
      "woody"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-73-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 90
      }
    ]
  },
  {
    "id": "prod-74",
    "sku": "AUR-FRA-074",
    "brand": "AURELIA ATELIER",
    "name": "Ambre Gris Sovereign Eau de Parfum 100ml",
    "slug": "ambre-gris-sovereign-eau-de-parfum-100ml",
    "description": "Natural floating white ambergris tincture balanced with madagascar bourbon vanilla, frankincense, and warm labdanum.",
    "category": "fragrance",
    "subcategory": "Parfum",
    "price": 28000,
    "mrp": 36000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Golden Amber",
        "hex": "#d48834"
      }
    ],
    "sizes": [
      "100ml"
    ],
    "variants": [
      {
        "id": "v-74-Go-100ml",
        "size": "100ml",
        "color": "Golden Amber",
        "colorCode": "#d48834",
        "stock": 23,
        "sku": "AUR-FRA-074-GOL-100ml",
        "price": 28000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 23,
    "tags": [
      "ambergris",
      "amber",
      "oriental",
      "rare"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-74-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 91
      }
    ]
  },
  {
    "id": "prod-75",
    "sku": "AUR-FRA-075",
    "brand": "AURELIA ATELIER",
    "name": "Vetiver Sublime Eau de Parfum 100ml",
    "slug": "vetiver-sublime-eau-de-parfum-100ml",
    "description": "Rooted in Haitian vetiver dried under the Caribbean sun. Crisp Italian bergamot top notes and a base of nutmeg and dry cedar.",
    "category": "fragrance",
    "subcategory": "Parfum",
    "price": 18500,
    "mrp": 24000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Olive Green Glass",
        "hex": "#374737"
      }
    ],
    "sizes": [
      "100ml"
    ],
    "variants": [
      {
        "id": "v-75-Ol-100ml",
        "size": "100ml",
        "color": "Olive Green Glass",
        "colorCode": "#374737",
        "stock": 26,
        "sku": "AUR-FRA-075-OLI-100ml",
        "price": 18500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 26,
    "tags": [
      "vetiver",
      "fresh",
      "earthy",
      "masculine"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-75-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 92
      }
    ]
  },
  {
    "id": "prod-76",
    "sku": "AUR-FRA-076",
    "brand": "AURELIA ATELIER",
    "name": "Iris de Florence Extrait de Parfum 50ml",
    "slug": "iris-de-florence-extrait-de-parfum-50ml",
    "description": "Distilled from Florentine orris butter aged for six years underground. The ultimate powder-silk scent with violet and white musk.",
    "category": "fragrance",
    "subcategory": "Extrait de Parfum",
    "price": 32000,
    "mrp": 42000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Frosted Crystal",
        "hex": "#ebecee"
      }
    ],
    "sizes": [
      "50ml"
    ],
    "variants": [
      {
        "id": "v-76-Fr-50ml",
        "size": "50ml",
        "color": "Frosted Crystal",
        "colorCode": "#ebecee",
        "stock": 4,
        "sku": "AUR-FRA-076-FRO-50ml",
        "price": 32000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 4,
    "tags": [
      "orris",
      "iris",
      "florence",
      "powder",
      "extrait"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-76-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 93
      }
    ]
  },
  {
    "id": "prod-77",
    "sku": "AUR-FRA-077",
    "brand": "AURELIA CASA",
    "name": "Marble Jar Scented Candle 450g — Bois Sombre",
    "slug": "marble-jar-scented-candle-450g-bois-sombre",
    "description": "Hand-poured into a solid Marquina black marble vessel. 75-hour burn time with notes of smoked cedar, leather, and dark clove.",
    "category": "fragrance",
    "subcategory": "Candles",
    "price": 9800,
    "mrp": 13000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Nero Marquina Marble",
        "hex": "#191919"
      }
    ],
    "sizes": [
      "450g"
    ],
    "variants": [
      {
        "id": "v-77-Ne-450g",
        "size": "450g",
        "color": "Nero Marquina Marble",
        "colorCode": "#191919",
        "stock": 7,
        "sku": "AUR-FRA-077-NER-450g",
        "price": 9800
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 7,
    "tags": [
      "candle",
      "marble",
      "home-fragrance",
      "cedar"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-77-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 94
      }
    ]
  },
  {
    "id": "prod-78",
    "sku": "AUR-FRA-078",
    "brand": "AURELIA ATELIER",
    "name": "The Grand Flacon Discovery Wardrobe (6 x 10ml)",
    "slug": "the-grand-flacon-discovery-wardrobe-6-x-10ml",
    "description": "Curated library of our six iconic extraits presented in leather-bound presentation casket with travel atomizer.",
    "category": "fragrance",
    "subcategory": "Discovery Set",
    "price": 14500,
    "mrp": 18000,
    "discount": 19,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gold & Black Coffret",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "6 x 10ml"
    ],
    "variants": [
      {
        "id": "v-78-Go-6 x 10ml",
        "size": "6 x 10ml",
        "color": "Gold & Black Coffret",
        "colorCode": "#c5a880",
        "stock": 10,
        "sku": "AUR-FRA-078-GOL-6 x 10ml",
        "price": 14500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 10,
    "tags": [
      "discovery-set",
      "sample",
      "gift-set",
      "perfume"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-78-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 95
      }
    ]
  },
  {
    "id": "prod-79",
    "sku": "AUR-HOM-079",
    "brand": "AURELIA CASA",
    "name": "Pure Mongolian Cashmere Cable Fringe Throw",
    "slug": "pure-mongolian-cashmere-cable-fringe-throw",
    "description": "Weighing 850 grams of unadulterated Mongolian cashmere with deep hand-twisted fringe borders. Luxuriously oversized at 140x200cm.",
    "category": "home",
    "subcategory": "Textiles",
    "price": 28500,
    "mrp": 38000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Natural Sand",
        "hex": "#ded6c7"
      },
      {
        "name": "Graphite",
        "hex": "#373a40"
      }
    ],
    "sizes": [
      "140cm x 200cm"
    ],
    "variants": [
      {
        "id": "v-79-Na-140cm x 200cm",
        "size": "140cm x 200cm",
        "color": "Natural Sand",
        "colorCode": "#ded6c7",
        "stock": 13,
        "sku": "AUR-HOM-079-NAT-140cm x 200cm",
        "price": 28500
      },
      {
        "id": "v-79-Gr-140cm x 200cm",
        "size": "140cm x 200cm",
        "color": "Graphite",
        "colorCode": "#373a40",
        "stock": 13,
        "sku": "AUR-HOM-079-GRA-140cm x 200cm",
        "price": 28500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 26,
    "tags": [
      "blanket",
      "throw",
      "cashmere",
      "home-decor"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-79-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 96
      }
    ]
  },
  {
    "id": "prod-80",
    "sku": "AUR-HOM-080",
    "brand": "AURELIA CASA",
    "name": "Hand-Thrown Tuscan Terracotta Sculptural Vessel",
    "slug": "hand-thrown-tuscan-terracotta-sculptural-vessel",
    "description": "Turned on the wheel in Impruneta, Italy using age-old volcanic clay. Raw exterior with waterproof glazed interior.",
    "category": "home",
    "subcategory": "Ceramics",
    "price": 18000,
    "mrp": 24000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Raw Terracotta",
        "hex": "#b86644"
      },
      {
        "name": "Volcanic Ash",
        "hex": "#484b4c"
      }
    ],
    "sizes": [
      "38cm Height"
    ],
    "variants": [
      {
        "id": "v-80-Ra-38cm Height",
        "size": "38cm Height",
        "color": "Raw Terracotta",
        "colorCode": "#b86644",
        "stock": 16,
        "sku": "AUR-HOM-080-RAW-38cm Height",
        "price": 18000
      },
      {
        "id": "v-80-Vo-38cm Height",
        "size": "38cm Height",
        "color": "Volcanic Ash",
        "colorCode": "#484b4c",
        "stock": 16,
        "sku": "AUR-HOM-080-VOL-38cm Height",
        "price": 18000
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 32,
    "tags": [
      "vase",
      "ceramics",
      "terracotta",
      "italian"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-80-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 97
      }
    ]
  },
  {
    "id": "prod-81",
    "sku": "AUR-HOM-081",
    "brand": "AURELIA CASA",
    "name": "Hand-Cut Crystal Decanter & Tumbler Set",
    "slug": "hand-cut-crystal-decanter-tumbler-set",
    "description": "Mouth-blown lead-free crystal with geometric diamond cuts. Set includes one 750ml decanter and two double old-fashioned tumblers.",
    "category": "home",
    "subcategory": "Barware",
    "price": 24500,
    "mrp": 32000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Clear Fluted Crystal",
        "hex": "#f0f3f6"
      }
    ],
    "sizes": [
      "Set of 3"
    ],
    "variants": [
      {
        "id": "v-81-Cl-Set of 3",
        "size": "Set of 3",
        "color": "Clear Fluted Crystal",
        "colorCode": "#f0f3f6",
        "stock": 19,
        "sku": "AUR-HOM-081-CLE-Set of 3",
        "price": 24500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 19,
    "tags": [
      "crystal",
      "decanter",
      "barware",
      "tumbler"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-81-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 98
      }
    ]
  },
  {
    "id": "prod-82",
    "sku": "AUR-HOM-082",
    "brand": "AURELIA CASA",
    "name": "Belgian Washed Linen Duvet Ensemble",
    "slug": "belgian-washed-linen-duvet-ensemble",
    "description": "Pure certified Flanders flax woven in Belgium and stone-washed for lived-in softness. King size set with 2 oxford pillowcases.",
    "category": "home",
    "subcategory": "Bedding",
    "price": 32000,
    "mrp": 42000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Flax Natural",
        "hex": "#d2c5b2"
      },
      {
        "name": "Chalk White",
        "hex": "#fbfbfb"
      }
    ],
    "sizes": [
      "King Size"
    ],
    "variants": [
      {
        "id": "v-82-Fl-King Size",
        "size": "King Size",
        "color": "Flax Natural",
        "colorCode": "#d2c5b2",
        "stock": 22,
        "sku": "AUR-HOM-082-FLA-King Size",
        "price": 32000
      },
      {
        "id": "v-82-Ch-King Size",
        "size": "King Size",
        "color": "Chalk White",
        "colorCode": "#fbfbfb",
        "stock": 22,
        "sku": "AUR-HOM-082-CHA-King Size",
        "price": 32000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 44,
    "tags": [
      "linen",
      "bedding",
      "duvet",
      "belgian-flax"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-82-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 99
      }
    ]
  },
  {
    "id": "prod-83",
    "sku": "AUR-HOM-083",
    "brand": "AURELIA CASA",
    "name": "Solid Carrara Marble Valet Catchall Tray",
    "slug": "solid-carrara-marble-valet-catchall-tray",
    "description": "Chiseled from a single block of Tuscan Bianco Carrara marble with hand-honed matte finish and brass feet.",
    "category": "home",
    "subcategory": "Objects",
    "price": 12500,
    "mrp": 17000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "White Carrara",
        "hex": "#eceae6"
      }
    ],
    "sizes": [
      "30cm x 18cm"
    ],
    "variants": [
      {
        "id": "v-83-Wh-30cm x 18cm",
        "size": "30cm x 18cm",
        "color": "White Carrara",
        "colorCode": "#eceae6",
        "stock": 25,
        "sku": "AUR-HOM-083-WHI-30cm x 18cm",
        "price": 12500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 25,
    "tags": [
      "marble",
      "tray",
      "catchall",
      "carrara"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-83-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 100
      }
    ]
  },
  {
    "id": "prod-84",
    "sku": "AUR-HOM-084",
    "brand": "AURELIA CASA",
    "name": "Alabaster Stone & Brass Cordless Ambient Lamp",
    "slug": "alabaster-stone-brass-cordless-ambient-lamp",
    "description": "Carved Spanish translucent alabaster shade diffusing 2700K warm LED glow. 14-hour rechargeable lithium battery.",
    "category": "home",
    "subcategory": "Lighting",
    "price": 21000,
    "mrp": 28000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Brass / Alabaster",
        "hex": "#dfc79b"
      }
    ],
    "sizes": [
      "25cm Height"
    ],
    "variants": [
      {
        "id": "v-84-Br-25cm Height",
        "size": "25cm Height",
        "color": "Brass / Alabaster",
        "colorCode": "#dfc79b",
        "stock": 28,
        "sku": "AUR-HOM-084-BRA-25cm Height",
        "price": 21000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 28,
    "tags": [
      "lamp",
      "alabaster",
      "cordless",
      "lighting"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-84-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 101
      }
    ]
  },
  {
    "id": "prod-85",
    "sku": "AUR-HOM-085",
    "brand": "AURELIA CASA",
    "name": "Silk Velvet Decorative Cushion with Down Insert",
    "slug": "silk-velvet-decorative-cushion-with-down-insert",
    "description": "Sumptuous Italian silk velvet with tonal piped borders and heavy Hungarian goose down filler.",
    "category": "home",
    "subcategory": "Textiles",
    "price": 8500,
    "mrp": 12000,
    "discount": 29,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Deep Rust",
        "hex": "#773522"
      },
      {
        "name": "Moss Green",
        "hex": "#374737"
      }
    ],
    "sizes": [
      "50cm x 50cm"
    ],
    "variants": [
      {
        "id": "v-85-De-50cm x 50cm",
        "size": "50cm x 50cm",
        "color": "Deep Rust",
        "colorCode": "#773522",
        "stock": 6,
        "sku": "AUR-HOM-085-DEE-50cm x 50cm",
        "price": 8500
      },
      {
        "id": "v-85-Mo-50cm x 50cm",
        "size": "50cm x 50cm",
        "color": "Moss Green",
        "colorCode": "#374737",
        "stock": 6,
        "sku": "AUR-HOM-085-MOS-50cm x 50cm",
        "price": 8500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 12,
    "tags": [
      "cushion",
      "velvet",
      "pillow",
      "decor"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-85-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 102
      }
    ]
  },
  {
    "id": "prod-86",
    "sku": "AUR-HOM-086",
    "brand": "AURELIA CASA",
    "name": "Hand-Forged Matte Gold 24-Piece Flatware Set",
    "slug": "hand-forged-matte-gold-24-piece-flatware-set",
    "description": "18/10 stainless steel coated with durable titanium gold PVD in understated satin brushed finish. Service for six.",
    "category": "home",
    "subcategory": "Dining",
    "price": 38000,
    "mrp": 49000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Matte Brushed Gold",
        "hex": "#d4af37"
      }
    ],
    "sizes": [
      "24-Piece Service for 6"
    ],
    "variants": [
      {
        "id": "v-86-Ma-24-Piece Service for 6",
        "size": "24-Piece Service for 6",
        "color": "Matte Brushed Gold",
        "colorCode": "#d4af37",
        "stock": 9,
        "sku": "AUR-HOM-086-MAT-24-Piece Service for 6",
        "price": 38000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 9,
    "tags": [
      "cutlery",
      "flatware",
      "gold",
      "dining"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-86-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 103
      }
    ]
  },
  {
    "id": "prod-87",
    "sku": "AUR-ELE-087",
    "brand": "AURELIA ACOUSTICS",
    "name": "Atelier Wireless ANC Titanium Headphones",
    "slug": "atelier-wireless-anc-titanium-headphones",
    "description": "40mm custom custom-tuned beryllium acoustic drivers, Grade-5 titanium yokes, lambskin earcups, and lossless Bluetooth 5.4 LDAC streaming.",
    "category": "electronics",
    "subcategory": "Headphones",
    "price": 38990,
    "mrp": 49990,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Matte Titanium",
        "hex": "#8a8d91"
      },
      {
        "name": "Obsidian Noir",
        "hex": "#161719"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-87-Ma-One Size",
        "size": "One Size",
        "color": "Matte Titanium",
        "colorCode": "#8a8d91",
        "stock": 12,
        "sku": "AUR-ELE-087-MAT-One Size",
        "price": 38990
      },
      {
        "id": "v-87-Ob-One Size",
        "size": "One Size",
        "color": "Obsidian Noir",
        "colorCode": "#161719",
        "stock": 12,
        "sku": "AUR-ELE-087-OBS-One Size",
        "price": 38990
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 24,
    "tags": [
      "headphones",
      "audiophile",
      "anc",
      "wireless",
      "titanium"
    ],
    "badges": [
      "BESTSELLER",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-87-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 104
      }
    ]
  },
  {
    "id": "prod-88",
    "sku": "AUR-ELE-088",
    "brand": "AURELIA ACOUSTICS",
    "name": "Sonata Solid Walnut Wireless Hi-Fi Speaker",
    "slug": "sonata-solid-walnut-wireless-hi-fi-speaker",
    "description": "Acoustic cabinet hand-milled from a solid block of American black walnut. 160-watt Class-D bi-amplification with AirPlay 2 and Spotify Connect.",
    "category": "electronics",
    "subcategory": "Speakers",
    "price": 54000,
    "mrp": 68000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "American Walnut",
        "hex": "#583a24"
      },
      {
        "name": "Ebonized Ash",
        "hex": "#1d1d20"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-88-Am-One Size",
        "size": "One Size",
        "color": "American Walnut",
        "colorCode": "#583a24",
        "stock": 15,
        "sku": "AUR-ELE-088-AME-One Size",
        "price": 54000
      },
      {
        "id": "v-88-Eb-One Size",
        "size": "One Size",
        "color": "Ebonized Ash",
        "colorCode": "#1d1d20",
        "stock": 15,
        "sku": "AUR-ELE-088-EBO-One Size",
        "price": 54000
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 30,
    "tags": [
      "speaker",
      "hi-fi",
      "walnut",
      "wireless",
      "audio"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-88-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 105
      }
    ]
  },
  {
    "id": "prod-89",
    "sku": "AUR-ELE-089",
    "brand": "AURELIA ACOUSTICS",
    "name": "Vanguard Belt-Drive Acrylic Audiophile Turntable",
    "slug": "vanguard-belt-drive-acrylic-audiophile-turntable",
    "description": "Heavy 30mm CNC-machined resonance-free acrylic plinth. Carbon-fiber tonearm fitted with Ortofon 2M Bronze moving magnet cartridge.",
    "category": "electronics",
    "subcategory": "Turntables",
    "price": 72000,
    "mrp": 92000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Clear Crystal Acrylic",
        "hex": "#e8edf2"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-89-Cl-One Size",
        "size": "One Size",
        "color": "Clear Crystal Acrylic",
        "colorCode": "#e8edf2",
        "stock": 18,
        "sku": "AUR-ELE-089-CLE-One Size",
        "price": 72000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 18,
    "tags": [
      "turntable",
      "vinyl",
      "audiophile",
      "hi-fi"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-89-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 106
      }
    ]
  },
  {
    "id": "prod-90",
    "sku": "AUR-ELE-090",
    "brand": "AURELIA ACOUSTICS",
    "name": "Sovereign Pro True Wireless Ceramic Earbuds",
    "slug": "sovereign-pro-true-wireless-ceramic-earbuds",
    "description": "Polished zirconia ceramic housings, hybrid active noise cancellation, Qi wireless charging case with 32-hour playback.",
    "category": "electronics",
    "subcategory": "Earphones",
    "price": 22500,
    "mrp": 29990,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gloss White Ceramic",
        "hex": "#fafafa"
      },
      {
        "name": "Piano Black Ceramic",
        "hex": "#111111"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-90-Gl-One Size",
        "size": "One Size",
        "color": "Gloss White Ceramic",
        "colorCode": "#fafafa",
        "stock": 21,
        "sku": "AUR-ELE-090-GLO-One Size",
        "price": 22500
      },
      {
        "id": "v-90-Pi-One Size",
        "size": "One Size",
        "color": "Piano Black Ceramic",
        "colorCode": "#111111",
        "stock": 21,
        "sku": "AUR-ELE-090-PIA-One Size",
        "price": 22500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 42,
    "tags": [
      "earbuds",
      "wireless",
      "anc",
      "ceramic"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-90-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 107
      }
    ]
  },
  {
    "id": "prod-91",
    "sku": "AUR-ELE-091",
    "brand": "AURELIA ACOUSTICS",
    "name": "Vacuum Tube Headphone Amplifier & DAC",
    "slug": "vacuum-tube-headphone-amplifier-dac",
    "description": "Dual Electro-Harmonix 6922 triode vacuum tubes paired with ESS Sabre 32-bit/768kHz high-resolution DAC. Pure class-A warm analog sound.",
    "category": "electronics",
    "subcategory": "Audio Gear",
    "price": 46000,
    "mrp": 59000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Brushed Silver & Glass",
        "hex": "#d4d8db"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-91-Br-One Size",
        "size": "One Size",
        "color": "Brushed Silver & Glass",
        "colorCode": "#d4d8db",
        "stock": 24,
        "sku": "AUR-ELE-091-BRU-One Size",
        "price": 46000
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 24,
    "tags": [
      "tube-amp",
      "dac",
      "audiophile",
      "analog"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-91-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 108
      }
    ]
  },
  {
    "id": "prod-92",
    "sku": "AUR-ELE-092",
    "brand": "AURELIA ACOUSTICS",
    "name": "Handcrafted Solid Brass Headphone Stand",
    "slug": "handcrafted-solid-brass-headphone-stand",
    "description": "Weighted solid machined brass pillar with curved saddle lined in vegetable-tanned leather to prevent headband compression.",
    "category": "electronics",
    "subcategory": "Accessories",
    "price": 11000,
    "mrp": 15000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Raw Satin Brass",
        "hex": "#d4af37"
      }
    ],
    "sizes": [
      "One Size"
    ],
    "variants": [
      {
        "id": "v-92-Ra-One Size",
        "size": "One Size",
        "color": "Raw Satin Brass",
        "colorCode": "#d4af37",
        "stock": 27,
        "sku": "AUR-ELE-092-RAW-One Size",
        "price": 11000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 27,
    "tags": [
      "stand",
      "brass",
      "headphone-stand",
      "accessories"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-92-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 109
      }
    ]
  },
  {
    "id": "prod-93",
    "sku": "AUR-ELE-093",
    "brand": "AURELIA ACOUSTICS",
    "name": "Pocket Mini Aluminum Wireless Travel Speaker",
    "slug": "pocket-mini-aluminum-wireless-travel-speaker",
    "description": "Machined from single billet aerospace aluminum with IPX7 waterproof rating and 360-degree acoustic dispersion cone.",
    "category": "electronics",
    "subcategory": "Speakers",
    "price": 14500,
    "mrp": 19000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Space Grey",
        "hex": "#484b50"
      },
      {
        "name": "Champagne Gold",
        "hex": "#dfc79b"
      }
    ],
    "sizes": [
      "Compact"
    ],
    "variants": [
      {
        "id": "v-93-Sp-Compact",
        "size": "Compact",
        "color": "Space Grey",
        "colorCode": "#484b50",
        "stock": 5,
        "sku": "AUR-ELE-093-SPA-Compact",
        "price": 14500
      },
      {
        "id": "v-93-Ch-Compact",
        "size": "Compact",
        "color": "Champagne Gold",
        "colorCode": "#dfc79b",
        "stock": 5,
        "sku": "AUR-ELE-093-CHA-Compact",
        "price": 14500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 10,
    "tags": [
      "portable-speaker",
      "bluetooth",
      "aluminum",
      "travel"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-93-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 110
      }
    ]
  },
  {
    "id": "prod-94",
    "sku": "AUR-ELE-094",
    "brand": "AURELIA ACOUSTICS",
    "name": "Precision Silver-Plated Copper Audiophile Cable",
    "slug": "precision-silver-plated-copper-audiophile-cable",
    "description": "Eight-strand braided monocrystalline OCC copper with 99.999% pure silver plating and 4.4mm balanced gold-plated jack.",
    "category": "electronics",
    "subcategory": "Audio Gear",
    "price": 8900,
    "mrp": 12000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Silver Braided",
        "hex": "#c5c8cc"
      }
    ],
    "sizes": [
      "1.5 Meter"
    ],
    "variants": [
      {
        "id": "v-94-Si-1.5 Meter",
        "size": "1.5 Meter",
        "color": "Silver Braided",
        "colorCode": "#c5c8cc",
        "stock": 8,
        "sku": "AUR-ELE-094-SIL-1.5 Meter",
        "price": 8900
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 8,
    "tags": [
      "cable",
      "audiophile",
      "silver-plated",
      "accessories"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-94-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 111
      }
    ]
  },
  {
    "id": "prod-95",
    "sku": "AUR-BEA-095",
    "brand": "AURELIA BOTANIQUE",
    "name": "Cellular Renewal 24K Gold Youth Elixir 50ml",
    "slug": "cellular-renewal-24k-gold-youth-elixir-50ml",
    "description": "Suspended colloidal 24K gold flakes, cold-pressed Himalayan seabuckthorn, and botanical bakuchiol for luminous skin regeneration.",
    "category": "beauty",
    "subcategory": "Skincare",
    "price": 16500,
    "mrp": 22000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Amber Gold Oil",
        "hex": "#e8b84b"
      }
    ],
    "sizes": [
      "50ml",
      "30ml"
    ],
    "variants": [
      {
        "id": "v-95-Am-50ml",
        "size": "50ml",
        "color": "Amber Gold Oil",
        "colorCode": "#e8b84b",
        "stock": 11,
        "sku": "AUR-BEA-095-AMB-50ml",
        "price": 16500
      },
      {
        "id": "v-95-Am-30ml",
        "size": "30ml",
        "color": "Amber Gold Oil",
        "colorCode": "#e8b84b",
        "stock": 16,
        "sku": "AUR-BEA-095-AMB-30ml",
        "price": 16500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 27,
    "tags": [
      "serum",
      "gold",
      "skincare",
      "anti-aging",
      "beauty"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-95-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 112
      }
    ]
  },
  {
    "id": "prod-96",
    "sku": "AUR-BEA-096",
    "brand": "AURELIA BOTANIQUE",
    "name": "White Truffle & Peptide Intensive Night Cream 60ml",
    "slug": "white-truffle-peptide-intensive-night-cream-60ml",
    "description": "Piedmont white truffle extract combined with bio-identical hexapeptides and botanical squalane in a heavy glass apothecary jar.",
    "category": "beauty",
    "subcategory": "Skincare",
    "price": 18500,
    "mrp": 24500,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Opalescent Cream",
        "hex": "#faf7f2"
      }
    ],
    "sizes": [
      "60ml"
    ],
    "variants": [
      {
        "id": "v-96-Op-60ml",
        "size": "60ml",
        "color": "Opalescent Cream",
        "colorCode": "#faf7f2",
        "stock": 14,
        "sku": "AUR-BEA-096-OPA-60ml",
        "price": 18500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 14,
    "tags": [
      "cream",
      "night-cream",
      "peptides",
      "truffle"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-96-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 113
      }
    ]
  },
  {
    "id": "prod-97",
    "sku": "AUR-BEA-097",
    "brand": "AURELIA BOTANIQUE",
    "name": "Melting Damask Rose Cleansing Nectar Balm 120ml",
    "slug": "melting-damask-rose-cleansing-nectar-balm-120ml",
    "description": "Rich balm that transforms into a delicate milk upon contact with warm water. Dissolves impurities without disturbing barrier.",
    "category": "beauty",
    "subcategory": "Cleansers",
    "price": 7800,
    "mrp": 10500,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Rose Petal Pink",
        "hex": "#e5b6b6"
      }
    ],
    "sizes": [
      "120ml"
    ],
    "variants": [
      {
        "id": "v-97-Ro-120ml",
        "size": "120ml",
        "color": "Rose Petal Pink",
        "colorCode": "#e5b6b6",
        "stock": 17,
        "sku": "AUR-BEA-097-ROS-120ml",
        "price": 7800
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 17,
    "tags": [
      "cleanser",
      "balm",
      "damask-rose",
      "skincare"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-97-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 114
      }
    ]
  },
  {
    "id": "prod-98",
    "sku": "AUR-BEA-098",
    "brand": "AURELIA BOTANIQUE",
    "name": "Bio-Cellulose Marine Collagen Sheet Mask Set",
    "slug": "bio-cellulose-marine-collagen-sheet-mask-set",
    "description": "Box of 5 fermented coconut bio-cellulose masks soaked in deep oceanic marine collagen and triple-molecular hyaluronic acid.",
    "category": "beauty",
    "subcategory": "Treatment",
    "price": 6500,
    "mrp": 8500,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Pearlescent White",
        "hex": "#f6f7f8"
      }
    ],
    "sizes": [
      "Box of 5 Masks"
    ],
    "variants": [
      {
        "id": "v-98-Pe-Box of 5 Masks",
        "size": "Box of 5 Masks",
        "color": "Pearlescent White",
        "colorCode": "#f6f7f8",
        "stock": 20,
        "sku": "AUR-BEA-098-PEA-Box of 5 Masks",
        "price": 6500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 20,
    "tags": [
      "sheet-mask",
      "collagen",
      "hyaluronic",
      "hydration"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-98-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 115
      }
    ]
  },
  {
    "id": "prod-99",
    "sku": "AUR-BEA-099",
    "brand": "AURELIA BOTANIQUE",
    "name": "Xiuyan Jade Sculpting Gua Sha & Roller Set",
    "slug": "xiuyan-jade-sculpting-gua-sha-roller-set",
    "description": "Hand-carved from Grade-A untreated Xiuyan nephrite jade. Designed to encourage lymphatic drainage and define facial contours.",
    "category": "beauty",
    "subcategory": "Tools",
    "price": 8900,
    "mrp": 12000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Pale Sage Jade",
        "hex": "#779977"
      }
    ],
    "sizes": [
      "Set of 2"
    ],
    "variants": [
      {
        "id": "v-99-Pa-Set of 2",
        "size": "Set of 2",
        "color": "Pale Sage Jade",
        "colorCode": "#779977",
        "stock": 23,
        "sku": "AUR-BEA-099-PAL-Set of 2",
        "price": 8900
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 23,
    "tags": [
      "gua-sha",
      "jade-roller",
      "beauty-tools",
      "sculpting"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-99-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 116
      }
    ]
  },
  {
    "id": "prod-100",
    "sku": "AUR-BEA-100",
    "brand": "AURELIA BOTANIQUE",
    "name": "Velvet Lip Suede & 24K Gold Overnight Mask",
    "slug": "velvet-lip-suede-24k-gold-overnight-mask",
    "description": "Intensive peptide and botanical butter lip treatment infused with real gold particles for plump, supple lips by morning.",
    "category": "beauty",
    "subcategory": "Lips",
    "price": 5200,
    "mrp": 7000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Golden Nude",
        "hex": "#cf9878"
      }
    ],
    "sizes": [
      "15g"
    ],
    "variants": [
      {
        "id": "v-100-Go-15g",
        "size": "15g",
        "color": "Golden Nude",
        "colorCode": "#cf9878",
        "stock": 26,
        "sku": "AUR-BEA-100-GOL-15g",
        "price": 5200
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 26,
    "tags": [
      "lip-mask",
      "peptides",
      "gold",
      "lip-care"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-100-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 117
      }
    ]
  },
  {
    "id": "prod-101",
    "sku": "AUR-BEA-101",
    "brand": "AURELIA BOTANIQUE",
    "name": "Dry Shimmer Body Oil 100ml — Soleil dOr",
    "slug": "dry-shimmer-body-oil-100ml-soleil-dor",
    "description": "Fast-absorbing dry botanical oil blend with microscopic golden mineral pearls. Delicately scented with monoi and tiare blossoms.",
    "category": "beauty",
    "subcategory": "Body",
    "price": 9500,
    "mrp": 13000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Golden Shimmer",
        "hex": "#dfb066"
      }
    ],
    "sizes": [
      "100ml"
    ],
    "variants": [
      {
        "id": "v-101-Go-100ml",
        "size": "100ml",
        "color": "Golden Shimmer",
        "colorCode": "#dfb066",
        "stock": 4,
        "sku": "AUR-BEA-101-GOL-100ml",
        "price": 9500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 4,
    "tags": [
      "body-oil",
      "shimmer",
      "bronze",
      "glow"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-101-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 118
      }
    ]
  },
  {
    "id": "prod-102",
    "sku": "AUR-BEA-102",
    "brand": "AURELIA BOTANIQUE",
    "name": "Caffeine & Cryo Peptide Eye Awakening Gel",
    "slug": "caffeine-cryo-peptide-eye-awakening-gel",
    "description": "Cooling zamak applicator tip delivering green tea caffeine, peptides, and arnica to instantly de-puff and brighten dark circles.",
    "category": "beauty",
    "subcategory": "Eye Care",
    "price": 11000,
    "mrp": 15000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Translucent Cooling Gel",
        "hex": "#dbece8"
      }
    ],
    "sizes": [
      "15ml"
    ],
    "variants": [
      {
        "id": "v-102-Tr-15ml",
        "size": "15ml",
        "color": "Translucent Cooling Gel",
        "colorCode": "#dbece8",
        "stock": 7,
        "sku": "AUR-BEA-102-TRA-15ml",
        "price": 11000
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 7,
    "tags": [
      "eye-cream",
      "caffeine",
      "depuff",
      "peptides"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-102-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 119
      }
    ]
  },
  {
    "id": "prod-103",
    "sku": "AUR-KID-103",
    "brand": "AURELIA JUNIOR",
    "name": "Junior Atelier Pure Cashmere Cardigan",
    "slug": "junior-atelier-pure-cashmere-cardigan",
    "description": "Knitted from delicate ultra-soft Grade-A cashmere with genuine mother-of-pearl buttons and soft ribbed cuffs.",
    "category": "kids",
    "subcategory": "Junior Knitwear",
    "price": 12500,
    "mrp": 16500,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Cloud Blue",
        "hex": "#b5ccdd"
      },
      {
        "name": "Oatmeal Heather",
        "hex": "#ded6c7"
      }
    ],
    "sizes": [
      "2Y",
      "4Y",
      "6Y",
      "8Y"
    ],
    "variants": [
      {
        "id": "v-103-Cl-2Y",
        "size": "2Y",
        "color": "Cloud Blue",
        "colorCode": "#b5ccdd",
        "stock": 10,
        "sku": "AUR-KID-103-CLO-2Y",
        "price": 12500
      },
      {
        "id": "v-103-Cl-4Y",
        "size": "4Y",
        "color": "Cloud Blue",
        "colorCode": "#b5ccdd",
        "stock": 15,
        "sku": "AUR-KID-103-CLO-4Y",
        "price": 12500
      },
      {
        "id": "v-103-Cl-6Y",
        "size": "6Y",
        "color": "Cloud Blue",
        "colorCode": "#b5ccdd",
        "stock": 20,
        "sku": "AUR-KID-103-CLO-6Y",
        "price": 12500
      },
      {
        "id": "v-103-Oa-2Y",
        "size": "2Y",
        "color": "Oatmeal Heather",
        "colorCode": "#ded6c7",
        "stock": 10,
        "sku": "AUR-KID-103-OAT-2Y",
        "price": 12500
      },
      {
        "id": "v-103-Oa-4Y",
        "size": "4Y",
        "color": "Oatmeal Heather",
        "colorCode": "#ded6c7",
        "stock": 15,
        "sku": "AUR-KID-103-OAT-4Y",
        "price": 12500
      },
      {
        "id": "v-103-Oa-6Y",
        "size": "6Y",
        "color": "Oatmeal Heather",
        "colorCode": "#ded6c7",
        "stock": 20,
        "sku": "AUR-KID-103-OAT-6Y",
        "price": 12500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 90,
    "tags": [
      "kids",
      "cashmere",
      "cardigan",
      "junior"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-103-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 120
      }
    ]
  },
  {
    "id": "prod-104",
    "sku": "AUR-KID-104",
    "brand": "AURELIA JUNIOR",
    "name": "Silk Organza Smocked Party Dress",
    "slug": "silk-organza-smocked-party-dress",
    "description": "Hand-smocked bodice in crisp mulberry silk organza with Peter Pan collar and layered tulle petticoat lining.",
    "category": "kids",
    "subcategory": "Junior Dresses",
    "price": 14000,
    "mrp": 18500,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Pastel Rose",
        "hex": "#eed0d0"
      },
      {
        "name": "Ivory Cream",
        "hex": "#fdfbf7"
      }
    ],
    "sizes": [
      "3Y",
      "5Y",
      "7Y",
      "9Y"
    ],
    "variants": [
      {
        "id": "v-104-Pa-3Y",
        "size": "3Y",
        "color": "Pastel Rose",
        "colorCode": "#eed0d0",
        "stock": 13,
        "sku": "AUR-KID-104-PAS-3Y",
        "price": 14000
      },
      {
        "id": "v-104-Pa-5Y",
        "size": "5Y",
        "color": "Pastel Rose",
        "colorCode": "#eed0d0",
        "stock": 18,
        "sku": "AUR-KID-104-PAS-5Y",
        "price": 14000
      },
      {
        "id": "v-104-Pa-7Y",
        "size": "7Y",
        "color": "Pastel Rose",
        "colorCode": "#eed0d0",
        "stock": 23,
        "sku": "AUR-KID-104-PAS-7Y",
        "price": 14000
      },
      {
        "id": "v-104-Iv-3Y",
        "size": "3Y",
        "color": "Ivory Cream",
        "colorCode": "#fdfbf7",
        "stock": 13,
        "sku": "AUR-KID-104-IVO-3Y",
        "price": 14000
      },
      {
        "id": "v-104-Iv-5Y",
        "size": "5Y",
        "color": "Ivory Cream",
        "colorCode": "#fdfbf7",
        "stock": 18,
        "sku": "AUR-KID-104-IVO-5Y",
        "price": 14000
      },
      {
        "id": "v-104-Iv-7Y",
        "size": "7Y",
        "color": "Ivory Cream",
        "colorCode": "#fdfbf7",
        "stock": 23,
        "sku": "AUR-KID-104-IVO-7Y",
        "price": 14000
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 108,
    "tags": [
      "kids-dress",
      "silk",
      "organza",
      "smocked"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-104-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 121
      }
    ]
  },
  {
    "id": "prod-105",
    "sku": "AUR-KID-105",
    "brand": "AURELIA JUNIOR",
    "name": "Tailored Wool Flannel Mini Blazer",
    "slug": "tailored-wool-flannel-mini-blazer",
    "description": "Proportionately tailored from lightweight Italian wool flannel. Horn buttons, chest welt pocket, and cupro lining.",
    "category": "kids",
    "subcategory": "Junior Tailoring",
    "price": 16500,
    "mrp": 22000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Navy Blue",
        "hex": "#162238"
      },
      {
        "name": "Heather Grey",
        "hex": "#585d66"
      }
    ],
    "sizes": [
      "4Y",
      "6Y",
      "8Y",
      "10Y"
    ],
    "variants": [
      {
        "id": "v-105-Na-4Y",
        "size": "4Y",
        "color": "Navy Blue",
        "colorCode": "#162238",
        "stock": 16,
        "sku": "AUR-KID-105-NAV-4Y",
        "price": 16500
      },
      {
        "id": "v-105-Na-6Y",
        "size": "6Y",
        "color": "Navy Blue",
        "colorCode": "#162238",
        "stock": 21,
        "sku": "AUR-KID-105-NAV-6Y",
        "price": 16500
      },
      {
        "id": "v-105-Na-8Y",
        "size": "8Y",
        "color": "Navy Blue",
        "colorCode": "#162238",
        "stock": 26,
        "sku": "AUR-KID-105-NAV-8Y",
        "price": 16500
      },
      {
        "id": "v-105-He-4Y",
        "size": "4Y",
        "color": "Heather Grey",
        "colorCode": "#585d66",
        "stock": 16,
        "sku": "AUR-KID-105-HEA-4Y",
        "price": 16500
      },
      {
        "id": "v-105-He-6Y",
        "size": "6Y",
        "color": "Heather Grey",
        "colorCode": "#585d66",
        "stock": 21,
        "sku": "AUR-KID-105-HEA-6Y",
        "price": 16500
      },
      {
        "id": "v-105-He-8Y",
        "size": "8Y",
        "color": "Heather Grey",
        "colorCode": "#585d66",
        "stock": 26,
        "sku": "AUR-KID-105-HEA-8Y",
        "price": 16500
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 126,
    "tags": [
      "blazer",
      "junior",
      "formal",
      "tailoring"
    ],
    "badges": [
      "EXCLUSIVE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-105-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 122
      }
    ]
  },
  {
    "id": "prod-106",
    "sku": "AUR-KID-106",
    "brand": "AURELIA JUNIOR",
    "name": "Organic Pima Cotton Heirloom Layette Set",
    "slug": "organic-pima-cotton-heirloom-layette-set",
    "description": "Three-piece newborn set in Peruvian organic pima cotton including footed sleeper, bonnet, and swaddle blanket with scalloped embroidery.",
    "category": "kids",
    "subcategory": "Infant",
    "price": 8500,
    "mrp": 11500,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Chalk White",
        "hex": "#ffffff"
      }
    ],
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M"
    ],
    "variants": [
      {
        "id": "v-106-Ch-0-3M",
        "size": "0-3M",
        "color": "Chalk White",
        "colorCode": "#ffffff",
        "stock": 19,
        "sku": "AUR-KID-106-CHA-0-3M",
        "price": 8500
      },
      {
        "id": "v-106-Ch-3-6M",
        "size": "3-6M",
        "color": "Chalk White",
        "colorCode": "#ffffff",
        "stock": 24,
        "sku": "AUR-KID-106-CHA-3-6M",
        "price": 8500
      },
      {
        "id": "v-106-Ch-6-12M",
        "size": "6-12M",
        "color": "Chalk White",
        "colorCode": "#ffffff",
        "stock": 4,
        "sku": "AUR-KID-106-CHA-6-12M",
        "price": 8500
      }
    ],
    "rating": 4.6,
    "reviewCount": 15,
    "stock": 47,
    "tags": [
      "layette",
      "baby",
      "organic-cotton",
      "pima"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-106-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 123
      }
    ]
  },
  {
    "id": "prod-107",
    "sku": "AUR-KID-107",
    "brand": "AURELIA JUNIOR",
    "name": "Mini Suede Tassel Loafers",
    "slug": "mini-suede-tassel-loafers",
    "description": "Italian split suede with soft flexible leather soles and cushioned arch support for little gentlemen.",
    "category": "kids",
    "subcategory": "Junior Footwear",
    "price": 9900,
    "mrp": 13000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Tobacco Suede",
        "hex": "#634426"
      },
      {
        "name": "Navy Suede",
        "hex": "#18233a"
      }
    ],
    "sizes": [
      "25 EU",
      "27 EU",
      "29 EU",
      "31 EU"
    ],
    "variants": [
      {
        "id": "v-107-To-25 EU",
        "size": "25 EU",
        "color": "Tobacco Suede",
        "colorCode": "#634426",
        "stock": 22,
        "sku": "AUR-KID-107-TOB-25 EU",
        "price": 9900
      },
      {
        "id": "v-107-To-27 EU",
        "size": "27 EU",
        "color": "Tobacco Suede",
        "colorCode": "#634426",
        "stock": 27,
        "sku": "AUR-KID-107-TOB-27 EU",
        "price": 9900
      },
      {
        "id": "v-107-To-29 EU",
        "size": "29 EU",
        "color": "Tobacco Suede",
        "colorCode": "#634426",
        "stock": 7,
        "sku": "AUR-KID-107-TOB-29 EU",
        "price": 9900
      },
      {
        "id": "v-107-Na-25 EU",
        "size": "25 EU",
        "color": "Navy Suede",
        "colorCode": "#18233a",
        "stock": 22,
        "sku": "AUR-KID-107-NAV-25 EU",
        "price": 9900
      },
      {
        "id": "v-107-Na-27 EU",
        "size": "27 EU",
        "color": "Navy Suede",
        "colorCode": "#18233a",
        "stock": 27,
        "sku": "AUR-KID-107-NAV-27 EU",
        "price": 9900
      },
      {
        "id": "v-107-Na-29 EU",
        "size": "29 EU",
        "color": "Navy Suede",
        "colorCode": "#18233a",
        "stock": 7,
        "sku": "AUR-KID-107-NAV-29 EU",
        "price": 9900
      }
    ],
    "rating": 4.8,
    "reviewCount": 32,
    "stock": 112,
    "tags": [
      "kids-shoes",
      "loafers",
      "suede",
      "formal"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-107-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 124
      }
    ]
  },
  {
    "id": "prod-108",
    "sku": "AUR-KID-108",
    "brand": "AURELIA JUNIOR",
    "name": "Virgin Wool Toggle Duffle Coat with Hood",
    "slug": "virgin-wool-toggle-duffle-coat-with-hood",
    "description": "Warm boiled wool with wooden toggles, jute cord loops, deep patch pockets, and iconic tartan hood lining.",
    "category": "kids",
    "subcategory": "Junior Outerwear",
    "price": 18500,
    "mrp": 24000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Camel Tan",
        "hex": "#b59265"
      },
      {
        "name": "Crimson Red",
        "hex": "#771822"
      }
    ],
    "sizes": [
      "4Y",
      "6Y",
      "8Y",
      "10Y"
    ],
    "variants": [
      {
        "id": "v-108-Ca-4Y",
        "size": "4Y",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 25,
        "sku": "AUR-KID-108-CAM-4Y",
        "price": 18500
      },
      {
        "id": "v-108-Ca-6Y",
        "size": "6Y",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 5,
        "sku": "AUR-KID-108-CAM-6Y",
        "price": 18500
      },
      {
        "id": "v-108-Ca-8Y",
        "size": "8Y",
        "color": "Camel Tan",
        "colorCode": "#b59265",
        "stock": 10,
        "sku": "AUR-KID-108-CAM-8Y",
        "price": 18500
      },
      {
        "id": "v-108-Cr-4Y",
        "size": "4Y",
        "color": "Crimson Red",
        "colorCode": "#771822",
        "stock": 25,
        "sku": "AUR-KID-108-CRI-4Y",
        "price": 18500
      },
      {
        "id": "v-108-Cr-6Y",
        "size": "6Y",
        "color": "Crimson Red",
        "colorCode": "#771822",
        "stock": 5,
        "sku": "AUR-KID-108-CRI-6Y",
        "price": 18500
      },
      {
        "id": "v-108-Cr-8Y",
        "size": "8Y",
        "color": "Crimson Red",
        "colorCode": "#771822",
        "stock": 10,
        "sku": "AUR-KID-108-CRI-8Y",
        "price": 18500
      }
    ],
    "rating": 4.9,
    "reviewCount": 49,
    "stock": 80,
    "tags": [
      "duffle-coat",
      "coat",
      "wool",
      "winter"
    ],
    "badges": [
      "BESTSELLER"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-108-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 125
      }
    ]
  },
  {
    "id": "prod-109",
    "sku": "AUR-KID-109",
    "brand": "AURELIA JUNIOR",
    "name": "Junior Cashmere Beanie & Scarf Gift Box",
    "slug": "junior-cashmere-beanie-scarf-gift-box",
    "description": "Ribbed pure cashmere winter duo delivered in signature gift presentation box with gold ribbon.",
    "category": "kids",
    "subcategory": "Junior Accessories",
    "price": 7500,
    "mrp": 9900,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Powder Grey",
        "hex": "#c5c8cc"
      },
      {
        "name": "Pale Rose",
        "hex": "#eed0d0"
      }
    ],
    "sizes": [
      "One Size (Kids)"
    ],
    "variants": [
      {
        "id": "v-109-Po-One Size (Kids)",
        "size": "One Size (Kids)",
        "color": "Powder Grey",
        "colorCode": "#c5c8cc",
        "stock": 28,
        "sku": "AUR-KID-109-POW-One Size (Kids)",
        "price": 7500
      },
      {
        "id": "v-109-Pa-One Size (Kids)",
        "size": "One Size (Kids)",
        "color": "Pale Rose",
        "colorCode": "#eed0d0",
        "stock": 28,
        "sku": "AUR-KID-109-PAL-One Size (Kids)",
        "price": 7500
      }
    ],
    "rating": 4.7,
    "reviewCount": 66,
    "stock": 56,
    "tags": [
      "beanie",
      "scarf",
      "cashmere",
      "gift"
    ],
    "badges": [
      "SALE"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-109-1",
        "userName": "Vikramaditya S.",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 126
      }
    ]
  },
  {
    "id": "prod-110",
    "sku": "AUR-KID-110",
    "brand": "AURELIA JUNIOR",
    "name": "Patent Leather Mary Jane Shoes with Ribbon Tie",
    "slug": "patent-leather-mary-jane-shoes-with-ribbon-tie",
    "description": "High-shine Italian patent calf leather with grosgrain ribbon tie and cushioned orthotic-grade leather insoles.",
    "category": "kids",
    "subcategory": "Junior Footwear",
    "price": 8900,
    "mrp": 12000,
    "discount": 26,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Gloss Black",
        "hex": "#111111"
      },
      {
        "name": "Ruby Patent",
        "hex": "#63131c"
      }
    ],
    "sizes": [
      "24 EU",
      "26 EU",
      "28 EU",
      "30 EU"
    ],
    "variants": [
      {
        "id": "v-110-Gl-24 EU",
        "size": "24 EU",
        "color": "Gloss Black",
        "colorCode": "#111111",
        "stock": 6,
        "sku": "AUR-KID-110-GLO-24 EU",
        "price": 8900
      },
      {
        "id": "v-110-Gl-26 EU",
        "size": "26 EU",
        "color": "Gloss Black",
        "colorCode": "#111111",
        "stock": 11,
        "sku": "AUR-KID-110-GLO-26 EU",
        "price": 8900
      },
      {
        "id": "v-110-Gl-28 EU",
        "size": "28 EU",
        "color": "Gloss Black",
        "colorCode": "#111111",
        "stock": 16,
        "sku": "AUR-KID-110-GLO-28 EU",
        "price": 8900
      },
      {
        "id": "v-110-Ru-24 EU",
        "size": "24 EU",
        "color": "Ruby Patent",
        "colorCode": "#63131c",
        "stock": 6,
        "sku": "AUR-KID-110-RUB-24 EU",
        "price": 8900
      },
      {
        "id": "v-110-Ru-26 EU",
        "size": "26 EU",
        "color": "Ruby Patent",
        "colorCode": "#63131c",
        "stock": 11,
        "sku": "AUR-KID-110-RUB-26 EU",
        "price": 8900
      },
      {
        "id": "v-110-Ru-28 EU",
        "size": "28 EU",
        "color": "Ruby Patent",
        "colorCode": "#63131c",
        "stock": 16,
        "sku": "AUR-KID-110-RUB-28 EU",
        "price": 8900
      }
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "stock": 66,
    "tags": [
      "mary-jane",
      "patent",
      "shoes",
      "girls"
    ],
    "badges": [
      "NEW"
    ],
    "specifications": {
      "Provenance": "Florence & Mumbai Atelier Archive",
      "Artisanal Touch": "Handcrafted by Master Guild Artisans",
      "Material Composition": "100% Certified Ethical Luxury Fibers",
      "Care Directive": "Specialist Dry Clean Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Doorstep Delivery in Hard Presentation Chest",
      "Private Concierge Styling Session upon Receipt",
      "10% Instant Privilege on HDFC & ICICI Luxury Cards"
    ],
    "reviews": [
      {
        "id": "rev-110-1",
        "userName": "Ananya Singhania",
        "rating": 5,
        "date": "28 Feb 2026",
        "comment": "Unsurpassed craftsmanship. The tactile quality and flawless finishing set a new standard in Indian luxury.",
        "verified": true,
        "helpfulCount": 127
      }
    ]
  },
  {
    "id": "prod-111",
    "sku": "AUR-MEN-111",
    "brand": "AURELIA ATELIER",
    "name": "Alashan Cashmere Shawl Collar Smoking Jacket",
    "slug": "alashan-cashmere-shawl-collar-smoking-jacket",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "men",
    "subcategory": "Tailoring",
    "price": 54000,
    "mrp": 72000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-111-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-MEN-111-STD",
        "price": 54000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "smoking-jacket",
      "cashmere",
      "evening"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-111-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-112",
    "sku": "AUR-MEN-112",
    "brand": "AURELIA ATELIER",
    "name": "Raw Silk Safari Shacket with Horn Buttons",
    "slug": "raw-silk-safari-shacket-with-horn-buttons",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "men",
    "subcategory": "Outerwear",
    "price": 21500,
    "mrp": 28000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-112-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-MEN-112-STD",
        "price": 21500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "safari",
      "raw-silk",
      "shacket"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-112-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-113",
    "sku": "AUR-WOM-113",
    "brand": "MAISON AURELIA",
    "name": "Liquid Gold Lamé Halterneck Evening Gown",
    "slug": "liquid-gold-lam-halterneck-evening-gown",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "women",
    "subcategory": "Eveningwear",
    "price": 68000,
    "mrp": 88000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-113-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-WOM-113-STD",
        "price": 68000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "gold",
      "gown",
      "evening",
      "lame"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-113-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-114",
    "sku": "AUR-WOM-114",
    "brand": "MAISON AURELIA",
    "name": "Hand-Embroidered Zardozi Capelet Jacket",
    "slug": "hand-embroidered-zardozi-capelet-jacket",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "women",
    "subcategory": "Outerwear",
    "price": 45000,
    "mrp": 59000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-114-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-WOM-114-STD",
        "price": 45000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "zardozi",
      "cape",
      "embroidered"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-114-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-115",
    "sku": "AUR-LEA-115",
    "brand": "AURELIA ATELIER",
    "name": "Monaco Crocodile Embossed Vanity Trunk",
    "slug": "monaco-crocodile-embossed-vanity-trunk",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "leathergoods",
    "subcategory": "Luggage",
    "price": 52000,
    "mrp": 69000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-115-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-LEA-115-STD",
        "price": 52000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "vanity",
      "trunk",
      "croc"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-115-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-116",
    "sku": "AUR-LEA-116",
    "brand": "AURELIA ATELIER",
    "name": "Portofino Slouchy Leather Shoulder Bag",
    "slug": "portofino-slouchy-leather-shoulder-bag",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "leathergoods",
    "subcategory": "Handbags",
    "price": 34000,
    "mrp": 45000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-116-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-LEA-116-STD",
        "price": 34000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "shoulder-bag",
      "leather",
      "slouchy"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-116-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-117",
    "sku": "AUR-FOO-117",
    "brand": "AURELIA ATELIER",
    "name": "Bespoke Norwegian-Welted Alpine Boots",
    "slug": "bespoke-norwegian-welted-alpine-boots",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "footwear",
    "subcategory": "Men Footwear",
    "price": 38500,
    "mrp": 49000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-117-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-FOO-117-STD",
        "price": 38500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "boots",
      "alpine",
      "norwegian-welt"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-117-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-118",
    "sku": "AUR-FOO-118",
    "brand": "MAISON AURELIA",
    "name": "Duchess Satin Ankle-Tie Ballerina Flats",
    "slug": "duchess-satin-ankle-tie-ballerina-flats",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "footwear",
    "subcategory": "Women Footwear",
    "price": 18500,
    "mrp": 24000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-118-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-FOO-118-STD",
        "price": 18500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "flats",
      "ballerina",
      "satin"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-118-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-119",
    "sku": "AUR-TIM-119",
    "brand": "ATELIER HORLOGERIE",
    "name": "Regulateur Chronomètre Enamel Dial 41mm",
    "slug": "regulateur-chronom-tre-enamel-dial-41mm",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "timepieces",
    "subcategory": "Complications",
    "price": 165000,
    "mrp": 210000,
    "discount": 21,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-119-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-TIM-119-STD",
        "price": 165000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "regulateur",
      "enamel",
      "watch"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-119-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-120",
    "sku": "AUR-TIM-120",
    "brand": "ATELIER HORLOGERIE",
    "name": "Seasport 18K Yellow Gold Cushion Watch",
    "slug": "seasport-18k-yellow-gold-cushion-watch",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "timepieces",
    "subcategory": "Dress",
    "price": 135000,
    "mrp": 175000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-120-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-TIM-120-STD",
        "price": 135000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "cushion-watch",
      "gold",
      "horology"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-120-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-121",
    "sku": "AUR-JEW-121",
    "brand": "MAISON AURELIA",
    "name": "Radiant Fancy Yellow Diamond Drop Earrings",
    "slug": "radiant-fancy-yellow-diamond-drop-earrings",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "jewelry",
    "subcategory": "Earrings",
    "price": 125000,
    "mrp": 160000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-121-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-JEW-121-STD",
        "price": 125000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "yellow-diamond",
      "earrings",
      "radiant"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-121-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-122",
    "sku": "AUR-JEW-122",
    "brand": "MAISON AURELIA",
    "name": "Royal Bengal Tiger Enamel & Diamond Bangle",
    "slug": "royal-bengal-tiger-enamel-diamond-bangle",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "jewelry",
    "subcategory": "Bracelets",
    "price": 89000,
    "mrp": 115000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-122-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-JEW-122-STD",
        "price": 89000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "enamel",
      "bangle",
      "tiger",
      "heritage"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-122-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-123",
    "sku": "AUR-ACC-123",
    "brand": "AURELIA ATELIER",
    "name": "Woven Intrecciato Leather Document Folio",
    "slug": "woven-intrecciato-leather-document-folio",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "accessories",
    "subcategory": "Small Goods",
    "price": 19500,
    "mrp": 26000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-123-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-ACC-123-STD",
        "price": 19500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "folio",
      "intrecciato",
      "leather"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-123-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-124",
    "sku": "AUR-ACC-124",
    "brand": "AURELIA ATELIER",
    "name": "Gold-Plated Architectural Collar Stiffeners",
    "slug": "gold-plated-architectural-collar-stiffeners",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "accessories",
    "subcategory": "Small Goods",
    "price": 4500,
    "mrp": 6000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-124-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-ACC-124-STD",
        "price": 4500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "collar-stays",
      "brass",
      "menswear"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-124-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-125",
    "sku": "AUR-EYE-125",
    "brand": "AURELIA ATELIER",
    "name": "Sartorial Round Windsor Rim Eyeglasses",
    "slug": "sartorial-round-windsor-rim-eyeglasses",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "eyewear",
    "subcategory": "Optical",
    "price": 21000,
    "mrp": 28000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-125-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-EYE-125-STD",
        "price": 21000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "windsor",
      "optical",
      "vintage"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-125-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-126",
    "sku": "AUR-EYE-126",
    "brand": "AURELIA ATELIER",
    "name": "Monolithic Shield High-Wrap Sunglasses",
    "slug": "monolithic-shield-high-wrap-sunglasses",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "eyewear",
    "subcategory": "Sunglasses",
    "price": 23000,
    "mrp": 30000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-126-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-EYE-126-STD",
        "price": 23000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "shield",
      "sunglasses",
      "futuristic"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-126-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-127",
    "sku": "AUR-FRA-127",
    "brand": "AURELIA ATELIER",
    "name": "Cuir Ottoman Extrait de Parfum 100ml",
    "slug": "cuir-ottoman-extrait-de-parfum-100ml",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "fragrance",
    "subcategory": "Extrait de Parfum",
    "price": 27000,
    "mrp": 36000,
    "discount": 25,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-127-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-FRA-127-STD",
        "price": 27000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "leather",
      "perfume",
      "ottoman",
      "extrait"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-127-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-128",
    "sku": "AUR-FRA-128",
    "brand": "AURELIA ATELIER",
    "name": "Fleur dOranger Impériale Eau de Parfum 100ml",
    "slug": "fleur-doranger-imp-riale-eau-de-parfum-100ml",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "fragrance",
    "subcategory": "Parfum",
    "price": 19000,
    "mrp": 25000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-128-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-FRA-128-STD",
        "price": 19000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "orange-blossom",
      "floral",
      "fresh"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-128-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-129",
    "sku": "AUR-HOM-129",
    "brand": "AURELIA CASA",
    "name": "Murano Hand-Blown Fluted Glass Table Lamp",
    "slug": "murano-hand-blown-fluted-glass-table-lamp",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "home",
    "subcategory": "Lighting",
    "price": 26000,
    "mrp": 34000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-129-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-HOM-129-STD",
        "price": 26000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "murano",
      "glass",
      "lamp",
      "lighting"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-129-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-130",
    "sku": "AUR-HOM-130",
    "brand": "AURELIA CASA",
    "name": "Japanese Binchotan Charcoal Scent Diffuser",
    "slug": "japanese-binchotan-charcoal-scent-diffuser",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "home",
    "subcategory": "Objects",
    "price": 11000,
    "mrp": 15000,
    "discount": 27,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-130-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-HOM-130-STD",
        "price": 11000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "diffuser",
      "binchotan",
      "charcoal",
      "home"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-130-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-131",
    "sku": "AUR-ELE-131",
    "brand": "AURELIA ACOUSTICS",
    "name": "High-Res Lossless Streamer & Headphone Hub",
    "slug": "high-res-lossless-streamer-headphone-hub",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "electronics",
    "subcategory": "Audio Gear",
    "price": 62000,
    "mrp": 79000,
    "discount": 22,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-131-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-ELE-131-STD",
        "price": 62000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "streamer",
      "hi-res",
      "audio",
      "lossless"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-131-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-132",
    "sku": "AUR-ELE-132",
    "brand": "AURELIA ACOUSTICS",
    "name": "Electrostatic Audiophile Open-Back Cans",
    "slug": "electrostatic-audiophile-open-back-cans",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "electronics",
    "subcategory": "Headphones",
    "price": 85000,
    "mrp": 110000,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-132-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-ELE-132-STD",
        "price": 85000
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "electrostatic",
      "open-back",
      "audiophile"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-132-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-133",
    "sku": "AUR-BEA-133",
    "brand": "AURELIA BOTANIQUE",
    "name": "Caviar & Black Truffle Recharging Mask 75ml",
    "slug": "caviar-black-truffle-recharging-mask-75ml",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "beauty",
    "subcategory": "Treatment",
    "price": 14500,
    "mrp": 19000,
    "discount": 24,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-133-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-BEA-133-STD",
        "price": 14500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "caviar",
      "face-mask",
      "anti-aging"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-133-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-134",
    "sku": "AUR-KID-134",
    "brand": "AURELIA JUNIOR",
    "name": "Junior Reversible Wool-Silk Duffle Poncho",
    "slug": "junior-reversible-wool-silk-duffle-poncho",
    "description": "Handcrafted with meticulous dedication to artisanal precision. Sourced from the finest European ateliers and finished with bespoke monogramming and signature packaging.",
    "category": "kids",
    "subcategory": "Junior Outerwear",
    "price": 13500,
    "mrp": 17500,
    "discount": 23,
    "currency": "INR",
    "images": [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80"
    ],
    "colors": [
      {
        "name": "Atelier Signature",
        "hex": "#c5a880"
      }
    ],
    "sizes": [
      "Standard"
    ],
    "variants": [
      {
        "id": "v-134-1",
        "size": "Standard",
        "color": "Atelier Signature",
        "colorCode": "#c5a880",
        "stock": 12,
        "sku": "AUR-KID-134-STD",
        "price": 13500
      }
    ],
    "rating": 4.9,
    "reviewCount": 22,
    "stock": 24,
    "tags": [
      "poncho",
      "kids",
      "wool-silk"
    ],
    "badges": [
      "NEW",
      "EXCLUSIVE"
    ],
    "specifications": {
      "Origin": "Florence & Milan Master Guilds",
      "Artisanal Standard": "Bespoke Hand Finishing",
      "Care": "Specialist Care Only"
    },
    "deliveryInfo": {
      "estimatedDays": 2,
      "freeDelivery": true,
      "codAvailable": true
    },
    "offers": [
      "Complimentary White-Glove Air Courier Across India"
    ],
    "reviews": [
      {
        "id": "rev-134-1",
        "userName": "Aditya Birla",
        "rating": 5,
        "date": "10 Mar 2026",
        "comment": "Exquisite attention to detail. Unmatched luxury.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
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
