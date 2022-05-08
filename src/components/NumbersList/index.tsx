import { FiChevronLeft, FiHome } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { IPhoneNumber } from "../../types/company";
import Breadcrumb from "../Breadcrumb";
import Card from "../Card";
import { ListWrapper } from "../CompaniesList/styles";
import Link from "../Link";
import TitleContainer from "../TitleContainer";

interface INumbersListProps {
  numbers: IPhoneNumber[];
  companyName: string;
}

function NumbersList({ numbers, companyName }: INumbersListProps) {
  const { pathname } = useLocation();
  return (
    <ListWrapper>
      {pathname !== "/" && (
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
              to: pathname,
              label: companyName,
            },
          ]}
        />
      )}
      <TitleContainer
        title={companyName}
        subtitle={`${numbers.length} phone numbers registered`}
      />
      {numbers.map((number) => (
        <Card
          name={number.id}
          to={`../number/${number.id}`}
          information={number.type}
        />
      ))}

      <Link to={`/`} css={{ justifyContent: "center", marginTop: "10px" }}>
        <FiChevronLeft /> Go back
      </Link>
    </ListWrapper>
  );
}

export default NumbersList;
