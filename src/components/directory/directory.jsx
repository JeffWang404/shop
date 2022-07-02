import CategoryItem from '../category-item/category-item';
import './directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, ...otherProps }) => (
        <CategoryItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
