import Calculator from "./src/calculatorScreen";
import { Provider } from "react-redux";
import store from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}
