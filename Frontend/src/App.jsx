import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './features/auth/auth.context.jsx';
import Login from './features/auth/pages/Login.jsx';
import Register from './features/auth/pages/Register.jsx';
import Feed from './features/post/pages/Feed.jsx';
import { PostContextProvider } from './features/post/post.context.jsx';

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
          </Routes>
        </BrowserRouter>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App