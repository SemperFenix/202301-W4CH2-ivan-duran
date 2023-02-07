import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <AppRouter menuOptions={menuOptions}></AppRouter>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
