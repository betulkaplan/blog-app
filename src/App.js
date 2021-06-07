import './App.css';
import Navbar from './components/Navbar';
import PostsContainer from './components/PostsContainer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NewPost from './components/NewPost';

function App() {
  const dummyArray = [
    {
      banner:
        'https://www.ilgisel.com/wp-content/uploads/2019/08/html-dersleri.jpg',
      title: 'HTML',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner: 'https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
      title: 'JavaScript',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--zPAa0uAq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/elytski1o23ybosxmors.jpg',
      title: 'CSS',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner: 'https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg',
      title: 'React',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner: '',
      title: 'Angular',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner: '',
      title: 'Vue.js',
      date: '',
      author: 'betulkaplan{@gmail.com',
    },
    {
      banner: '',
      title: 'Semantic UI',
      date: '',
      author: '',
    },
    {
      banner: '',
      title: 'Material UI',
      date: '',
      author: '',
    },
    {
      banner: '',
      title: 'Firebase',
      date: '',
      author: '',
    },
  ];
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/new-post">
            <NewPost />
          </Route>
          <Route>
            <PostsContainer posts={dummyArray} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
