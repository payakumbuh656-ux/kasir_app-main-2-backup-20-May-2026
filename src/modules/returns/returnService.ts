import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";


interface CreateReturnParams {
  userId:string;

  transactionId:string;

  items:any[];

  totalRefund:number;

  paymentMethod?:string;

  reason?:string;

  createdBy:any;
}


export async function createReturn({
  userId,
  transactionId,
  items,
  totalRefund,
  paymentMethod,
  reason,
  createdBy,
}:CreateReturnParams){

  const ref = await addDoc(
    collection(db,"users",userId,"returns"),
    {
      transactionId,

      items,

      totalRefund,

      ...(paymentMethod ? { paymentMethod } : {}),

      reason: reason ?? "",

      createdBy,

      date:Date.now(),
    }
  );


  return ref.id;
}
