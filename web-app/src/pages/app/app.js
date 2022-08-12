import LeftSideMenu from "../../components/LeftSideMenu/LeftSideMenu";


const App = (props) => {

  const mainContentView = <div></div>;

  return (
    <div>
      {mainContentView}
      <LeftSideMenu mainContentView={mainContentView} />
    </div>
  );
}

export default App;