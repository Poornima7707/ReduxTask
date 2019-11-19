import { connect } from "react-redux";
import Todo from "../component/Todo";
import {addTodo, deleteTodo} from "../actions/actionData";


const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(addTodo(text));
        },
        deleteTodo: id => {
            dispatch(deleteTodo(id));
        }
    };
}

const mapStateToProps = state => {
    return {
        result: state
    };
};

const ContainerTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default ContainerTodo;