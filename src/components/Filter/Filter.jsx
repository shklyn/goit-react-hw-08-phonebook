import { InputFilter, LabelFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        placeholder="Enter name of contact"
        value={filter}
        onChange={onFilter}
      ></InputFilter>
    </LabelFilter>
  );
};