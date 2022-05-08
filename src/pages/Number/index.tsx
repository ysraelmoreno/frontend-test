import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/companies";
import Container from "../../components/Container";
import Header from "../../components/Header";
import NumberInformation from "../../components/NumberInformation";
import { IPhoneNumber } from "../../types/company";

function Number() {
  const [number, setNumber] = useState<IPhoneNumber>({} as IPhoneNumber);
  const { numberId } = useParams();

  useEffect(() => {
    (async () => {
      const number = await api.get(`/phone_numbers/${numberId}`);

      setNumber(number.data);
    })();
  }, [numberId]);

  return (
    <>
      <Container>
        <Header />
        <NumberInformation number={number} />
      </Container>
    </>
  );
}

export default Number;
