import {createRoot} from "react-dom/client";
import React from "react";
// import 'katex/dist/katex.min.css';
// import {InlineMath, BlockMath} from 'react-katex';

// import 'katex/dist/katex.min.css'


const App = () => {
    return (
        <div>
            {/*<InlineMath>\int_0^\infty x^2 dx</InlineMath>*/}
            {/*<BlockMath*/}
            {/*    math={'\\int_0^\\infty x^2 dx'}*/}
            {/*    errorColor={'#cc0000'}*/}
            {/*/>*/}
            {/*<BlockMath math={`\\frac{\\text{m}} {\\text{s}^2}`}/>*/}
            <h1>Laravel aa999</h1>
        </div>
    );
}

if (document.getElementById('root-container')) {
    const root = createRoot(document.getElementById('root-container'));

    root.render(<App/>);
}
