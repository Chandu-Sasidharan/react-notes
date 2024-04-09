import Profile from "./components/Layout/profile";
import Button from "./components/UI/Button";

export default function App() {
  return (
    <div
      style={{
        border: "2px solid",
        width: "100%",
        height: "700px",
        margin: "0px auto",
        textAlign: "center",
      }}>
      <h2>Hello Styled Components</h2>
      {/* <Button /> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button>Click me</Button>
        <Button color="blue" size="15px">
          Click here
        </Button>
        <Button color="black" size="10px">
          Click me Out
        </Button>
      </div>
      <Profile />
    </div>
  );
}
