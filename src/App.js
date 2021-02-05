
import Main from "./views/Main/Main";
import { data } from "./data";

function App() {
  return (
    <div>
      <Main navbar={data.navbar} hero={data.hero} body={data.body} footer={data.footer} />
    </div>
  );
}

export default App;
