import PhoneFrame from "./PhoneFrame";

export default function Home() {
  return (
    <>
      <PhoneFrame
        insideScreenStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <h2>I've said it before and I'll say it again.</h2>
        <p>I've said it before.</p>
      </PhoneFrame>
    </>
  );
}
