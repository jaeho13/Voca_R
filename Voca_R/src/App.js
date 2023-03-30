import DayList from "./Component/DayList";
import Header from "./Component/Header";
import Day from "./Component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./Component/EmptyPage";

function App() {
  return (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/"> 
        <DayList />
      </Route>
      <Route path="/day/:day">
        <Day />
      </Route>
      <Route>
        <EmptyPage />
      </Route>
    </Switch>
  </div>
  )
}

export default App;
