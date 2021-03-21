package com.devsuperior.movieflix.services.exceptions;

public class ForbiddenException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	// Utiliza para retornar o erro 403 (Quando o recurso não é permitido - 403)
	public ForbiddenException(String msg) {
		super(msg);
	}
}
