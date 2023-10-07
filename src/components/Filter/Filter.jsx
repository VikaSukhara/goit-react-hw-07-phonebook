import { filter } from '../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const findUser = ({ target: { value } }) => {
    dispatch(filter(value));
  };

  // const filters = useSelector(state => state.filterStore);
  // const dispatch = useDispatch();
  // const filtered = event => dispatch(filter(event.target.value));
  // console.log(filtered);

  return (
    <div>
      <p
        style={{
          fontSize: '18px',
        }}
      >
        Find contact by name
      </p>
      <input
        type="text"
        onChange={findUser}
        style={{
          border: '1px solid black',
          padding: '3px 3px',
          borderRadius: '7px',
        }}
      />
    </div>
  );
};

// export const Filter = ({ find }) => {

//   const findContact = event => {
//     setFilter(event.target.value);
//   };

//   return (
//     <div>
//       <p
//         style={{
//           fontSize: '18px',
//         }}
//       >
//         Find contact by name
//       </p>
//       <input
//         type="text"
//         onChange={find}
//         style={{
//           border: '1px solid black',
//           padding: '3px 3px',
//           borderRadius: '7px',
//         }}
//       />
//     </div>
//   );
// };
