import { FiChevronLeft, FiHome } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import useCompany from "../../hooks/useCompany";
import Breadcrumb from "../Breadcrumb";
import { ListWrapper } from "../CompaniesList/styles";
import Link from "../Link";
import { NumberInformationData } from "./styles";

function NumberInformation({ number }: any) {
  const { pathname } = useLocation();
  const [companyName] = useCompany(String(number.company_id) || "");

  return (
    <ListWrapper>
      <Breadcrumb
        crumbs={[
          {
            to: "/",
            label: <FiHome />,
          },
          {
            to: "/",
            label: pathname.split("/")[1],
          },
          {
            to: `/companies/${number.company_id}`,
            label: companyName.name,
          },
          {
            to: `/phone_numbers/${number.id}`,
            label: number.id,
          },
        ]}
      />

      <NumberInformationData>
        <h1>{number.id}</h1>
        <p>Type: {number.type}</p>
        <Link
          to={`/companies/${number.company_id}`}
          css={{ marginTop: "10px" }}
        >
          <FiChevronLeft /> Go back
        </Link>
      </NumberInformationData>
    </ListWrapper>
  );
}

export default NumberInformation;
