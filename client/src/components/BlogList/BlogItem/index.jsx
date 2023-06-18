import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    backgroundColor,
  },
}) => {
  return (
    <div className='blogItem-wrap' style={{ backgroundColor }}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip className='blogItem-chip' label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <Link className='blogItem-link' to={`/blog/${id}`}>
         Read Here
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;