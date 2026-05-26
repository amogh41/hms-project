package com.amogh.hms.controller;

import com.amogh.hms.model.Patient;
import com.amogh.hms.repository.PatientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "*")
public class PatientApiController {

    private final PatientRepository patientRepository;

    public PatientApiController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @GetMapping
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }
}
