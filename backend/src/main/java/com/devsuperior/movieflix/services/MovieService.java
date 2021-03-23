package com.devsuperior.movieflix.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.DTO.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private GenreRepository genreRepository;
	
	@Autowired
	private AuthService authService;

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie movie = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		
		User user = authService.authenticated();

		authService.validateUserMember(user.getId());
		List<Review> reviews = reviewRepository.findAllByMovieId(movie.getId());
		return new MovieDTO(movie, reviews);
	}

	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		return repository.find(genre, pageRequest).map(x -> new MovieDTO(x));
	}
}
