import {HiCodeBracket, HiChartBar, HiBuildingLibrary} from "react-icons/hi2";
import consumerImg from "./images/pexels-cottonbro-studio-6068975.jpg";
export const projects = [
  {
    title: "Monster Hunter Rise Web Scraper",
    subtitle: "Python and Scrapy",
    description:
      "This project was developed as a support to my other project I am currently working on using both Python and the Scrapy framework to output a JSON File",
    image:
      "https://user-images.githubusercontent.com/49799250/140358923-46de9e74-52e8-4319-b6da-896052ed5987.jpg",
    link: "https://github.com/Hiroshiboy/MHRWikiScraper",
  },
  {
    title: "Consumer Behaviour",
    subtitle: "Python, Pandas, MatplotLib, NumPy, Tableau",
    description:
      "Work in Progress! This project focuses on analyzing consumer behavior from a dataset from Kaggle and produce dashboards and stories using Tableau to find trends or better understand the store's consumer behaviour. ",
    image: consumerImg,
    link: "https://github.com/Hiroshiboy/ConsumerBehaviour",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    description: "SQL, Python, Javascript, Swift, HTML, CSS, C#, C++, C",
    icon: HiCodeBracket,
  },
  {
    title: "Data Visualization",
    description: "Visualizing data using Tableau and MatPlotLib",
    icon: HiChartBar
  },
  {
    title: "Programming Libraries",
    description: "Pandas, MatPlotLib, NumPy, SciKit-Learn, TensorFlow",
    icon: HiBuildingLibrary
  },
  

];
