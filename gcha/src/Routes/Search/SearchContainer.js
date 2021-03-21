import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        popular: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            this.setState({ loading: true });
            const { data: { movieResults } } = await moviesApi.search(searchTerm);
            const { data: { showResults } } = await tvApi.search(searchTerm);
            this.setState({ movieResults, showResults});
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
            />
        );
    }
}