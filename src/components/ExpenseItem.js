import './ExpenseItem.css';
import ExpanseDate from "./ExpenseDate";

//the value props (or data or whatever we want) is a value which holds all the values we get for the attributes on our custom element on App.js
//we get key-value pairs in this props object which is passed in by react automatically
//so we get the value keys(title,amount ,date ) in props


//“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
//But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
//Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

// a compoment its just a reagular function withc just returns JSX

// when react run all the compoments and finished , dont return from begin. Just stop So :
// STATE -> if something changed in code and a compoment should be re-evaluated

function ExpenseItem(props) {


    let title = props.title;
    const clickHandler = () => {
      title = "updated";
    };

    return (
        <div className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*add a props as a onCLick event*/}
            {/*only call the function but not to run here but react will execute that function for us whan thaty event occurs*/}
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}


export default ExpenseItem;

