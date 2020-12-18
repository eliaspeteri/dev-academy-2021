import "./App.css";
import Service from "./Service";
import React, { useEffect, useState } from "react";

// const Entry = (props) => {
//     return (
//         <tr>
//             <td>{props.name}</td>
//             <td>{props.amount}</td>
//         </tr>
//     );
// };

// const Entries = (props) => {
//     const returnedArray = Array.from(props.names);
//     return (
//         <tbody>
//             {returnedArray.map((e) => {
//                 return <Entry key={e.name} name={e.name} amount={e.amount} />;
//             })}
//         </tbody>
//     );
// };

const App = () => {
    const [names, setNames] = useState([]);
    // const [query, setQuery] = useState("");
    const hook = () => {
        Service.getNames().then((response) => {
            setNames(response.data);
        });
    };

    // const handleQueryChange = (event) => {
    //     setQuery(event.target.value);
    // };

    useEffect(hook, []);
    const printPopular = () => {
        setNames(Service.getPopular(names));
        console.log("names.json in popularity order");
        console.table(names);
    };
    const printAlphabetical = () => {
        setNames(Service.getAlphabetical(names));
        console.log("names.json in alphabetical order");
        console.table(names);
    };
    const printTotal = () => {
        console.log("Amount of names in db: " + Service.getTotal(names));
    };

    // const searchName = () => {
    //     const reply = Service.getByName(query);
    //     console.log(reply);
    // };

    return (
        <>
            Open the console to see results
            <br />
            {/* Search by name:
            <input
                type="text"
                onChange={handleQueryChange}
                value={query}
            ></input>
            <button onClick={searchName}>Go</button>
            <br /> */}
            <button onClick={printPopular}>Popular</button>
            <button onClick={printAlphabetical}>Alphabetical</button>
            <button onClick={printTotal}>Total</button>
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <Entries names={names} />
            </table> */}
        </>
    );
};

export default App;
