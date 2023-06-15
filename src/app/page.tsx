import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return(
   <div className="container mx-auto">
    <StudentTable students= {students} />
   </div>
  )
}

export default Page;