import { FiChevronRight } from "react-icons/fi";
import {
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbWrapper,
} from "./styles";

interface ICrumb {
  to: string;
  label: React.ReactNode | string;
}

interface IBreadcrumbProps {
  crumbs: ICrumb[];
}

function Breadcrumb({ crumbs }: IBreadcrumbProps) {
  return (
    <BreadcrumbWrapper>
      {crumbs.map((crumb, index) => (
        <>
          <BreadcrumbItem key={index} to={crumb.to}>
            {crumb.label}
          </BreadcrumbItem>
          {index !== crumbs.length - 1 && (
            <BreadcrumbSeparator>
              <FiChevronRight />
            </BreadcrumbSeparator>
          )}
        </>
      ))}
    </BreadcrumbWrapper>
  );
}

export default Breadcrumb;
