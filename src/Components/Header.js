import React from 'react';

const Info = (props) => {
    const { basic_info } = props;
    return (
        <div className="App-header">
            <h1><u>CV</u></h1>
            <h2>{basic_info.name} </h2>
            <p>Email: {basic_info.email} &nbsp;&nbsp;&nbsp;<u> Phone: {basic_info.phone} </u></p>
        </div>
    )
}

export default Info;