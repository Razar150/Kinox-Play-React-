import React from 'react';
import YouTube from 'react-youtube';

function Modal({ trailerUrl, onClose }) {
  const opts = {
    height: '390',
    width: '800px',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <YouTube videoId={trailerUrl} opts={opts} />
        <div className="modal__buttons">
          <button onClick={onClose}>Close</button>
          <button>More Info</button>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
