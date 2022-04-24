import proBlog from '../assets/images/pro-blog.jpg'
import proFilm from '../assets/images/pro-film.jpg'
import proMatch from '../assets/images/pro-match.jpg'
import proWeather from '../assets/images/pro-weather.jpg'
import proNote from '../assets/images/pro-note.jpg'
import proPlanner from '../assets/images/pro-planner.jpg'
const projects = [
  {
    title: 'Tech Blog',
    tech: ['MVC', 'Handlebars', 'Sequelize', 'express'],
    repo: 'https://github.com/Yanbud/small-topic',
    demo: 'https://small-topic.herokuapp.com/',
    src: proBlog,
    alt: 'Tech Blog',
    id: 1
  },
  {
    title: 'Film Bites',
    tech: ['LocalStorage', 'OMDB API', 'TheMealDB API'],
    repo: 'https://github.com/Yanbud/Film-Bites',
    demo: 'https://mbarrientos1129.github.io/mighty-mustangs-Project-1-Group/',
    src: proFilm,
    alt: 'Film Bites',
    id: 2
  },
  {
    title: 'Match Maker',
    tech: ['Node', 'DotEnv', 'Express', 'MySQL2', 'Handlebars'],
    repo: 'https://github.com/Yanbud/Blue-Sky-Farmers',
    demo: 'https://radiant-caverns-76977.herokuapp.com/',
    src: proMatch,
    alt: 'Match Maker',
    id: 3
  },
  {
    title: 'Weather Dashboard',
    tech: ['JSON', 'LocalStorage', 'OpenWeather API'],
    repo: 'https://github.com/Yanbud/weather-dashboard',
    demo: 'https://yanbud.github.io/weather-dashboard/',
    src: proWeather,
    alt: 'Weather Dashboard',
    id: 4,
  },

  {
    title: 'Note Taker',
    tech: ['APIs', 'HTML5', 'Javascript', 'Express', 'Node'],
    repo: 'https://github.com/Yanbud/note-taker',
    demo: 'https://small-note.herokuapp.com',
    src: proNote,
    alt: 'Note Taker',
    id: 5
  },
  {
    title: 'Daily Planner',
    tech: ['jQuery', 'Bootstrap', 'Moment.js'],
    repo: 'https://github.com/Yanbud/work-day-scheduler',
    demo: 'https://yanbud.github.io/work-day-scheduler/',
    src: proPlanner,
    alt: 'Daily Planner',
    id: 6
  },

];
export default projects;
