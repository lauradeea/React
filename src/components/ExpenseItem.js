import './ExpenseItem.css';

//the value props (or data or whatever we want) is a value which holds all the values we get for the attributes on our custom element on App.js
//we get key-value pairs in this props object which is passed in by react automatically
//so we get the value keys(title,amount ,date ) in props


//“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
//But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
//Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.


function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;

