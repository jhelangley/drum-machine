import Pads from "./Pads";
import Controls from "./Controls";
import Screen from "./Screen";
import { useState } from "react";

const Machine = () => {
  const [bank, setBank] = useState(0);
  const [currentPad, setCurrentPad] = useState("");
  const [volume, setVolume] = useState(100);
  const [mute, setMute] = useState(false);

  return (
    <div id="machine">
      <Pads
        setCurrentPad={setCurrentPad}
        bank={bank}
        volume={volume}
        mute={mute}
      />
      <Screen bank={bank} currentPad={currentPad} volume={volume} mute={mute} />
      <Controls
        bank={bank}
        setBank={setBank}
        volume={volume}
        setVolume={setVolume}
        setMute={setMute}
      />
    </div>
  );
};

export default Machine;
