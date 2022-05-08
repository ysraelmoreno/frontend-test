import { useEffect, useState } from "react";
import api from "../../api/companies";
import CompaniesList from "../../components/CompaniesList";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { ICompany } from "../../types/company";

function Home() {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    (async () => {
      const companies = await api.get("/companies");

      setCompanies(companies.data);
    })();
  }, []);

  return (
    <>
      <Container>
        <Header />
        {companies.length > 0 && <CompaniesList companies={companies} />}
      </Container>
    </>
  );
}

export default Home;
