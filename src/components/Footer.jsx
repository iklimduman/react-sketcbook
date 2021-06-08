import React from "react";

var date = new Date();
var dateTime = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

function footer(){
    return <footer>
        <p className="p">Copyright
        <br/>
        {dateTime}</p>
        </footer>
};

export default footer ;