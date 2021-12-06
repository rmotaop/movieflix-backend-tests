package com.devsuperior.movieflix.dto;

import java.io.Serializable;

public class UrlDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String url;
	
	public UrlDTO() {
		
	}
	
	public UrlDTO(String url) {
		this.url = url;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	

}
