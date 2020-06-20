import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";
import "../src/App.css";




class App extends React.Component {

  state = {
    employees: [],
    nameSort: "ASC",
    phoneSort: "ASC",
    emailSort: "ASC",
    dobSort: "ASC",
    userInput: "",
    results: []
  };

  componentDidMount() {
   
    this.setState({ employees: employees });
    this.setState({ results: employees });
    
  }

  searchName = value => {
    this.findName(this.state.employees, value);
  };

  findName(names, letter) {
    var filteredNames = [];
    names.forEach(name => {
      var checkName = name.name;
      var lowerName = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        filteredNames.push(name);
        console.log(name);
      }
    });

    this.setState({ results: filteredNames });
  }

  sortByName = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();

    var sortOrder = this.state.nameSort;
    var names = this.state.employees;

    // sort by name
    names.sort(sortOrder === 'ASC' ? this.ascCompareName : this.descCompareName);

    if (sortOrder === 'ASC') {
      sortOrder = 'DESC';
    }
    else {
      sortOrder = 'ASC';
    }

    this.setState({
      employees: sortedEmployees,
      nameSort: sortOrder
    })
  }

  ascCompareName(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    
    return 0;
  }

  descCompareName(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    
    return 0;
  }

  sortByPhone = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();

    var sortOrder = this.state.phoneSort;
    var phones = this.state.employees;

    // sort by name
    phones.sort(sortOrder === 'ASC' ? this.ascComparePhone : this.descComparePhone);

    if (sortOrder === 'ASC') {
      sortOrder = 'DESC';
    }
    else {
      sortOrder = 'ASC';
    }

    this.setState({
      employees: sortedEmployees,
      phoneSort: sortOrder
    })
  }

  ascComparePhone(a, b) {
    var phoneA = a.phone; 
    var phoneB = b.phone; 
    if (phoneA < phoneB) {
      return -1;
    }
    if (phoneA > phoneB) {
      return 1;
    }
    
    return 0;
  }

  descComparePhone(a, b) {
    var phoneA = a.phone; 
    var phoneB = b.phone; 
    if (phoneA < phoneB) {
      return 1;
    }
    if (phoneA > phoneB) {
      return -1;
    }
    
    return 0;
  }

  sortByEmail = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();

    var sortOrder = this.state.emailSort;
    var emails = this.state.employees;

    // sort by name
    emails.sort(sortOrder === 'ASC' ? this.ascCompareEmail : this.descCompareEmail);

    if (sortOrder === 'ASC') {
      sortOrder = 'DESC';
    }
    else {
      sortOrder = 'ASC';
    }

    this.setState({
      employees: sortedEmployees,
      emailSort: sortOrder
    })
  }

  ascCompareEmail(a, b) {
    var emailA = a.email.toLowerCase(); 
    var emailB = b.email.toLowerCase(); 
    if (emailA < emailB) {
      return -1;
    }
    if (emailA > emailB) {
      return 1;
    }
    
    return 0;
  }

  descCompareEmail(a, b) {
    var emailA = a.email.toLowerCase(); 
    var emailB = b.email.toLowerCase(); 
    if (emailA < emailB) {
      return 1;
    }
    if (emailA > emailB) {
      return -1;
    }

    return 0;
  }

  sortByDOB = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();

    var sortOrder = this.state.dobSort;
    var dobs = this.state.employees;

    // sort by name
    dobs.sort(sortOrder === 'ASC' ? this.ascCompareDOB : this.descCompareDOB);

    if (sortOrder === 'ASC') {
      sortOrder = 'DESC';
    }
    else {
      sortOrder = 'ASC';
    }

    this.setState({
      employees: sortedEmployees,
      dobSort: sortOrder
    })
  }

  ascCompareDOB(a, b) {
    var dobA = a.dob.substring(6,10) + a.dob.substring(0,2) + a.dob.substring(3,5); // ignore upper and lowercase
    var dobB = b.dob.substring(6,10) + b.dob.substring(0,2) + b.dob.substring(3,5); // ignore upper and lowercase
    console.log(dobA);
    console.log(dobB);
    if (dobA < dobB) {
      return -1;
    }
    if (dobA > dobB) {
      return 1;
    }
    
    return 0;
  }

  descCompareDOB(a, b) {
    var dobA = a.dob.substring(6,10) + a.dob.substring(0,2) + a.dob.substring(3,5); // ignore upper and lowercase
    var dobB = b.dob.substring(6,10) + b.dob.substring(0,2) + b.dob.substring(3,5); // ignore upper and lowercase
    console.log(dobA);
    console.log(dobB);
    if (dobA < dobB) {
      return 1;
    }
    if (dobA > dobB) {
      return -1;
    }
    // names must be equal
    return 0;
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.searchName(value);
  };

  render() {
    return (
      <Wrapper>
        <Header>Employee Header</Header>
        <Container>
          <form className="search">
            <div className="form-group">
              <input
                value={this.state.userInput}
                name="userInput"
                type="text"
                className="form-control"
                placeholder="Search"
                id="employee"
                onChange={this.handleInputChange}
                style={{ width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </form>
          <div>
            <div className="row">
              <div className="col"><button className="card-btn" style={{ visibility: "hidden" }}>Image</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByName}>Name</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByPhone}>Phone</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByEmail}>Email</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByDOB}>DOB</button></div>
            </div>
          </div>
          
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;

