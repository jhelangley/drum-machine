import kits from "./kits";

const Screen = ({ bank, currentPad, volume, mute }) => {
  return (
    <div id="screen">
      BANK: {bank} {kits[bank].name}
      <br />
      PAD: &nbsp;{currentPad}
      <br />
      VOL: &nbsp;{volume}
      <br />
      {mute ? (
        <span style={{ color: "rgba(0, 0, 0, 0.3);" }}>MUTE: On</span>
      ) : (
        <span id="mute">MUTE: Off</span>
      )}
    </div>
  );
};

export default Screen;
