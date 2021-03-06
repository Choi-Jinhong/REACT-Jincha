import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults, showResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
    <Container>
        <Helmet><title>Search | Gcha</title></Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Moives or TV Shows..." value={searchTerm} onChange={updateTerm}></Input>
        </Form>
        {loading ? <Loader /> : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.original_title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {showResults && showResults.length > 0 && (
                    <Section title="TV Show Results">
                        {showResults.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                imageUrl={show.poster_path}
                                title={show.original_name}
                                rating={show.vote_average}
                                year={show.first_air_date && show.first_air_date.substring(0, 4)}
                            />
                        ))}
                    </Section>
                )}
            </>
        )}
        {error && <Message text={error} color="e74c3c" />}
        {showResults && movieResults && showResults.length === 0 && movieResults.length === 0 && <Message text={`Nothing Found`} color="#95a5a6" />}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    showResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;