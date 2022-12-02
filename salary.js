const prompt=require("prompt-sync")();
let pay=prompt("please enter your grosSalary")
let grosSalary=pay;
function SalaryPayable(){
let paye;
let nssf =400;
let nhif;
let deductions;

if (grosSalary<24000){
    paye=(grosSalary*0.1)
}
else if(grosSalary< 32332 && grosSalary >24000){
    paye= (grosSalary*0.25)
}
else if (grosSalary>32333){
    paye=(grosSalary*0.3)
}
else if (grosSalary< 6000){
        nhif=150;
    }
else if(grosSalary>=6000 && grosSalary<8000){
    nhif=300 ;   
}
else if(grosSalary>=8000 && grosSalary<12000){
    nhif= 400;
}
else if(grosSalary>=12000 && grosSalary<15000){
    nhif=500;
}
else if( grosSalary>=15000 && grosSalary<20000){
    nhif=600;
}
else if(grosSalary>=20000 && grosSalary<25000){
        nhif=700;
    }
else if(grosSalary>=25000 && grosSalary <30000){
    nhif=850;
}
deductions= (paye+nhif+nssf)

const netSalary=(grosSalary-deductions)
        console.log(netSalary);
}

SalaryPayable()