function FuncComp({ old, color }) {
  return (
    <div>
      <h1>Welcome to ReactJS from FC</h1>
      <p>Age: {old}</p>
      <p>Color: {color.toUpperCase()}</p>
    </div>
  );
}

export default FuncComp;
