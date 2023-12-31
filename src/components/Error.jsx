import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { Err } from 'Styles/StyleForm.styled';

export const Error = () => {
  const error = useSelector(selectError);
  return <Err>{error}</Err>;
};
