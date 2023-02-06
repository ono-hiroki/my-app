import React from 'react';
import ReactDOM from 'react-dom/client';

console.log('こんちくは');
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        こんちくは

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example2')) {
    const Index = ReactDOM.createRoot(document.getElementById("example2"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
