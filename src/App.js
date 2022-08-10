import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="./quotes"></Route>
        <Route path="/quotes:/quoteId"></Route>
        <Route path="./newQuote"></Route>
      </Switch>
    </div>
  );
}

export default App;