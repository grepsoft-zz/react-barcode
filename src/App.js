import "./styles.css";
import PDF417 from "pdf417-generator";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const BarcodeCanvas = styled.canvas`
  width: 100%;
`;

const CanvasContainer = styled.div`
  width: 200px;
  border-radius: 3px;
  padding: 10px;
  background-color: #fff;
`;

export default function App() {
  const canvas = useRef(null);
  const value = "Grepsoft";

  useEffect(() => {
    if (canvas.current) {
      PDF417.draw(value, canvas.current, 3);
    }
  }, [canvas, value]);

  return (
    <div className="App">
      <h1>{value}</h1>
      <CanvasContainer>
        <BarcodeCanvas ref={canvas} />
      </CanvasContainer>
    </div>
  );
}
