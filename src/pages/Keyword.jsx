import { useLocation } from 'react-router-dom';

const Keyword = () => {
  const location = useLocation();
  const title = location.pathname.slice(1);

  return <div>{title}</div>;
};

export default Keyword;
