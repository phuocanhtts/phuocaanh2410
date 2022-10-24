import "./App.css";
import MainForm from "./components/layout/MainForm";
import { store } from "./components/redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainForm />
      </Provider>
    </div>
  );
}

export default App;
