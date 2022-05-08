import { useEffect, useState } from "react";
import api from "../api/companies";
import { ICompany } from "../types/company";

function useCompany(id?: string) {
  const [company, setCompany] = useState<ICompany>({} as ICompany);

  useEffect(() => {
    (async () => {
      if (id === "undefined") {
        return;
      }

      if (id) {
        const getCompanyData = await api.get(`/companies/${id}`);

        setCompany(getCompanyData.data);
        return;
      }

      const getCompanyData = await api.get("/companies");

      setCompany(getCompanyData.data[0]);
    })();
  }, [id]);

  return [company];
}

export default useCompany;
