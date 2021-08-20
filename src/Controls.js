import kits from "./kits";

const Controls = ({ setVolume, setBank, setMute, volume, bank }) => {
  return (
    <div id="controls">
      <div id="select-bank">
        <button
          className="control-button"
          onClick={() => (kits[bank - 1] ? setBank(bank - 1) : null)}
        >
          &lt;
        </button>
        <button
          className="control-button"
          onClick={() => (kits[bank + 1] ? setBank(bank + 1) : null)}
        >
          &gt;
        </button>
        <br />
        <br />
        <label>SELECT BANK</label>
      </div>
      <div id="volume-control">
        <div
          style={{ transform: "rotate(-90deg)", width: "110px" }}
          className="slidecontainer"
        >
          <input
            className="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>

        <label>
          <span
            style={{
              position: "absolute",
              top: "270px",
              width: "100%",
              left: "0px",
            }}
          >
            VOLUME
          </span>
        </label>
      </div>
      <div id="mute-control">
        <label className="toggle">
          <input
            className="control-button"
            type="checkbox"
            onChange={(e) => setMute(e.target.checked)}
          ></input>
          <span className="toggle-slider"></span>
        </label>
        <br />
        <br />
        MUTE
      </div>
    </div>
  );
};

export default Controls;
