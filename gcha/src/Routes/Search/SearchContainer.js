import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        showResults: null,
        popular: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    }

    updateTerm = (event) => {
        const { target: { value } } = event;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            this.setState({ loading: true });
            const { data: { results: movieResults } } = await moviesApi.search(searchTerm);
            const { data: { results: showResults } } = await tvApi.search(searchTerm);
            this.setState({ movieResults, showResults });
        } catch {
            this.setState({ error: "Can't find results." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { movieResults, showResults, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                showResults={showResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}