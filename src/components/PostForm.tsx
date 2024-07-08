import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { postsService } from '../services/postsService.ts';
import { IPost } from '../types/postInterface.ts';
import { postValidator } from '../validators/postValidator.ts';

const userId: number = 1;

const PostForm = () => {
  const [successful, setSuccessful] = useState<string>(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { isValid, errors },
  } = useForm<Omit<IPost, 'userId' | 'id'>>({ mode: 'onBlur', resolver: joiResolver(postValidator) });

  const createOnePost = async (post: Omit<IPost, 'userId' | 'id'>) => {
    await postsService.createPost({ ...post, userId });
    setSuccessful('post created');
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(createOnePost)}>
        <input type="text" placeholder="title" {...register('title')} />
        {errors.title && <p>{errors.title.message}</p>}
        <input type="text" placeholder="body" {...register('body')} />
        {errors.body && <p>{errors.body.message}</p>}
        <button disabled={!isValid}>create</button>
      </form>
      {successful && <p>{successful}</p>}
    </>
  );
};

export { PostForm };
