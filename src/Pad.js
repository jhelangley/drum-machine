const Pad = (props) => {
  const { sample } = props;

  return (
    <div>
      <audio
        src={sample.path}
        id={`${sample.keycode}-pad`}
        type="audio/wav"
        preload="auto"
        data-name={sample.name}
      />
      <button
        id={`${sample.keycode}-button`}
        className={sample.path !== "" ? "pad-button" : "pad-button inactive"}
        onClick={() => {
          const element = document.getElementById(`${sample.keycode}-pad`);
          if (sample.keycode === "d") {
            const openhh = document.getElementById("f-pad");
            if (!openhh.paused) openhh.pause();
          }
          element.currentTime = 0;
          element.play();
          props.setCurrentPad(
            `${sample.keycode.toUpperCase()} ${element.dataset.name}`
          );
        }}
      >
        {sample.keycode}
      </button>
    </div>
  );
};

export default Pad;
