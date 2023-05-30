import moment from 'moment/moment';
import React from 'react'



export default function Timer(props) {
    const dddd = props.timestamp
    const [date, setDate] = React.useState(dddd);
    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(date + 1000);
    }

    return (
        <>
            {moment(date).format("hh:mm:ss")}
        </>
    );

}
