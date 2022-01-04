import "./styles.css";
import { useState , useReducer} from "react";

export default function App() {

  const initialState = {
    username : '',
    password : '',
    success : false ,
    err : ''
  }

  const loginReducer = (state,action) => {
    switch(action.type){
      case 'field' : {
        return {
          ...state ,
          [action.field] : action.value,
        }
      }
      case 'success' : {
        return {
          ...state,
          success : true,
        };
      }
      case 'fail' : {
        return {
          ...state,
          success : false,
          err : 'Something went wrong',
        };
      }
      case 'logout' : {
        return {
          ...state,
          success : false,
          username : '',
          password : '',
        }
      }
      default : {

      }
    }
  }

  const [state,dispatch] = useReducer(loginReducer,initialState);

  function handleSubmit(e) {
    console.log(e)
    e.preventDefault();
    if (state.username === "iklim" && state.password === "password") {
      dispatch({type:'success'})
    } else {
      dispatch({type:'fail'})
    }
  }

  const handleLogOut = () => {
    dispatch({type:'logout'})
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {state.success ? (
        <div>
          <h1>hello {state.username}</h1>
          <button onClick={handleLogOut}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {state.success ? null : <h2>{state.err}</h2>}
          <input
            placeholder="username"
            onChange={(e) => dispatch({
              type:'field',
              field : 'username',
              value : e.currentTarget.value
            })}
            value={state.username}
          ></input>
          <input
            placeholder="password"
            type="password"
            onChange={(e) => dispatch({
              type:'field',
              field : 'password',
              value : e.currentTarget.value
            })}
            value={state.password}
          ></input>
          <button type="submit">Log in</button>
        </form>
      )}
    </div>
  );
}
