var sumOfParams = 0
process.argv.forEach(function(val, index, array)
{
    if(index > 1)
    {
        sumOfParams += Number(val)
    }
});
console.log(sumOfParams)