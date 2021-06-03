async function isWinner(country) {
    try{
        let c = await db.getWinner(country)
        if(c.continent !== 'Europe') return c.name + ' is not what we are looking for because of the continent'
        let result = await db.getResults(c.id)
        if(result.length <3) return c.name + ' is not what we are looking for because of the number of times it was champion'
        else {
            let res = country+" won the FIFA World Cup in "
            result.forEach((wins, index) => {
                res += wins.year
                if (index !== result.length - 1)res += ", "
            })
            res += " winning by "
            result.forEach((wins, index) => {
                res += wins.score
                if (index !== result.length - 1)res += ", "
            })
            return res
        }
    
    }
    catch(err){
        return country + ' never was a winner'
    } 
}
