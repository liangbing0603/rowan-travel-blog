// guide-data.js - 旅行指南数据
const destinationGuides = {
    // 瑞士阿尔卑斯山
    "swiss-alps": {
        title: "Swiss Alps",
        location: "Switzerland",
        description: "Experience breathtaking alpine scenery, world-class hiking trails, and charming mountain villages in the heart of Europe. The Swiss Alps offer unparalleled natural beauty and outdoor adventures for every type of traveler.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-September (Hiking), December-March (Skiing)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Central Switzerland" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate to Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Switzerland" },
            { icon: "fas fa-map", text: "Main Cities: Zurich, Geneva, Interlaken" },
            { icon: "fas fa-mountain", text: "Elevation: Up to 4,634m (Monte Rosa)" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET)" },
            { icon: "fas fa-wifi", text: "Internet: Excellent coverage" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: German, French, Italian, Romansh" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Swiss Franc (CHF)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 CHF ≈ 1.08 USD" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Swisscom, Sunrise, Salt" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer: 10-25°C (50-77°F), mild and sunny" },
            { icon: "fas fa-snowflake", text: "Winter: -5 to -15°C (23-5°F), heavy snowfall" },
            { icon: "fas fa-cloud-rain", text: "Rainfall: Moderate, more in summer months" },
            { icon: "fas fa-wind", text: "Wind: Strong alpine winds at higher elevations" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Always carry layers and rain gear" }
        ],
        attractions: [
            {
                title: "Jungfraujoch - Top of Europe",
                description: "Europe's highest railway station with panoramic views of the alpine peaks and glaciers.",
                icon: "fas fa-train"
            },
            {
                title: "Lake Geneva",
                description: "Stunning alpine lake with crystal clear waters and beautiful shoreline villages.",
                icon: "fas fa-water"
            },
            {
                title: "Matterhorn",
                description: "Iconic pyramid-shaped peak, one of the most recognizable mountains in the world.",
                icon: "fas fa-mountain"
            },
            {
                title: "Interlaken",
                description: "Gateway to the Jungfrau region, perfect base for hiking and adventure activities.",
                icon: "fas fa-map-pin"
            },
            {
                title: "Zermatt",
                description: "Car-free village at the foot of the Matterhorn, famous for skiing and hiking.",
                icon: "fas fa-skiing"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-train",
                title: "Transportation Tips",
                content: "Swiss Travel Pass covers most trains, buses, and boats. Consider renting a car for remote areas but note road restrictions in mountain regions."
            },
            {
                icon: "fas fa-hiking",
                title: "Hiking Essentials",
                content: "Always check trail conditions and carry a map/compass. Mountain huts (Refuges) offer accommodation and meals along popular routes."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Book well in advance for peak season (July-August). Consider staying in family-run chalets for authentic experience."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try fondue, raclette, rösti, and Swiss chocolate. Most restaurants accept credit cards but carry some cash for mountain huts."
            },
            {
                icon: "fas fa-first-aid",
                title: "Safety Tips",
                content: "Altitude sickness can affect some travelers. Stay hydrated, ascend gradually, and know emergency numbers (144 for ambulance)."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            "https://images.unsplash.com/photo-1519689680025-28305454767c",
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
            "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce",
            "https://images.unsplash.com/photo-1512482406293-976ad229d779"
        ]
    },

    // 巴厘岛
    "bali": {
        title: "Bali",
        location: "Indonesia",
        description: "Tropical paradise with stunning beaches, vibrant culture, spiritual retreats, and delicious cuisine. Bali offers a perfect blend of relaxation, adventure, and cultural immersion.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "April-October (Dry Season)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Lesser Sunda Islands" },
            { icon: "fas fa-rupiah-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Relaxed to Active" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Indonesia" },
            { icon: "fas fa-map", text: "Main Cities: Denpasar, Ubud, Seminyak" },
            { icon: "fas fa-mountain", text: "Area: 5,780 km² (2,230 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Indonesia Central Time (WITA, UTC+8)" },
            { icon: "fas fa-wifi", text: "Internet: Widely available in tourist areas" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Indonesian (Bahasa Indonesia)" },
            { icon: "fas fa-language", text: "Local Language: Balinese (spoken by locals)" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Indonesian Rupiah (IDR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted in tourist areas" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 15,000 IDR" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (Apr-Oct): 25-32°C (77-90°F)" },
            { icon: "fas fa-cloud-rain", text: "Rainy Season (Nov-Mar): 23-30°C (73-86°F)" },
            { icon: "fas fa-wind", text: "Humidity: High (70-90%) year-round" },
            { icon: "fas fa-umbrella", text: "Rainfall: Heavy tropical showers in wet season" },
            { icon: "fas fa-sun", text: "Weather Tip: Sunscreen is essential (SPF 50+)" }
        ],
        attractions: [
            {
                title: "Ubud Monkey Forest",
                description: "Sacred forest sanctuary home to over 700 Balinese long-tailed macaques.",
                icon: "fas fa-paw"
            },
            {
                title: "Tanah Lot Temple",
                description: "Iconic sea temple perched on a rocky outcrop, stunning at sunset.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Tegallalang Rice Terraces",
                description: "UNESCO-listed rice terraces showcasing traditional Balinese irrigation systems.",
                icon: "fas fa-seedling"
            },
            {
                title: "Seminyak Beach",
                description: "Popular beach with white sand, great surfing, and vibrant nightlife.",
                icon: "fas fa-umbrella-beach"
            },
            {
                title: "Mount Batur",
                description: "Active volcano with sunrise trekking tours and stunning crater views.",
                icon: "fas fa-mountain"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-pray",
                title: "Cultural Respect",
                content: "Dress modestly when visiting temples (cover shoulders and knees). Always ask permission before photographing locals."
            },
            {
                icon: "fas fa-motorcycle",
                title: "Transportation",
                content: "Scooter rentals are popular (international license required). Use Blue Bird taxis or ride-hailing apps like Gojek/Grab."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Options range from budget hostels to luxury resorts. Book in advance for peak season (July-August)."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try Nasi Goreng, Babi Guling, Satay, and fresh tropical fruits. Be cautious with street food hygiene."
            },
            {
                icon: "fas fa-first-aid",
                title: "Health & Safety",
                content: "Drink bottled water only. Consider travel insurance covering medical evacuation. Mosquito repellent is essential."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1590586766626-414bd62925d4",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
            "https://images.unsplash.com/photo-1540206395-68808572332f",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68",
            "https://images.unsplash.com/photo-1546436836-07a91091f160"
        ]
    },

    // 京都
    "kyoto": {
        title: "Kyoto",
        location: "Japan",
        description: "Walk through thousands of torii gates at Fushimi Inari, visit golden Kinkaku-ji, and experience traditional tea ceremonies. Cherry blossoms and autumn foliage make Kyoto unforgettable.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "March–May, October–November" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Kansai, Honshu" },
            { icon: "fas fa-yen-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Japan" },
            { icon: "fas fa-map", text: "Region: Kansai, Honshu Island" },
            { icon: "fas fa-mountain", text: "Area: 827.9 km² (319.7 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Japan Standard Time (JST, UTC+9)" },
            { icon: "fas fa-wifi", text: "Internet: Excellent coverage, free WiFi in many areas" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Japanese" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Japanese Yen (JPY)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted in major areas" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 145 JPY" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Pocket WiFi recommended for tourists" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Spring (Mar-May): 10-20°C (50-68°F), cherry blossoms" },
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 25-35°C (77-95°F), hot and humid" },
            { icon: "fas fa-leaf", text: "Autumn (Sep-Nov): 10-25°C (50-77°F), fall foliage" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): 0-10°C (32-50°F), light snow" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Carry an umbrella year-round" }
        ],
        attractions: [
            {
                title: "Fushimi Inari Shrine",
                description: "Famous for its thousands of vermilion torii gates winding up a mountain.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Kinkaku-ji (Golden Pavilion)",
                description: "Zen temple covered in gold leaf, reflecting beautifully in the surrounding pond.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Arashiyama Bamboo Grove",
                description: "Serene path through towering bamboo stalks on the western outskirts of Kyoto.",
                icon: "fas fa-tree"
            },
            {
                title: "Kiyomizu-dera",
                description: "UNESCO World Heritage Site with wooden terrace offering city views.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Gion District",
                description: "Historic geisha district with traditional wooden machiya houses.",
                icon: "fas fa-home"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-train",
                title: "Transportation",
                content: "Japan Rail Pass (JR Pass) covers JR lines. City buses and subway are efficient for getting around Kyoto."
            },
            {
                icon: "fas fa-shoe-prints",
                title: "Temple Etiquette",
                content: "Remove shoes before entering temple buildings. Speak quietly and follow posted rules."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Choose from ryokan (traditional inns) to modern hotels. Book 2-3 months in advance for cherry blossom season."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try kaiseki (multi-course meal), matcha desserts, yudofu (tofu hot pot), and Kyoto-style sushi."
            },
            {
                icon: "fas fa-camera",
                title: "Photography Tips",
                content: "Early morning visits avoid crowds at major sites. Ask permission before photographing geisha/maiko."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
            "https://images.unsplash.com/photo-1480796927426-f609979314bd",
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
            "https://images.unsplash.com/photo-1593591882171-bb89f23e9e86",
            "https://images.unsplash.com/photo-1543922596-c958910d47a0",
            "https://images.unsplash.com/photo-1590301157890-5057862c68f3"
        ]
    },

    // 亚马逊雨林
    "amazon-rainforest": {
        title: "Amazon Rainforest",
        location: "South America",
        description: "Explore the world's largest tropical rainforest, home to incredible biodiversity and indigenous cultures. The Amazon offers an immersive experience in one of Earth's most vital ecosystems.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-December (Low Water Season)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Brazil, Peru, Ecuador, Colombia" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Countries: Brazil (60%), Peru, Ecuador, Colombia, etc." },
            { icon: "fas fa-map", text: "Main Entry Points: Manaus (Brazil), Iquitos (Peru)" },
            { icon: "fas fa-tree", text: "Area: 5.5 million km² (2.1 million sq mi)" },
            { icon: "fas fa-clock", text: "Time Zones: Multiple (UTC-4 to UTC-6)" },
            { icon: "fas fa-wifi", text: "Internet: Limited, only in major lodges/cities" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Main Languages: Portuguese (Brazil), Spanish (Andes)" },
            { icon: "fas fa-language", text: "Indigenous Languages: Over 300 spoken" },
            { icon: "fas fa-money-bill-wave", text: "Currencies: Brazilian Real, Peruvian Sol, US Dollar" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Only accepted in major lodges/cities" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 5 BRL / 3.8 PEN" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Year-round Temperature: 25-30°C (77-86°F)" },
            { icon: "fas fa-cloud-rain", text: "Rainy Season (Jan-May): High water levels, more mosquitoes" },
            { icon: "fas fa-wind", text: "Low Humidity: 77-88% year-round" },
            { icon: "fas fa-umbrella", text: "Daily Rain: Short, intense showers common" },
            { icon: "fas fa-sun", text: "Weather Tip: Prepare for high humidity and rain" }
        ],
        attractions: [
            {
                title: "Amazon River Cruises",
                description: "Explore the main waterways and tributaries, spotting wildlife from the deck.",
                icon: "fas fa-ship"
            },
            {
                title: "Indigenous Communities",
                description: "Visit traditional villages to learn about local culture and way of life.",
                icon: "fas fa-users"
            },
            {
                title: "Canopy Walkways",
                description: "Elevated walkways offering unique perspective of the rainforest canopy.",
                icon: "fas fa-bridge"
            },
            {
                title: "Jungle Hikes",
                description: "Guided treks through the rainforest to spot wildlife and learn about flora/fauna.",
                icon: "fas fa-hiking"
            },
            {
                title: "Piranha Fishing & Caiman Spotting",
                description: "Evening tours to spot caimans and daytime piranha fishing experiences.",
                icon: "fas fa-fish"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-user-friends",
                title: "Guided Tours Essential",
                content: "Never explore the Amazon alone. Book with reputable local tour operators with experienced guides."
            },
            {
                icon: "fas fa-first-aid",
                title: "Health Precautions",
                content: "Get yellow fever vaccination, take malaria prophylaxis, use strong insect repellent (DEET 30+)."
            },
            {
                icon: "fas fa-suitcase",
                title: "Packing List",
                content: "Quick-dry clothing, waterproof gear, hat, sunscreen, water bottle, headlamp, waterproof camera."
            },
            {
                icon: "fas fa-utensils",
                title: "Food & Water",
                content: "Drink only bottled or filtered water. Local cuisine includes fresh fish, manioc, and tropical fruits."
            },
            {
                icon: "fas fa-camera",
                title: "Wildlife Viewing",
                content: "Early mornings and late afternoons are best for wildlife. Bring binoculars and be patient/quiet."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
            "https://images.unsplash.com/photo-1518492104633-130d0cc84637",
            "https://images.unsplash.com/photo-1564234251263-11e787558073",
            "https://images.unsplash.com/photo-1596464145665-532b16166495",
            "https://images.unsplash.com/photo-1547890602-7e40e96c9b4e"
        ]
    },

    // 马拉喀什
    "marrakech": {
        title: "Marrakech",
        location: "Morocco",
        description: "Immerse yourself in the vibrant colors, sounds, and smells of this historic North African city. Marrakech is a cultural melting pot with stunning architecture and rich traditions.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "March-May, September-November" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Morocco, North Africa" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Low to Mid" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Morocco" },
            { icon: "fas fa-map", text: "Region: Marrakech-Safi" },
            { icon: "fas fa-mountain", text: "Elevation: 460 m (1,509 ft)" },
            { icon: "fas fa-clock", text: "Time Zone: Western European Time (WET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Available in hotels/cafés, limited in medina" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: Arabic, Berber, French" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Moroccan Dirham (MAD)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted in major hotels/restaurants" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 10 MAD" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Maroc Telecom, Orange recommended" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Spring (Mar-May): 15-28°C (59-82°F), pleasant" },
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 25-40°C (77-104°F), very hot" },
            { icon: "fas fa-leaf", text: "Autumn (Sep-Nov): 15-30°C (59-86°F), ideal" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): 5-20°C (41-68°F), cool nights" },
            { icon: "fas fa-wind", text: "Weather Tip: Carry water and hat year-round" }
        ],
        attractions: [
            {
                title: "Jemaa el-Fnaa Square",
                description: "UNESCO-listed square with street performers, food stalls, and vibrant atmosphere day and night.",
                icon: "fas fa-users"
            },
            {
                title: "Bahia Palace",
                description: "19th-century palace showcasing traditional Moroccan architecture and beautiful gardens.",
                icon: "fas fa-landmark"
            },
            {
                title: "Majorelle Garden",
                description: "Stunning botanical garden designed by Yves Saint Laurent, with vibrant blue buildings.",
                icon: "fas fa-seedling"
            },
            {
                title: "Souks of Marrakech",
                description: "Labyrinthine markets selling spices, textiles, ceramics, and traditional crafts.",
                icon: "fas fa-store"
            },
            {
                title: "Koutoubia Mosque",
                description: "Iconic 12th-century mosque with beautiful minaret, visible throughout the city.",
                icon: "fas fa-mosque"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-handshake",
                title: "Bargaining Essentials",
                content: "Bargaining is expected in souks. Start at 30-50% of asking price and negotiate politely."
            },
            {
                icon: "fas fa-veil",
                title: "Cultural Respect",
                content: "Dress modestly (cover shoulders/knees). Ask permission before photographing people, especially women."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try tagine, couscous, pastilla, and mint tea. Street food is delicious but choose busy stalls for freshness."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Riads (traditional courtyard houses) offer authentic experience. Book in medina for immersion."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Safety Tips",
                content: "Beware of touts in tourist areas. Keep valuables secure and use registered taxis (white with green stripes)."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1528164344705-47542687000d",
            "https://images.unsplash.com/photo-1590334668141-bb88d0341703",
            "https://images.unsplash.com/photo-1543922596-c958910d47a0",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
            "https://images.unsplash.com/photo-1534430480872-3498386e7856",
            "https://images.unsplash.com/photo-1532305835483-6123e7938dba"
        ]
    },

    // ========== 以下为续写的目的地 ==========

    // 加拿大落基山脉
    "rocky-mountains": {
        title: "Rocky Mountains",
        location: "Canada",
        description: "Majestic peaks, turquoise lakes, and abundant wildlife define the Canadian Rockies. From Banff to Jasper, this UNESCO World Heritage site offers world-class hiking, skiing, and some of the most stunning mountain scenery on Earth.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-September (Hiking), December-March (Skiing)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Alberta & British Columbia" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate to Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Canada" },
            { icon: "fas fa-map", text: "Main Towns: Banff, Jasper, Canmore" },
            { icon: "fas fa-mountain", text: "Highest Peak: Mount Robson (3,954m)" },
            { icon: "fas fa-clock", text: "Time Zone: Mountain Time (MT, UTC-7)" },
            { icon: "fas fa-wifi", text: "Internet: Good in towns, limited in backcountry" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: English, French" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Canadian Dollar (CAD)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 1.35 CAD" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Rogers, Bell, Telus" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 10-25°C (50-77°F), sunny days" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): -15 to -5°C (5-23°F), heavy snow" },
            { icon: "fas fa-leaf", text: "Spring/Fall: Variable, can snow any time" },
            { icon: "fas fa-wind", text: "Wind: Chinook winds can cause rapid warming" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Dress in layers, conditions change quickly" }
        ],
        attractions: [
            {
                title: "Lake Louise",
                description: "Iconic turquoise lake with a luxury hotel and world-class hiking trails.",
                icon: "fas fa-water"
            },
            {
                title: "Moraine Lake",
                description: "Stunning glacier-fed lake in the Valley of the Ten Peaks.",
                icon: "fas fa-mountain"
            },
            {
                title: "Icefields Parkway",
                description: "One of the world's most scenic drives, connecting Banff and Jasper.",
                icon: "fas fa-road"
            },
            {
                title: "Columbia Icefield",
                description: "Massive icefield with the Athabasca Glacier, accessible by guided tours.",
                icon: "fas fa-snowflake"
            },
            {
                title: "Banff Upper Hot Springs",
                description: "Natural hot springs with mountain views, perfect for relaxation.",
                icon: "fas fa-hot-tub"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-paw",
                title: "Wildlife Safety",
                content: "Keep distance from bears, elk, and other wildlife. Carry bear spray and know how to use it. Never feed animals."
            },
            {
                icon: "fas fa-car",
                title: "Transportation",
                content: "Renting a car is essential. Parks Canada pass required for national parks. Book shuttle for popular lakes in summer."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Book months in advance for summer. Consider staying in Canmore for more affordable options near Banff."
            },
            {
                icon: "fas fa-hiking",
                title: "Hiking Preparedness",
                content: "Trails require proper footwear and navigation. Check trail conditions and carry essentials (water, food, emergency kit)."
            },
            {
                icon: "fas fa-camera",
                title: "Best Photography",
                content: "Sunrise at Moraine Lake is iconic but requires early arrival. Wildlife viewing is best at dawn and dusk."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1534430480872-3498386e7856",
            "https://images.unsplash.com/photo-1519915028121-7d3463d20bde",
            "https://images.unsplash.com/photo-1488386037662-1cfa65f3ca48",
            "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        ]
    },

    // 圣托里尼
    "santorini": {
        title: "Santorini",
        location: "Greece",
        description: "Famous for its stunning sunsets, white-washed buildings with blue domes, and volcanic beaches. Santorini offers a romantic escape with dramatic caldera views, ancient ruins, and exceptional Mediterranean cuisine.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "April-October (May-June & September ideal)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Cyclades Islands" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Relaxed to Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Greece" },
            { icon: "fas fa-map", text: "Main Towns: Fira, Oia, Imerovigli" },
            { icon: "fas fa-mountain", text: "Area: 76 km² (29 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Eastern European Time (EET, UTC+2)" },
            { icon: "fas fa-wifi", text: "Internet: Good coverage throughout" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Greek" },
            { icon: "fas fa-language", text: "English: Widely spoken in tourist areas" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Euro (EUR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted almost everywhere" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 0.92 EUR" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 25-35°C (77-95°F), sunny and dry" },
            { icon: "fas fa-cloud-sun", text: "Spring/Autumn: 18-25°C (64-77°F), perfect weather" },
            { icon: "fas fa-wind", text: "Meltemi Winds: Strong northern winds in summer" },
            { icon: "fas fa-umbrella", text: "Rainfall: Rare in summer, occasional in winter" },
            { icon: "fas fa-sun", text: "Weather Tip: Sun protection essential, carry water" }
        ],
        attractions: [
            {
                title: "Oia Sunset",
                description: "World-famous sunset views from the caldera edge, a quintessential Santorini experience.",
                icon: "fas fa-sun"
            },
            {
                title: "Akrotiri Archaeological Site",
                description: "Minoan Bronze Age settlement preserved in volcanic ash, often called the 'Greek Pompeii'.",
                icon: "fas fa-landmark"
            },
            {
                title: "Red Beach",
                description: "Striking beach with red volcanic cliffs and sand, accessible by foot or boat.",
                icon: "fas fa-umbrella-beach"
            },
            {
                title: "Caldera Boat Tour",
                description: "Boat trips to volcanic islands, hot springs, and swimming in turquoise waters.",
                icon: "fas fa-ship"
            },
            {
                title: "Fira to Oia Hike",
                description: "Scenic 10km trail along the caldera rim with breathtaking views.",
                icon: "fas fa-hiking"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-donkey",
                title: "Getting Around",
                content: "ATVs and scooters are popular but drive carefully. Buses connect main towns. Taxis are limited, book ahead."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Caldera-view hotels in Oia and Imerovigli are priciest but worth it. Book 3-6 months in advance for summer."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try fava, tomatokeftedes, white eggplant, and fresh seafood. Santorini wines (Assyrtiko) are excellent."
            },
            {
                icon: "fas fa-camera",
                title: "Photography Spots",
                content: "Early morning in Oia offers fewer crowds. Three Bells of Fira is another iconic photo spot."
            },
            {
                icon: "fas fa-shoe-prints",
                title: "Walking Tips",
                content: "Wear sturdy shoes for cobblestone paths and stairs. Donkey rides are available but consider ethical options."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
            "https://images.unsplash.com/photo-1533105079780-92b9be482077",
            "https://images.unsplash.com/photo-1534081333815-ae5019106622",
            "https://images.unsplash.com/photo-1544077960-604201fe74bc",
            "https://images.unsplash.com/photo-1547844149-792cef96ce45",
            "https://images.unsplash.com/photo-1507501336603-6e31db2be093"
        ]
    },

    // 德国黑森林
    "black-forest": {
        title: "Black Forest",
        location: "Germany",
        description: "A magical region of dense forests, cuckoo clocks, thermal spas, and charming villages. The Black Forest offers scenic hiking trails, picturesque lakes, and authentic German culture in southwest Germany.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "May-October (Hiking), December (Christmas Markets)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Baden-Württemberg" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "Mid" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Relaxed to Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Germany" },
            { icon: "fas fa-map", text: "Main Towns: Freiburg, Baden-Baden, Triberg" },
            { icon: "fas fa-tree", text: "Area: 6,000 km² (2,300 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Good coverage in towns and resorts" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: German" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Euro (EUR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted in hotels/restaurants, cash preferred in smaller shops" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 0.92 EUR" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Telekom, Vodafone, O2" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 15-25°C (59-77°F), pleasant" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): -5 to 5°C (23-41°F), snow possible" },
            { icon: "fas fa-cloud-rain", text: "Rainfall: Moderate year-round" },
            { icon: "fas fa-wind", text: "Wind: Protected by surrounding mountains" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Pack layers and rain gear, microclimates vary" }
        ],
        attractions: [
            {
                title: "Triberg Waterfalls",
                description: "One of Germany's highest waterfalls, surrounded by forest trails and cuckoo clock shops.",
                icon: "fas fa-water"
            },
            {
                title: "Baden-Baden Thermal Baths",
                description: "World-renowned spa town with Roman-era thermal baths and elegant architecture.",
                icon: "fas fa-hot-tub"
            },
            {
                title: "Feldberg Mountain",
                description: "Highest peak in the Black Forest, with skiing in winter and hiking in summer.",
                icon: "fas fa-mountain"
            },
            {
                title: "Schluchsee Lake",
                description: "Large reservoir ideal for swimming, sailing, and lakeside cycling.",
                icon: "fas fa-water"
            },
            {
                title: "Cuckoo Clock Shops",
                description: "Traditional handcrafted cuckoo clocks, especially in Triberg and surrounding villages.",
                icon: "fas fa-clock"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Getting Around",
                content: "Renting a car is best for exploring villages and scenic routes (Black Forest High Road). Trains connect major towns."
            },
            {
                icon: "fas fa-hiking",
                title: "Hiking Trails",
                content: "Over 23,000 km of marked trails. Westweg trail runs north-south. Pick up maps at tourist offices."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try Black Forest ham, Black Forest cake (Schwarzwälder Kirschtorte), and regional wines/sparkling wine."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Family-run guesthouses (Gasthof) offer authentic experiences. Spas and wellness hotels are popular in Baden-Baden."
            },
            {
                icon: "fas fa-shopping",
                title: "Shopping",
                content: "Authentic cuckoo clocks are expensive but high-quality. Look for 'Made in Germany' certification. Glassblowing is another local craft."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1534430480872-3498386e7856",
            "https://images.unsplash.com/photo-1519915028121-7d3463d20bde",
            "https://images.unsplash.com/photo-1488386037662-1cfa65f3ca48",
            "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        ]
    },

    // 瑞士阿尔卑斯山（单板滑雪主题）
    "snowboard-swiss-alps": {
        title: "Snowboarding in the Swiss Alps",
        location: "Switzerland",
        description: "Carve through world-class powder, explore massive ski resorts, and experience the ultimate alpine snowboarding adventure. The Swiss Alps offer terrain parks, backcountry lines, and some of Europe's most iconic snowboard destinations.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "December-April (Peak snow: January-March)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Various resorts: Zermatt, Verbier, Laax" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-snowboarding", label: "Activity Level", value: "Moderate to Expert" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Switzerland" },
            { icon: "fas fa-map", text: "Top Resorts: Zermatt, Verbier, Laax, Saas-Fee" },
            { icon: "fas fa-mountain", text: "Highest Resort: Zermatt (3,899m / 12,791ft)" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Available at resorts and villages" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: German, French, Italian" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Swiss Franc (CHF)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted at resorts and shops" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 CHF ≈ 1.08 USD" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Swisscom, Sunrise, Salt" }
        ],
        climateInfo: [
            { icon: "fas fa-snowflake", text: "Winter Temps: -5 to -15°C (23-5°F) at resort level" },
            { icon: "fas fa-cloud-snow", text: "Snowfall: Consistent December-March, powder days common" },
            { icon: "fas fa-sun", text: "Sunny Days: Many sunny days even in winter, wear sun protection" },
            { icon: "fas fa-wind", text: "Wind: Can be strong at exposed ridges, check avalanche forecasts" },
            { icon: "fas fa-thermometer-half", text: "Weather Tip: Layers essential, temperatures vary with elevation" }
        ],
        attractions: [
            {
                title: "Laax Snowpark",
                description: "One of Europe's premier terrain parks with kickers, rails, and halfpipe, hosting international competitions.",
                icon: "fas fa-snowboarding"
            },
            {
                title: "Zermatt Glacier Skiing",
                description: "Year-round snowboarding on the Theodul Glacier, connected to Cervinia, Italy.",
                icon: "fas fa-mountain"
            },
            {
                title: "Verbier Backcountry",
                description: "Renowned off-piste terrain with legendary freeride routes and the famous Bec des Rosses.",
                icon: "fas fa-hiking"
            },
            {
                title: "Engadin Snow Safari",
                description: "Cross-country ski safari connecting multiple resorts in the scenic Engadin valley.",
                icon: "fas fa-train"
            },
            {
                title: "Night Snowboarding",
                description: "Floodlit slopes and parks for evening sessions at select resorts like Grindelwald-First.",
                icon: "fas fa-moon"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-snowboarding",
                title: "Gear & Rentals",
                content: "High-quality rental shops at all resorts. Consider bringing your own boots. Avalanche safety gear (beacon, probe, shovel) essential for backcountry."
            },
            {
                icon: "fas fa-train",
                title: "Transportation",
                content: "Swiss Travel Pass covers train to resorts. Many resorts are car-free; parking at base and use local transport."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Book slope-side hotels months ahead for peak season. Mountain huts (hôtels de montagne) offer unique backcountry stays."
            },
            {
                icon: "fas fa-first-aid",
                title: "Safety",
                content: "Always check avalanche risk (whiterisk.ch). Never ride alone off-piste. Consider hiring a certified mountain guide."
            },
            {
                icon: "fas fa-utensils",
                title: "Après-Ski",
                content: "Swiss resorts offer lively après-ski scene. Try fondue, rösti, and mulled wine after a day on the slopes."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1548126032-079a0fb0099d",
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
            "https://images.unsplash.com/photo-1519689680025-28305454767c",
            "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
            "https://images.unsplash.com/photo-1470058869958-2a77ade41c02",
            "https://images.unsplash.com/photo-1531685250784-7569952593d2"
        ]
    },

    // 巴黎
    "paris": {
        title: "Paris",
        location: "France",
        description: "The City of Light captivates with iconic landmarks, world-class art, romantic atmosphere, and exceptional cuisine. From the Eiffel Tower to charming cafés, Paris offers timeless elegance and cultural richness.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "April-June, September-October" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Île-de-France" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: France" },
            { icon: "fas fa-map", text: "Arrondissements: 20 administrative districts" },
            { icon: "fas fa-mountain", text: "Area: 105.4 km² (40.7 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Excellent coverage, free WiFi in many public places" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: French" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Euro (EUR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 0.92 EUR" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Orange, Free, SFR" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Spring (Mar-May): 8-18°C (46-64°F), blooming gardens" },
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 15-30°C (59-86°F), warm, occasional heatwaves" },
            { icon: "fas fa-leaf", text: "Autumn (Sep-Nov): 10-20°C (50-68°F), golden light" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): 2-8°C (36-46°F), chilly, occasional rain" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Pack layers and an umbrella year-round" }
        ],
        attractions: [
            {
                title: "Eiffel Tower",
                description: "Iconic iron lattice tower, offering panoramic city views and sparkling lights at night.",
                icon: "fas fa-tower-cell"
            },
            {
                title: "Louvre Museum",
                description: "World's largest art museum, home to the Mona Lisa and Venus de Milo.",
                icon: "fas fa-landmark"
            },
            {
                title: "Notre-Dame Cathedral",
                description: "Gothic masterpiece undergoing restoration, a symbol of Parisian history.",
                icon: "fas fa-church"
            },
            {
                title: "Montmartre & Sacré-Cœur",
                description: "Artistic hilltop village with white basilica, cobblestone streets, and bohemian charm.",
                icon: "fas fa-palette"
            },
            {
                title: "Seine River Cruise",
                description: "Scenic boat tour passing under bridges and alongside landmarks like the Louvre and Orsay.",
                icon: "fas fa-ship"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-subway",
                title: "Getting Around",
                content: "Métro is efficient and extensive. Consider carnet (10-ticket pack). Walking is best for central exploration."
            },
            {
                icon: "fas fa-ticket-alt",
                title: "Museum Pass",
                content: "Paris Museum Pass saves money and skips lines at major attractions. Book timed slots in advance for popular sites."
            },
            {
                icon: "fas fa-utensils",
                title: "Dining",
                content: "Boulangeries for fresh bread, brasseries for casual dining, and Michelin-starred restaurants for fine cuisine. Lunch menus offer better value."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Arrondissements 1-8 central but pricier. Consider left bank (5th-7th) for charming atmosphere. Book months ahead for peak seasons."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Safety Tips",
                content: "Beware of pickpockets in tourist areas and métro. Avoid taxis without meters; use ride-hailing apps or official taxi stands."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
            "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b",
            "https://images.unsplash.com/photo-1533929736458-ca588d47c8ca",
            "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
            "https://images.unsplash.com/photo-1511739001486-6bfe0ce38fdb"
        ]
    },

    // 威尼斯
    "venice": {
        title: "Venice",
        location: "Italy",
        description: "A city built on water, Venice enchants with its canals, gondolas, historic architecture, and romantic ambiance. Explore St. Mark's Square, the Grand Canal, and hidden alleyways in this UNESCO World Heritage treasure.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "April-May, September-October" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Veneto" },
            { icon: "fas fa-euro-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Italy" },
            { icon: "fas fa-map", text: "Islands: 118 islands connected by bridges" },
            { icon: "fas fa-water", text: "Canals: 177 canals, Grand Canal is main thoroughfare" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Good coverage, free WiFi in public squares" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Italian" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Euro (EUR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 0.92 EUR" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: TIM, Vodafone, Iliad" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Spring (Mar-May): 10-20°C (50-68°F), pleasant" },
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 20-30°C (68-86°F), humid, can be crowded" },
            { icon: "fas fa-leaf", text: "Autumn (Sep-Nov): 10-20°C (50-68°F), acqua alta risk" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): 0-10°C (32-50°F), fog possible" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Check acqua alta forecasts, carry boots in winter" }
        ],
        attractions: [
            {
                title: "St. Mark's Square",
                description: "Iconic piazza with St. Mark's Basilica, the Doge's Palace, and historic cafés.",
                icon: "fas fa-church"
            },
            {
                title: "Grand Canal",
                description: "Main waterway lined with palaces, best experienced by vaporetto or gondola.",
                icon: "fas fa-water"
            },
            {
                title: "Rialto Bridge",
                description: "Oldest bridge across the Grand Canal, with bustling market area.",
                icon: "fas fa-bridge"
            },
            {
                title: "Bridge of Sighs",
                description: "Famous enclosed bridge connecting Doge's Palace to prison, shrouded in romantic legend.",
                icon: "fas fa-archway"
            },
            {
                title: "Murano & Burano",
                description: "Islands famous for glassmaking (Murano) and colorful fishermen's houses (Burano).",
                icon: "fas fa-palette"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-ship",
                title: "Getting Around",
                content: "Vaporettos (water buses) are main public transport. Walking is best; prepare for many bridges and stairs."
            },
            {
                icon: "fas fa-ticket-alt",
                title: "Acqua Alta",
                content: "High water events occur especially Oct-Mar. Check forecasts and bring waterproof boots or use raised walkways."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Stay on the main islands for full experience. Mestre (mainland) offers cheaper options with train access."
            },
            {
                icon: "fas fa-utensils",
                title: "Local Cuisine",
                content: "Try sarde in saor, risotto al nero di seppia, and cicchetti (Venetian tapas). Avoid tourist-trap restaurants near main sights."
            },
            {
                icon: "fas fa-map-marked-alt",
                title: "Avoiding Crowds",
                content: "Visit early morning or late afternoon. Explore Dorsoduro and Cannaregio districts for quieter experiences."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
            "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f",
            "https://images.unsplash.com/photo-1533485823484-2478b543fddf",
            "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d",
            "https://images.unsplash.com/photo-1527295113560-8b6bc5d2a60c"
        ]
    },

    // 东京
    "tokyo": {
        title: "Tokyo",
        location: "Japan",
        description: "A dazzling metropolis where ultramodern skyscrapers meet ancient temples. Tokyo offers world-class dining, pop culture, shopping, and a fascinating blend of tradition and innovation.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "March-April (Cherry Blossoms), October-November" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Kanto Region, Honshu" },
            { icon: "fas fa-yen-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Japan" },
            { icon: "fas fa-map", text: "Special Wards: 23 central wards" },
            { icon: "fas fa-mountain", text: "Area: 2,194 km² (847 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Japan Standard Time (JST, UTC+9)" },
            { icon: "fas fa-wifi", text: "Internet: Excellent coverage, free WiFi in many areas" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Japanese" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Japanese Yen (JPY)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted, but cash still common" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 145 JPY" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Pocket WiFi recommended, eSIM options available" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Spring (Mar-May): 10-22°C (50-72°F), cherry blossoms" },
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 22-35°C (72-95°F), hot, humid, rainy season in June" },
            { icon: "fas fa-leaf", text: "Autumn (Sep-Nov): 15-25°C (59-77°F), comfortable, fall foliage" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): 0-12°C (32-54°F), dry, clear skies" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Summer requires light clothing and hydration" }
        ],
        attractions: [
            {
                title: "Shibuya Crossing",
                description: "World's busiest pedestrian crossing, symbol of Tokyo's vibrant energy.",
                icon: "fas fa-street-view"
            },
            {
                title: "Senso-ji Temple",
                description: "Ancient Buddhist temple in Asakusa, Tokyo's oldest temple with bustling Nakamise shopping street.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Tokyo Skytree",
                description: "Towering broadcasting and observation structure with panoramic city views.",
                icon: "fas fa-tower-cell"
            },
            {
                title: "Meiji Shrine",
                description: "Peaceful forested shrine dedicated to Emperor Meiji and Empress Shoken.",
                icon: "fas fa-tree"
            },
            {
                title: "Akihabara Electric Town",
                description: "Epicenter of anime, manga, electronics, and otaku culture.",
                icon: "fas fa-gamepad"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-train",
                title: "Transportation",
                content: "Suica/Pasmo IC cards work on trains, buses, and at convenience stores. Japan Rail Pass may be cost-effective for intercity travel."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Capsule hotels, business hotels, and luxury options. Book 2-3 months ahead for cherry blossom season."
            },
            {
                icon: "fas fa-utensils",
                title: "Dining",
                content: "Michelin-starred restaurants, conveyor-belt sushi, ramen shops, and convenience stores all offer great food. Reservations needed for top restaurants."
            },
            {
                icon: "fas fa-gift",
                title: "Cultural Etiquette",
                content: "No tipping. Bow as greeting. Remove shoes when entering homes and some traditional establishments."
            },
            {
                icon: "fas fa-language",
                title: "Language",
                content: "English signage in tourist areas. Learning basic Japanese phrases is appreciated. Google Translate helpful."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
            "https://images.unsplash.com/photo-1498804103079-a635b8d5dd4c",
            "https://images.unsplash.com/photo-1503891450245-2b8d6b0cff33",
            "https://images.unsplash.com/photo-1533738363-b7f9aef128c4"
        ]
    },

    // 马尔代夫
    "maldives": {
        title: "Maldives",
        location: "Maldives",
        description: "A tropical paradise of pristine white-sand beaches, crystal-clear turquoise waters, and overwater bungalows. The Maldives offers unparalleled luxury, world-class diving, and serene island escapes.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "November-April (Dry Season)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Indian Ocean" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-umbrella-beach", label: "Activity Level", value: "Relaxed" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Maldives" },
            { icon: "fas fa-map", text: "Capital: Malé" },
            { icon: "fas fa-water", text: "Islands: 1,192 coral islands, 200+ inhabited" },
            { icon: "fas fa-clock", text: "Time Zone: Maldives Time (MVT, UTC+5)" },
            { icon: "fas fa-wifi", text: "Internet: Good coverage at resorts" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Dhivehi" },
            { icon: "fas fa-language", text: "English: Widely spoken in resorts" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Maldivian Rufiyaa (MVR)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted at resorts (US Dollars widely accepted)" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 15.4 MVR" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (Nov-Apr): 25-30°C (77-86°F), low humidity" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (May-Oct): 25-30°C, occasional storms" },
            { icon: "fas fa-wind", text: "Wind: Stronger during wet season" },
            { icon: "fas fa-umbrella", text: "Rainfall: Brief tropical showers" },
            { icon: "fas fa-sun", text: "Weather Tip: Sun protection essential year-round" }
        ],
        attractions: [
            {
                title: "Overwater Bungalows",
                description: "Iconic accommodations with direct lagoon access and glass floor panels.",
                icon: "fas fa-home"
            },
            {
                title: "House Reef Snorkeling",
                description: "Vibrant coral reefs teeming with tropical fish, often steps from your villa.",
                icon: "fas fa-fish"
            },
            {
                title: "Sunset Dolphin Cruise",
                description: "Boat trips to spot spinner dolphins in the wild during golden hour.",
                icon: "fas fa-ship"
            },
            {
                title: "Scuba Diving",
                description: "World-class dive sites with manta rays, whale sharks, and pristine coral gardens.",
                icon: "fas fa-diving-mask"
            },
            {
                title: "Local Island Visits",
                description: "Experience Maldivian culture, fishing villages, and local markets.",
                icon: "fas fa-users"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-plane",
                title: "Arrival",
                content: "International flights arrive at Malé (MLE). Speedboat or seaplane transfers to resorts are pre-arranged. Book transfers with accommodation."
            },
            {
                icon: "fas fa-suitcase",
                title: "Packing Essentials",
                content: "Reef-safe sunscreen, swimwear, light clothing, insect repellent, underwater camera, and power adapters."
            },
            {
                icon: "fas fa-hotel",
                title: "Resort Selection",
                content: "Choose based on budget, diving/snorkeling quality, and distance from Malé. All-inclusive packages offer best value."
            },
            {
                icon: "fas fa-utensils",
                title: "Dining",
                content: "Resorts offer international cuisine. Alcohol is served at resorts but prohibited on local islands. Tap water not drinkable."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Cultural Respect",
                content: "Dress modestly on local islands (cover shoulders/knees). Public observance of non-Muslim religions restricted to resorts."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
            "https://images.unsplash.com/photo-1551927336-09cdfd9c4c5f",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0",
            "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
        ]
    },

    // 冰岛
    "iceland": {
        title: "Iceland",
        location: "Iceland",
        description: "Land of fire and ice, where volcanoes, glaciers, waterfalls, and the Northern Lights create a surreal landscape. Iceland offers extraordinary adventures in a land of otherworldly beauty.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-August (Midnight Sun), September-March (Northern Lights)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "North Atlantic" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate to Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Iceland" },
            { icon: "fas fa-map", text: "Capital: Reykjavík" },
            { icon: "fas fa-mountain", text: "Area: 103,000 km² (39,770 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Greenwich Mean Time (GMT, UTC+0)" },
            { icon: "fas fa-wifi", text: "Internet: Excellent coverage" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Icelandic" },
            { icon: "fas fa-language", text: "English: Widely spoken" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Icelandic Króna (ISK)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted everywhere, cash rarely needed" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 138 ISK" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 10-15°C (50-59°F), long daylight" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): -5 to 5°C (23-41°F), short days" },
            { icon: "fas fa-wind", text: "Wind: Unpredictable, often strong" },
            { icon: "fas fa-cloud-rain", text: "Rainfall: Frequent, all seasons" },
            { icon: "fas fa-umbrella", text: "Weather Tip: 'If you don't like the weather, wait five minutes'" }
        ],
        attractions: [
            {
                title: "Northern Lights",
                description: "Aurora Borealis dancing across the night sky, best viewed September-March.",
                icon: "fas fa-star"
            },
            {
                title: "Golden Circle",
                description: "Route covering Þingvellir National Park, Gullfoss waterfall, and Geysir geothermal area.",
                icon: "fas fa-road"
            },
            {
                title: "Jökulsárlón Glacier Lagoon",
                description: "Stunning glacial lake with icebergs, seals, and nearby Diamond Beach.",
                icon: "fas fa-water"
            },
            {
                title: "Blue Lagoon",
                description: "Geothermal spa with milky blue waters, silica mud masks, and luxurious relaxation.",
                icon: "fas fa-hot-tub"
            },
            {
                title: "Ring Road (Route 1)",
                description: "1,332km scenic highway circling the island, passing waterfalls, volcanoes, and black sand beaches.",
                icon: "fas fa-car"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Driving",
                content: "4WD recommended for F-roads (highlands). Check road.is for conditions. Drive with headlights always on."
            },
            {
                icon: "fas fa-tshirt",
                title: "Packing Essentials",
                content: "Waterproof and windproof outer layers, thermal base layers, sturdy waterproof hiking boots, swimsuit for hot springs."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Book months ahead for summer. Campervans popular for Ring Road trips. Hostels and guesthouses available."
            },
            {
                icon: "fas fa-mountain",
                title: "Safety",
                content: "Check weather and road closures. Never hike on glaciers without a guide. Respect warning signs at natural sites."
            },
            {
                icon: "fas fa-utensils",
                title: "Food",
                content: "Try Icelandic lamb, skyr, fresh seafood, and hot dogs (pylsur). Grocery shopping saves money (Bónus, Krónan)."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
            "https://images.unsplash.com/photo-1480468660305-659d33c26128",
            "https://images.unsplash.com/photo-1508513242420-997f9d1b09b3",
            "https://images.unsplash.com/photo-1559269260-8b3f9e0ea28b"
        ]
    },

    // 马丘比丘
    "machu-picchu": {
        title: "Machu Picchu",
        location: "Peru",
        description: "The iconic Inca citadel perched high in the Andes, a UNESCO World Heritage site and one of the New Seven Wonders. Explore ancient stone structures, terraces, and breathtaking mountain scenery.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "May-September (Dry Season)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Cusco Region, Andes Mountains" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Peru" },
            { icon: "fas fa-map", text: "Nearest Town: Aguas Calientes (Machu Picchu Pueblo)" },
            { icon: "fas fa-mountain", text: "Elevation: 2,430 m (7,970 ft)" },
            { icon: "fas fa-clock", text: "Time Zone: Peru Time (PET, UTC-5)" },
            { icon: "fas fa-wifi", text: "Internet: Limited at site, available in Aguas Calientes" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: Spanish, Quechua" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Peruvian Sol (PEN)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted in Aguas Calientes, cash for entrance fees" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 3.8 PEN" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Claro, Movistar" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (May-Sep): 10-25°C (50-77°F), sunny days, cool nights" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (Oct-Apr): 15-25°C (59-77°F), frequent rain" },
            { icon: "fas fa-cloud-sun", text: "Microclimate: Can change quickly, sunny to rainy" },
            { icon: "fas fa-wind", text: "Wind: Mild, but can be cool at higher elevations" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Layered clothing, rain gear essential year-round" }
        ],
        attractions: [
            {
                title: "Huayna Picchu",
                description: "Steep mountain peak offering panoramic views of Machu Picchu (limited tickets, pre-book).",
                icon: "fas fa-mountain"
            },
            {
                title: "Inca Bridge",
                description: "Hidden path and bridge carved into the cliffside, showcasing Inca engineering.",
                icon: "fas fa-bridge"
            },
            {
                title: "Sun Gate (Inti Punku)",
                description: "Entry point for Inca Trail hikers with first view of the citadel at sunrise.",
                icon: "fas fa-sun"
            },
            {
                title: "Temple of the Sun",
                description: "Semicircular tower with exquisite stonework, used for astronomical observations.",
                icon: "fas fa-sun"
            },
            {
                title: "Inca Trail",
                description: "Classic 4-day trek through Andean landscapes to reach Machu Picchu.",
                icon: "fas fa-hiking"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-ticket-alt",
                title: "Entry Tickets",
                content: "Purchase tickets months in advance, especially for Huayna Picchu or Machu Picchu Mountain. Passport required for entry."
            },
            {
                icon: "fas fa-train",
                title: "Transportation",
                content: "Trains from Ollantaytambo or Poroy to Aguas Calientes. Buses from Aguas Calientes to the site. Book train tickets early."
            },
            {
                icon: "fas fa-first-aid",
                title: "Altitude",
                content: "Acclimatize in Cusco (2-3 days) before visiting. Drink coca tea, stay hydrated, and avoid strenuous activity initially."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Stay in Aguas Calientes for early morning entry. Cusco offers more options and lower altitude for acclimatization."
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                content: "No tripods allowed. Early morning visits offer best light and fewer crowds. Arrive before opening for sunrise."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1526392060635-9d6019884377",
            "https://images.unsplash.com/photo-1531211590523-26f6fa8b16ab",
            "https://images.unsplash.com/photo-1530403234347-eea649ac3f72",
            "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
            "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
            "https://images.unsplash.com/photo-1551292749-9b3e9e1d1f8f"
        ]
    },

    // 美国大峡谷
    "grand-canyon": {
        title: "Grand Canyon",
        location: "USA",
        description: "One of the world's most awe-inspiring natural wonders, the Grand Canyon reveals millions of years of geological history through its immense, colorful layers. Experience rim views, hiking, rafting, and unforgettable sunsets.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "March-May, September-November" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Arizona" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Moderate to Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: United States" },
            { icon: "fas fa-map", text: "Rims: South Rim (open year-round), North Rim (seasonal)" },
            { icon: "fas fa-mountain", text: "Length: 446 km (277 mi), Depth: 1,800 m (6,000 ft)" },
            { icon: "fas fa-clock", text: "Time Zone: Mountain Time (MT, UTC-7)" },
            { icon: "fas fa-wifi", text: "Internet: Available at developed areas, limited on trails" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: English" },
            { icon: "fas fa-money-bill-wave", text: "Currency: US Dollar (USD)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: N/A" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: AT&T, Verizon, T-Mobile (spotty coverage)" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): South Rim 20-35°C (68-95°F), inner canyon much hotter" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): South Rim -5 to 10°C (23-50°F), snow possible" },
            { icon: "fas fa-leaf", text: "North Rim: Closed mid-October to mid-May due to snow" },
            { icon: "fas fa-wind", text: "Wind: Can be strong, especially at viewpoints" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Layered clothing, sun protection essential" }
        ],
        attractions: [
            {
                title: "South Rim Trail",
                description: "Paved rim trail with spectacular viewpoints, accessible for all abilities.",
                icon: "fas fa-hiking"
            },
            {
                title: "Bright Angel Trail",
                description: "Classic descent into the canyon with rest houses and water stops (hike only as far as comfortable).",
                icon: "fas fa-mountain"
            },
            {
                title: "Desert View Watchtower",
                description: "Historic stone tower offering panoramic views of the eastern canyon.",
                icon: "fas fa-tower-cell"
            },
            {
                title: "Colorado River Rafting",
                description: "Multi-day whitewater rafting trips through the heart of the canyon.",
                icon: "fas fa-water"
            },
            {
                title: "Helicopter Tours",
                description: "Aerial views providing a dramatic perspective of the canyon's scale.",
                icon: "fas fa-helicopter"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Transportation",
                content: "Rental car recommended. Shuttle buses operate on South Rim during peak seasons. North Rim requires driving."
            },
            {
                icon: "fas fa-ticket-alt",
                title: "Park Entry",
                content: "7-day vehicle pass required. America the Beautiful Pass accepted. Arrive early to avoid crowds and find parking."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "In-park lodges book months in advance. Nearby towns: Tusayan (South Rim), Jacob Lake (North Rim). Camping available."
            },
            {
                icon: "fas fa-first-aid",
                title: "Hiking Safety",
                content: "Extreme heat in inner canyon; carry 1 gallon water per person per day. Don't hike rim-to-river and back in one day."
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                content: "Sunrise and sunset offer best light. Popular viewpoints: Mather Point, Yavapai Point, Hopi Point."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
            "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
            "https://images.unsplash.com/photo-1519125328138-2cfb63c1c5f5",
            "https://images.unsplash.com/photo-1522136621326-c2bdaa7a7d10"
        ]
    },

    // 大堡礁
    "great-barrier-reef": {
        title: "Great Barrier Reef",
        location: "Australia",
        description: "The world's largest coral reef system, a UNESCO World Heritage site teeming with marine life. Snorkel, dive, or sail through this underwater wonderland of vibrant corals, sea turtles, and tropical fish.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-October (Dry Season, best visibility)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Queensland" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid to High" },
            { icon: "fas fa-swimmer", label: "Activity Level", value: "Relaxed to Active" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Australia" },
            { icon: "fas fa-map", text: "Gateway Towns: Cairns, Port Douglas, Airlie Beach" },
            { icon: "fas fa-water", text: "Length: 2,300 km (1,430 mi), 2,900 individual reefs" },
            { icon: "fas fa-clock", text: "Time Zone: Australian Eastern Standard Time (AEST, UTC+10)" },
            { icon: "fas fa-wifi", text: "Internet: Available in gateway towns, limited on boats" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: English" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Australian Dollar (AUD)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Widely accepted" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 1.5 AUD" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Telstra, Optus, Vodafone" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (May-Oct): 20-28°C (68-82°F), low humidity" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (Nov-Apr): 25-35°C (77-95°F), storms, stinger season (jellyfish)" },
            { icon: "fas fa-wind", text: "Wind: Trade winds influence boat conditions" },
            { icon: "fas fa-umbrella", text: "Rainfall: Tropical showers, cyclone risk in summer" },
            { icon: "fas fa-sun", text: "Weather Tip: Sun protection essential, UV index extreme" }
        ],
        attractions: [
            {
                title: "Snorkeling & Diving",
                description: "Explore vibrant coral gardens, swim with sea turtles, and encounter clownfish at countless reef sites.",
                icon: "fas fa-fish"
            },
            {
                title: "Scenic Flights",
                description: "Helicopter or seaplane tours offering breathtaking aerial views of Heart Reef and the reef expanse.",
                icon: "fas fa-helicopter"
            },
            {
                title: "Whitsunday Islands",
                description: "Sail through 74 islands, visit Whitehaven Beach with its pure silica sand.",
                icon: "fas fa-ship"
            },
            {
                title: "Reef Sleep Experiences",
                description: "Overnight stays on floating platforms or liveaboard boats for sunset and sunrise on the reef.",
                icon: "fas fa-bed"
            },
            {
                title: "Cairns Lagoon",
                description: "Free saltwater swimming pool on the Cairns Esplanade, perfect for cooling off.",
                icon: "fas fa-swimmer"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-ship",
                title: "Choosing a Tour",
                content: "Eco-certified operators follow sustainable practices. Decide between pontoon platforms, snorkel-only trips, or liveaboard for multiple days."
            },
            {
                icon: "fas fa-tshirt",
                title: "Gear & Protection",
                content: "Reef-safe sunscreen mandatory. Stinger suits (lycra suits) protect from jellyfish and sun; provided on most tours."
            },
            {
                icon: "fas fa-camera",
                title: "Underwater Photography",
                content: "Waterproof cameras or GoPros essential. Some tours offer professional photo packages."
            },
            {
                icon: "fas fa-first-aid",
                title: "Health",
                content: "Sea sickness medication recommended for boat trips. Stay hydrated; alcohol and sun don't mix."
            },
            {
                icon: "fas fa-calendar",
                title: "Booking",
                content: "Book tours in advance during peak season (June-September). Weather can affect trips; have flexible dates."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206",
            "https://images.unsplash.com/photo-1583212292454-1fe6229263d4",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0",
            "https://images.unsplash.com/photo-1551248424-2b75f8c5f5a3"
        ]
    },

    // 普吉岛
    "phuket": {
        title: "Phuket",
        location: "Thailand",
        description: "Thailand's largest island, Phuket offers stunning beaches, vibrant nightlife, cultural landmarks, and delicious cuisine. From luxury resorts to backpacker havens, there's something for every traveler.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "November-April (Dry Season)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Andaman Sea" },
            { icon: "fas fa-baht-sign", label: "Budget Level", value: "Low to High" },
            { icon: "fas fa-umbrella-beach", label: "Activity Level", value: "Relaxed to Active" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Thailand" },
            { icon: "fas fa-map", text: "Main Beaches: Patong, Kata, Karon, Bang Tao" },
            { icon: "fas fa-mountain", text: "Area: 543 km² (210 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Indochina Time (ICT, UTC+7)" },
            { icon: "fas fa-wifi", text: "Internet: Widely available" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Thai" },
            { icon: "fas fa-language", text: "English: Widely spoken in tourist areas" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Thai Baht (THB)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted at hotels and larger restaurants" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 35 THB" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (Nov-Apr): 25-32°C (77-90°F), calm seas" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (May-Oct): 25-30°C, frequent rain, rough seas" },
            { icon: "fas fa-wind", text: "Wind: Monsoon winds affect west coast beaches" },
            { icon: "fas fa-umbrella", text: "Rainfall: Short, heavy tropical showers" },
            { icon: "fas fa-sun", text: "Weather Tip: Best beach weather November to March" }
        ],
        attractions: [
            {
                title: "Phi Phi Islands",
                description: "Stunning limestone islands with Maya Bay, snorkeling, and dramatic scenery (day trip).",
                icon: "fas fa-ship"
            },
            {
                title: "Big Buddha",
                description: "45-meter white marble statue atop Nakkerd Hill with panoramic island views.",
                icon: "fas fa-gopuram"
            },
            {
                title: "Old Phuket Town",
                description: "Colorful Sino-Portuguese architecture, trendy cafés, and weekend night market.",
                icon: "fas fa-building"
            },
            {
                title: "Promthep Cape",
                description: "Famous sunset viewpoint at the southern tip of the island.",
                icon: "fas fa-sun"
            },
            {
                title: "Elephant Sanctuary",
                description: "Ethical sanctuaries where rescued elephants roam freely (no riding).",
                icon: "fas fa-paw"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-motorcycle",
                title: "Getting Around",
                content: "Tuk-tuks and taxis are expensive; agree on price before. Scooter rental common but requires international license and caution."
            },
            {
                icon: "fas fa-utensils",
                title: "Food",
                content: "Try pad thai, tom yum goong, mango sticky rice, and fresh seafood. Street food is safe and delicious."
            },
            {
                icon: "fas fa-pray",
                title: "Cultural Respect",
                content: "Dress modestly when visiting temples. Remove shoes before entering temple buildings."
            },
            {
                icon: "fas fa-umbrella-beach",
                title: "Beach Safety",
                content: "Pay attention to red flag warnings (no swimming). Some beaches have strong rip currents during monsoon."
            },
            {
                icon: "fas fa-first-aid",
                title: "Health",
                content: "Drink bottled water. Mosquito repellent recommended. Travel insurance advised for activities."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1537809671135-44ee4ddba6d7",
            "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1540946485063-a40da27545f8",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5"
        ]
    },

    // 罗弗敦群岛
    "lofoten-islands": {
        title: "Lofoten Islands",
        location: "Norway",
        description: "Dramatic peaks rise from the Arctic Ocean, dotted with picturesque fishing villages. The Lofoten Islands offer epic hiking, midnight sun, Northern Lights, and some of Norway's most breathtaking scenery.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-August (Midnight Sun), February-March (Northern Lights)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Nordland, Arctic Norway" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-hiking", label: "Activity Level", value: "Moderate to Strenuous" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Norway" },
            { icon: "fas fa-map", text: "Main Villages: Reine, Å, Henningsvær, Svolvær" },
            { icon: "fas fa-mountain", text: "Area: 1,227 km² (474 sq mi)" },
            { icon: "fas fa-clock", text: "Time Zone: Central European Time (CET, UTC+1)" },
            { icon: "fas fa-wifi", text: "Internet: Good in villages, limited in remote areas" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: Norwegian, Northern Sami" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Norwegian Krone (NOK)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted everywhere, cash rarely needed" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 10.5 NOK" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Telenor, Telia" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Summer (Jun-Aug): 10-15°C (50-59°F), midnight sun" },
            { icon: "fas fa-snowflake", text: "Winter (Dec-Feb): -5 to 0°C (23-32°F), polar night, Northern Lights" },
            { icon: "fas fa-wind", text: "Wind: Can be strong, especially on exposed peaks" },
            { icon: "fas fa-cloud-rain", text: "Rainfall: Frequent, weather changes rapidly" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Layers, waterproof outerwear essential year-round" }
        ],
        attractions: [
            {
                title: "Reinebringen Hike",
                description: "Iconic hike with stunning views over Reine fjord and village (staircase trail now improved).",
                icon: "fas fa-hiking"
            },
            {
                title: "Henningsvær",
                description: "Charming fishing village known as the 'Venice of Lofoten' and famous football pitch.",
                icon: "fas fa-water"
            },
            {
                title: "Å Village",
                description: "Traditional fishing village at the southern tip, with a Norwegian Fishing Village Museum.",
                icon: "fas fa-fish"
            },
            {
                title: "Lofotr Viking Museum",
                description: "Reconstructed Viking longhouse with interactive exhibits and feasts.",
                icon: "fas fa-landmark"
            },
            {
                title: "Kayaking in Fjords",
                description: "Paddle through calm, crystal-clear waters surrounded by towering peaks.",
                icon: "fas fa-ship"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Getting There",
                content: "Fly to Svolvær or Leknes, or take the scenic ferry from Bodø. Renting a car is essential for exploring."
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                content: "Golden hour lasts hours in summer. Winter offers aurora photography. Iconic red rorbuer cabins are everywhere."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Rorbuer (fishermen's cabins) offer authentic stays. Book months ahead for summer. Camping popular in summer."
            },
            {
                icon: "fas fa-utensils",
                title: "Food",
                content: "Stockfish (tørrfisk), fresh seafood, and Arctic specialties. Groceries limited in villages; stock up in larger towns."
            },
            {
                icon: "fas fa-hiking",
                title: "Hiking Safety",
                content: "Trails can be steep and exposed. Check conditions, wear proper footwear, and carry supplies."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1551258450-634c5e878b5e",
            "https://images.unsplash.com/photo-1501277403507-4babe5b4d292",
            "https://images.unsplash.com/photo-1558036117-72d4c1ecc1d5",
            "https://images.unsplash.com/photo-1568714182783-50f5a14171d1",
            "https://images.unsplash.com/photo-1558882231-06b1b3d7fcb0",
            "https://images.unsplash.com/photo-1534338471964-0b9a0e8a0fbc"
        ]
    },

    // 塞伦盖蒂
    "serengeti": {
        title: "Serengeti",
        location: "Tanzania",
        description: "Witness the greatest wildlife spectacle on Earth: the Great Migration. The Serengeti's vast plains host lions, elephants, giraffes, and millions of wildebeest in a timeless African wilderness.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "June-October (Dry Season, Migration crossings)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Northern Tanzania" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "High" },
            { icon: "fas fa-paw", label: "Activity Level", value: "Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Tanzania" },
            { icon: "fas fa-map", text: "Area: 14,750 km² (5,700 sq mi)" },
            { icon: "fas fa-tree", text: "Ecosystem: Extends to Masai Mara (Kenya)" },
            { icon: "fas fa-clock", text: "Time Zone: East Africa Time (EAT, UTC+3)" },
            { icon: "fas fa-wifi", text: "Internet: Limited, available at some lodges" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: Swahili, English" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Tanzanian Shilling (TZS)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted at lodges, cash for tips" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 2,500 TZS" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Vodacom, Airtel" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (Jun-Oct): 15-30°C (59-86°F), little rain" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (Nov-May): 20-35°C (68-95°F), afternoon storms" },
            { icon: "fas fa-wind", text: "Wind: Mild" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Mornings cool, afternoons hot. Pack layers" },
            { icon: "fas fa-sun", text: "Wildlife Tip: Dry season best for river crossings and game viewing" }
        ],
        attractions: [
            {
                title: "Great Migration",
                description: "Over 1.5 million wildebeest and zebras crossing the Mara River in dramatic fashion.",
                icon: "fas fa-paw"
            },
            {
                title: "Hot Air Balloon Safari",
                description: "Sunrise flight over the plains with champagne breakfast after landing.",
                icon: "fas fa-hot-air-balloon"
            },
            {
                title: "Big Five Safaris",
                description: "Spot lion, leopard, elephant, rhino, and buffalo in their natural habitat.",
                icon: "fas fa-camera"
            },
            {
                title: "Kopjes Rock Formations",
                description: "Granite outcrops sheltering wildlife, often with lions and leopards resting.",
                icon: "fas fa-mountain"
            },
            {
                title: "Ngorongoro Crater",
                description: "Nearby UNESCO site, a volcanic caldera with dense wildlife populations.",
                icon: "fas fa-meteor"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Safari Logistics",
                content: "4WD vehicles essential. Guided safaris required; self-driving not recommended. Choose reputable tour operators."
            },
            {
                icon: "fas fa-first-aid",
                title: "Health",
                content: "Yellow fever vaccination required. Malaria prophylaxis recommended. Carry insect repellent."
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                content: "Long lens (300mm+) for wildlife. Dust protection for gear. Sunrise and sunset offer best light."
            },
            {
                icon: "fas fa-hotel",
                title: "Accommodation",
                content: "Options from luxury lodges to mobile tented camps. Book months ahead for migration season (June-October)."
            },
            {
                icon: "fas fa-tshirt",
                title: "Packing",
                content: "Neutral-colored clothing (avoid bright colors). Warm layers for morning game drives, sun hat, sturdy shoes."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801",
            "https://images.unsplash.com/photo-1534177616072-ef7dc120449d",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
            "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
            "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
            "https://images.unsplash.com/photo-1502732729204-b9908ec9cd05"
        ]
    },

    // 乌尤尼盐沼
    "salar-de-uyuni": {
        title: "Salar de Uyuni",
        location: "Bolivia",
        description: "The world's largest salt flat, a surreal landscape stretching for over 10,000 square kilometers. During the rainy season, a thin layer of water creates a perfect mirror reflecting the sky.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "April-October (Dry Season), December-March (Mirror Effect)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Potosí & Oruro Departments" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid" },
            { icon: "fas fa-walking", label: "Activity Level", value: "Relaxed to Moderate" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Bolivia" },
            { icon: "fas fa-map", text: "Nearest Town: Uyuni" },
            { icon: "fas fa-mountain", text: "Area: 10,582 km² (4,086 sq mi), Elevation: 3,656 m (11,995 ft)" },
            { icon: "fas fa-clock", text: "Time Zone: Bolivia Time (BOT, UTC-4)" },
            { icon: "fas fa-wifi", text: "Internet: Limited, available in Uyuni town" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Languages: Spanish, Quechua, Aymara" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Bolivian Boliviano (BOB)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Limited acceptance, carry cash" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 6.9 BOB" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Entel, Tigo (coverage limited)" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (May-Oct): -5 to 15°C (23-59°F), sunny, very cold nights" },
            { icon: "fas fa-cloud-rain", text: "Wet Season (Nov-Apr): 5-20°C (41-68°F), rain, mirror effect" },
            { icon: "fas fa-wind", text: "Wind: Strong, especially during dry season" },
            { icon: "fas fa-snowflake", text: "Altitude: High elevation, can cause altitude sickness" },
            { icon: "fas fa-umbrella", text: "Weather Tip: Extreme temperature swings, warm clothing essential" }
        ],
        attractions: [
            {
                title: "Salt Flats Mirror",
                description: "The world's largest natural mirror when water covers the salt crust, creating surreal reflections.",
                icon: "fas fa-water"
            },
            {
                title: "Isla Incahuasi",
                description: "Cactus-covered island rising from the salt flat, with panoramic views.",
                icon: "fas fa-mountain"
            },
            {
                title: "Train Cemetery",
                description: "Abandoned locomotives from the 19th century, a popular photography spot.",
                icon: "fas fa-train"
            },
            {
                title: "Colored Lagoons",
                description: "Multi-day tours visit Laguna Colorada (red), Laguna Verde (green), and flamingo habitats.",
                icon: "fas fa-tint"
            },
            {
                title: "Salt Hotels",
                description: "Unique accommodations built almost entirely from salt blocks.",
                icon: "fas fa-hotel"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-car",
                title: "Tours",
                content: "Join 1-3 day 4WD tours from Uyuni. Choose reputable operators with good safety records (English-speaking guides recommended)."
            },
            {
                icon: "fas fa-first-aid",
                title: "Altitude",
                content: "Acclimatize in Uyuni (3,656m) before longer tours. Coca tea helps with altitude symptoms. Carry water and snacks."
            },
            {
                icon: "fas fa-camera",
                title: "Photography",
                content: "Bring wide-angle lens for perspective shots. For mirror effect, waterproof camera protection recommended. Sunrise/sunset offers best colors."
            },
            {
                icon: "fas fa-tshirt",
                title: "Packing Essentials",
                content: "Layered clothing, warm jacket, sun hat, sunglasses, sunscreen, lip balm, sturdy shoes, and passport for border tours."
            },
            {
                icon: "fas fa-gas-pump",
                title: "Logistics",
                content: "ATMs in Uyuni are limited; carry sufficient cash. Tours include basic accommodation and meals; bring snacks and water."
            }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1581235724781-45a9e6e221e8",
            "https://images.unsplash.com/photo-1558961636-5f6b2787e2e0",
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
            "https://images.unsplash.com/photo-1558961636-5f6b2787e2e0",
            "https://images.unsplash.com/photo-1520184937527-2505c6f4c8e1",
            "https://images.unsplash.com/photo-1546460573-1021c7d9d6b1"
        ]
    },

    // 下龙湾
    "halong-bay": {
        title: "Halong Bay",
        location: "Vietnam",
        description: "A UNESCO World Heritage site of emerald waters dotted with thousands of limestone karsts and islands. Cruise among dramatic seascapes, explore caves, and experience Vietnamese culture.",
        quickInfo: [
            { icon: "fas fa-calendar", label: "Best Time", value: "October-April (Cool, dry weather)" },
            { icon: "fas fa-map-marker-alt", label: "Region", value: "Quảng Ninh Province" },
            { icon: "fas fa-dollar-sign", label: "Budget Level", value: "Mid" },
            { icon: "fas fa-ship", label: "Activity Level", value: "Relaxed" }
        ],
        basicInfo: [
            { icon: "fas fa-flag", text: "Country: Vietnam" },
            { icon: "fas fa-map", text: "Gateway City: Hanoi (approx. 160 km)" },
            { icon: "fas fa-mountain", text: "Islands: Over 1,600 limestone islands" },
            { icon: "fas fa-clock", text: "Time Zone: Indochina Time (ICT, UTC+7)" },
            { icon: "fas fa-wifi", text: "Internet: Available on most cruise boats" }
        ],
        languageCurrency: [
            { icon: "fas fa-language", text: "Official Language: Vietnamese" },
            { icon: "fas fa-money-bill-wave", text: "Currency: Vietnamese Dong (VND)" },
            { icon: "fas fa-credit-card", text: "Credit Cards: Accepted by cruise operators, cash elsewhere" },
            { icon: "fas fa-exchange-alt", text: "Exchange Rate: 1 USD ≈ 25,000 VND" },
            { icon: "fas fa-mobile-alt", text: "SIM Card: Viettel, Vinaphone, Mobifone" }
        ],
        climateInfo: [
            { icon: "fas fa-sun", text: "Dry Season (Oct-Apr): 15-25°C (59-77°F), pleasant" },
            { icon: "fas fa-cloud-rain", text: "Summer (May-Sep): 25-35°C (77-95°F), hot, occasional storms" },
            { icon: "fas fa-wind", text: "Wind: Generally calm" },
            { icon: "fas fa-umbrella", text: "Rainfall: Typhoon risk in August-September" },
            { icon: "fas fa-sun", text: "Weather Tip: Book cruises with flexible cancellation for summer" }
        ],
        attractions: [
            {
                title: "Overnight Cruises",
                description: "Junk-style boats offering luxury and budget options, with meals, kayaking, and cave visits.",
                icon: "fas fa-ship"
            },
            {
                title: "Sung Sot Cave (Surprise Cave)",
                description: "Largest and most impressive cave in Halong Bay, with massive chambers and stalactites.",
                icon: "fas fa-mountain"
            },
            {
                title: "Ti Top Island",
                description: "Hike to viewpoint for panoramic bay views, and swim at the sandy beach.",
                icon: "fas fa-umbrella-beach"
            },
            {
                title: "Kayaking & Bamboo Boats",
                description: "Explore lagoons, hidden caves, and floating fishing villages at your own pace.",
                icon: "fas fa-water"
            },
            {
                title: "Cat Ba Island",
                description: "Largest island in the bay, with national park, beaches, and trekking opportunities.",
                icon: "fas fa-tree"
            }
        ],
        travelTips: [
            {
                icon: "fas fa-ship",
                title: "Cruise Selection",
                content: "Choose between day trips and overnight cruises. For overnight, research operator reputation; avoid rock-bottom prices for safety and quality."
            },
            {
                icon: "fas fa-suitcase",
                title: "Packing Essentials",
                content: "Light clothing, swimsuit, sunscreen, insect repellent, comfortable shoes for cave walks, camera, and cash for extras."
            },
            {
                icon: "fas fa-train",
                title: "Getting There",
                content: "Shuttle buses from Hanoi take 2.5-3 hours. Most cruise packages include transfers."
            },
            {
                icon: "fas fa-utensils",
                title: "Food",
                content: "Cruises serve Vietnamese seafood feasts. Inform of dietary restrictions in advance. Vegetarian options available."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Environmental Respect",
                content: "Choose eco-friendly operators. Do not litter or touch coral. Halong Bay faces pollution concerns; responsible tourism matters."
            }
        ],
        gallery: [
            "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO-Halongbay11_U0yWo2b.jpeg",
            "https://images.unsplash.com/photo-1549755520-1aee22388c5f",
            "https://images.unsplash.com/photo-1521618554290-9a2786f5b723",
            "https://images.unsplash.com/photo-1547699315-51b27b1bae75",
            "https://images.unsplash.com/photo-1572607873755-6e2f5d500626",
            "https://images.unsplash.com/photo-1540070769-2a3c7392e5a1"
        ]
    }
};

// 页面加载时初始化指南数据
document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数中的目的地
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination') || 'swiss-alps';
    
    // 获取对应目的地的数据
    const guideData = destinationGuides[destination] || destinationGuides['swiss-alps'];
    
    // 更新页面标题和元数据
    document.title = `${guideData.title} Guide | Wanderlust Adventures`;
    
    // 更新头部信息
    document.getElementById('guide-title').textContent = `${guideData.title} Guide`;
    document.getElementById('guide-location').textContent = guideData.location;
    document.getElementById('guide-description').textContent = guideData.description;
    
    // 设置头部背景图（可根据目的地动态设置）
    document.getElementById('guide-header').style.setProperty('--header-bg', `url('${guideData.gallery[0]}')`);
    
    // 渲染快速信息
    const quickInfoContainer = document.getElementById('quick-info');
    guideData.quickInfo.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        infoItem.innerHTML = `<i class="${item.icon}"></i> <strong>${item.label}:</strong> ${item.value}`;
        quickInfoContainer.appendChild(infoItem);
    });
    
    // 渲染基本信息
    const basicInfoContainer = document.getElementById('basic-info');
    guideData.basicInfo.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
        basicInfoContainer.appendChild(li);
    });
    
    // 渲染语言和货币信息
    const languageCurrencyContainer = document.getElementById('language-currency');
    guideData.languageCurrency.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
        languageCurrencyContainer.appendChild(li);
    });
    
    // 渲染气候信息
    const climateInfoContainer = document.getElementById('climate-info');
    guideData.climateInfo.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
        climateInfoContainer.appendChild(li);
    });
    
    // 渲染景点
    const attractionsGrid = document.getElementById('attractions-grid');
    guideData.attractions.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `
            <h3><i class="${attraction.icon}"></i> ${attraction.title}</h3>
            <p>${attraction.description}</p>
        `;
        attractionsGrid.appendChild(card);
    });
    
    // 渲染旅行贴士
    const travelTipsContainer = document.getElementById('travel-tips');
    guideData.travelTips.forEach(tip => {
        const tipItem = document.createElement('div');
        tipItem.className = 'tip-item';
        tipItem.innerHTML = `
            <div class="tip-icon"><i class="${tip.icon}"></i></div>
            <div class="tip-content">
                <h4>${tip.title}</h4>
                <p>${tip.content}</p>
            </div>
        `;
        travelTipsContainer.appendChild(tipItem);
    });
    
    // 渲染图片画廊
    const galleryContainer = document.getElementById('photo-gallery');
    guideData.gallery.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${imageUrl}" alt="${guideData.title} scenery">`;
        galleryContainer.appendChild(galleryItem);
    });
});