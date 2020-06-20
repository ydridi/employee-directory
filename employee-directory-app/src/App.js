import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";
import EmployeeRef from "./components/EmployeeRef";



class App extends React.Component {

  state = {
    employees: [],
    userInput: "",
    results: []
  };

  searchName = value => {
    
    
    this.findName(this.state.employees,0,value);
   
  };

  componentDidMount() {
   
    this.setState({ employees: employees });
    this.setState({ results: employees});
    
  }

  findName(names, index, letter) {
  
    var filteredNames = [];
    names.forEach(name => {
      if (name.name.startsWith(letter,0))
      {
        filteredNames.push(name);
        console.log(name);
      }  
    });

    this.setState({ results: filteredNames });
  }

  handleInputChange = event => {
    
    const name = event.target.name;
    const value = event.target.value;
    
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
              />
            </div>
          </form>
          <EmployeeRef employees={this.state.results} />
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;

