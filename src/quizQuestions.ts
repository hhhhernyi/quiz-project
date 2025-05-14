// use interface to describe what an object should look like - it dictates the properties of an object, what data types the properties should be

interface Answer {
  0: string;
  1: 'correctAnswer' | 'wrongAnswer';
}

interface Category {
  name: string;
  question: string;
  answer: Answer[];
}

export interface Question {
  bank: number | string; // Can be number initially, then string with comma
  bankCorrect: string;
  category: Category[];
}

interface NewGames {
  bank: number;
  question: Question[];
}

const newGames: NewGames = {
  bank: 0,
  question: [
    {
      bank: 0,
      bankCorrect: '1,000',
      category: [
        {
          name: "Politics",
          question: "Who is Singapore's longest serving Prime minister?",
          answer: [["Lee Kuan Yew",'correctAnswer'],["Goh Chok Tong",'wrongAnswer'],["Lee Hsien Loong",'wrongAnswer'],["Lawrence Wong",'wrongAnswer'],]
        },
        {
          name: "History",
          question: "From which Country did Singapore Gain Independence in 1965?",
          answer: [['Malaysia','correctAnswer'],['Indonesia','wrongAnswer'],['Thailand','wrongAnswer'],['Myanmar','wrongAnswer'],]
        },
        {
          name: "Geography",
          question: "What is The Name of Singapore's Highest Point?",
          answer: [['Bukit Timah Hill','correctAnswer'],['West Coast Hill','wrongAnswer'],['Redhill','wrongAnswer'],['Mount Jurong','wrongAnswer'],]
        },
        {
          name: "Dates",
          question: "When is Singapore's national day?",
          answer: [['August 9th','correctAnswer'],['October 14th','wrongAnswer'],['June 1st','wrongAnswer'],['April 20th','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '1,000',
      bankCorrect: '2,500',
      category: [
        {
          name: "Facts",
          question: "What color is the Singapore Citizen IC?",
          answer: [["Pink",'correctAnswer'],["Blue",'wrongAnswer'],["Yellow",'wrongAnswer'],["Green",'wrongAnswer'],]
        },
        {
          name: "Landmarks",
          question: "What is the name of Singapore's main airport?",
          answer: [['Changi Airport','correctAnswer'],['Seletar Airport','wrongAnswer'],['Tengah Airport','wrongAnswer'],['Tuas Airport','wrongAnswer'],]
        },
        {
          name: "Geography",
          question: "What is The Capital City of Singapore?",
          answer: [['Singapore','correctAnswer'],['Orchard','wrongAnswer'],['Raffles Place','wrongAnswer'],['Sentosa','wrongAnswer'],]
        },
        {
          name: "Icons",
          question: "What is Singapore's icon that has a lion head and a mermaid body called?",
          answer: [['Merlion','correctAnswer'],['Lion fish','wrongAnswer'],['Singamaid','wrongAnswer'],['Mersinga','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '2,500',
      bankCorrect: '5,000',
      category: [
        {
          name: "History",
          question: "Who was The British Administrator who Established Singapore as a British Colony in 1819?",
          answer: [["Sir Stamford Raffles",'correctAnswer'],["Sir William Farquhar",'wrongAnswer'],["Robert Fullerton",'wrongAnswer'],["Ronald Macpherson",'wrongAnswer'],]
        },
        {
          name: "Symbols",
          question: "What does the red colour on our national flag represent?",
          answer: [['Universal Brotherhood and Equality of Man','correctAnswer'],['Progress and Prosperity','wrongAnswer'],['Everlasting Peace and Justice for Man','wrongAnswer'],['Young Nation on the rise','wrongAnswer'],]
        },
        {
          name: "Abbreviation",
          question: "What does MRT stand for?",
          answer: [['Mass Rapid Transit','correctAnswer'],['Mass Rapid Travel','wrongAnswer'],['Mass Rapid Transport','wrongAnswer'],['Mass Rail Transport','wrongAnswer'],]
        },
        {
          name: "Food",
          question: "What Fruit in Singapore is known as the King Of Fruits?",
          answer: [['Durian','correctAnswer'],['Jackfruit','wrongAnswer'],['Mangosteen','wrongAnswer'],['Apple','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '5,000',
      bankCorrect: '10,000',
      category: [
        {
          name: "Language",
          question: "What is the official national language of Singapore?",
          answer: [["Malay",'correctAnswer'],["Mandarin",'wrongAnswer'],["English",'wrongAnswer'],["Singlish",'wrongAnswer'],]
        },
        {
          name: "History",
          question: "In which year did Singapore fall to the Japanese in World War Two?",
          answer: [['1942','correctAnswer'],['1943','wrongAnswer'],['1945','wrongAnswer'],['1947','wrongAnswer'],]
        },
        {
          name: "Sports",
          question: "Who is Singapore's first Olympian?",
          answer: [['LLoyd Valberg (High Jump)','correctAnswer'],['Tan Howe Liang (Weightlifting)','wrongAnswer'],['Feng Tianwei (Ping Pong)','wrongAnswer'],['Joseph Schooling (Swimming)','wrongAnswer'],]
        },
        {
          name: "Food",
          question: "What is the national drink of Singapore",
          answer: [['The Singapore Sling','correctAnswer'],['Tiger Beer','wrongAnswer'],['Pokka Green Tea','wrongAnswer'],['Kopi Peng','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '10,000',
      bankCorrect: '25,000',
      category: [
        {
          name: "Movies",
          question: "Which hawker centre was featured in the movie Crazy Rich Asians?",
          answer: [["Newton Food Centre",'correctAnswer'],["Chomp Chomp",'wrongAnswer'],["East Coast Lagoon",'wrongAnswer'],["Maxwell Food Centre",'wrongAnswer'],]
        },
        {
          name: "NDP",
          question: "What is the theme of Singapore NDP in 2023?",
          answer: [['Onward As One','correctAnswer'],['We Are Singapore','wrongAnswer'],['Together, Our Singapore Spirit','wrongAnswer'],['A Stronger Singapore','wrongAnswer'],]
        },
        {
          name: "Nature",
          question: "What is the name of Singapore's national flower?",
          answer: [['Vanda Miss Joaquim','correctAnswer'],['Rafflesia','wrongAnswer'],['Hibiscus','wrongAnswer'],['Malayan Ixora','wrongAnswer'],]
        },
        {
          name: "Transport",
          question: "Which MRT Station has the longest escalator?",
          answer: [['Bras Basah','correctAnswer'],['Stadium','wrongAnswer'],['Raffles Place','wrongAnswer'],['Redhill','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '25,000',
      bankCorrect: '50,000',
      category: [
        {
          name: "Locations",
          question: "Which of these streets in Singapore do not exist?",
          answer: [["Punggol Street",'correctAnswer'],["Mandalay Street",'wrongAnswer'],["China Street",'wrongAnswer'],["Club Street",'wrongAnswer'],]
        },
        {
          name: "Awards",
          question: "How many times has Singapore's Changi Airport been awarded the title of Skytrax's Best Airport in the World?",
          answer: [['10','correctAnswer'],['5','wrongAnswer'],['8','wrongAnswer'],['7','wrongAnswer'],]
        },
        {
          name: "Food",
          question: "Which is the oldest hawker centre in Singapore?",
          answer: [['Lau Pa Sat','correctAnswer'],["People's Park Food Centre",'wrongAnswer'],['Maxwell Food Centre','wrongAnswer'],['Tekka Market','wrongAnswer'],]
        },
        {
          name: "Date",
          question: "In which year was the Istana built?",
          answer: [['1869','correctAnswer'],['1879','wrongAnswer'],['1868','wrongAnswer'],['1872','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '50,000',
      bankCorrect: '100,000',
      category: [
        {
          name: "Arts",
          question: "Which is the oldest Museum in Singapore?",
          answer: [["The National Museum of Singapore",'correctAnswer'],["ArtScience Museum",'wrongAnswer'],["Singapore Art Museum",'wrongAnswer'],["National Gallery Singapore",'wrongAnswer'],]
        },
        {
          name: "Politics",
          question: "Who was the first elected president of Singapore?",
          answer: [['Ong Teng Cheong','correctAnswer'],['Yusof Ishak','wrongAnswer'],['Wee Kim Wee','wrongAnswer'],['Benjamin Sheares','wrongAnswer'],]
        },
        {
          name: "Symbols",
          question: "The five stars on Singapore's flag represent?",
          answer: [['Democracy, Peace, Progress, Justice, Equality','correctAnswer'],['Democracy, Peace, Progress, Meritocracy, Equality','wrongAnswer'],['Democracy, Harmony, Progress, Justice, Equality','wrongAnswer'],['Democracy, Peace, Progress, Justice, Respect','wrongAnswer'],]
        },
        {
          name: "Culture",
          question: "How many UNESCO world heritage sites are there in Singapore?",
          answer: [['1','correctAnswer'],['5','wrongAnswer'],['8','wrongAnswer'],['3','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '100,000',
      bankCorrect: '250,000',
      category: [
        {
          name: "Population",
          question: "Which town in Singapore has the largest population in 2024?",
          answer: [["Bedok",'correctAnswer'],["Sengkang",'wrongAnswer'],["Jurong West",'wrongAnswer'],["Tampines",'wrongAnswer'],]
        },
        {
          name: "Landmarks",
          question: "Which is the oldest bridge in Singapore?",
          answer: [['Cavenagh Bridge','correctAnswer'],['Benjamin Sheares Bridge','wrongAnswer'],['Jiak Kim Bridge','wrongAnswer'],['Anderson Bridge','wrongAnswer'],]
        },
        {
          name: "Buildings",
          question: "What is the maximum height of skyscrapers allowed in Singapore?",
          answer: [['280m','correctAnswer'],['330m','wrongAnswer'],['420m','wrongAnswer'],['300m','wrongAnswer'],]
        },
        {
          name: "Sports",
          question: "In 2016 swimmer Joseph Schooling won Singapore's first Olympic Gold medal in which event?",
          answer: [['100m Butterfly','correctAnswer'],['200m Freestyle','wrongAnswer'],['200m Butterfly','wrongAnswer'],['50m Freestyle','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '250,000',
      bankCorrect: '500,000',
      category: [
        {
          name: "Buildings",
          question: "Which is the highest building in Singapore?",
          answer: [["Tanjong Pagar Centre",'correctAnswer'],["One Raffles Place",'wrongAnswer'],["Marina Bay Sands",'wrongAnswer'],["100AM Mall",'wrongAnswer'],]
        },
        {
          name: "Locations",
          question: "On which road can you find the National Gallery Singapore?",
          answer: [['St. Andrews Road','correctAnswer'],['Parliament Road','wrongAnswer'],['Stamford Road','wrongAnswer'],['Bayfront Avenue','wrongAnswer'],]
        },
        {
          name: "Transport",
          question: "Which public bus service has the longest route?",
          answer: [['Bus No. 858','correctAnswer'],['Bus No. 961','wrongAnswer'],['Bus No. 171','wrongAnswer'],['Bus No. 31','wrongAnswer'],]
        },
        {
          name: "School",
          question: "Which of these schools is the oldest girls' school in Singapore?",
          answer: [["St. Margaret's School",'correctAnswer'],['Nanyang Girls School','wrongAnswer'],['Raffles Girls School','wrongAnswer'],['Singapore Chinese Girls School','wrongAnswer'],]
        }
      ]
    },
    {
      bank: '500,000',
      bankCorrect: '1,000,000',
      category: [
        {
          name: "Sports",
          question: "What is The Name of The Singaporean Football Club that Has Won The Most Singapore Premier League Titles?",
          answer: [["Albirex Niigata Singapore",'correctAnswer'],["Lion City Sailors",'wrongAnswer'],["Tampines Rovers FC",'wrongAnswer'],["Geylang United",'wrongAnswer'],]
        },
        {
          name: "Transport",
          question: "Which MRT line has the most stations in Singapore?",
          answer: [['East-West Line (Green)','correctAnswer'],['Downtown Line (Blue)','wrongAnswer'],['Thomson-East Coast Line (Brown)','wrongAnswer'],['Circle Line (Yellow)','wrongAnswer'],]
        },
        {
          name: "Politics",
          question: "How many constituencies does Singapore have?",
          answer: [['29','correctAnswer'],['32','wrongAnswer'],['25','wrongAnswer'],['39','wrongAnswer'],]
        },
        {
          name: "International",
          question: "Which organisation did Singapore founded?",
          answer: [['World Toilet Organization','correctAnswer'],['World Customs Organization','wrongAnswer'],['Organization for Economic Co-operation and Development','wrongAnswer'],['International Coffee Organization','wrongAnswer'],]
        }
      ]
    }
  ]
};

export default newGames;