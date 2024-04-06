import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";
import {challenges} from "./data.js";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          {challenges.map((item) => (
              <TimerChallenge key={item.title} title={item.title} targetTime={item.targetTime}/>
          ))}
      </div>
    </>
  );
}

export default App;
