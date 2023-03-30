package services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import models.Location;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class LocationService {
    private Firestore db = FirestoreClient.getFirestore();

    //used to log information in the console while testing

    public ArrayList<Location> getLocations() throws ExecutionException, InterruptedException {
        Query query = db.collection("Location");
        ApiFuture<QuerySnapshot> future = query.get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        ArrayList<Location> locations = documents.size() > 0 ? new ArrayList<>() : null;
        for(QueryDocumentSnapshot doc : documents)
        {
            locations.add(doc.toObject(Location.class));
        }

        return locations;
    }
}
