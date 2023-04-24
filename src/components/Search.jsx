import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  }

  render() {
    return (
      <div className="input-field" style={{position: 'relative'}}>
        <input
          placeholder="search"
          type="search"
          value={this.state.search}
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          onKeyDown={this.handleKey}
        />
        <button className='btn search-btn' style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 0}} onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
      </div>
    );
  }
}

export { Search };