import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/companies";
import Container from "../../components/Container";
import Header from "../../components/Header";
import NumbersList from "../../components/NumbersList";
import useCompany from "../../hooks/useCompany";
import { IPhoneNumber } from "../../types/company";

function Numbers() {
  const [numbers, setNumbers] = useState<IPhoneNumber[]>([]);
  const { companyId } = useParams();

  const [company] = useCompany(companyId || "");

  useEffect(() => {
    (async () => {
      const numbers = await api.get(`/phone_numbers`);

      setNumbers(
        numbers.data.filter(
          (number: any) => number.company_id === Number(companyId)
        )
      );
    })();
  }, [companyId]);

  return (
    <>
      <Container>
        <Header />
        <NumbersList companyName={company.name} numbers={numbers} />
      </Container>
    </>
  );
}

export default Numbers;
