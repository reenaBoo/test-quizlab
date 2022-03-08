import React from 'react';
import { StyledList } from './PostsList.styles';
import Post from '../Post/Post';

function PostsList({ allPosts }: any) {
  return (
    <>
      <StyledList>
        {allPosts
          .map((post: { name: string; message: string }, index: any) => {
            return <Post key={`post_${index}`} name={post.name} message={post.message} index={index} />;
          })
          .reverse()}
      </StyledList>
    </>
  );
}

export default PostsList;
