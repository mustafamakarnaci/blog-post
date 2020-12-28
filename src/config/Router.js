import AddNewPost from '../screens/AddNewPost/AddNewPost';
import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import PostDetail from '../screens/PostDetail/PostDetail';
import SignUp from '../screens/SignUp/SignUp';
import Profile from '../screens/Profile/Profile';
import PostsScreen from '../screens/PostsScreen/PostsScreen';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <PostsScreen/>,
    title: 'abc',
    isLink: false, 
    isPrivate: true,
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home/>,
    title: 'Home',
    isLink: false, 
    isPrivate: false,
  },
  {
    path: '/login',
    component: () => <Login />,
    title: 'Login',
    isLink: true,
    isPrivate: false,
  },

  {
    path: '/posts/:postId',
    component: () => <PostDetail />,
    title: 'Post Detail',
    isPrivate: true,
    exact: true,
  },
  {
    path: '/signup',
    component: () => <SignUp />,
    title: 'Sign Up',
    isLink: true,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: () => <Dashboard />,
    title: 'Dashboard',
    isLink: true,
    isPrivate: true,
  },
  {
    path: '/user/:userId',
    component: () => <Profile />,
    title: 'Profile',
    isLink: true,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/user/new',
    component: () => <AddNewPost />,
    title: 'Create Post',
    isLink: true,
    isPrivate: true,
    exact: true,
  },

];
