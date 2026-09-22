import { Link } from 'react-router-dom';
import MorphicNumber from './MorphicNumber';
import './ErrorPage.css';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
}

const ErrorPage = ({ code, title, description }: ErrorPageProps) => {
  return (
    <div className="error-page-wrapper">
      <div className="error-content">
        <MorphicNumber code={code} />
        
        <div className="error-footer">
          <div className="error-text-container">
            <h1 className="error-title">{title}</h1>
            <p className="error-description">{description}</p>
          </div>
          <Link to="/" className="return-btn">RETURN HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
