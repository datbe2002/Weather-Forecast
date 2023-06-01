import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'



export default function Timer(props) {
    const [date, setDate] = useState(props.timestamp);
    useEffect(() => {
        if (date) {
            const timerID = setInterval(() => tick(), 1000);

            return function cleanup() {
                clearInterval(timerID);
            };
        }

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
