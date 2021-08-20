import { useEffect } from "react";
import kits from "./kits";
import Pad from "./Pad";

const Pads = ({ setCurrentPad, bank, volume, mute }) => {
  useEffect(() => {
    document.addEventListener("keydown", keypress);

    return () => document.removeEventListener("keydown", keypress);
  });
  const keypress = (e) => {
    const pad = document.getElementById(`${e.key}-pad`);
    if (!pad) return;
    if (e.key === "d") {
      const openhh = document.getElementById("f-pad");
      if (!openhh.paused) openhh.pause();
    }
    pad.currentTime = 0;
    pad.volume = volume / 100;
    if (!mute) pad.play();
    setCurrentPad(`${e.key.toUpperCase()} ${pad.dataset.name}`);
    document.getElementById(`${e.key}-button`).classList.add("pressed");
    setTimeout(
      () =>
        document.getElementById(`${e.key}-button`).classList.remove("pressed"),
      50
    );
  };

  return (
    <div id="pads">
      {kits[bank].samples.map((sample) => (
        <Pad sample={sample} setCurrentPad={setCurrentPad} />
      ))}
    </div>
  );
};

export default Pads;
