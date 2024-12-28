
const container = React.createElement(
    'div',
    {
        className: 'container',
        id: 'container'
    }, 
    [
        React.createElement(
            'div',
            {
                className: 'child'
            }, 
            [
                React.createElement('h1', { className: 'heading' }, 'Hello, React heading 1'),
                React.createElement("p", {}, "This is a paragraph child 1"),
            ]
        ),
        React.createElement(
            'div',
            {
                className: 'child'
            }, 
            [
                React.createElement('h1', { className: 'heading' }, 'Hello, React heading 2'),
                React.createElement("p", {}, "This is a paragraph child 2"),
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);