import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
interface Props {
  styles: string;
}

const Navlinks = ({ styles }: Props) => {
  const auth = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <ol className={`${styles}`}>
      <li>
        <Link
          href={`/`}
          className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"
        >
          <span className="md:text-sm">Home</span>
        </Link>
      </li>
      <li>
        <Link
          href={`/create`}
          className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"
        >
          <span className="md:text-sm">Create</span>
        </Link>
      </li>
      <li>
       {auth &&  <Link
          href={`/profile`}
          className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"
        >
          <span className="md:text-sm">Profile</span>
        </Link>}
      </li>
    </ol>
  );
};

export default Navlinks;
