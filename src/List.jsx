import React from "react";

class List extends React.Component{
    state = {
        allAnimals:[],
        currPage:1,};

        componentDidMount() {
            fetch("/test")
              .then(function (res) {
                return res.json();
              })
              .then((json) => {
                this.setState({ allAnimals: json });
        
                this.props.sendData(json.length);
              });
          }

          render() {
            let numberOfPages = Math.ceil(this.state.allAnimals.length / 5);
            let arr = [];
            for (let i = 1; i <= numberOfPages; i++) {
              arr.push(i);
            }
        
            let starting = (this.state.currPage - 1) * 5;
            let ending = this.state.currPage * 5 - 1;
        
            let animalsDisplay = this.state.allAnimals.slice(
              starting,
              Math.min(ending, this.state.allAnimals.length - 1) + 1
            );

  
    return (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Animal type</th>
                <th scope="col">City</th>
                <th scope="col">Breed</th>
              </tr>
            </thead>
            <tbody>
              {animalsDisplay.map((el) => {
                return (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.animal}</td>
                    <td>{el.city}</td>
                    <td>{el.breed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
  
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                onClick={() => {
                  let currPage = this.state.currPage;
                  currPage--;
                  if (currPage < 1) currPage = 1;
                  this.setState({ currPage: currPage });
                }}
              >
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
  
              {arr.map((el) => {
                return (
                  <li
                    class="page-item"
                    onClick={() => {
                      this.setState({ currPage: el });
                    }}
                  >
                    <a class="page-link" href="#">
                      {el}
                    </a>
                  </li>
                );
              })}
  
              <li
                class="page-item"
                onClick={() => {
                  let currPage = this.state.currPage;
                  currPage++;
                  if (currPage > numberOfPages) currPage = numberOfPages;
                  this.setState({ currPage: currPage });
                }}
              >
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
  }
 }


export default List;