let maleName=['akshit','aakash','ashok','arayn','abhimanyu','avinash','akshay','akarsh','ashutosh','keshav','bhuvan','rahul','kundan','triveni','ankit','mithun','abhishek','satyam','chandershekar','rajat','vikas','mukesh','vikram']
let lastName=['garg','paatel','chaurasiya','sharma','verma','arora','kasaniya','karwasara','ghalot','das','saho']

let bloodGroups=["A+","A-","B+","B-","O+","O-","AB+","AB-"];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let bio_data=[];

for(let i=0;i<1000;i++){
    let last_Name=lastName[rand(0,lastName.length-1)];
    bio_data.push({userid:i+1,

        name:maleName[rand(0,maleName.length-1)]+" "+last_Name,
        fathers_name:maleName[rand(0,maleName.length-1)]+" "+last_Name,
        height:rand(4,7)+(rand(1,11)/10),weight:rand(45,130),bloodGrounp:bloodGroups[rand(0,bloodGroups.length-1)]
    })
}

export {bio_data};