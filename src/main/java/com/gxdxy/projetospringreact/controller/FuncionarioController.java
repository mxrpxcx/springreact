package com.gxdxy.projetospringreact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gxdxy.projetospringreact.exception.RecursoNaoEncontradoException;
import com.gxdxy.projetospringreact.model.Funcionario;
import com.gxdxy.projetospringreact.repository.FuncionarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@GetMapping("/listarFuncionarios")
	public List<Funcionario> listarFuncionarios (){
		return funcionarioRepository.findAll();
	}
	
	@PostMapping("/adicionarFuncionarios")
	public Funcionario adicionarFuncionarios (@RequestBody Funcionario f) {
		return funcionarioRepository.save(f);
	}
	
	@GetMapping("/listarFuncionarios/{id}")
	public ResponseEntity<Funcionario> listarPorId(@PathVariable Long id) {
		Funcionario f = funcionarioRepository.findById(id)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Funcionário não encontrado"));
		return ResponseEntity.ok(f);
	}
	
	@PutMapping("/listarFuncionarios/{id}")
	public ResponseEntity<Funcionario> atualizarFuncionario(@PathVariable Long id, 
			@RequestBody Funcionario fs){
		
		Funcionario f = funcionarioRepository.findById(id)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Funcionário não encontrado"));
		
		f.setNome(fs.getNome());
		f.setSobrenome(fs.getSobrenome());
		f.setEmail(fs.getEmail());
		
		Funcionario atualizarFuncionario = funcionarioRepository.save(f);
		return ResponseEntity.ok(atualizarFuncionario);
	}
	
}
