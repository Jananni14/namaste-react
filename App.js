

const parent = React.createElement("d", {
    id : "heading",
    name : "heading"
}, [React.createElement("div", {
    id : "sub-heading",
    name : "heading1"
}, [React.createElement("h1", {
    id : "child",
    name : "heading2"
}, "Namsate React Welcome"), React.createElement("h1", {
    id : "child2",
    name : "heading2"
}, "Namsate React Welcome-child2")]),React.createElement("div", {
    id : "sub-heading",
    name : "heading1"
}, [React.createElement("h1", {
    id : "child",
    name : "heading2"
}, "Namsate React Welcome"), React.createElement("h1", {
    id : "child2",
    name : "heading2"
}, "Namsate React Welcome-child2")])]);


const heading = React.createElement("h1", {
    id : "heading",
    name : "heading"
}, "Namsate React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);