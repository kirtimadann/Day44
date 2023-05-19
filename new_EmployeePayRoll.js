const salary = document.querySelector('#salary'); 
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
     output.textContent = salary.value;
});

window.addEventListener('DOMContentLoaded', (event) => { 
    const name = document.querySelector('#name'); 
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
     if (name.value.length == 0) {
    textError.textContent = "";
    return;
    }
    try {
    (new EmployeePayRoll()).name = name.value;
    textError.textContent = " ";
    } catch (e) {
    textError.textContent = e;
    }
    });
    });


    const save =()=>{
     try { 
     let EmployeePayRoll = createEmployeePayroll()
     } catch (e) {
     return;
     }
}
     
const createEmployeePayroll = () => { 
     let EmployeePayRoll = new EmployeePayRoll();
     try {
          EmployeePayRoll.name = getInputValueById('#name');
     } catch (e) {
     setTextValue('.text-error', e);
     throw e;
 }
 EmployeePayRoll.profilePic = getSelectedValues('[name=profile]').pop(); 
 EmployeePayRoll.gender = getSelectedValues('[name=gender]').pop();   
 EmployeePayRoll.department = getSelectedValues('[name=department]'); 
 EmployeePayRoll.salary = getInputValueById('#salary'); 
 EmployeePayRoll.note = getInputValueById('#notes');
 let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ 
 getInputValueById('#year') ; 
 employeePayrollData.date= Date.parse(date);
 alert(EmployeePayRoll.toString()); 
 return EmployeePayRoll;
}
 const getSelectedValues =(propertyValue) => { 
     let allItems=document.querySelectorAll(propertyValue);
     let selItems = [];
     allItems.forEach(item => {
     if(item.checked) selItems.push(item.value); });
     return selItems;
     }
