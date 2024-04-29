function Result(props) {
    const { secretNumber, uservalue } = props;
    let result;
    if (uservalue > secretNumber)
        result = 'Greater'
    else if (uservalue < secretNumber)
        result = 'Lower'
    else if (uservalue == secretNumber)
        result = 'Correct'
    else
        result = 'Invalid'

    return (
        <>
            <h4>Result : <span style={{ color: 'green' }}>{result}</span></h4>
        </>
    )
}

export default Result;