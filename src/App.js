import Adverts from "./Adverts";
import { ads } from "./Adverts.test.js";

function App() {
  return (
    <div>
      <h1 id="title">Nanny Now</h1>
      {Adverts(ads)}
    </div>
  );
}

export default App;
