const ReducerQ1List = ({ ingredients, deleteIngredients }) => {
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={deleteIngredients(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
