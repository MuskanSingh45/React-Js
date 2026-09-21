import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const details = [
    {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Deborah",
        "last": "Simmmons"
      },
      "location": {
        "street": {
          "number": 639,
          "name": "New Road"
        },
        "city": "Preston",
        "state": "West Midlands",
        "country": "United Kingdom",
        "postcode": "TN6 5UL",
        "coordinates": {
          "latitude": "-11.1816",
          "longitude": "139.2557"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "deborah.simmmons@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ángel",
        "last": "Esteban"
      },
      "location": {
        "street": {
          "number": 1968,
          "name": "Avenida del Planetario"
        },
        "city": "Vitoria",
        "state": "Cantabria",
        "country": "Spain",
        "postcode": 90449,
        "coordinates": {
          "latitude": "5.7315",
          "longitude": "-8.9041"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "angel.esteban@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Marouan",
        "last": "Ter Heide"
      },
      "location": {
        "street": {
          "number": 8150,
          "name": "Jozefdreef"
        },
        "city": "Laren",
        "state": "Overijssel",
        "country": "Netherlands",
        "postcode": "8080 ZO",
        "coordinates": {
          "latitude": "-75.7878",
          "longitude": "-110.1498"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "marouan.terheide@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Even",
        "last": "Haraldsen"
      },
      "location": {
        "street": {
          "number": 1917,
          "name": "Svalbardveien"
        },
        "city": "Svalia",
        "state": "Buskerud",
        "country": "Norway",
        "postcode": "6149",
        "coordinates": {
          "latitude": "-17.5634",
          "longitude": "-116.7064"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "even.haraldsen@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/54.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ragnar",
        "last": "Kvamme"
      },
      "location": {
        "street": {
          "number": 3486,
          "name": "Lille Frogner allé"
        },
        "city": "Mule",
        "state": "Oslo",
        "country": "Norway",
        "postcode": "1259",
        "coordinates": {
          "latitude": "1.5653",
          "longitude": "31.3731"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "ragnar.kvamme@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Brandon",
        "last": "Peterson"
      },
      "location": {
        "street": {
          "number": 4649,
          "name": "St. John’S Road"
        },
        "city": "Brighton and Hove",
        "state": "County Down",
        "country": "United Kingdom",
        "postcode": "LB4 8XL",
        "coordinates": {
          "latitude": "-85.5528",
          "longitude": "123.0230"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "brandon.peterson@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/53.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Celestine",
        "last": "Lacroix"
      },
      "location": {
        "street": {
          "number": 9960,
          "name": "Rue Louis-Blanqui"
        },
        "city": "Toulon",
        "state": "Essonne",
        "country": "France",
        "postcode": 33400,
        "coordinates": {
          "latitude": "-55.6171",
          "longitude": "21.5648"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "celestine.lacroix@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/80.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ángel",
        "last": "Santos"
      },
      "location": {
        "street": {
          "number": 9227,
          "name": "Calle de Pedro Bosch"
        },
        "city": "Madrid",
        "state": "Cataluña",
        "country": "Spain",
        "postcode": 34690,
        "coordinates": {
          "latitude": "1.1161",
          "longitude": "126.7480"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "angel.santos@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Carmen",
        "last": "Holtet"
      },
      "location": {
        "street": {
          "number": 9188,
          "name": "Grønvoll allé"
        },
        "city": "Børsa",
        "state": "Nordland",
        "country": "Norway",
        "postcode": "6841",
        "coordinates": {
          "latitude": "39.3876",
          "longitude": "172.6764"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "carmen.holtet@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Paige",
        "last": "Smith"
      },
      "location": {
        "street": {
          "number": 865,
          "name": "Esk Street"
        },
        "city": "Whanganui",
        "state": "Northland",
        "country": "New Zealand",
        "postcode": 72524,
        "coordinates": {
          "latitude": "69.5942",
          "longitude": "-23.5015"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "paige.smith@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/66.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Guillermo",
        "last": "Campos"
      },
      "location": {
        "street": {
          "number": 8521,
          "name": "Calle de Alberto Aguilera"
        },
        "city": "San Sebastián",
        "state": "Canarias",
        "country": "Spain",
        "postcode": 86972,
        "coordinates": {
          "latitude": "31.4771",
          "longitude": "-153.2104"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "guillermo.campos@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/26.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Cristina",
        "last": "Diaz"
      },
      "location": {
        "street": {
          "number": 8855,
          "name": "Calle Nebrija"
        },
        "city": "Fuenlabrada",
        "state": "Melilla",
        "country": "Spain",
        "postcode": 99029,
        "coordinates": {
          "latitude": "41.3986",
          "longitude": "-84.3288"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "cristina.diaz@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Lisa",
        "last": "Lewis"
      },
      "location": {
        "street": {
          "number": 8046,
          "name": "Mill Road"
        },
        "city": "Oranmore",
        "state": "Tipperary",
        "country": "Ireland",
        "postcode": 95036,
        "coordinates": {
          "latitude": "56.2246",
          "longitude": "-95.9776"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "lisa.lewis@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/24.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Radimira",
        "last": "Lupiychuk"
      },
      "location": {
        "street": {
          "number": 9568,
          "name": "Giacintova"
        },
        "city": "Pochayiv",
        "state": "Kiyivska",
        "country": "Ukraine",
        "postcode": 50327,
        "coordinates": {
          "latitude": "-5.5329",
          "longitude": "47.3797"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "radimira.lupiychuk@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/49.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
      },
      "nat": "UA"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Asher",
        "last": "Lee"
      },
      "location": {
        "street": {
          "number": 1467,
          "name": "Gloucester Street"
        },
        "city": "Blenheim",
        "state": "Waikato",
        "country": "New Zealand",
        "postcode": 79082,
        "coordinates": {
          "latitude": "48.7911",
          "longitude": "91.9496"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "asher.lee@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/13.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Rathi",
        "last": "Singh"
      },
      "location": {
        "street": {
          "number": 2639,
          "name": "Sao Tome Old Quarter"
        },
        "city": "Noida",
        "state": "Meghalaya",
        "country": "India",
        "postcode": 57598,
        "coordinates": {
          "latitude": "82.4069",
          "longitude": "-163.5224"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "rathi.singh@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/84.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
      },
      "nat": "IN"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sara",
        "last": "Kern"
      },
      "location": {
        "street": {
          "number": 3927,
          "name": "Birkenstraße"
        },
        "city": "Heubach",
        "state": "Bayern",
        "country": "Germany",
        "postcode": 11167,
        "coordinates": {
          "latitude": "66.9718",
          "longitude": "-84.1309"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "sara.kern@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Nebojša",
        "last": "Jevtić"
      },
      "location": {
        "street": {
          "number": 4448,
          "name": "Mlinska"
        },
        "city": "Ruma",
        "state": "Kosovo-Pomoravlje",
        "country": "Serbia",
        "postcode": 42922,
        "coordinates": {
          "latitude": "-52.5519",
          "longitude": "109.3237"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "nebojsa.jevtic@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
      },
      "nat": "RS"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Silas",
        "last": "Møller"
      },
      "location": {
        "street": {
          "number": 3425,
          "name": "Havrevænget"
        },
        "city": "Horsens",
        "state": "Danmark",
        "country": "Denmark",
        "postcode": 82740,
        "coordinates": {
          "latitude": "15.9431",
          "longitude": "129.1915"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "silas.moller@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/85.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Siegrun",
        "last": "Winkelmann"
      },
      "location": {
        "street": {
          "number": 9595,
          "name": "Mittelstraße"
        },
        "city": "Rüdesheim am Rhein",
        "state": "Niedersachsen",
        "country": "Germany",
        "postcode": 79914,
        "coordinates": {
          "latitude": "-62.4090",
          "longitude": "83.0052"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "siegrun.winkelmann@example.com",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
      },
      "nat": "DE"
    }
  ],
  "info": {
    "seed": "a2a645d038b8a564",
    "results": 20,
    "page": 1,
    "version": "1.4"
  }
}
  ];

  const [people, setPeople] = useState(details[0].results)
  const [selectedPerson, setSelectedPerson] = useState(null);

  const move = (person) => {
  setSelectedPerson(person);
};

  return (
  <div className="parent">

    {/* For Selected card */}
    {selectedPerson && (
      <div className="selected-card">
        <Card
          name={`${selectedPerson.name.first} ${selectedPerson.name.last}`}
          gender={selectedPerson.gender}
          location={selectedPerson.location.city}
          email={selectedPerson.email}
          picture={selectedPerson.picture.large}
          onCardClick={() => setSelectedPerson(null)}
        />
      </div>
    )}

    {/* For All cards */}
    <div className="cards">
      {people.map((elem, idx) => {
  return (
    <div key={idx}>
      <Card
        name={`${elem.name.first} ${elem.name.last}`}
        gender={elem.gender}
        location={elem.location.city}
        email={elem.email}
        picture={elem.picture.large}
        onCardClick={() => move(elem)}
      />
    </div>
  )
})}
    </div>

  </div>
);
}

export default App
