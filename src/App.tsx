import "./App.css";
import Header from "./components/Header";
import PasswordField from "./components/PasswordField";
import { PasswordOptions } from "./types/passwordFieldTypes";

function App() {
  return (
    <div className="App">
      <Header title="Password Component" />
      <PasswordField
        options={[
          PasswordOptions.HasNumber,
          PasswordOptions.hasSymbol,
          PasswordOptions.HasUppercase,
          PasswordOptions.hasNoConsecutives,
        ]}
      />
    </div>
  );
}

export default App;
