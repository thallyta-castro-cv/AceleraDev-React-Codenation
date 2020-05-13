import React from 'react'

import './App.scss'
import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
      constructor() {
        super()
        this.state = {
              query: '',
              users: [],
              sortBy: "name"
        }
  
  }

  setQuery = (query) => {
    this.setState({ query: query })
  }
  
  setButton = (oB) => {
    this.setState({ sortBy: oB})
  }

  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(res => res.json())
      .then(users => this.setState({
        users: users,
      }))
      .catch((err) => console.error(err))
      .finally(() => {
          
      })
  }
  render() {
       return (
      <>
            <Topbar />
            <Filters  onSortByChange={this.handleButton}
                      onFilterTextChange={this.handleQuery}
                      sortBy={this.state.sortBy}/>
            <Contacts data={this.state}/>
         </>
    )
  }
}

export default App