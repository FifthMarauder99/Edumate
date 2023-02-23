import React from "react";
import axios from "axios";
import "./EmployeeList.css";
import {
  Table,
  Button,
  PaginationItem,
  PaginationLink,
  Pagination
} from "reactstrap";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      text1: false,
      text2: false,
      text3: false,
      text4: false,
      typedData: "",
      filterData: [],
      currentPage: 0,
      pagiNation: true
    };
  }

  // componentDidMount() {
  //   console.log("hii");
  //   axios
  //     .get("http://dummy.restapiexample.com/api/v1/employees")
  //     .then(res => {
  //       console.log(res);
  //       const data = res.data.results;
  //       this.setState({
  //         details: data,
  //         filterData: data
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  componentDidMount = () => {
    // fetch("http://dummy.restapiexample.com/api/v1/employees")
    //   .then(response => response.json())
    //   .then(data =>
    //     this.setState({
    //       details: data,
    //       filterData: data
    //     })
    //   )
    //   .catch(error => {
    //     console.log(error, "error occurred while fetching data");
    //   });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState(
          {
            details: res.data
          },
          () => {
            console.log("details", this.state.details);
          }
        );
      })
      .catch((err) => console.log(err));
  };

  handleClick(event, index) {
    event.preventDefault();
    this.setState({
      currentPage: index
    });
    console.log(`Viewing Page ${index + 1} Data`);
  }
  changeText1 = () => {
    const { text1 } = this.state;
    this.setState({
      text1: !text1
    });
    if (text1 === true) {
      this.sortByIdAsc();
      console.log("Table sorted using Id in Ascending oder");
    } else {
      this.sortByIdDesc();
      console.log("Table sorted using Id in Descending oder");
    }
  };
  changeText2 = () => {
    const { text2 } = this.state;
    this.setState({
      text2: !text2
    });
    if (text2 === true) {
      this.sortByNameAsc();
      console.log("Table sorted using Name in Ascending oder");
    } else {
      this.sortByNameDesc();
      console.log("Table sorted using Name in Descending oder");
    }
  };
  changeText3 = () => {
    const { text3 } = this.state;
    this.setState({
      text3: !text3
    });
    if (text3 === true) {
      this.sortBySalaryAsc();
      console.log("Table sorted using Salary in Ascending oder");
    } else {
      this.sortBySalaryDesc();
      console.log("Table sorted using Salary in Descending oder");
    }
  };
  changeText4 = () => {
    const { text4 } = this.state;
    this.setState({
      text4: !text4
    });
    if (text4 === true) {
      this.sortByAgeAsc();
      console.log("Table sorted using Age in Ascending oder");
    } else {
      this.sortByAgeDesc();
      console.log("Table sorted using Age in Descending oder");
    }
  };
  sortByIdAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => a.id - b.id);
    });
  };
  sortByIdDesc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => a.id - b.id).reverse();
    });
  };
  sortByNameAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.employee_name < b.employee_name) {
          return -1;
        }
        if (a.employee_name > b.employee_name) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortByNameDesc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => {
        if (a.employee_name > b.employee_name) {
          return -1;
        }
        if (a.employee_name < b.employee_name) {
          return 1;
        }
        return 0;
      });
    });
  };
  sortBySalaryAsc = () => {
    this.setState(() => {
      this.state.filterData.sort(
        (a, b) => a.employee_salary - b.employee_salary
      );
    });
  };
  sortBySalaryDesc = () => {
    this.setState(() => {
      this.state.filterData
        .sort((a, b) => a.employee_salary - b.employee_salary)
        .reverse();
    });
  };
  sortByAgeAsc = () => {
    this.setState(() => {
      this.state.filterData.sort((a, b) => a.employee_age - b.employee_age);
    });
  };
  sortByAgeDesc = () => {
    this.setState(() => {
      this.state.filterData
        .sort((a, b) => a.employee_age - b.employee_age)
        .reverse();
    });
  };
  handleSearchInputChange = (e, pageSize) => {
    this.setState({ typedData: e.target.value }, () => {
      this.getInput();
    });
    console.log([e.target.value]);
    this.hidePagination(pageSize);
  };
  getInput = () => {
    let newDetails = [...this.state.details];
    const filterData = newDetails.filter((item) => {
      return (
        item.id.toLowerCase().indexOf(this.state.typedData.toLowerCase()) !==
          -1 ||
        item.employee_name
          .toLowerCase()
          .indexOf(this.state.typedData.toLowerCase()) !== -1 ||
        item.employee_salary
          .toLowerCase()
          .indexOf(this.state.typedData.toLowerCase()) !== -1 ||
        item.employee_age
          .toLowerCase()
          .indexOf(this.state.typedData.toLowerCase()) !== -1
      );
    });
    if (filterData.length === 0) {
      console.log("no data found");
      window.confirm("No Such Data Found");
    } else {
      this.setState({
        filterData: filterData
      });
    }
    console.log(`Filtered Data ---->${filterData.length}`);
  };
  hidePagination = () => {
    let pageSize = 500;
    if (this.state.filterData.length <= pageSize) {
      this.setState({
        pagiNation: false
      });
    } else {
      this.setState({
        pagiNation: true
      });
    }
  };
  render() {
    const { currentPage } = this.state;
    this.pageSize = 200;
    this.pagesCount = Math.ceil(this.state.filterData.length / this.pageSize);
    console.log(`Page Count ------>${this.pagesCount}`);
    console.log("hiii", this.props.location);
    return (
      <div className="search-block">
        {/* <div>
        {
          this.props.location.data.map((i) => (
            <ul key={i[1]}>
              <li>{i[0]}</li>
              <li>{i[1]}</li>
              <li>{i[2]}</li>
            </ul>
          ) )
        }
      </div> */}
        <h3 className="search-heading d-flex justify-content-center">
          Quick Access
        </h3>
        <div className="search">
          <input
            className="search-input-field"
            name={this.state.typedData}
            onChange={(e) => this.handleSearchInputChange(e)}
            placeholder="Search Here"
          />
        </div>
        <div className="d-flex justify-content-center">
          {this.state.pagiNation && (
            <Pagination>
              <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                  className="prev-next-buttons"
                  onClick={(e) => this.handleClick(e, currentPage - 1)}
                  href="#"
                >
                  Previous
                </PaginationLink>
              </PaginationItem>
              {[...Array(this.pagesCount)].map((currentPageno, i) => (
                <PaginationItem active={i === currentPage} key={i}>
                  <PaginationLink
                    className="page-numbers"
                    onClick={(e) => this.handleClick(e, i)}
                    href="#"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                <PaginationLink
                  className="prev-next-buttons"
                  onClick={(e) => this.handleClick(e, currentPage + 1)}
                  href="#"
                >
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          )}
        </div>
        <Table className="table table-striped table-dark">
          <thead>
            <tr>
              <th className="heading">
                Employee ID <span />
                <Button
                  outline
                  color="primary"
                  type="button"
                  onClick={(e) => this.changeText1(e)}
                >
                  {this.state.text1 ? "▲" : "▼"}
                </Button>
              </th>
              <th className="heading">
                Employee Name <span />
                <Button
                  outline
                  color="success"
                  type="button"
                  onClick={(e) => this.changeText2(e)}
                >
                  {this.state.text2 ? "▲" : "▼"}
                </Button>
              </th>
              <th className="heading">
                Employee Salary <span />
                <Button
                  outline
                  color="danger"
                  type="button"
                  onClick={(e) => this.changeText3(e)}
                >
                  {this.state.text3 ? "▲" : "▼"}
                </Button>
              </th>
              <th className="heading">
                {" "}
                Employee Age <span />
                <Button
                  outline
                  color="warning"
                  type="button"
                  onClick={(e) => this.changeText4(e)}
                >
                  {this.state.text4 ? "▲" : "▼"}
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.filterData
              .slice(
                currentPage * this.pageSize,
                (currentPage + 1) * this.pageSize
              )
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default EmployeeList;
