import React from "react";

const levelColor = {
  Easy: "#4da2f7",
  Medium: "#ffaf5e",
  Hard: "#f765a0",
};

const levelBorder = {
  Easy: "#1976d2",
  Medium: "#f57c00",
  Hard: "#c2185b",
};

const levelBackground = {
  Easy: "#003561",
  Medium: "#4f3002",
  Hard: "#4a0b21",
};

const Chip = ({ level, url }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1.5em",
        marginBottom: "-1em",
        width: "100%",
      }}
    >
      <p>
        Issue:{" "}
        <a
          href={url}
          target="_blank"
          style={{ color: "#0285dc", textDecoration: "underline" }}
        >
          {url}
        </a>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          textAlign: "center",
          width: "130px",
          fontWeight: "bold",
          padding: "0.35em 0.5em",
          borderRadius: "9999px",
          backgroundColor: levelBackground[level],
          border: "2px solid",
          borderColor: levelBorder[level],
          color: levelColor[level],
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
          }}
        >
          Level: {level}
        </div>
      </div>
    </div>
  );
};

export default Chip;
