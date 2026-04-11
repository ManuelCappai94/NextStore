export function discountCalc(a : number, b: number): number{
    const original = a / (1 - b/100)
    
    return Math.round(original * 100) /100
}

//math.round per funzionare con le cifre decimali deve essere moltiplicato prima per 100 poi essere diviso nuovamente per 100