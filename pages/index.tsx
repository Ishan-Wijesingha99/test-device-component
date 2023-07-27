import PhoneFrame from "./PhoneFrame";

export default function Home() {
  return (
    <>
      <PhoneFrame
        insideScreenStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/blnq-nonprod.appspot.com/o/card_email_previews%2FJ7T5ICCgW7f5?alt=media"
          alt=""
          style={{
            maxWidth: "80%",
            maxHeight: "90%",
          }}
        />
      </PhoneFrame>
    </>
  );
}
