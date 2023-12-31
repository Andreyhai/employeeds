import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
  const elements = data.map((item) => {
      const { id, ...itemProps} = item
      return (
          <EmployersListItem
              key={id}
              increase={item.increase}
              rise={item.rise}
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleIncrease={() => onToggleIncrease(id)}
              onToggleRise={() => onToggleRise(id)}
          />
      );
  })
  return (
      <ul className="app-list list-group">
          {elements}
      </ul>
  );
}

export default EmployersList;