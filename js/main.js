document.body.onload = function() {
    //alert("hello");
};


function DataTable(config, data) {
  const tableDiv = document.querySelectorAll(config.parent)[0];
  const table = document.createElement("table");
  tableDiv.appendChild(table);
  
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  
  const tr = document.createElement("tr");
  thead.appendChild(tr); 
  
  for (column of config.columns) {
      const th = document.createElement("th");
      th.innerHTML = column.title;
      tr.appendChild(th);
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

DataTable(config1, users);
