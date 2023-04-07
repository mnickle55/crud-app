import './PageNotFound.css'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to='/inventory'>Home</Link>
    </div>
  );
}

export default PageNotFound