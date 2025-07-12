import { use } from "react";
import EditClient from "./EditClient";

export default function Page({ params }) {
  const { id } = use(params); // ✅ unwrap the params
  return <EditClient id={id} />;
}
