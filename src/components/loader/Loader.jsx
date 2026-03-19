import "./loader.css";

export default function Loader({ progress }) {
  return (
    <div className="loader-container">
      <div className="loader-box">
        <h2>Loading portfolio</h2>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>{progress}%</span>
      </div>
    </div>
  );
}
