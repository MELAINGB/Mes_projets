

function CareScale({scaleValue, careType}){
    const range =[1,2,3]
    const scaleType =careType === 'light' ? '☀️' : '💧'

    return(
        <div>
            {range.map((rangeEl)=>
            scaleValue >= rangeEl?(
                <sapn key={rangeEl.toString()}>{scaleType}</sapn>
            ): null
            )}
        </div>
    )
}
export default CareScale