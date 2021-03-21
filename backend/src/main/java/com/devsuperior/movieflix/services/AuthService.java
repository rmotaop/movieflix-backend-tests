package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.common.exceptions.UnauthorizedUserException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;

@Service
public class AuthService {

	@Autowired
	private UserRepository userRepository;

	// Função retornar o usuário logado, utilizaremos para controlar o acesso;
	@Transactional(readOnly = true)
	public User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return userRepository.findByEmail(username);
		} catch (Exception e) {
			throw new UnauthorizedUserException("Invalid user");
		}
	}

	// Função para verificar se é um usuário MEMBER;
	public void validateUserMember(Long userId) {
		User user = authenticated();
		// Se o usuário autenticado não for MEMBER é negado o acesso;
		if (!user.hasHole("ROLE_MEMBER")) {
			throw new ForbiddenException("Acess denied");
		}
	}
}
