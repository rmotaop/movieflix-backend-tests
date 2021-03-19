package com.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	@Query("SELECT obj FROM Movie obj WHERE "
			+ ":genre IN obj.genres")
	Page<Movie> find(Genre genre, Pageable pageable);

}


