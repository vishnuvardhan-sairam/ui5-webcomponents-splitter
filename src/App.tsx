import { SplitterElement, SplitterLayout } from "@ui5/webcomponents-react";
import "./App.css";

function App() {
  return (
    <SplitterLayout className="splitterLayout">
      <SplitterElement minSize={360} size={360} className="splitterLeft">hello</SplitterElement>
      <SplitterElement className="splitterRight">world</SplitterElement>
    </SplitterLayout>
  );
}

export default App;
