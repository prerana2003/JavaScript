let employees = {}

let num = 1;
const addEmp = (name,salary,designation,deptID) =>{
    let Emp_id = "Emp" + num;
    if(employees[Emp_id] == undefined){
        employees[Emp_id] = {
            ID: Emp_id,
            Name: name,
            Salary: salary,
            Designation: designation,
            Department_ID: deptID
        }
    }
    num++;
    return "Employee Successfully created";
}

addEmp("Meena",50000,"Software Engg.","D3")
addEmp("Teena",30000,"Soft. Dev","D2")
addEmp("Nita",90000,"Manager","D1")
addEmp("Nita",70000,"Project Manager","D1")
addEmp("Neela",40000,"HR","D2")
addEmp("Minu",80000,"DevOps","D3")
addEmp("Sita",30000,"HR","D2")



const renderUI = () =>{
    let main = document.getElementById("root")

    let header = document.createElement("header")
    main.appendChild(header)

    let navdiv = document.createElement("div")
    navdiv.setAttribute("id","nav_div")
    header.appendChild(navdiv)

    let navbar = document.createElement("nav")
    navbar.setAttribute("id","nav_bar")
    navdiv.appendChild(navbar)

    let logo = document.createElement("img")
    logo.setAttribute("id","logo_img")
    logo.setAttribute("src","logo.jpg")
    navbar.appendChild(logo)

    let addEmp = document.createElement("button")
    addEmp.setAttribute("type","button")
    addEmp.setAttribute("id","add_emp_btn")
    addEmp.textContent = "Add Employee"
    addEmp.addEventListener('click', openForm)
    navbar.appendChild(addEmp)

    let contentdiv = document.createElement("div")
    contentdiv.setAttribute("id","content_div")
    main.appendChild(contentdiv)

    let sidebardiv = document.createElement("div")
    sidebardiv.setAttribute("id","side_bar_div")
    contentdiv.appendChild(sidebardiv)


    let list = document.createElement("ul")
    list.setAttribute("id","emp_list")
    sidebardiv.appendChild(list)

    for(let x in employees){
        if(employees.hasOwnProperty(x)){
            const listItem = document.createElement("li")
            listItem.textContent= employees[x].Name
            list.appendChild(listItem)
        }
    }

    let maincontentdiv = document.createElement("div")
    maincontentdiv.setAttribute("id","main_content_div")
    contentdiv.appendChild(maincontentdiv)
    
}

const openForm = () =>{

    let main = document.getElementById("main_content_div")

    let title = document.createElement("h1")
    title.textContent = "Add Employee"
    main.appendChild(title)


    let addEmpForm = document.createElement("form")
    addEmpForm.setAttribute("method","post")
    addEmpForm.setAttribute("id","add_emp_form")
    main.appendChild(addEmpForm)

    let entName = document.createElement("label")
    entName.setAttribute("type","label")
    entName.setAttribute("id","enter_name")
    entName.textContent = "Name: "
    addEmpForm.appendChild(entName)
    
}