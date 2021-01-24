document.body.onload = function() {
    //alert("hello");
};


class DataTable {
  
  constructor(config, data) {
    this.parent = config.parent;
    this.columns = config.columns;
    this.data = data;
      
    const tableDiv = document.querySelectorAll(config.parent)[0];
    this.table = document.createElement("table");
    tableDiv.appendChild(this.table);
    this.table.className = "table";
    this.makeHead();
    this.makeBody();
  }
  
  makeHead() {
    const thead = document.createElement("thead");
    this.table.appendChild(thead);
    
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    tr.className = "tr tr-head"; 
  
    for (let i = 0; i < this.columns.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = this.columns[i].title;
      th.className = "th";
      tr.appendChild(th);
      
      let div = document.createElement("div");
      div.className = "arrow";
      th.appendChild(div);
      
      th.onclick = () => this.sortColumn(i, div);
    }
  }
  
  makeBody() {
    const tbody = document.createElement("tbody");
    this.table.appendChild(tbody);
  
    for (let item of this.data) {
      let tr = document.createElement("tr");
      tr.className = "tr";
      tbody.appendChild(tr);
      this.makeDataRow(tr, item);
    }
  }
  
  makeDataRow(tr, item) {
    for (let column of this.columns) {
      let td = document.createElement("td");
      td.className = "td";
      td.innerHTML = item[column.value];
      tr.appendChild(td);
    }
  }
  
  reloadBody() {
    this.table.removeChild(this.table.lastChild);
    this.makeBody();
  }
  
  sortColumn(columnNum, arrow) {
    //alert(columnNum);
    const val = this.columns[columnNum].value;
    this.data.sort((a, b) => a[val] > b[val] ? -1 : 1);
    console.log(this.data);
    this.reloadBody();
    if (arrow.classList.contains("arrow-up")) {
      arrow.classList.remove("arrow-up");
      arrow.classList.add("arrow-down");
    } else {
      arrow.classList.remove("arrow-down");
      arrow.classList.add("arrow-up");
    }
  }
  
}

const config1 = {
  parent: '#usersTable',
  columns: [
    {title: 'Имя', value: 'name'},
    {title: 'Фамилия', value: 'surname'},
    {title: 'Возраст', value: 'age'},
  ]
};

const users = [
  {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
  {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

let dt = new DataTable(config1, users);


