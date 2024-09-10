import React from 'react';
import { useParams } from 'react-router-dom';

const PageView = ({ pages }) => {
  const { id } = useParams();
  const page = pages[id];

  return (
    <div>
      <h1>{page.title}</h1>
      <p>Added by: {page.user}</p>
      <div>{page.content}</div>
    </div>
  );
};

export default PageView;
