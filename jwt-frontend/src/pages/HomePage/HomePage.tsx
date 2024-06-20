import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import useFood from '../../hooks/useFood';

const HomePage: React.FC = () => {
  const { foods } = useFood();

  return (
    <div>
      <SearchBar />
      <ul>
        {foods.map((food: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
