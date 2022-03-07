import React from 'react';
// import Demo from "./components/Demo";
import Count from "./container/Count";
import store from "./redux/store";
function App() {
    return (
        <>
          <Count store={store}/>
        </>
    );
}

export default App;