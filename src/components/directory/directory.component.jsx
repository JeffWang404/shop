import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, ...otherProps }) => (
        <DirectoryItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
