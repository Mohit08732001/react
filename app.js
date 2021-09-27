const Dog=(props)=>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h3",{ },props.name),
        React.createElement("h3",{ },props.weight),
        React.createElement("h3",{ },props.height),],
    )
}
const App = () => {
    var arr=[1,2,3,4];
    return React.createElement(
        "h2", //tag
        { },  //attribute with element
        arr.map(item=>React.createElement("div",{id:'mapped-id'},item)),
        [
            
            React.createElement(Dog,{
                name:"Bull",
                weight:"50",
                height:"6"
            },),
            React.createElement(Dog,{
                name:"pupppy",
                weight:"50",
                height:"5"
            },),
            React.createElement(Dog,{
                name:"Bumpy",
                weight:"40",
                height:"4"
            },),
        ], // content , content can be another component
    );
}

ReactDOM.render(
    React.createElement(  //component to render
        App,null,null
    ), document.getElementById('root')// place to render
)