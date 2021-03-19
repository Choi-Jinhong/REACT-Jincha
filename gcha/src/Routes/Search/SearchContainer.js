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

    render() {
        const { movieResults, popular, searchTerm, error, loading } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                popular={popular}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
            />
        );
    }
}