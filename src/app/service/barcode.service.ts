import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {
  endpoint = 'http://localhost:3000/';

  constructor(public fireservices:AngularFirestore,
    private http: HttpClient) { }

  create_NewBarcode(Record)
  {
    return this.fireservices.collection('scan').add(Record);
  }

  get_AllBarcode()
  {
    return this.fireservices.collection('scan').snapshotChanges();
  }

  update_Barcode(recordid, record)
  {
    this.fireservices.doc('scan/' + recordid).update(record);
  }

  delete_Barcode(record_id)
  {
    this.fireservices.doc('scan/' + record_id).delete();
  }
  postproduit(data){
    return this.http.post(this.endpoint + 'Getbarcode/',data);

  }

}
