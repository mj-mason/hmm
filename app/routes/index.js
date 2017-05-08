var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var todo_cats = {
        'Kid Friendly': [
            {
                title: 'Circus Circus Midway',
                desc: 'Games and arcades with regular circus performances',
                link: 'http://www.circusreno.com/event/midway-shows/midway-games',
                highlight: false
            },
            {
                title: 'Discovery Museum',
                desc: 'Fun, hands-on science for all ages (seriously, all ages)',
                link: 'https://www.nvdm.org/',
                highlight: true
            },
            {
                title: 'Need 2 Speed Indoor Kart Racing',
                desc: 'Go karts on an indoor track',
                link: 'http://need2speed.com/',
                highlight: false
            },
            {
                title: 'Animal Ark',
                desc: 'Exotic and beautiful animal sanctuary just north of Reno',
                link: 'http://animalark.org/',
                highlight: false
            },
            {
                title: 'Wild Island',
                desc: 'Family adventure park, outdoor go karts, black light mini-golf, bowling, a massive ball pit and more!',
                link: 'http://www.wildisland.com/',
                highlight: true
            },
            {
                title: 'Game Lab',
                desc: 'Huge retro arcade and modern video games',
                link: 'https://www.peppermillreno.com/amenities/game-lab/',
                highlight: false
            }
        ],
        'Outdoors': [
            {
                title: 'Lake Tahoe',
                desc: 'Jewel of the High Sierra, crystal clear waters and panoramic mountain views, hiking, biking, water sports, camping and more',
                link: 'https://www.visitrenotahoe.com/destination/lake-tahoe',
                highlight: true
            },
            {
                title: 'RiverWalk District',
                desc: 'Take a stroll downtown along the Truckee River and savor Reno’s exciting urban renaissance.  Grab a cup of tea at Hub on your way',
                link: 'http://renoriver.org/',
                highlight: true
            },
            {
                title: 'Donner Memorial State Park',
                desc: 'Opportunities for camping, picnicking, boating, fishing, water-skiing, and hiking',
                link: 'https://www.parks.ca.gov/?page_id=503',
                highlight: false
            },
            {
                title: 'Truckee, CA',
                desc: 'A cozy city just across the Nevada border, it\'s California without the headache',
                link: 'http://www.truckee.com/',
                highlight: false
            }
        ],
        'Educational': [
            {
                title: 'National Automobile Museum',
                desc: 'One of America’s 5 greatest automobile museums',
                link: 'http://www.automuseum.org/',
                highlight: false
            },
            {
                title: 'Nevada Museum of Art',
                desc: 'The only accredited art museum in the state of Nevada',
                link: 'https://www.nevadaart.org/',
                highlight: true
            },
            {
                title: 'Fleischmann Planetarium',
                desc: 'Located on the University of Nevada Reno campus, open to the public, offers daily digital planetarium shows in a dome theater',
                link: 'http://www.planetarium.unr.edu/',
                highlight: false
            },
            {
                title: 'Reno Tahoe Visitor Center',
                desc: 'The starting point for all things Reno',
                link: 'https://www.visitrenotahoe.com/',
                highlight: false
            }
        ],
        '21 and Up': [
            {
                title: 'Brasserie Saint James',
                desc: 'High quality pub fare and wide range of craft beers brewed on site',
                link: 'https://www.brasseriesaintjames.com/',
                highlight: false
            },
            {
                title: 'Great Basin Brewing Company',
                desc: 'Oldest and most popular local craft brewer in Reno - get the garlic fries',
                link: 'http://www.greatbasinbrewingco.com/site/',
                highlight: false
            },
            {
                title: 'Craft',
                desc: 'Largest selection of beer and wine in the city, hundreds of beers from all over the world with regular rotating taps - our favorite place to grab a beer',
                link: 'http://www.craftreno.net/',
                highlight: true
            },
            {
                title: 'Midtown Wine Bar',
                desc: 'Large selection of wines for the wine connoisseur',
                link: 'http://midtownwinebarreno.com/',
                highlight: false
            },
            {
                title: 'Beer NV',
                desc: 'Laid back and modern bar with a large local craft selection (60 taps), very close to the wedding venue',
                link: 'http://beernv.com/',
                highlight: false
            }
        ],
        'Restaurants': [
            {
                title: 'Rickshaw\'s All You Can Eat Sushi',
                desc: 'In our opinion, the very best of Reno’s many all-you-can-eat sushi establishments',
                link: 'https://www.tripadvisor.com/Restaurant_Review-g45992-d3610024-Reviews-Rickshaw_Sushi-Reno_Nevada.html',
                highlight: true
            },
            {
                title: 'The Awful Awful (Little Nugget Diner)',
                desc: 'Finish off a night in downtown Reno with this amazing hole-in-the-wall burger joint',
                link: 'http://awfulawfulburgerreno.wixsite.com/awfulawfulburgerreno',
                highlight: false
            },
            {
                title: 'Stone House Cafe',
                desc: 'Cafe with class: “the best filet mignon I\’ve ever had in my life” - Mike',
                link: 'http://www.stonehousecafereno.com/',
                highlight: true
            },
            {
                title: 'Kimmie\'s Coffee Cup',
                desc: 'Breakfast and lunch in a cute and comfy diner atmosphere',
                link: 'http://breakfastatkimmies.com/',
                highlight: false
            },
            {
                title: 'Peg\'s Glorified Ham and Eggs',
                desc: 'Local favorite for breakfast, popular and friendly',
                link: 'http://eatatpegs.com/',
                highlight: true
            },
            {
                title: 'Thai Lotus',
                desc: 'Yummy Thai food.  Red Curry Pot Stickers are a great appetizer',
                link: 'http://www.thailotusreno.com/',
                highlight: false
            },
            {
                title: 'Simple',
                desc: 'Excellent ice cream sandwiches, just outside Junkee Clothing Exchange',
                link: 'http://www.simpleicecreamsandwiches.com/',
                highlight: false
            },
            {
                title: 'BJ\'s Brewhouse',
                desc: 'Energetic American family-friendly brewhouse with a huge selection (seriously the menu is physically heavy).  Holly suggests the Pink Cadillac cocktail',
                link: 'https://www.bjsrestaurants.com/locations/nv/reno',
                highlight: false
            }
        ],
        'Shopping': [
            {
                title: 'Junkee Clothing Exchange',
                desc: 'Sprawling vintage shop offering an eclectic supply of secondhand apparel, antiques and furniture: "OMG let\'s go to JUNKEES" - Holly pretty much every Saturday',
                link: 'http://www.junkeeclothingexchange.com/',
                highlight: true
            },
            {
                title: 'Recycled Records',
                desc: 'Specializes in used and out-of-print records, tapes, cds, videos and dvds',
                link: 'http://recrecreno.com/',
                highlight: false
            },
            {
                title: 'The Virginia Street Antique Mall',
                desc: 'Oldest and largest antique mall in Nevada',
                link: 'https://www.tripadvisor.com/Attraction_Review-g45992-d6661668-Reviews-Virginia_Street_Antique_Mall-Reno_Nevada.html',
                highlight: false
            },
            {
                title: 'Outlets at Sparks',
                desc: 'Shopping, food, drink, and entertainment hub - "Is that an INDOOR ferris wheel??" (Scheels)',
                link: 'http://www.outletsatsparks.com/',
                highlight: false
            },
            {
                title: 'Meadowood Mall',
                desc: 'Macy\'s, JCP, Sears... anything you need if you forget to pack things like Mike does :)',
                link: 'http://www.simon.com/mall/meadowood-mall',
                highlight: false
            }
        ],
        'Pure Entertainment': [
            {
                title: 'Break Through Reno',
                desc: 'Escape room south of midtown, full of mystery and brain puzzles',
                link: 'https://www.breakthroughreno.com/',
                highlight: false
            },
            {
                title: 'Puzzle Room Reno',
                desc: 'Escape room downtown',
                link: 'http://puzzleroomreno.com/',
                highlight: false
            },
            {
                title: 'Pioneer Underground',
                desc: 'Hilarious stand up comedy located underground downtown Reno',
                link: 'http://pioneercenter.com/underground/',
                highlight: true
            },
            {
                title: 'Galaxy Luxury + IMAX Theater',
                desc: 'Leather recliners, beer, and reserved seating!',
                link: 'https://www.galaxytheatres.com/Browsing/Cinemas/Compare?Cinemas=0000000016',
                highlight: false
            }
        ],
        'Seasonal': [
            {
                title: '28th Annual World Championship Outhouse Races - October 7 & 8, 2017',
                desc: 'Located in Virginia City, about 45 mins south of Reno, teams of three are pitted against each other in an all-out potty race to claim the latrine title!',
                link: 'http://www.visitvirginiacitynv.com/events/world-championship-outhouse-races.html',
                highlight: false
            },
            {
                title: 'Eldorado Great Italian Festival - October 7 & 8, 2017',
                desc: 'Outdoor festival celebration of Italian culture and tradition, grape stomp, sauce cookers and competition, wine walk, farmer’s market, kids’ gelato eating competition, Italian buffet and live entertainment',
                link: 'https://www.visitrenotahoe.com/reno-tahoe/what-to-do/events/special-events/10-07-2017/eldorado-great-italian-festival',
                highlight: false
            }
        ]
    };

    res.render('index', {title: 'Holly and Mike Mason', todo: todo_cats});
});

module.exports = router;
