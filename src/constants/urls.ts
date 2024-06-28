const baseURL = 'https://dummyjson.com';

const users = '/users';
const posts = '/posts';

const urls = {
  users,
  posts: (id: string) => `${posts}/user/${id}`,
};

export { baseURL, urls };
