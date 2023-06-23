import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
// import { Err } from 'styles/StyleForm.styled';

export const Error = () => {
  const error = useSelector(selectError);
  return <p>{error}</p>;
};

// export const Error = () => {
//   const error = useSelector(selectError);
//   return <Err>{error}</Err>;
// };
