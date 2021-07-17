import React from "react";

class Dropdown extends React.Component{
    state = {};
  render()
  {
      return(
        <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Animal Type
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Dog</a></li>
          <li><a class="dropdown-item" href="#">Reptile</a></li>
          <li><a class="dropdown-item" href="#">Bird</a></li>
          <li><a class="dropdown-item" href="#">Rabbit</a></li>
          
        </ul>
      </li>
      );
  }
}

export default Dropdown;