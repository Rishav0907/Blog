// import './App.css';
import BlogTopicsScreen from "./Screens/BlogTopicsScreen";
import FirstPage from "./Screens/FirstPage";
import ThirdScreen from "./Screens/ThirdScreen";
import MyInfoScreen from "./Screens/MyInfoScreen";
import ContactScreen from "./Screens/ContactScreen";
function App() {
  return (
    <div className="App">
      <FirstPage />
      <BlogTopicsScreen />
      <ThirdScreen />
      <MyInfoScreen />
      <ContactScreen />
    </div>
  );
}

export default App;
