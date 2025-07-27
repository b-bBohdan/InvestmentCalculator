import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({data}){
   

   let results= calculateInvestmentResults(data);
   const initialInvestment = 
   results[0].valueEndOfYear 
   - results[0].annualInvestment
   - results[0].interest;
    
    console.log(results)
    return (    
    <table id="result">
        <tr className="center">           
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        <tbody className="center">
            {results.map(elem=>{
                const totalInterest = elem.valueEndOfYear - elem.annualInvestment*elem.year -initialInvestment;
                const totalAmmount = elem.valueEndOfYear - totalInterest;
                return <tr key={elem.year}><th>{elem.year}</th>
                <th>{formatter.format(elem.valueEndOfYear)}</th>
                <th>{formatter.format(elem.interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{formatter.format(totalAmmount)}</th></tr>
            })}
        </tbody>
    </table>
         
    )

    
}