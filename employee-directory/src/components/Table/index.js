import "./style.css"
import Sort from "../SortBtn";

function Table(props) {
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First <Sort sorted={props.sorted} sort={props.sort}></Sort> </th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    );
};

export default Table;