//React Hook
const Header = (props) => {
  return (
    <div className="bg-primary">
      <h1>Header</h1>
      <h1>{props.count}</h1>
    </div>
  );
};

export default Header;