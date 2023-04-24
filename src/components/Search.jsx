import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (event) => {
    this.setState(() =>({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="input-field" style={{ position: "relative" }}>
        <input
          placeholder="search"
          type="search"
          value={this.state.search}
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          onKeyDown={this.handleKey}
        />
        <button
          className="btn search-btn"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
          }}
          onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
        >
          Search
        </button>
        <div>
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.statetype === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.statetype === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.statetype === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
