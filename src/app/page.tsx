import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return(

   <div className="container mx-auto">
    <div>
      <h1 className="text-5xl pb-5 pt-2 font-bold italic ">Lista De Alunos</h1>
      </div>

    <StudentTable students= {students} />
   </div>
  )
}

export default Page;