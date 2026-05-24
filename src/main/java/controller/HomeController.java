package com.amogh.hms.controller;

import com.amogh.hms.model.Patient;
import com.amogh.hms.repository.PatientRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {

    private final PatientRepository patientRepository;

    public HomeController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @GetMapping("/")
    public String home(Model model) {

        model.addAttribute("patients", patientRepository.findAll());

        return "index";
    }

    @PostMapping("/add")
    public String addPatient(
            @RequestParam String name,
            @RequestParam int age,
            @RequestParam String disease,
            @RequestParam String phone
    ) {

        Patient patient = new Patient();

        patient.setName(name);
        patient.setAge(age);
        patient.setDisease(disease);
        patient.setPhone(phone);

        patientRepository.save(patient);

        return "redirect:/";
    }
}