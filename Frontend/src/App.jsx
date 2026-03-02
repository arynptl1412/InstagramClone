import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './features/auth/auth.context.jsx';
import Login from './features/auth/pages/Login.jsx';
import Register from './features/auth/pages/Register.jsx';
import Feed from './features/post/pages/Feed.jsx';
import { PostContextProvider } from './features/post/post.context.jsx';
import CreatePost from './features/post/pages/CreatePost.jsx';

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<h1>Welcome to The Home Page.</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App