package controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.LocationService;
import java.util.concurrent.ExecutionException;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/Location")
public class LocationController {
    private final LocationService locationService;
    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> getLocations(){
        Map<String, Object> returnVal = new HashMap<>();
        int statusCode = 500;
        try{
            Object payload = locationService.getLocations();
            statusCode = 200;
            returnVal.put("locations", payload);
        } catch (ExecutionException | InterruptedException e) {
            returnVal.put("Cannot fetch locations from database.",e.getStackTrace());
        }


        return ResponseEntity.status(statusCode).body(returnVal);
    }
}
