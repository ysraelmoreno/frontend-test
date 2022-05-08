import { ICompany } from "../../types/company";
import Card from "../Card";
import TitleContainer from "../TitleContainer";
import { ListWrapper, CompanyTitle, ListOfCompanies } from "./styles";

interface ICompaniesListProps {
  companies: ICompany[];
}

function CompaniesList({ companies }: ICompaniesListProps) {
  return (
    <ListWrapper>
      <TitleContainer
        title="Companies"
        subtitle={`${companies.length} companies registered`}
      />
      <ListOfCompanies>
        <CompanyTitle>
          <span>COMPANY NAME</span>
          <span>VATIN</span>
        </CompanyTitle>
        {companies.map((company) => (
          <Card
            name={company.name}
            to={`/companies/${company.id}`}
            information={company.vatin}
          />
        ))}
      </ListOfCompanies>
    </ListWrapper>
  );
}

export default CompaniesList;
