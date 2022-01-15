package com.gxdxy.projetospringreact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gxdxy.projetospringreact.model.Funcionario;
import com.gxdxy.projetospringreact.repository.FuncionarioRepository;

@RestController
@RequestMapping("/api/v1/")
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@GetMapping("/listarFuncionarios")
	public List<Funcionario> listarFuncionarios (){
		return funcionarioRepository.findAll();
	}
}
