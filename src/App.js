import Adverts from "./Adverts";
import { ads } from "./Adverts.test.js";

function App() {
  return (
    <div>
      <p>Nanny Now</p>
      {Adverts(ads)}
    </div>
  );
}

export default App;
