import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

interface ClientInfoProps {
  client: Client;
}

export default function ClientInfo({ client }: ClientInfoProps) {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
}
