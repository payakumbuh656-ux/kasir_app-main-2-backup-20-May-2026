import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";


interface CreateReturnParams {
  userId:string;

  transactionId:string;

  items:any[];

  totalRefund:number;

  reason?:string;

  createdBy:any;
}


export async function createReturn({
  userId,
  transactionId,
  items,
  totalRefund,
  reason,
  createdBy,
}:CreateReturnParams){

  const ref = await addDoc(
    collection(db,"users",userId,"returns"),
    {
      transactionId,

      items,

      totalRefund,

      reason: reason ?? "",

      createdBy,

      date:Date.now(),
    }
  );


  return ref.id;
}