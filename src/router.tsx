import { createBrowserRouter, Navigate } from 'react-router-dom';

import { MainLayOut } from './layouts/MainLayOut.tsx';
import { CommentsPage } from './pages/CommentsPage.tsx';
import { PostCommentsPage } from './pages/PostCommentsPage.tsx';
import { PostsPage } from './pages/PostsPage.tsx';
import { UserPostsPage } from './pages/UserPostsPage.tsx';
import { UsersPage } from './pages/UsersPage.tsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayOut />,
    children: [
      { index: true, element: <Navigate to={'users'} /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'users/:userId/posts', element: <UserPostsPage /> },
      { path: 'comments', element: <CommentsPage /> },
      { path: 'posts/:postId/comments', element: <PostCommentsPage /> },
    ],
  },
]);

export { router };
