import logo from "./logo.svg";
import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Button1 />
        <Button2 />
      </div>
    </Provider>
  );
}

export default App;
