import type React from "react";

export const OpenGraphImage: React.FC = () => {
  return (
    <div
      style={{
        height: "630px",
        width: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        backgroundImage: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        position: "relative",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "800px",
          padding: "40px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          VibeyTest
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            marginBottom: "30px",
            lineHeight: 1.3,
          }}
        >
          A lean testing framework for vibes and user experience validation
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            color: "#94a3b8",
          }}
        >
          <div>by vibes.engineering</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "18px",
          color: "#64748b",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
          }}
        />
        <div>Farcaster Mini App</div>
      </div>
    </div>
  );
};
