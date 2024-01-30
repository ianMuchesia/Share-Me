import Link from "next/link"

const Navlinks = () => {
  return (
    <ol className="flex flex-col space-y-5 flex-1 justify-evenly w-full">
         
    <li >
       <Link
href={`/`}
className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"

>
<span className="md:text-sm">Home</span>
</Link>
    </li>
    <li >
       <Link
href={`/`}
className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"

>
<span className="md:text-sm">Create</span>
</Link>
    </li>
    <li >
       <Link
href={`/`}
className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"

>
<span className="md:text-sm">Profile</span>
</Link>
    </li>
    <li >
       <Link
href={`/`}
className="capitalize text-white duration-200 ease-in-out hover:text-blue-200 flex flex-col md:space-x-1 md:space-y-0 space-y-1 md:flex-row text-center  md:items-center font-medium md:p-[10px]"

>
<span className="md:text-sm">Login</span>
</Link>
    </li>


</ol>
  )
}

export default Navlinks